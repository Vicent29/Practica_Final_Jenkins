pipeline {
    agent any
    tools {
        nodejs 'node'
    }
    environment {
        email_github = credentials('email_github')
        username_github = credentials('username_github')
        token_gitHub = credentials('Token_GitHub_Jenkins')
        token_vercel = credentials('Token_vercel')
        api_key_mailgun = credentials('api_key_mailgun')
        domain_mailgun = credentials('domain_mailgun')
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
                script{
                    env.StatusInstall = sh(script:'npm install',returnStatus:true) 
                }
            }
        }
        stage('Linter') {
            steps {
                script{
                    env.StatusLinter = sh(script:'npm run lint',returnStatus:true) 
                }
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
                script{
                    env.Status_Build = sh(script:"npm run build", returnStatus:true)
                }
            }
        }

        stage('Update_Readme') {
            steps {
                script{
                    env.StatusUpdate_Readme = sh(script:"node jenkinsScripts/Updated_Readme.js '${env.StatusTest}'", returnStatus:true)
                }
            }
        }

        stage('Push_Changes') {
            steps {
                script{
                    env.StatusPush_Changes = sh(script:"jenkinsScripts/push_changes.sh '${env.executor}' '${env.motivo}' '${email_github}' '${username_github}' '${token_gitHub}'", returnStatus:true)
                }
            }
        }


        stage('Deploy to Vercel') {
            steps {
                sh 'npm i -g vercel'
                script{
                    env.StatusDeploy_Vercel = sh(script:"jenkinsScripts/deploy_vercel.sh '${token_vercel}' '${env.StatusInstall}' '${env.StatusLinter}' '${env.StatusTest}' '${env.Status_Build}' '${env.StatusUpdate_Readme}' '${env.StatusPush_Changes}'", returnStatus:true)
                }
            }
        }

        stage('Notificación') {
            steps {
                script{
                    sh "node jenkinsScripts/send_notification.js '${api_key_mailgun}' '${domain_mailgun}' '${env.correo}' '${env.StatusLinter}' '${env.StatusTest}' '${env.StatusUpdate_Readme}' '${env.StatusDeploy_Vercel}'"
                }
            }
        }
    }
}

