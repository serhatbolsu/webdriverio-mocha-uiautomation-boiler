pipeline {
   agent any
   stages {
     stage('Build') {
       steps {
         sh 'npm install'
       }
     }
     stage('Test') {
       steps {
         sh 'npm test'
       }
     }
   }
   // post {
   //   always {
   //     script {
   //       allure([
   //         includeProperties: false,
   //         jdk: '',
   //         properties: [],
   //         reportBuildPolicy: 'ALWAYS',
   //         results: [[path: 'target/allure-results']]
   //       ])
   //     }
   //   }
   // }
 }