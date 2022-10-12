function builderButton(buttonValue,functionName,comDiv) {
    var div = document.createElement('div');
    div.align = 'center';
    var br = document.createElement('br');
    var input = document.createElement('input');
    input.type = 'button';
    input.value = buttonValue;
    input.setAttribute('onclick',functionName);

    div.appendChild(br);
    div.appendChild(input);

    return comDiv ? div : input;
}

function builderButtonCriarNovo(buttonValue,functionName) {
    return builderButton(buttonValue,functionName,true);
}

function builderButtonSalvar(buttonValue,functionName) {
    return builderButton(buttonValue,functionName,true);
}

function builderTitulo(titulo) {
    var div = document.createElement('div');
    div.align = 'center';
    var h3 = document.createElement('h3');
    h3.style.fontWeight = '500';
    h3.style.textDecoration = 'underline';
    h3.innerHTML = titulo;
    div.appendChild(h3);

    return div;
}

function builderProdutos() {
    let _produtos = listarProdutos();
    let produtos = JSON.parse(_produtos);
    var table = document.createElement('table');
    table.style.width = '100%';
    for (let i = 0; i < produtos.length; i++) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.style.width = '5%';
        td1.innerHTML = ''+(i+1)+') ';
        var td2 = document.createElement('td');
        td2.innerHTML = produtos[i].nome;
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var iconeEditar = document.createElement('img');
        var iconeExibir = document.createElement('img');
        var iconeExcluir = document.createElement('img');
        iconeEditar.src = 'images/icon_alterar.jpeg';
        iconeEditar.setAttribute('onclick', 'javascript:navigateToProduto('+produtos[i].id+',"editar")');
        iconeExibir.src = 'images/icon_exibir.jpeg';
        iconeExibir.setAttribute('onclick', 'javascript:navigateToProduto('+produtos[i].id+',"exibir")');
        iconeExcluir.src = 'images/icon_excluir.jpeg';
        iconeExcluir.setAttribute('onclick', 'javascript:excluirProduto('+produtos[i].id+')');

        td3.appendChild(iconeExibir);
        td4.appendChild(iconeEditar);
        td5.appendChild(iconeExcluir);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        table.appendChild(tr);
    }

    return table;
}

function builderCategorias() {
    let _categorias = listarCategorias();
    let categorias = JSON.parse(_categorias);
    var table = document.createElement('table');
    table.style.width = '100%';
    for (let i = 0; i < categorias.length; i++) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.style.width = '5%';
        td1.innerHTML = ''+(i+1)+') ';
        var td2 = document.createElement('td');
        td2.innerHTML = categorias[i].descricao;
        
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var iconeEditar = document.createElement('img');
        var iconeExibir = document.createElement('img');
        var iconeExcluir = document.createElement('img');
        iconeEditar.src = 'images/icon_alterar.jpeg';
        iconeEditar.setAttribute('onclick', 'javascript:navigateToCategoria("'+categorias[i].id+'","editar")');
        iconeExibir.src = 'images/icon_exibir.jpeg';
        iconeExibir.setAttribute('onclick', 'javascript:navigateToCategoria("'+categorias[i].id+'","exibir")');
        iconeExcluir.src = 'images/icon_excluir.jpeg';
        iconeExcluir.setAttribute('onclick', 'javascript:excluirCategoria('+categorias[i].id+')');

        td3.appendChild(iconeExibir);
        td4.appendChild(iconeEditar);
        td5.appendChild(iconeExcluir);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        table.appendChild(tr);
    }

    return table;
}

