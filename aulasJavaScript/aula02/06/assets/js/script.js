function onClick(){
    const erros = document.getElementById('erros');
    const usuario = document.getElementById('usuarioID');

    if(usuario.value == ''){
        erros.innerHTML = '<span class="msg" >Informe o usuário</span>';
        usuario.focus();
    }
    // console.log(usuario.value);
    
}