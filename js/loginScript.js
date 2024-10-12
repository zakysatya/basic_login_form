function validateForm() {
  const usernameInput = document.querySelector('input[name="username"]');
  const passwordInput = document.querySelector('input[name="password"]');

  const username = usernameInput.value;
  const password = passwordInput.value;


  if (username === "" || password === "") {
    alert("Masukkan semua username dan password.");
    return false;
  }

  // validasi usernmae
  if (username.length < 5) {
    alert('Username minimal 5 karakter.');
    return false;
  }

  //validasi password
  if (password.length < 8) {
    alert('Password minimal 8 karakter.');
    return false;
  }

  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$");
  if (!strongRegex.test(password)) {
    alert('Password harus mengandung minimal 1 huruf besar, 1 huruf kecil, dan 1 angka.');
    return false;
  }

  return true;
}

const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (validateForm()) {
    
    alert("Login successful!");
    window.location.href = "https://zssite.vercel.app"
  }
});