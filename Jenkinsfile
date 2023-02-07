pipeline {
    agent any
    stages {
        stage ('Petición de datos') {
            steps {
                script {
                    env.executor = input message: 'Ejecutor:', id: 'executor'
                    env.motivo = input message: 'Motivo:', id: 'motivo'
                    env.correoNotificacion = input message: 'Correo de notificación:', id: 'correoNotificacion'

                    echo env.executor
                    echo env.motivo
                    echo env.correoNotificacion
                }
            }
        }
    }
   
}