let header = document.querySelector('#header');

window.addEventListener('scroll', (e) => {
    if (window.scrollY >= 200){
        header.style.background = 'rgba(88, 88, 88, 0.418)';
    }else{
        header.style.background = 'transparent';
    }
});

