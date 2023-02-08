pipeline {
    agent any
    stages {
        stage('Petición de datos') {
            steps {
                script {
                    def executor = input message: 'Ejecutor:', parameters: [string(defaultValue: '', description: 'Nombre de la persona que ejecuta la pipeline', name: 'executor')]
                    def motivo = input message: 'Motivo:', parameters: [string(defaultValue: '', description: 'Motivo de la ejecución de la pipeline', name: 'motivo')]
                    def correo = input message: 'Correo notificación:', parameters: [string(defaultValue: '', description: 'Correo para notificar el resultado de cada stage', name: 'correo')]
                }
            }
        }
        stage('Ejecución de tareas') {
            steps {
                echo "Ejecutor: ${executor}"
                echo "Motivo: ${motivo}"
                echo "Correo notificación: ${correo}"
            }
        }
    }
}