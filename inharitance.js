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

// > using es6 syntax

class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, reciever) {
    console.log(`${this.sender} sent ${message} to ${reciever}`);
  }
}

class WhatsappService extends MailService {
  sendBroadcastMessage(message, recievers) {
    for (const reciever of recievers) {
      this.sendMessage(message, reciever);
    }
  }
}

class EmailService extends MailService {
  sendDelayMessage(message, reciever, delay) {
    setTimeout(() => {
      this.message = message;
      this.reciever = reciever;
    }, delay);
  }
}
