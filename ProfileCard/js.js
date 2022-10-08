function mostrarmais(){

    const ativo = document.getElementById('vermais1');

    if(ativo.style.display == 'none'){
        ativo.style.display = 'block';
    }else {
        ativo.style.display = 'none';
    }

}

function fecharmostramais(){
    const ativo = document.getElementById('vermais1');

    if(ativo.style.display == 'block'){
        ativo.style.display = 'none';
    }else {
        ativo.style.display = 'block';
    }
}


function mostrarlocal(){

    const ativo1 = document.getElementById('local1');

    if(ativo1.style.display == 'none'){
        ativo1.style.display = 'block';
        setTimeout(desativar5s, 5000);
    }else {
        ativo1.style.display = 'none';
    }

}

function desativar5s(){
    const ativo1 = document.getElementById('local1');

    if(ativo1.style.display == 'block'){
        ativo1.style.display = 'none';
    }else {
        ativo1.style.display = 'block';
    }
}

function abririnsta(){
    window.open('https://www.instagram.com/jluizccosta/');
}

function abrirwpp(){
    window.open('https://api.whatsapp.com/send?phone=5561982223145');    
}

function abriremail(){
    window.open('mailto:joaoluizcosta99@gmail.com?subject=&body=%20');
}