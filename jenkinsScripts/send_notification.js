var API_KEY_MAILGUN = process.argv[2]
var DOMAIN_MAILGUN = process.argv[3]
var DESTINATARIO = process.argv[4]

//Variables de estado de los jobs
let result_Linter_stage = process.argv[5] == 0 ? "success": "failure";
let resultado_Test_stage = process.argv[6] == 0 ? "success": "failure";
let result_Update_readme_stage = process.argv[7] == 0 ? "success": "failure";
let result_Deploy_to_Vercel_stage = process.argv[8] == 0 ? "success": "failure";



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
                Result Update Readme Stage: ${result_Deploy_to_Vercel_stage}
            </li>
        </ul>
    </div>`;

const mailgun = require("mailgun-js");
const mg = mailgun({apiKey: API_KEY_MAILGUN, domain: DOMAIN_MAILGUN});
const data = {
       from: 'esteve.ferre.vicent@gmail.com',
       to: DESTINATARIO,
       subject: 'Resultado de la pipeline ejecutada',
       html: body
};
mg.messages().send(data, function (error, body) {
       console.log(body);
});