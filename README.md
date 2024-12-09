
# Node.js Express MySQL CI/CD Pipeline with Kubernetes

## Overview
This project demonstrates creating a CI/CD pipeline for a Node.js Express application using Docker, Kubernetes (Google Kubernetes Engine - GKE), Helm, and GitLab CI/CD. The pipeline automates the build, version update, and deployment processes, ensuring portability, scalability, and efficiency.

---

## Details

### 1. Project
The example GitHub repository was imported into the GitLab platform to create a new project named [nodejs-express-mysql](https://github.com/bezkoder/nodejs-express-mysql).

---

### 2. Docker
A [Dockerfile](Dockerfile) was created to containerize the Node.js application.

### 3. Kubernetes Cluster
The Kubernetes cluster was created using Google Kubernetes Engine (GKE) to manage containerized applications.

### 4. CI/CD Pipeline
The CI/CD process is automated with a [gitlab-ci.yaml](.gitlab-ci.yml) file that defines three stages: build, update, and deploy.
 `.gitlab-ci.yaml` configuration used to automate the CI/CD process for the **nodejs-express-mysql** project. This pipeline includes three stages: `build`, `update`, and `deploy`.

### Pipeline Stages

1. **Build Stage**
    - Builds a Docker image from the application code.
    - Tags the Docker image with an incremented version.
    - Pushes the image to the GitLab Container Registry.

2. **Update Stage**
    - Updates the `appVersion` in the [Chart.yaml](chart/Chart.yaml) .
    - Pushes the updated chart back to the GitLab repository.

3. **Deploy Stage(Currently disabled)**
    - Deploys the application to the Kubernetes cluster using the Helm chart. (Note: ArgoCD is currently handling continuous development part.)

---


### 5. ArgoCD Integration for Kubernetes Deployment

To make the application deployment more manageable and visualized, **ArgoCD** was integrated into the Kubernetes environment. This section details the step-by-step process to set up ArgoCD, configure it for the **nodejs-express-mysql** project, and automate deployments triggered by changes in the `/app` directory.

---

### Step 1: Install ArgoCD on Kubernetes

1. **Create a Namespace for ArgoCD**:
   ```bash
   kubectl create namespace argocd
2. **Install ArgoCD**:
   ```bash
   kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

3. **Enable Insecure Access (Optional)**: This step disables HTTPS for the ArgoCD server, simplifying initial access for development environments.
   ```bash
   kubectl patch deployment argocd-server -n argocd --type='json' -p='[
   {
   "op": "add",
   "path": "/spec/template/spec/containers/0/command",
   "value": ["argocd-server", "--insecure"]
   }
   ]'
4. **Expose ArgoCD Server**: Change the argocd-server service type from ClusterIP to LoadBalancer to make it accessible externally:
   ```bash
   kubectl edit svc -n argocd argocd-server
5. **Update the following field**:
   ```yaml
   spec:
     type: LoadBalancer
6. **Verify the Service: Retrieve the external IP of the ArgoCD server**:
   ```bash
   kubectl get svc -n argocd
7. **Get Password**: To login as admin into ArgoCD application you need to provide default password which you can find out by running the following kubectl command.
   ```bash
   kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo
## Resources:
- [https://github.com/bitnami/charts/blob/main/bitnami/mysql/values.yaml]
- [https://medium.com/@jaydeepawar4912/gitlab-ci-cd-to-deploy-applications-on-gke-806658160534]
- [https://github.com/helm/examples.git]
- [https://medium.com/@harshaljethwa19/deploying-an-application-to-argocd-using-helm-part-2-of-ci-cd-using-argocd-cd6a6c7a3047]
- [https://medium.com/@edgars.rungis/how-to-develop-simple-ci-cd-pipeline-by-using-gitlab-and-argocd-to-deploy-application-on-oci-716432724297]
