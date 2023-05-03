// different before es6 syntax for creating object inharitance
// > before

// blueprint service messages
function MailService(sender) {
  this.sender = sender;
}

// create sendMessage method MailService
MailService.prototype.sendMessage = function (message, reciever) {
  console.log(`${this.sender} sent ${message} to ${reciever}`);
};

// new instance method Mailservice
function WhatsappService(sender) {
  MailService.call(this, sender);
}

// prototype inharitance
WhatsappService.prototype = Object.create(MailService.prototype);
WhatsappService.prototype.constructor = WhatsappService;

// creat sendBroadcastMessage whatsapp instance method
WhatsappService.prototype.sendBroadcastMessage = function (message, recievers) {
  for (const reciever of recievers) {
    this.sendMessage(message, reciever);
  }
};

const whatsapp = new WhatsappService("6282124820022");

console.log(whatsapp.sendMessage("hello", "628978473105"));
console.log(
  whatsapp.sendBroadcastMessage("hello", ["628978473105", "628978473105"])
);
