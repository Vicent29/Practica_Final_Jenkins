// Variables mailgun crear formulario
var API_KEY_MAILGUN = process.argv[1]
var DOMAIN_MAILGUN = process.argv[2]
var DESTINATARIO = process.argv[3]

import formData from 'form-data';
import Mailgun from 'mailgun.js';
const form_mailgun = new Mailgun(formData);
const send_message = form_mailgun.client({ username: 'api', key: API_KEY_MAILGUN });

//Variables de estado de los jobs
let result_Linter_stage = process.argv[4] == 0 ? "success": "failure";
let resultado_Test_stage = process.argv[5] == 0 ? "success": "failure";
let result_Update_readme_stage = process.argv[6] == 0 ? "success": "failure";
let result_Deploy_to_Vercel_stage = process.argv[7] == 0 ? "success": "failure";


let asunto= "Resultado de la pipeline ejecutada"

const body = `
    <div>
        <p>Se ha ejecutado la pipeline de jenkins con los siguientes resultados:</p>
        <ul>
            <li>
                Result Linter Stage: ${result_Linter_stage}
            </li>
            <li>
                Result Test Stage: ${resultado_Test_stage}
            </li>
            <li>
                Result Update Readme Stage: ${result_Update_readme_stage}
            </li>
            <li>
                Result Update Readme Stage:: ${result_Deploy_to_Vercel_stage}
            </li>
        </ul>
    </div>`;

send_message.messages.create(DOMAIN_MAILGUN, {
    from: "esteve.ferre.vicent@gmail.com",
    to: [DESTINATARIO],
    subject: asunto,
    html: body
})
    .then(msg => console.log(msg))
    .catch(err => console.error(err));