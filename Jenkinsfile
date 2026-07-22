pipeline{
    agent any

    environment {
        BASE_URL = 'http://nginx'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                dir('web'){
                sh 'npm install'
                }
            }
        }
        stage('Integration Tests') {
            steps {
                dir('web'){
                    sh 'npm run test:integration'
                }
            }
        }
        stage('Dependency Check'){
            steps{
                dir('web'){
                    sh "npm audit"
                }
            }
        }
        stage('Unit Tests') {
            steps {
                dir('web'){
                    sh 'npm run test:ui'
                }
            }
        }
    }
}