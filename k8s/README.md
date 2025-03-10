# Kubernetes Configuration Directory

This directory contains Kubernetes manifests for deploying the Modern Bingo Game application.

## Files

- `deployment.yaml` - Deployment configuration for the application
- `service.yaml` - Service configuration for load balancing

## Deployment

```bash
# Apply all configurations
kubectl apply -f k8s/

# Check deployment status
kubectl get deployments
kubectl get services
```

## Configuration Details

- Deployment runs 3 replicas
- Resource limits are set for CPU and memory
- LoadBalancer service exposes the application
- Health checks ensure application availability