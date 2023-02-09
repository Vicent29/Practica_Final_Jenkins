pipeline {
    agent any
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
                nodejs('node') {
                    sh 'npm install'
                }
            }
        }
        stage('Linter') {
            steps {
                nodejs('node') {
                    sh 'cd react-app/ && npm install eslint-config-react-app && npm list eslint-config-react-app'
                }
            }
        }
    }
}