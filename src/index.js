//! Import do pacote
import prompt from 'prompt';

//! Import do meu arquivo de configuração do prompts
import PromptSchemaMain from "./prompts/prompt-schema-main.js";
import createQRCode from './services/qr-code/create.js';
import createPassword from './services/password/create.js';

async function main(){

    //! Configuração de chamada do prompt
    prompt.get(PromptSchemaMain, async (err, choose) => {
        if(choose.select == 1) await createQRCode();
        if(choose.select == 2) await createPassword();
    });

    //! inicialização do prompt
    prompt.start();
}

main();