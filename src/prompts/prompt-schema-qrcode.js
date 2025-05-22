//! Responsabilidade: Arquivo responsável por lidar com requisições e interações com o usuário.

import chalk from "chalk";


//! Objeto de interação com o usuário.
const PromptSchemaQRCode = [
    {
        name: "link",
        description: chalk.blue("Digite um link para gerar o QR CODE"),   
    },
    {
        name: "type",
        description: chalk.blue("Escolha a forma de QRCode desejada: 1- NORMAL OU 2- TERMINAL"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Por favor escolha entre 1 e 2"),
        required: true,
    }
];


export default PromptSchemaQRCode;
