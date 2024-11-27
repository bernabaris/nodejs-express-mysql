NodeJS-Express-MySQL CI/CD with GitOps

This repository uses GitLab CI/CD and Helm for continuous integration and continuous deployment (CI/CD) of the **NodeJS-Express-MySQL** application. All CI/CD logic is managed and stored in the repository, adhering to the GitOps paradigm. This document outlines the necessary steps for managing branches and deploying updates.

## GitOps Paradigm
In the GitOps paradigm, the entire application deployment process is driven by Git. All configuration changes, including CI/CD pipeline definitions, application configurations, and deployment logic, are stored in Git. This allows you to manage application versions, infrastructure changes, and deployment processes in a consistent and reliable manner.

## CI/CD Pipeline

The CI/CD pipeline is divided into three stages:

- **Build**: Builds the Docker image, tags it with the new version, and pushes it to the Docker registry.
- **Update**: Updates the new version in the `Chart.yaml` file and pushes it to the repository.
- **Deploy**: Deploys the application to the Google Kubernetes Engine (GKE) cluster using Helm.

# Node.js Express MySQL CI/CD Pipeline with Kubernetes

## Overview
This project demonstrates creating a CI/CD pipeline for a Node.js Express application using Docker, Kubernetes (Google Kubernetes Engine - GKE), Helm, and GitLab CI/CD. The pipeline automates the build, version update, and deployment processes, ensuring portability, scalability, and efficiency.

---

## Steps

### 1. Importing the Project
The example GitHub repository was imported into the GitLab platform to create a new project named **nodejs-express-mysql**.

---

### 2. Creating a Dockerfile
A Dockerfile was created to containerize the Node.js application. Below is the content of the Dockerfile:

```dockerfile
FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV NODE_ENV production
EXPOSE 8080
CMD ["npm", "start"]
```

## Resources:
- [https://medium.com/@jaydeepawar4912/gitlab-ci-cd-to-deploy-applications-on-gke-806658160534]
- [https://github.com/helm/examples.git]
- [https://medium.com/@harshaljethwa19/deploying-an-application-to-argocd-using-helm-part-2-of-ci-cd-using-argocd-cd6a6c7a3047]
- [https://medium.com/@edgars.rungis/how-to-develop-simple-ci-cd-pipeline-by-using-gitlab-and-argocd-to-deploy-application-on-oci-716432724297]
