# ProfitRadar Landing Helm Chart

This Helm chart deploys the ProfitRadar Landing Page application to a Kubernetes cluster.

## Prerequisites

- Kubernetes 1.19+
- Helm 3.0+
- Traefik ingress controller installed

## Installation

1. Update the image repository in `values.yaml`:
```yaml
image:
  repository: your-registry/profitradar-landing
  tag: "latest"
```

2. Install the chart:
```bash
helm install profitradar-landing ./helm/profitradar-landing \
  --set image.repository=your-registry/profitradar-landing \
  --set image.tag=latest
```

## Configuration

The following table lists the configurable parameters and their default values:

| Parameter | Description | Default |
|-----------|-------------|---------|
| `replicaCount` | Number of replicas | `2` |
| `image.repository` | Container image repository | `""` |
| `image.tag` | Container image tag | `"latest"` |
| `image.pullPolicy` | Image pull policy | `IfNotPresent` |
| `service.type` | Service type | `ClusterIP` |
| `service.port` | Service port | `80` |
| `ingress.enabled` | Enable ingress | `true` |
| `ingress.className` | Ingress class name | `traefik` |
| `ingress.hosts` | Ingress hosts configuration | See values.yaml |
| `networkPolicy.enabled` | Enable network policy | `true` |
| `resources.limits.cpu` | CPU limit | `500m` |
| `resources.limits.memory` | Memory limit | `512Mi` |
| `resources.requests.cpu` | CPU request | `100m` |
| `resources.requests.memory` | Memory request | `128Mi` |

## Network Policy

The chart includes a NetworkPolicy that:
- Allows ingress traffic from Traefik ingress controller
- Allows DNS resolution (UDP/TCP port 53)
- **Denies all other egress traffic** (prevents communication with other containers)

## Ingress

The ingress is configured to use Traefik ingress class. Update the `ingress.hosts` in `values.yaml` to match your domain.

## Uninstallation

```bash
helm uninstall profitradar-landing
```

