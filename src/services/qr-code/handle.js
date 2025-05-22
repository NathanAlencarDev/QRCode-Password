//! Arquivo handle.js:
    //? Responsabilidade: Armazenar função para ser consumida pelo arquivo create. O hadle.js vai "lidar" com a função para evitar codigos extensos.

import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
    if (err) {
        console.log("Error on application");
        return;
    }

    const isSmall = result.type == 2;

    //Gerando o QRCode.
    qr.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green("QR Code gerado com sucesso:\n"));
        console.log(qrcode);
    });
}


export default handle;