# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
# Use npm install if package-lock.json doesn't exist, otherwise use npm ci
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Copy source code
COPY . .

# Build Next.js application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

# Install nginx and supervisor
RUN apk add --no-cache nginx supervisor

WORKDIR /app

ENV NODE_ENV production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from builder
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy nginx configuration
COPY --chown=root:root nginx.conf /etc/nginx/nginx.conf

# Copy supervisor configuration
COPY --chown=root:root supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Create log directories
RUN mkdir -p /var/log/nginx /var/cache/nginx /var/run /var/log/nextjs && \
    chown -R nextjs:nodejs /app && \
    chown -R nextjs:nodejs /var/log/nextjs

EXPOSE 80

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
