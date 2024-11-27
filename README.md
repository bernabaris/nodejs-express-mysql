NodeJS-Express-MySQL CI/CD with GitOps

This repository uses GitLab CI/CD and Helm for continuous integration and continuous deployment (CI/CD) of the **NodeJS-Express-MySQL** application. All CI/CD logic is managed and stored in the repository, adhering to the GitOps paradigm. This document outlines the necessary steps for managing branches and deploying updates.

## GitOps Paradigm
In the GitOps paradigm, the entire application deployment process is driven by Git. All configuration changes, including CI/CD pipeline definitions, application configurations, and deployment logic, are stored in Git. This allows you to manage application versions, infrastructure changes, and deployment processes in a consistent and reliable manner.

## CI/CD Pipeline

The CI/CD pipeline is divided into three stages:

- **Build**: Builds the Docker image, tags it with the new version, and pushes it to the Docker registry.
- **Update**: Updates the new version in the `Chart.yaml` file and pushes it to the repository.
- **Deploy**: Deploys the application to the Google Kubernetes Engine (GKE) cluster using Helm.

## Resources:
- [https://medium.com/@jaydeepawar4912/gitlab-ci-cd-to-deploy-applications-on-gke-806658160534]
- [https://github.com/helm/examples.git]
- [https://medium.com/@harshaljethwa19/deploying-an-application-to-argocd-using-helm-part-2-of-ci-cd-using-argocd-cd6a6c7a3047]
- [https://medium.com/@edgars.rungis/how-to-develop-simple-ci-cd-pipeline-by-using-gitlab-and-argocd-to-deploy-application-on-oci-716432724297]
