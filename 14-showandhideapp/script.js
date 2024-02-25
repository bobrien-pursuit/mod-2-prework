let eyeIcon = document.getElementById('eyeicon');
let password = document.getElementById('password');

eyeicon.onclick = function() {
    if (password.type === 'password') {
        password.type = 'text';
        eyeIcon.src = 'eye-open.png';
    } else {
        password.type = 'password';
        eyeIcon.src = 'eye-close.png';
    }
}
