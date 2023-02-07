pipeline {
  agent any
  parameters {
    string(name: 'param1', defaultValue: 'true', description: 'Introduzca el primer param')
    string(name: 'param2', defaultValue: 'false', description: 'Introduzca el segundo param')
    string(name: 'chatId', defaultValue: 'num_chat', description: 'Introduzca el chat Id para poder recibir')
  } 
  stages {
    stage('install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Execution Stage1') {
      steps {
        script {
          env.res_stage1 = sh (script: "node ./jenkinsScripts/index.js '${params.param1}'", returnStatus: true) 
        }
      }
    }
    stage('Execution Stage2') {
      steps {
        script {
          env.res_stage2 = sh (script: "node ./jenkinsScripts/index.js '${params.param2}'", returnStatus: true) 
        }
      }
    }
    stage('Resultado Stages') {
      steps {
        script {
          echo env.res_stage1
          if (env.res_stage1 == '1' && env.res_stage2 == '1'){
            env.result_message = "Esto pinta muy mal"
          }else if(env.res_stage1 == '1' && env.res_stage2 == '0') {
            env.result_message = "El STAGE-1 pinta mal"
          }else if (env.res_stage1 == '0' && env.res_stage2 == '1') {
            env.result_message = "El STAGE-2 pinta mal"
          }else {
            env.result_message = "El proyecto va viento en popa!!!"
          }
        }
      }
    }
  }
  post {
    always {
      script {
        sh "node ./jenkinsScripts/sendMessage.js '${env.result_message}' '${params.chatId}'"
      }
    }
  }
}