// Scroll topo
window.onscroll = function () { headerFixed(), showBackToTop() };

function headerFixed() {
  if (document.documentElement.scrollTop > 32) {
    document.getElementById('header').className = 'fixed-top'
    document.querySelector('body').style.paddingTop = '32px'
  }
  else {
    document.getElementById('header').className = ''
    document.querySelector('body').style.paddingTop = ''
  }
};
//Color Span DropDown
document.getElementById('ulDownloads').onmouseover = function () { mouseoverUlDownloads() }
document.getElementById('ulDownloads').onmouseout = function () { mouseoutUlDownloads() }
document.getElementById('ulRestrita').onmouseover = function () { mouseoverUlRestrita() }
document.getElementById('ulRestrita').onmouseout = function () { mouseoutUlRestrita() }

function mouseoverUlDownloads() {
  document.getElementById('downloads').style.color = '#0087c9'
}

function mouseoutUlDownloads() {
  document.getElementById('downloads').style.color = ''
}

function mouseoverUlRestrita() {
  document.getElementById('restrita').style.color = '#0087c9'
}

function mouseoutUlRestrita() {
  document.getElementById('restrita').style.color = ''
};

// Mostrar botão voltar ao topo
function showBackToTop() {
  if (document.documentElement.scrollTop > 550) {
    document.getElementById('backToTop').style.display = 'block'
  } else {
    document.getElementById('backToTop').style.display = 'none'
  }
};

//Efeito onMouseOver BackToTop
document.getElementById('backToTop').onmouseover = function () { backToTopOver() }
document.getElementById('backToTop').onmouseout = function () { backToTopOut() }

function backToTopOver() {
  document.getElementById('backToTop').style.marginRight = '-35px'
}

function backToTopOut() {
  document.getElementById('backToTop').style.marginRight = '-45px'
};

// ScrollReveal
ScrollReveal().reveal('.headline')
ScrollReveal().reveal('.tagline', { delay: 450 })
ScrollReveal().reveal('.punchline-card1', { delay: 750 })
ScrollReveal().reveal('.punchline-card2', { delay: 950 })
ScrollReveal().reveal('.punchline-card3', { delay: 1150 });








