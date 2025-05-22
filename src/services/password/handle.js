//! Import do metodo extraido.
import permittedCharacters from "./utils/permitted-Characters.js";

async function handle(){

    //variavel para controle de characters permitidos. //!Esta variavel esta conectada diretamente com o arquivo .env.
    let characters = [];

    //variavel que guardará a senha gerada.
    let password = "";

    const passwordLength = process.env.PASSWORD_LENGTH;
    characters = await permittedCharacters();

    for(let i = 0; i < passwordLength; i++){
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;

}


export default handle;