function builderFabricantes() {
    let _fabricantes = listarFabricantes();
    let fabricantes = JSON.parse(_fabricantes);
    var table = document.createElement('table');
    table.style.width = '100%';
    for (let i = 0; i < fabricantes.length; i++) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.style.width = '5%';
        td1.innerHTML = ''+(i+1)+') ';
        var td2 = document.createElement('td');
        td2.innerHTML = fabricantes[i].descricao;
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var iconeEditar = document.createElement('img');
        var iconeExibir = document.createElement('img');
        var iconeExcluir = document.createElement('img');
        iconeEditar.src = 'images/icon_alterar.jpeg';
        iconeEditar.setAttribute('onclick', 'javascript:navigateToFabricante('+fabricantes[i].id+',"editar")');
        iconeExibir.src = 'images/icon_exibir.jpeg';
        iconeExibir.setAttribute('onclick', 'javascript:navigateToFabricante('+fabricantes[i].id+',"exibir")');
        iconeExcluir.src = 'images/icon_excluir.jpeg';
        iconeExcluir.setAttribute('onclick', 'javascript:excluirFabricante('+fabricantes[i].id+')');

        td3.appendChild(iconeExibir);
        td4.appendChild(iconeEditar);
        td5.appendChild(iconeExcluir);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        table.appendChild(tr);
    }

    return table;
}

function builderEditarCategoria(categoria, acao) {
    var edicao = false;
    let jsonCategoria;
    if (categoria != null && categoria != '' && categoria != 'undefined') {
        edicao = true;
        jsonCategoria = JSON.parse(obterCategoria(categoria));
    }
    var exibir = acao == 'exibir' ? true : false;

    var form = document.createElement('form');

    var input_categoria_id = document.createElement('input');
    input_categoria_id.id = 'input_categoria_id';
    input_categoria_id.type = 'hidden';
    input_categoria_id.value = edicao ? jsonCategoria.id : '';

    form.appendChild(input_categoria_id);

    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    table.style.width = '100%';
    td1.style.width = '20%';
    var input = document.createElement('input');
    input.type = 'text';
    if (edicao) {
        input.value = jsonCategoria.descricao;
    }
    if (exibir) {
        input.disabled = 'disabled';
    }
    input.size = '60';
    input.id = 'input_categoria';
    var label = document.createElement('label');
    label.innerHTML = 'Descrição: ';
    td1.appendChild(label);
    td2.appendChild(input);
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
    form.appendChild(table);
    let divButtons = document.createElement('div');
    divButtons.align = 'center';
    divButtons.style.display = 'block';
    if (edicao) {
        if (!exibir) {
            divButtons.appendChild(builderButton('Alterar','javascript:criarAlterarCategoria('+PUT+','+jsonCategoria.id+');', false));
        }
    } else {
        divButtons.appendChild(builderButton('Salvar','javascript:criarAlterarCategoria('+POST+');', false));
    }

    divButtons.appendChild(builderButton('Voltar', 'javascript:navigateToCategorias();', false));

    form.appendChild(divButtons);

    return form;
}

function builderEditarFabricante(fabricante,acao) {
    var edicao = false;
    let jsonFabricante;
    if (fabricante != null && fabricante != '' && fabricante != 'undefined') {
        edicao = true;
        jsonFabricante = JSON.parse(obterFabricante(fabricante));
    }
    var exibir = acao == 'exibir' ? true : false;

    var form = document.createElement('form');

    var input_fabricante_id = document.createElement('input');
    input_fabricante_id.id = 'input_fabricante_id';
    input_fabricante_id.type = 'hidden';
    input_fabricante_id.value = edicao ? jsonFabricante.id : '';
    
    form.appendChild(input_fabricante_id);

    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    table.style.width = '100%';
    td1.style.width = '20%';
    var input = document.createElement('input');
    input.type = 'text';
    if (edicao) {
        input.value = jsonFabricante.descricao;
    }
    if (exibir) {
        input.disabled = 'disabled';
    }
    input.size = '60';
    input.id = 'input_fabricante';
    var label = document.createElement('label');
    label.innerHTML = 'Descrição: ';
    td1.appendChild(label);
    td2.appendChild(input);
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
    form.appendChild(table);

    let divButtons = document.createElement('div');
    divButtons.align = 'center';
    divButtons.style.display = 'block';

    if (edicao) {
        if (!exibir) {
            divButtons.appendChild(builderButton('Alterar','javascript:criarAlterarFabricante('+PUT+','+jsonFabricante.id+');', false));
        }
    } else {
        divButtons.appendChild(builderButton('Salvar','javascript:criarAlterarFabricante('+POST+');', false));
    }

    divButtons.appendChild(builderButton('Voltar', 'javascript:navigateToFabricantes();', false));

    form.appendChild(divButtons);

    return form;
}

