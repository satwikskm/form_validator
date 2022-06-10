const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const textArea = document.getElementById('text-area');
const maxLength = 20
document.getElementById('char').style.transform="translate(0,-80px)"

textArea.addEventListener('keyup',()=>{
  document.getElementById('char').style.visibility="visible"
  
    
    if(textArea.value.length == maxLength){
      document.getElementById('char').style.color="red"
      document.getElementById('char').innerText="Max limit reaached"
      textArea.setAttribute="disabled"

    }
    else{
      document.getElementById('char').style.color="green"
      textArea.value.length
      document.getElementById('char').innerText=textArea.value.length
      if(textArea.value.length > maxLength/2){
        document.getElementById('char').style.color="orange"
        
  
      }
      else if(textArea.value.length > maxLength-10){
        document.getElementById('char').style.color="red"
      }

    }
})


//Input Array

const inputArray = [username, email, password, confirmPassword];
//Functions

//ShowError Function
const showError = function (input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  
  small.innerText = message;
};

//showSuccess function for
const showSuccess = function (input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

//isValidEmail Function

const isValidEmail = function (input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(input).toLowerCase());
};

//check email
const checkEmail = function (input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(String(input.value).toLowerCase().trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
};

//checkRequired Functions
const checkRequired = function (inputArr) {
  inputArr.forEach((input) => {
    if (input.value === '') {
      showError(input, `${message(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

//min Max function
const checkLength = function (input, min, max) {
  if (input.value.length < min) {
    showError(input, `${message(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${message(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
};

//Password Match Function

const checkPasswordMatch = function (input1, input2) {
  if (input1.value !== '' && input2.value !== '')
    if (input1.value !== input2.value) {
      showError(input2, 'Passwords not matched');
    } else {
      showSuccess(input1);
      showSuccess(input2);
    }
};

//message function

const message = function (input) {
  var errorMessage = input.id.replace(/-p/, ' P');
  return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
};

//evert Listeners

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkRequired(inputArray);
  checkLength(username, 3, 10);
  checkEmail(email);
  checkLength(password, 5, 12);
  checkPasswordMatch(password, confirmPassword);

  console.log(e);
});

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   if (username.value === '') {
//     showError(username, 'Username is required');
//   } else {
//     showSuccess(username);
//   }

//   if (email.value === '') {
//     showError(email, 'Email is required');
//   } else if (!isValidEmail(email.value)) {
//     showError(email, 'Email is not valid');
//   } else {
//     showSuccess(email);
//   }

//   if (password.value === '') {
//     showError(password, 'Password is required');
//   } else {
//     showSuccess(password);
//   }

//   if (confirmPassword.value === '') {
//     showError(confirmPassword, 'Confirm Password is required');
//   } else {
//     showSuccess(confirmPassword);
//   }
// });
