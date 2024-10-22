const hamburgerButton = document.getElementById('hamburger_moj')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('hidden')
}

hamburgerButton.addEventListener('click', toggleButton)

document.querySelectorAll('.link-menu-zamykajacy').forEach(item => {
    item.addEventListener('click', toggleButton);
});

