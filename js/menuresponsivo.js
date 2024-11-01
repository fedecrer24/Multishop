
    document.addEventListener('DOMContentLoaded', () => {
        const menuToggle = document.getElementById('menu-toggle');  //es el contenedor que contiene al logo
        const menuf = document.getElementById('menuf'); //es el conentedor que contiene al menu completo 
    
        menuToggle.addEventListener('click', () => {
            menuf.classList.toggle('open');
        });
    });
    