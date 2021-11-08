# Penanganan Error

Pada sebuah pengembangan aplikasi selalu ada potensi kesalahan atau BUG. Ini bisa terjadi karena kesalahan penulisan dalam logika kode, kesalahan input dari pengguna, atau banyak alasan lainnya.

Jika aplikasi mengalami error, aplikasi akan berhenti dan program tidak akan berjalan. Sebagai developer, tentu menjadi tugas kita untuk memastikan aplikasi tetap berjalan dalam segala kondisi. Termasuk mengatasi jika terjadi kesalahan.

Macam macam error handling pada javascript:

    The try statement lets you test a block of code for errors.

    The catch statement lets you handle the error.

    The throw statement lets you create custom errors.

    The finally statement lets you execute code, after try and catch, regardless of the result.

sumber: [w3schools/js_errors](https://www.w3schools.com/js/js_errors.asp)

```javascript
let json = `{ "name": "bastian", "age": 30 }`;

try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }

  if (!user.age) {
    throw new SyntaxError("'age' is required.");
  }

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
} finally {
  console.log("alert!");
}
```