function builderEditarProduto(produto,acao) {
    var edicao = false;
    let jsonProduto;
    if (produto != null && produto != '' && produto != 'undefined') {
        edicao = true;
        jsonProduto = JSON.parse(obterProduto(produto));
    }
    var exibir = acao == 'exibir' ? true : false;
    var form = document.createElement('form');

    var input_produto_id = document.createElement('input');
    input_produto_id.id = 'input_produto_id';
    input_produto_id.type = 'hidden';
    input_produto_id.value = edicao ? jsonProduto.id : '';
    form.appendChild(input_produto_id);

    var input_hidden_categorias_selecionadas = document.createElement('input');
    input_hidden_categorias_selecionadas.id = 'input_hidden_categorias_selecionadas';
    input_hidden_categorias_selecionadas.type = 'hidden';
    input_hidden_categorias_selecionadas.value = '';
    form.appendChild(input_hidden_categorias_selecionadas);

    var table = document.createElement('table');
    table.style.width = '100%';
    
    var tr1 = document.createElement('tr');
    var input_produto_nome = document.createElement('input');
    var label_produto_nome = document.createElement('label');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    //td1.style.width = '20%';
    input_produto_nome.type = 'text';
    if (edicao) {
        input_produto_nome.value = jsonProduto.nome;
    }
    if (exibir) {
        input_produto_nome.disabled = 'disabled';
    }
    input_produto_nome.size = '90';
    input_produto_nome.id = 'input_produto_nome';
    label_produto_nome.innerHTML = 'Nome: ';
    label_produto_nome.htmlFor = 'input_produto_nome';

    td1.appendChild(label_produto_nome);
    td2.colSpan = '4';
    td2.appendChild(input_produto_nome);
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    table.appendChild(tr1);

    var tr2 = document.createElement('tr');
    var input_produto_descricao = document.createElement('input');
    var label_produto_descricao = document.createElement('label');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    
    input_produto_descricao.type = 'text';
    if (edicao) {
        input_produto_descricao.value = jsonProduto.descricao;
    }
    if (exibir) {
        input_produto_descricao.disabled = 'disabled';
    }
    input_produto_descricao.size = '90';
    input_produto_descricao.id = 'input_produto_descricao';
    label_produto_descricao.innerHTML = 'Descrição: ';
    label_produto_descricao.htmlFor = 'input_produto_descricao';

    td3.appendChild(label_produto_descricao);
    td4.colSpan = '4';
    td4.appendChild(input_produto_descricao);
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    table.appendChild(tr2);

    var tr3 = document.createElement('tr');
    var input_produto_preco = document.createElement('input');
    var input_produto_peso = document.createElement('input');
    var label_produto_preco = document.createElement('label');
    var label_produto_peso = document.createElement('label');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    var td9 = document.createElement('td');
    
    input_produto_preco.type = 'text';
    if (edicao) {
        input_produto_preco.value = jsonProduto.preco;
    }
    if (exibir) {
        input_produto_preco.disabled = 'disabled';
    }
    input_produto_preco.size = '20';
    input_produto_preco.id = 'input_produto_preco';
    label_produto_preco.innerHTML = 'Preço (R$): ';
    label_produto_preco.htmlFor = 'input_produto_preco';

    input_produto_peso.type = 'text';
    if (edicao) {
        input_produto_peso.value = jsonProduto.peso;
    }
    if (exibir) {
        input_produto_peso.disabled = 'disabled';
    }
    input_produto_peso.size = '20';
    input_produto_peso.id = 'input_produto_peso';
    label_produto_peso.innerHTML = 'Peso (gr): ';
    label_produto_peso.htmlFor = 'input_produto_peso';

    td5.appendChild(label_produto_preco);
    td6.appendChild(input_produto_preco);
    td8.appendChild(label_produto_peso);
    td9.appendChild(input_produto_peso);

    tr3.appendChild(td5);
    tr3.appendChild(td6);
    tr3.appendChild(td7);
    tr3.appendChild(td8);
    tr3.appendChild(td9);
    table.appendChild(tr3);
    
    var tr4 = document.createElement('tr');
    var select_fabricante = document.createElement('select');
    var label_fabricante = document.createElement('label');
    var td10 = document.createElement('td');
    var td11 = document.createElement('td');
    td11.colSpan = '4';

    select_fabricante.id = 'select_fabricante';
    select_fabricante.name = 'select_fabricante';
    label_fabricante.innerHTML = 'Fabricante: ';
    label_fabricante.htmlFor = 'select_fabricante';
    if (exibir) {
        select_fabricante.disabled = 'disabled';
    }
    let _fabricantes = listarFabricantes();
    let fabricantes = JSON.parse(_fabricantes);
    var id_fabricante;
    
    var _option1 = document.createElement('option');
    _option1.value = '0';
    _option1.innerHTML = 'Selecione...';
    select_fabricante.appendChild(_option1);
    for (let i = 0; i < fabricantes.length; i++) {
        var option = document.createElement('option');
        option.value = fabricantes[i].id;
        option.innerHTML = fabricantes[i].descricao;
        if (edicao) {
            if (fabricantes[i].id == jsonProduto.fabricante) {
                option.selected = 'selected';
            }
        }
        select_fabricante.appendChild(option);
    }

    if (edicao) {
        select_fabricante.value = jsonProduto.fabricante;
    }

    td10.appendChild(label_fabricante);
    td11.appendChild(select_fabricante);
    tr4.appendChild(td10);
    tr4.appendChild(td11);
    table.appendChild(tr4);

    var tr5 = document.createElement('tr');
    var select_categoria = document.createElement('select');
    var label_categoria = document.createElement('label');
    var td12 = document.createElement('td');
    var td13 = document.createElement('td');
    td13.colSpan = '4';

    select_categoria.id = 'select_categoria';
    select_categoria.name = 'select_categoria';
    select_categoria.setAttribute('onchange', 'javascript:selecionaCategoria(this);');
    label_categoria.innerHTML = 'Categoria: ';
    label_categoria.htmlFor = 'select_categoria';

    if (exibir) {
        select_categoria.disabled = 'disabled';
    }

    let _categorias = listarCategorias();
    let categorias = JSON.parse(_categorias);

    var _option2 = document.createElement('option');
    _option2.value = '0';
    _option2.innerHTML = 'Selecione...';
    select_categoria.appendChild(_option2);
    for (let j = 0; j < categorias.length; j++) {
        var option = document.createElement('option');
        option.value = categorias[j].id;
        option.innerHTML = categorias[j].descricao;
        select_categoria.appendChild(option);
    }

    td12.appendChild(label_categoria);
    td13.appendChild(select_categoria);
    tr5.appendChild(td12);
    tr5.appendChild(td13);
    table.appendChild(tr5);

    var tr6 = document.createElement('tr');
    var td14 = document.createElement('td');
    var td15 = document.createElement('td');

    var _table = document.createElement('table');
    _table.style.visibility = 'hidden';
    _table.id = 'table_categorias_cadastradas';
    var _tr = document.createElement('tr');
    var th1 = document.createElement('th');
    th1.colSpan = '2';
    th1.innerHTML = 'Categorias Cadastradas';
    th1.style.backgroundColor = '#ccccb3';
    _tr.appendChild(th1);
    _table.appendChild(_tr);
    
    if (edicao) {
        let categorias_cadastradas = jsonProduto.categorias;
        let _categorias_cadastradas = '';
        if (categorias_cadastradas.length > 0) {
            for (let k = 0; k < categorias_cadastradas.length; k++) {
                _table.style.visibility = 'visible';
                var _tr1 = document.createElement('tr');
                _tr1.id = 'tr_'+categorias_cadastradas[k];
                var _td1 = document.createElement('td');
                var _td2 = document.createElement('td');
                
                var _categoria = obterCategoria(categorias_cadastradas[k]);
                var categoria = JSON.parse(_categoria);
                _td1.innerHTML = categoria.descricao;
                if (!exibir) {
                    var icone = document.createElement('img');
                    icone.src = 'images/icon_excluir.jpeg';
                    icone.setAttribute('onclick', 'javascript:desselecionarCategoria('+categorias_cadastradas[k]+');');
                    _td2.appendChild(icone);
                }
                _tr1.appendChild(_td1);
                _tr1.appendChild(_td2);
                _table.appendChild(_tr1);

                _categorias_cadastradas = _categorias_cadastradas != '' ? _categorias_cadastradas+','+categoria.id : categoria.id;
            }
            input_hidden_categorias_selecionadas.value = _categorias_cadastradas;
        }
    }
    td15.appendChild(_table);
    tr6.appendChild(td14);
    tr6.appendChild(td15);
    table.appendChild(tr6);

    form.appendChild(table);

    let divButtons = document.createElement('div');
    divButtons.align = 'center';
    divButtons.style.display = 'block';

    if (edicao) {
        if (!exibir) {
            divButtons.appendChild(builderButton('Alterar','javascript:criarAlterarProduto('+PUT+','+jsonProduto.id+');', false));
        }
    } else {
        divButtons.appendChild(builderButton('Salvar','javascript:criarAlterarProduto('+POST+');', false));
    }

    divButtons.appendChild(builderButton('Voltar', 'javascript:navigateToProdutos();', false));

    form.appendChild(divButtons);

    return form;
}

