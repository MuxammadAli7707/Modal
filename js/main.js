let elmodalbtn = document.getElementById('modalbtn')
let elclosebtn = document.getElementById('closebtn')
let elmodalbox = document.getElementById('modalbox')

elmodalbtn.addEventListener ('click',function() {
    elmodalbox.classList.add('show');
})

elclosebtn.addEventListener ('click',function() {
    elmodalbox.classList.remove('show');
})