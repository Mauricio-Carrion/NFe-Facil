// Scroll topo
window.onscroll = function () { headerFixed() };

function headerFixed() {
  if (document.documentElement.scrollTop > 45) {
    document.getElementById('topo').className = 'fixed-top'
    document.querySelector('body').style.paddingTop = '45px'
  }
  else {
    document.getElementById('topo').className = ''
    document.querySelector('body').style.paddingTop = ''
  }
};

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








