pipeline {
    agent any
    environment{
        CONTAINER_COUNT = 1
    }
    stages{
        stage('Build Node Docker Image'){
            steps{
                echo 'Building the node app docker image ...'
                bat "buildNodeAppImage.bat"
            }
        }
        stage('Launch Node Docker Containers'){
            steps{
                echo 'Launching the node app docker containers ...'
                bat "startNodeApps.bat ${CONTAINER_COUNT}"
            }
        }
    }
}