function selecionaCategoria(input) {
    var select = input;
    var id = select.value;
    console.log(id);
    var input_hidden_categorias_selecionadas = document.getElementById('input_hidden_categorias_selecionadas');
    var categorias = input_hidden_categorias_selecionadas.value;
    
    if (id == 0) {
        return;
    }

    if (categorias != '') {
        var listCategorias = categorias.split(',');
        console.log(listCategorias);
        for (let i = 0; i < listCategorias.length; i++) {
            if (listCategorias[i] == id) {
                alert('Essa categoria já está adicionada');
                return;
            }
        }
    }
    
    var table = document.getElementById('table_categorias_cadastradas');
    table.style.visibility = 'visible';
    var tr = document.createElement('tr');
    tr.id = 'tr_'+id;
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    
    var _categoria = obterCategoria(select.value);
    var categoria = JSON.parse(_categoria);
    td1.innerHTML = categoria.descricao;
    var icone = document.createElement('img');
    icone.src = 'images/icon_excluir.jpeg';
    icone.setAttribute('onclick', 'javascript:desselecionarCategoria('+id+');');
    td2.appendChild(icone);
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);

    categorias = categorias != '' ? categorias+','+categoria.id : categoria.id;
    input_hidden_categorias_selecionadas.value = categorias;

}

