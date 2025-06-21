// Seleciona as seções e os links da navegação
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Função que será executada ao rolar a página
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // Remove a classe 'active' de todos os links
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            // Adiciona a classe 'active' ao link correspondente à seção visível
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        };
    });
}; 