function AbrirModal(){
    document.getElementById('MyModal').style.display = 'block'
    var imagem = document.getElementById('imagemModal');
    document.getElementById('imgModal').src = imagem.src;
}
function fecharModal() {
    document.getElementById('myModal').style.display = 'none';
}
document.getElementById('imagemModal').addEventListener('click', abrirModal);