function desselecionarCategoria(id) {
    var input_hidden_categorias_selecionadas = document.getElementById('input_hidden_categorias_selecionadas');
    var categorias = input_hidden_categorias_selecionadas.value;
    var categoriasFinal = '';

    if (categorias != '') {
        var listCategorias = categorias.split(',');
        console.log(listCategorias);
        for (let i = 0; i < listCategorias.length; i++) {
            if (listCategorias[i] != id) {
                categoriasFinal = categoriasFinal != '' ? categoriasFinal+','+listCategorias[i] : listCategorias[i];
            }
        }
    }

    input_hidden_categorias_selecionadas.value = categoriasFinal;

    var table = document.getElementById('table_categorias_cadastradas');
    var tr = document.getElementById('tr_'+id);
    table.removeChild(tr);

    var rows = table.getElementsByTagName('tr');
    if (rows.length == 1) {
        table.style.visibility = 'hidden';
    }

}

function excluirCategoria(id) {
    if (confirm('Você tem certeza que deseja excluir essa categoria?')) {
        deleteCategoria(id);
    }
}

function excluirFabricante(id) {
    if (confirm('Você tem certeza que deseja excluir esse fabricante?')) {
        deleteFabricante(id);
    }
}

function excluirProduto(id) {
    if (confirm('Você tem certeza que deseja excluir esse produto?')) {
        deleteProduto(id);
    }
}