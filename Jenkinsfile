pipeline {
    agent any
    tools {
        nodejs 'node'
    }
    environment {
        email_github = credentials('email_github')
        username_github = credentials('username_github')
    }
    stages {
        stage('Petición de datos') {
            steps {
                script {
                    env.executor = input message: 'Ejecutor:', parameters: [string(defaultValue: 'Vicent', description: 'Nombre de la persona que ejecuta la pipeline', name: 'executor')]
                    env.motivo = input message: 'Motivo:', parameters: [string(defaultValue: '', description: 'Motivo de la ejecución de la pipeline', name: 'motivo')]
                    env.correo = input message: 'Correo notificación:', parameters: [string(defaultValue: 'vicentesteve2002@gmail.com', description: 'Correo para notificar el resultado de cada stage', name: 'correo')]
                    echo "Ejecutor: ${env.executor}"
                    echo "Motivo: ${env.motivo}"
                    echo "Correo notificación: ${env.correo}"
                }
            }
        }
        stage('install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Linter') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Test') {
            steps {
                script{
                    env.StatusTest = sh(script:'npm run test',returnStatus:true) 
                }
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Update_Readme') {
            steps {
                sh "node jenkinsScripts/Updated_Readme.js '${env.StatusTest}'"
            }
        }

        stage('Push_Changes') {
            steps {
                sh "sh jenkinsScripts/push_changes.sh '${env.executor}' '${env.motivo}' ${email_github} ${username_github}"
            }
        }
    }
}