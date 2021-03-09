var fitem = window.document.getElementById('fitem');
var lista = window.document.getElementById('lista');
var fitens = [];




function adicionar() {

    if(fitem.value != '') {

        fitens.push(String(fitem))
        var obj = document.createElement('option');
        obj.text = `(${fitem.value}) foi adicionado`;
        lista.appendChild(obj);

        
    } else {
        window.alert('[ERRO] Para continuar, adicione um valor.')
    }

    fitem.value = '';
    fitem.focus()
}


function limpar() {
    lista.innerHTML = ''
}

