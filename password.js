function AccessControl() {
    var password = 'pissw0rd';

    var submitted = document.getElementById('password').value;

    if (submitted === password) {
        location.href='./index.html'
    }    
}