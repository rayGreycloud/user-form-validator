// Form blur event listeners 
document.getElementById('name')
  .addEventListener('blur', validateName);
document.getElementById('zip')
  .addEventListener('blur', validateZip);
document.getElementById('email')
  .addEventListener('blur', validateEmail);
document.getElementById('phone')
  .addEventListener('blur', validatePhone);
  
// Form validation functions 
function validateName() {
  const name = document.getElementById('name');
  const re = /^[A-Za-z]{2,10}$/;
  
  if (!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');    
  }
}

function validateZip() {
  const name = document.getElementById('zip');
  // Start ^
  // Five digits [0-9]{5}
  // Dash 4 digits  -[0-9]{4}
  // Optional (requires grouping) (-[0-9]{4})?
  // End $
  const re = /^[0-9]{5}(-[0-9]{4})?$/;
  
  if (!re.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');    
  }  
}

function validateEmail() {
  const email = document.getElementById('email');
  // letters, numbers, '_', '.' and '-'
  const re = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;
  
  if (!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');    
  }    
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[\.\- ]?\d{3}[\.\- ]?\d{4}$/;
  
  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');    
  }    
}