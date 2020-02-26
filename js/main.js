const toggle = document.querySelector('.toggle')
const close = document.querySelector('.close')
const show = document.querySelector('.show')
const navigasi = document.querySelector('.navigasi')

toggle.addEventListener('click', function() {
    navigasi.classList.add('show');
})

close.addEventListener('click', function(){
    navigasi.classList.remove('show');
})