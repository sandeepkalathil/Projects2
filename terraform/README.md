# Terraform Configuration Directory

This directory contains Terraform configurations for provisioning AWS infrastructure for the Modern Bingo Game application.

## Infrastructure Components

- VPC with public and private subnets
- EKS cluster
- Node groups for Kubernetes workers
- NAT Gateway for private subnet access

## Usage

```bash
# Initialize Terraform
terraform init

# Plan changes
terraform plan

# Apply changes
terraform apply

# Destroy infrastructure
terraform destroy
```

## Configuration Files

- `main.tf` - Main infrastructure configuration
- `variables.tf` - Variable definitions
- `outputs.tf` - Output values