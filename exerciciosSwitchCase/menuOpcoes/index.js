function menuOpcoes(opcao){
    let mensagem;

    switch(opcao){
        case 0:
            mensagem = "Sair"
            break;
        case 1: 
            mensagem = "Cadastrar usuário";
            break;
        case  2:
            mensagem = "Excluir usuário";
            break;
        case  3:
            mensagem = "Alterar usuário";
            break;
        case  4:
            mensagem = "Consultar usuário";
            break;
        default:
            return "Opção Invalida"
    }
    return mensagem
}

console.log(menuOpcoes(0))