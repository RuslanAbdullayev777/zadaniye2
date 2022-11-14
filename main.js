function gettime() {
    let sms = new Date();
    return `${sms.getHours()}:${sms.getMinutes()}`
}
class Message{
constructor(author, time, txt){
this.author = author;
this.time = time;
this.txt = txt;
}

toString() {
    return this.time + ' ' + this.author + ': ' + this.txt;
}
}

class Messenger{
        constructor() {
        this.history = [];
      }
      
      showHistory() {
          for (const msg of this.history) {
            console.log(msg.toString());
        }
      }
      
      send(author, txt) {
        this.history.push(new Message(author, gettime(), txt));
      }
    }

let messenger = new Messenger();

messenger.send('Ruslan', 'salam')
messenger.send('Ilkin', 'privet')
messenger.showHistory()