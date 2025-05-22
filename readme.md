
# 📦 Pacotes Utilizados no Projeto

---

## 🔹 **Prompt**

📦 Instalação: `npm i prompt`
🎯 **Funcionalidade**: Permite criar interações com o usuário via terminal.

🧩 **Exemplo de Código** (`prompt-main.js`):

```js
const mainPrompt = [
    {
        name: "select",
        description: "Escolha a ferramenta 1 - QRCODE ou 2 - PASSWORD",
        pattern: /^[1-2]+$/,
        message: "Escolha apenas entre 1 e 2",
        required: true,
    },
];

prompt.get(mainPrompt, async (err, choose) => {
    if (choose.select == 1) console.log("Escolheu o QRCode");
    if (choose.select == 2) console.log("Escolheu o Password");
});
```

---

## 🎨 **Chalk**

📦 Instalação: `npm i chalk`
🎯 **Funcionalidade**: Melhora a aparência das mensagens exibidas no terminal.

🧩 **Exemplo Prático**:

```js
description: chalk.blue.bold("Escolha a ferramenta 1 - QRCODE ou 2 - PASSWORD"),
```

---

## 📲 **qrcode-terminal**

📦 Instalação: `npm i qrcode-terminal`
🎯 **Funcionalidade**: Gera QR Codes diretamente no terminal.

🧩 **Exemplo de Utilização**:

```js
async function handle(err, result) {
    if (err) {
        console.log("Erro na aplicação");
        return;
    }

    const isSmall = result.type == 2;

    qr.generate(result.link, { small: isSmall }, (qrcode) => {
        console.log(chalk.green("QR Code gerado com sucesso:\n"));
        console.log(qrcode);
    });
}
```

---

## 📁 Observação sobre o Arquivo `handle.js`

O arquivo `handle`, `handler` ou `listener` é utilizado para **organizar a lógica de execução** de determinada funcionalidade, separando responsabilidades para manter o código mais limpo.

---

## ♻️ Refatoração

### 🔍 O que é?

Refatorar é **melhorar a estrutura e a legibilidade** do código sem alterar seu comportamento. É uma prática essencial para manter um projeto sustentável a longo prazo.

### 🛠️ Técnica Utilizada: `Extract Method`

➡️ Consiste em mover trechos de código para arquivos separados (ex: `utils/`) com o objetivo de facilitar a manutenção e reutilização.

### 💡 Dica de Ouro

> “Não adianta programar a nova rede social do momento se ela não tiver organização e boa legibilidade.”

Como desenvolvedores, devemos buscar sempre:

* Código organizado 🗂️
* Boa legibilidade 👓
* Clareza na arquitetura do sistema 🧠

---
