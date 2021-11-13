let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
var Name = document.getElementById('name');
var No = document.getElementById('no');
var Mail = document.getElementById('mail');
var Msg = document.getElementById('msg');
let body = document.querySelector('body');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function sendmsg() {

    var name = Name.value;
    var no = No.value;
    var mail = Mail.value;
    var msg = Msg.value;
    var url = "https://wa.me/+918866322820?text=" + "Name: " + name + "%0a" + "contact no : " + no + "%0a" + "Email: " + mail + "%0a" + "Message: " + msg + "%0a";

    window.open(url).focus();
}



// dark light theme

const themeButton = document.getElementById('checkbox')
const darkTheme = 'dark-theme'
const onbtn = 'on'
const selectedOn = localStorage.getItem('selected-on')
const getCurrentOn = () => document.body.classList.contains(onbtn) ? 'on' : 'off'
const selectedTheme = localStorage.getItem('selected-theme')
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)

}


if (selectedOn) {
    document.body.classList[selectedOn === 'on' ? 'add' : 'remove'](onbtn)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark theme
    document.body.classList.toggle(darkTheme)
    document.body.classList.toggle('on')

    // We save the theme that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())

    localStorage.setItem('selected-on', getCurrentOn())
})

function scrollup() {
    const scrollup = document.getElementById('scroll-up');
    if (this.scrollY >= 450) scrollup.classList.add('show-scroll');
    else scrollup.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollup)
