function Ligar_desligar(){

    var imagem = document.getElementById('lamp').src;
    var imagem_ligado = 'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/lampada-on.jpg';
    var imagem_desligado = 'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/lampada.jpg';
    
    if(imagem == imagem_ligado){
    	document.getElementById('lamp').src = imagem_desligado;
    }else{
    	document.getElementById('lamp').src = imagem_ligado;
    }
}
document.getElementById("lamp").addEventListener("click", Ligar_desligar);