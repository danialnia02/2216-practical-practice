pipeline{
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Integration Tests') {
            steps {
                sh 'TODO'
            }
        }

        stage('Dependency Check'){
            steps{
                sh "npm audit"
            }
        }

        stage('Unit Tests') {
            steps {
                sh 'npm test'
            }
        }
    }


}