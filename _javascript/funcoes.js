

let mudarIcone = (menuSecionado) => {
    let img =  document.querySelector('#logo')
    switch(menuSecionado){
   
        case 'home' : 
            img.setAttribute('src','./_imagens/home.png')
        break;
        case 'espec':
            img.setAttribute('src','./_imagens/especificacoes.png')
        break;
        case 'fotos' :
            img.setAttribute('src','./_imagens/fotos.png')
        break;
        case 'multm':
            img.setAttribute('src','./_imagens/multimidia.png')
        break;
        case 'sac':
            img.setAttribute('src','./_imagens/contato.png')
        break;
        default:
    }
}

let iconePadrao = (string) => {
   
   let img = document.getElementById('logo')
   switch(string){
    
    case 'home':
        img.setAttribute('src','./_imagens/glass-oculos-preto-peq.png')
    break;
    case 'spec' :
        img.setAttribute('src','./_imagens/especificacoes.png')
    break;
    case 'fotos' :
        img.setAttribute('src','./_imagens/fotos.png')
    break;
    case 'multm':
        img.setAttribute('src','./_imagens/multimidia.png')
    break;
    case 'sac':
        img.setAttribute('src','./_imagens/contato.png')
    break;
    default:
  }
}