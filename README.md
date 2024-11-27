NodeJS-Express-MySQL CI/CD with GitOps

This repository uses GitLab CI/CD and Helm for continuous integration and continuous deployment (CI/CD) of the **NodeJS-Express-MySQL** application. All CI/CD logic is managed and stored in the repository, adhering to the GitOps paradigm. This document outlines the necessary steps for managing branches and deploying updates.

## GitOps Paradigm
In the GitOps paradigm, the entire application deployment process is driven by Git. All configuration changes, including CI/CD pipeline definitions, application configurations, and deployment logic, are stored in Git. This allows you to manage application versions, infrastructure changes, and deployment processes in a consistent and reliable manner.

## CI/CD Pipeline

The CI/CD pipeline is divided into three stages:

- **Build**: Builds the Docker image, tags it with the version, and pushes it to the Docker registry.
- **Update**: Updates the version in the `Chart.yaml` file and pushes it to the repository.
- **Deploy**: Deploys the application to the Google Kubernetes Engine (GKE) cluster using Helm.
