pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'modern-bingo'
        DOCKER_TAG = "${env.BUILD_NUMBER}"
        DOCKER_REGISTRY = 'your-registry.com'
    }

    stages {
        stage('Unit Testing') {
            steps {
                sh 'npm install'
                sh 'npm run test'
            }
        }

        stage('Static Code Analysis') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Image Build') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                }
            }
        }

        stage('Docker Image Scan') {
            steps {
                sh """
                    trivy image ${DOCKER_IMAGE}:${DOCKER_TAG} \
                    --exit-code 1 \
                    --severity HIGH,CRITICAL
                """
            }
        }

        stage('Docker Image Push') {
            steps {
                script {
                    docker.withRegistry("https://${DOCKER_REGISTRY}", 'docker-credentials') {
                        docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").push()
                        docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").push('latest')
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}