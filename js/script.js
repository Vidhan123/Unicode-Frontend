function validate() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const number = document.getElementById("number");
  const message = document.getElementById("message");
  const btn = document.getElementById("button")
  
  const blankErr = document.getElementById("blankErr");
  const nameErr = document.getElementById("nameErr");
  const emailErr = document.getElementById("emailErr");
  const numberErr = document.getElementById("numberErr");

  blankErr.style.visibility="hidden";
  nameErr.style.visibility="hidden";
  emailErr.style.visibility="hidden";
  numberErr.style.visibility="hidden";

  let b=1, n=1, e=1, num=1;

  const nameCheck = /^[a-zA-Z ]+$/;
  const emailCheck = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+).([a-zA-Z]+)(.[a-zA-Z]{2,8})?$/;
  const numberCheck = /^\+?([0-9 ]{3})?([0-9- .]{10,13})$/;

  if (name.value.trim()=="") {
    n = 1;
  }
  else if (nameCheck.test(name.value)) {
    n = 1;
  }
  else {
    nameErr.style.visibility="visible";
    n = 0;
  };

  if (email.value.trim()=="") {
    blankErr.style.visibility="visible";
    b = 0;
  }
  else if (emailCheck.test(email.value)) {
    e = 1;
  }
  else {
    emailErr.style.visibility="visible";
    e = 0;
  };

  if (number.value.trim()=="") {
    num = 1
  }
  else if (numberCheck.test(number.value)) {
    num = 1;
  }
  else {
    numberErr.style.visibility="visible";
    num = 0;
  };

  if (message.value.trim()=="") {
    blankErr.style.visibility="visible";
    b = 0;   
  };

  if (b == 0 || n == 0 || e == 0 || num == 0) {
    return false
  }
  else {
    btn.innerHTML="Message Sent";
    window.location.reload(true);
    return true
  };
}