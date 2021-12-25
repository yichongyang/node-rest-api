# Containerization DevOps Test  

These are some basic sample files used to test the CI/CD pipeline for containerized applications on a Windows localhost.

## Installation
 
1) Download and Install Docker on Windows 10: https://docs.docker.com/docker-for-windows/install/
2) Download and Install Jenkins on Windows 10: https://jenkins.io/download/thank-you-downloading-windows-installer-stable

## Sample Files

1) Node application files:</br>
   a. myTestServer.js</br> 
   b. package.json </br>
   
2) Building Node application image:</br>
   a. Dockerfile	</br>
   
3) Jenkins CI/CD Pipeline:</br>
   a. Jenkinsfile</br>
   
4) Scripts execution staged in Jenkins CI/CD:</br>
   a. buildNodeAppImage.bat</br>
   b. startNodeApps.bat</br>

## Launch and Configure Jenkins Pipeline

1) Use or clone this git repo
2) Launch Jenkins on the Windows localhost 
3) Create a Jenkins pipeline job that polls SCM with the git repo and a branch
4) Configure the Poll SCM schedule (e.g., ***** for every minute)
 
## Testing 
1) Change something in myTestServer.js and push the change to the remote git repo
2) Change CONTAINER_COUNT in Jenkinsfile and push the change to the remote git repo

These tests will automatically trigger the rebuilding of the Node application Docker image and re-deploy the new number of Docker containers on your Windows localhost. 
