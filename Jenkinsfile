pipeline {
  agent any

  stages {
    stage('Lint (Simulated)') {
      steps {
        echo 'Lint check passed (simulated)'
      }
    }

    stage('Build (Install packages)') {
      steps {
        sh 'pip install -r requirements.txt'
      }
    }

    stage('Unit Test') {
      steps {
        echo 'Running unit tests (Simulated)'
      }
    }

    stage('Docker Build') {
      steps {
        sh 'docker build -t selenium-tests .'
      }
    }

    stage('Run Selenium Tests') {
      steps {
        sh 'docker run selenium-tests'
      }
    }
  }
}
