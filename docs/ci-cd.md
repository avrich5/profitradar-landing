# GitLab CI/CD Pipeline

This project uses GitLab CI/CD for continuous integration and deployment.

> **Location**: `.gitlab-ci.yml` in project root

## Pipeline Overview

The pipeline consists of 5 stages:

1. **lint** - Code linting with ESLint
2. **type-check** - TypeScript type checking
3. **security** - Security vulnerability scanning (npm audit, Trivy config scan)
4. **build** - Container image building with Kaniko
5. **scan** - Container image vulnerability scanning with Trivy

## Stages

### 1. Lint Stage
- Runs ESLint on all code
- Uses Node.js 20 Alpine image
- Fails pipeline if linting errors found
- Uses npm cache for faster builds

### 2. Type Check Stage
- Validates TypeScript types without emitting files
- Ensures type safety across codebase
- Uses Node.js 20 Alpine image
- Uses npm cache for faster builds

### 3. Security Stage
- **npm audit**: Checks for vulnerable dependencies (moderate+ severity)
- **Trivy config scan**: Scans Dockerfile and configuration files for misconfigurations
- Security scans don't fail the pipeline (allow_failure: true)
- Results uploaded as SARIF artifacts

### 4. Build Stage
- Builds Docker container image using Kaniko
- Pushes to GitLab Container Registry
- Tags images with:
  - Git commit SHA: `${CI_COMMIT_SHA}`
  - Latest: `latest`
- Uses Kaniko layer caching (24h TTL)
- Only runs on main/master/develop branches and tags

### 5. Scan Stage
- **Trivy image scan**: Scans built container image for vulnerabilities
- Runs after build stage completes
- Scans for CRITICAL and HIGH severity issues
- Results uploaded as SARIF artifacts
- Doesn't fail pipeline (allow_failure: true)

### 4. Build Stage
- Builds Docker container image using Kaniko
- Pushes to GitLab Container Registry
- Tags images with:
  - Git commit SHA: `${CI_COMMIT_SHA}`
  - Latest: `latest`
- Uses Kaniko layer caching (24h TTL)
- Only runs on main/master/develop branches and tags

## Default Configuration

All jobs use `kubernetes` tag by default, which means they will run on GitLab Runners configured with the `kubernetes` tag. This is ideal for Kubernetes-based CI/CD environments.

## Variables

The pipeline uses GitLab CI/CD built-in variables:
- `CI_REGISTRY` - GitLab Container Registry URL
- `CI_REGISTRY_IMAGE` - Full image name (registry/namespace/project)
- `CI_REGISTRY_USER` - Registry username (automatically provided)
- `CI_REGISTRY_PASSWORD` - Registry password (automatically provided)
- `CI_COMMIT_SHA` - Git commit SHA
- `CI_PROJECT_DIR` - Project directory path

## Container Registry

Images are pushed to: `${CI_REGISTRY_IMAGE}`

Example: `registry.gitlab.com/namespace/project-name`

## Kaniko Configuration

- Uses official Kaniko executor image
- Authenticates using `CI_REGISTRY_USER` and `CI_REGISTRY_PASSWORD` (base64 encoded)
- Enables layer caching for faster builds
- Cache TTL: 24 hours
- Cache repository: `${CI_REGISTRY_IMAGE}/cache`
- Builds without Docker daemon (rootless)
- Runs on Kubernetes runners (via default tag)

## Security Scanning

### npm audit
- Checks npm dependencies for known vulnerabilities
- Audit level: moderate and above
- Continues on failure (warnings only)

### Trivy
- Scans Dockerfile configuration
- Scans built container images
- Severity levels: CRITICAL, HIGH
- Results in SARIF format for GitLab Security Dashboard
- Artifacts expire after 1 week

## Caching

- npm dependencies cached using `package-lock.json` as key
- Kaniko layer cache stored in registry
- Cache speeds up subsequent pipeline runs

## Running Locally

To test the pipeline locally:

```bash
# Install GitLab Runner
# https://docs.gitlab.com/runner/install/

# Run lint job
gitlab-runner exec docker lint

# Run type-check job
gitlab-runner exec docker type-check

# Run security scan
gitlab-runner exec docker security-scan
```

## Pipeline Triggers

The pipeline runs automatically on:
- Push to `main`, `master`, or `develop` branches
- Push of tags
- Pull requests (lint, type-check, security only)
- Manual trigger from GitLab UI

Build stage only runs on:
- Push to `main`, `master`, or `develop` branches
- Push of tags

## Artifacts

- Trivy scan results (SARIF format) - Available for 1 week
- Security reports visible in GitLab Security Dashboard

