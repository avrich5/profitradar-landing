# Docker Setup for ProfitRadar Landing

This project is configured to run in Docker containers using nginx as a reverse proxy.

## Structure

- **Root path (`/`)** - leads to b2c-redesign (main page)
- **Dashboard path (`/dashboard`)** - leads to b2b-dataset content

## Requirements

- Docker
- Docker Compose

## Quick Start

1. Build and run containers:
```bash
docker-compose up --build
```

2. Open your browser and navigate to:
   - http://localhost - main page (b2c-redesign)
   - http://localhost/dashboard - dataset page (b2b-dataset)

## Commands

### Run in background
```bash
docker-compose up -d
```

### Stop containers
```bash
docker-compose down
```

### View logs
```bash
docker-compose logs -f
```

### Rebuild after changes
```bash
docker-compose up --build
```

## Architecture

The project consists of two services:

1. **nextjs** - Next.js application on port 3000 (internal)
2. **nginx** - Reverse proxy on port 80 (external)

Nginx proxies requests to the Next.js application and handles routing.

## Configuration Files

- `Dockerfile` - image for Next.js application
- `nginx.conf` - nginx reverse proxy configuration
- `docker-compose.yml` - service orchestration
- `.dockerignore` - files excluded from the image

## Development

For local development without Docker use:
```bash
npm run dev
```

The application will be available at http://localhost:8001
