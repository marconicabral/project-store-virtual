/* Menu */

document.getElementById("menu").addEventListener("click", function() {
    var nav = document.querySelector(".mobileMenu ul");
    if (nav.style.display === "block") {
        nav.style.display = "none";
        document.getElementById("menu").style.display = "block";
        document.getElementById("close").style.display = "none";
    } else {
        nav.style.display = "block";
        document.getElementById("menu").style.display = "none";
        document.getElementById("close").style.display = "block";
    }
});

document.getElementById("close").addEventListener("click", function() {
    var nav = document.querySelector(".mobileMenu ul");
    nav.style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("close").style.display = "none";
});

/* Filtrar Opções */

/* Open Filters */
document.getElementById('filterButton').addEventListener('click', function() {
    var menuMobile = document.querySelector('.menu-mobile');
    var filterButton = document.getElementById('filterButton');
    menuMobile.classList.add('show');
    filterButton.style.display = 'none'; // Oculta o botão
});

/* Close Filters */
// Adiciona um evento de clique ao botão de fechar
document.getElementById('closeFilter').addEventListener('click', function() {
    var menuMobile = document.querySelector('.menu-mobile');
    var filterButton = document.getElementById('filterButton');
    menuMobile.classList.remove('show');
    filterButton.style.display = 'block'; // Mostra o botão novamente
});