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

# Copy entrypoint script
COPY --chown=root:root docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

EXPOSE 80

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Set non-root user (Trivy requirement: AVD-DS-0002)
# Note: Supervisor needs root, so we override user in docker-compose.yml
USER nextjs

# Use entrypoint that runs Supervisor (will be overridden to root in docker-compose)
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
