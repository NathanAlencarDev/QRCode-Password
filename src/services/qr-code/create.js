//! Responsabilidade: Este arquivo guardará todas as funcionalidades ligadas ao Qr-Code.


import prompt from "prompt";
import PromptSchemaQRCode from "../../prompts/prompt-schema-qrcode.js";
import handle from "./handle.js";


//! Função para criação do Qr-Code.
async function createQRCode(){
    prompt.get(PromptSchemaQRCode, handle);
    prompt.start();
}



export default createQRCode;
