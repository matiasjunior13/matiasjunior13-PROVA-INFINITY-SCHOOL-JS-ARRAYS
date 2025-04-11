let listaDeCompras = []
let loopMenu = true

while (loopMenu){ 
    let opcao = prompt(`====== Bem-vindo ao seu ecommerce! ======
        Digite a opção desejada:
        1. Adicionar item a sua lista
        2. Remover item da lista
        3. Exibir lista
        4. Atualizar  item
        5. Finalizar sistema`)

switch (opcao){
    case "1":{
        let adicionarItem = prompt('Digite o nome do item que deseja adicionar: ')
        listaDeCompras.push(adicionarItem)
        alert(`
            O item [ ${adicionarItem} ] foi acrescentando a sua lista de compras!`)
        break
    }
    case "2":{
        let removerItem = prompt(`
            Você selecionou a opção de excluir. 
            Abaixo estão os items em sua lista, digite o nome do item que deseja remover:
            ${listaDeCompras}`)
        let indice = listaDeCompras.indexOf(removerItem)
        if (indice !== -1) {
            listaDeCompras.splice(indice, 1)
            alert(`O item [${removerItem}] foi REMOVIDO da sua lista.`)
            } else {
            alert(`O item [${removerItem}] não foi encontrado na lista.`)
            }
            break
        }
    case "3": if (listaDeCompras.length === 0) {
        alert("Sua lista de compras está vazia.");
        } else {
        let listaFormatada = "Segue sua lista de compras:\n";
        for (let item of listaDeCompras) {
          listaFormatada += `- ${item}\n`; // Usa o for...of para listar os itens
        }
        alert(listaFormatada);
        } 
        break;
    case "4": {
        let itemAntigo = prompt(`Digite o nome do item que deseja atualizar:\n Segue listagem: [ ${listaDeCompras} ]`)
            let indice = listaDeCompras.indexOf(itemAntigo)
            if (indice !== -1) {
                let novoItem = prompt(`Digite o novo nome para o item [ ${itemAntigo} ]:`)
                listaDeCompras[indice] = novoItem
                alert(`Item atualizado! Nova lista: \n${listaDeCompras}`)
            } else {
                alert(`O item [${itemAntigo}] não foi encontrado na lista.`)
            }
            break
        }
    case "5": {
        loopMenu = false
        alert (`Encerrando seu programa... \nAté mais!`)
        break
    }
}
}



