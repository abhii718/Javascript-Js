function User(email, password) {
    this._email = email;
    this._password = password;
  
    Object.defineProperties(this, {
      email: {
        get: function () {
          return this._email.toUpperCase();
        },
        set: function (value) {
          this._email = value;
        },
      },
      password: {
        get: function () {
          return this._password.toUpperCase();
        },
        set: function (value) {
          this._password = value;
        },
      },
    });
  }
  
  const chai = new User("chai@abhi.com", "abhii232");
  console.log(chai.email);    // Output: "CHAI@ABHI.COM"
  console.log(chai.password); // Output: "ABHII232"
  