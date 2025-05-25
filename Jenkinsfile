pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/yourusername/node-mongo-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint Code') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Unit Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-mongo-app .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name webapp node-mongo-app'
            }
        }

        stage('Selenium Test') {
            steps {
                sh 'docker run --rm -v $(pwd)/selenium:/tests selenium/standalone-chrome python /tests/test_form.py'
            }
        }
    }

    post {
        always {
            sh 'docker stop webapp || true'
            sh 'docker rm webapp || true'
        }
    }
}
