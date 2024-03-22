window.onload = () => {

    const login = document.getElementById('login');
    login.onclick = function () {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        if (email.value === "pedro" && password.value === "23456") {
            window.location.replace("./pages/home.html");
        }
    }

}