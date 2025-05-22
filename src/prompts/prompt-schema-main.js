//! ARQUIVO RESPONSÁVEL POR TODAS AS CONFIGURAÇÕES DO PACOTE.

import chalk from "chalk";

//? Constante(OBJETO) para salvar o esquema de configuração do pacote.
const PromptSchemaMain = [
    {
        name: "select",
        description: chalk.blue.bold("Escolha a ferramenta 1 - QRCODE ou 2 - PASSWORD"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true,
    },
];

export default PromptSchemaMain;