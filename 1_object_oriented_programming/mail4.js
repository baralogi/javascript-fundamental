class Mail {
  constructor(author) {
    this.from = author;
    this._contacts = [];
  }
  sendMessage(msg, to) {
    return `you send: ${msg} to ${to} from ${this.from}`;
    this._contacts.push(to);
  }
  showAllContacts() {
    return this._contacts;
  }
}

class WhatsApp extends Mail {
  constructor(author) {
    super(author);
    this.username = "dicoding";
    this.isBussinessAccount = true;
  }
  myProfile() {
    return `my name ${this.username}, is ${
      this.isBussinessAccount ? "Business" : "Personal"
    }`;
  }
}

const wa1 = new WhatsApp(6280111000222);
console.log(wa1.myProfile());
console.log(wa1.sendMessage("xx", "089616645409"));
