const qrcode = require("qrcode-terminal");

const { Client } = require("whatsapp-web.js");
const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (message) => {
  if (message.body === "Andre") {
    message.reply(
      "Diz que é fã do Messi, mas tem foto do Cris na galeria do celular..."
    );
  }
});

client.initialize();
