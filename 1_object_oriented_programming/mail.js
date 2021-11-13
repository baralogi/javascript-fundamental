/* Bagaimana jika saya ingin membuat objek baru bernama mail2 dengan atribut yang sama namun nilai yang berbeda dengan mail? 
* Apakah harus mendefinisikan attribute dan function/method yang sama secara berulang?
* Bagaimana jika saya ingin membuat mail2 tanpa method saveContact?
* Bagaimana jika saya ingin menambahkan fungsi tambahan pada mail2?
*/

const mail = {
  from: "pengirim@dicoding.com",
  sendMessage: function (msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
  },
  saveContact: function (addr) {
    console.log(`email saved ${addr}`);
  }
};

console.log(mail.from);
mail.sendMessage("apakabar", "penerima@dicoding.com");
mail.saveContact("sembara9090@gmail.com")
