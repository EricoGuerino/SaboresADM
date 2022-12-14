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
        var td6 = document.createElement('td');
        var iconeEditar = document.createElement('img');
        var iconeExibir = document.createElement('img');
        var iconeExcluir = document.createElement('img');
        var iconeImage = document.createElement('img');
        iconeImage.src = 'images/icon_image.jpg';
        iconeImage.style.width = '16px';
        iconeImage.style.height = '16px';
        iconeImage.setAttribute('onclick', 'javascript:navigateToImagemProduto('+produtos[i].id+')');
        iconeEditar.src = 'images/icon_alterar.jpeg';
        iconeEditar.setAttribute('onclick', 'javascript:navigateToProduto('+produtos[i].id+',"editar")');
        iconeExibir.src = 'images/icon_exibir.jpeg';
        iconeExibir.setAttribute('onclick', 'javascript:navigateToProduto('+produtos[i].id+',"exibir")');
        iconeExcluir.src = 'images/icon_excluir.jpeg';
        iconeExcluir.setAttribute('onclick', 'javascript:excluirProduto('+produtos[i].id+')');

        td3.appendChild(iconeImage);
        td4.appendChild(iconeExibir);
        td5.appendChild(iconeEditar);
        td6.appendChild(iconeExcluir);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        table.appendChild(tr);
    }

    return table;
}

function builderEstoque() {
    let _estoque = listarEstoque();
    let estoque = JSON.parse(_estoque);
    var table = document.createElement('table');
    table.style.width = '100%';
    for (let i = 0; i < estoque.length; i++) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.style.width = '5%';
        td1.innerHTML = ''+(estoque[i].id)+') ';
        var td2 = document.createElement('td');
        td2.innerHTML = estoque[i].produto.nome;
        var td3 = document.createElement('td');
        td3.innerHTML = estoque[i].dataAtualizacaoFmt;
        var td4 = document.createElement('td');
        var span = document.createElement('span');
        span.id = 'span_quantidade_'+estoque[i].id;
        span.innerHTML = estoque[i].quantidade;
        td4.appendChild(span);
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        var td5 = document.createElement('td');
        var iconeMinus = document.createElement('img');
        var iconePlus = document.createElement('img');
        
        iconeMinus.src = 'images/icon_minus.jpeg';
        iconeMinus.setAttribute('onclick', 'javascript:diminuirEstoque('+estoque[i].id+')');
        iconePlus.src = 'images/icon_plus.jpeg';
        iconePlus.setAttribute('onclick', 'javascript:aumentarEstoque('+estoque[i].id+')');
        
        td5.appendChild(iconeMinus);
        td6.appendChild(iconePlus);
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
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

function builderClientes() {
    let clientes = listarClientes();
    var table = document.createElement('table');
    table.style.width = '100%';

    for (let i=0; i < clientes.length; i++) {
        let cliente = clientes[i];
        let nome = '';
        let documento = '';
        let tipoCadastro = '';
        if (cliente.tipoCliente == 'FISICA') {
            nome = cliente.nome;
            tipoCadastro = 'PF';
        } else {
            nome = cliente.nomeFantasia;
            tipoCadastro = 'PJ';
        }
        documento = cliente.cpfCnpj;

        var iconeExibir = document.createElement('img');
        iconeExibir.src = 'images/icon_exibir.jpeg';
        iconeExibir.setAttribute('onclick', 'javascript:navigateToCliente('+cliente.id+')');

        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        
        td1.style.width = '5%';

        td1.innerHTML = ''+(i+1)+') ';
        td2.innerHTML = nome;
        td3.innerHTML = tipoCadastro;
        td4.innerHTML = documento;
        td5.appendChild(iconeExibir);
        
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

function builderImagens(produto) {
    let jsonImagens;
    if (produto != null && produto != '' && produto != 'undefined') {
        jsonImagens = JSON.parse(listarImagensProduto(produto));
    }

    var form = document.createElement('form');
    var divUploadExterna = document.createElement('div');
    divUploadExterna.width = '100%';
    divUploadExterna.style.display = 'block';
    var divUploadInterna = document.createElement('div');
    divUploadInterna.width = '200px';
    var divButtonUpload = document.createElement('div');
    var input_upload_arquivos = document.createElement('input');
    input_upload_arquivos.id = 'input_upload_arquivos';
    input_upload_arquivos.type = 'file';
    input_upload_arquivos.accept = 'image/*';
    //input_upload_arquivos.value = 'Selecione...';
    var buttonUpload = document.createElement('input');
    buttonUpload.id = 'button_upload';
    buttonUpload.type = 'button';
    buttonUpload.setAttribute('onclick','javascritp:uploadFoto('+produto+');');
    buttonUpload.value = 'Subir Arquivo';
    divUploadInterna.appendChild(input_upload_arquivos);
    divButtonUpload.appendChild(buttonUpload);
    divUploadExterna.appendChild(divUploadInterna);
    divUploadExterna.appendChild(divButtonUpload);
    form.appendChild(divUploadExterna);
    var hr = document.createElement('hr');
    var br = document.createElement('br');
    form.appendChild(hr);
    form.appendChild(br);

    var table = document.createElement('table');
    table.id = 'table_imagens_produto';
    table.style.width = '100%';

    if (jsonImagens.length > 0) {
        for (let i = 0; i < jsonImagens.length; i++) {
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            td1.style.border = 'solid 1px black';
            td2.style.border = 'solid 1px black';
            td3.style.border = 'solid 1px black';
            td4.style.border = 'solid 1px black';
            
            td1.style.textAlign = 'center';
            td1.style.paddingTop = '5px';
            td2.style.paddingLeft = '10px';
            td3.style.textAlign = 'center';
            td4.style.textAlign = 'center';

            var imgProduto = document.createElement('img');
            imgProduto.src = 'data:image/'+jsonImagens[i].extensao+';base64,'+jsonImagens[i].dadosBase64;
            imgProduto.style.width = '64px';
            imgProduto.style.height = '64px';

            var checkBoxImagemPrincipal = document.createElement('input');
            checkBoxImagemPrincipal.type = 'checkbox';
            checkBoxImagemPrincipal.setAttribute('onclick','javascript:alterarImagemPrincipal('+jsonImagens[i].id+','+jsonImagens[i].produto.id+');');
            if (jsonImagens[i].isImagemPrincipal) {
                checkBoxImagemPrincipal.checked = 'checked'; 
            }

            var iconeExcluir = document.createElement('img');
            iconeExcluir.src = 'images/icon_excluir.jpeg';
            iconeExcluir.setAttribute('onclick', 'javascript:excluirImagem('+jsonImagens[i].id+','+jsonImagens[i].produto.id+');')
            
            td1.appendChild(imgProduto);
            td2.innerHTML = jsonImagens[i].arquivo;
            td3.appendChild(checkBoxImagemPrincipal);
            td4.appendChild(iconeExcluir);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            table.appendChild(tr);

        }

        form.appendChild(table);
    }
    var divVoltar = document.createElement('div');
    divVoltar.align = 'center';
    divVoltar.appendChild(document.createElement('br'));
    divVoltar.appendChild(builderButton('Voltar', 'javascript:navigateToProdutos();'));
    form.appendChild(divVoltar);
    
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

    var table_externa = document.createElement('table');
    table_externa.style.width = '100%';
    var tr_table_externa = document.createElement('tr');
    var td1_table_externa = document.createElement('td');
    var td2_table_externa = document.createElement('td');
    td1_table_externa.style.width = '75%';
    td2_table_externa.style.width = '25%';

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
    input_produto_nome.style.width = '95%';
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
    input_produto_descricao.style.width = '95%';
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
    var td5_1 = document.createElement('td');
    var td6_1 = document.createElement('td');
    var td7_1 = document.createElement('td');
    var td8_1 = document.createElement('td');
    var td9_1 = document.createElement('td');
    
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

    td5_1.appendChild(label_produto_preco);
    td6_1.appendChild(input_produto_preco);
    
    tr3.appendChild(td5_1);
    tr3.appendChild(td6_1);
    tr3.appendChild(td7_1);
    tr3.appendChild(td8_1);
    tr3.appendChild(td9_1);
    table.appendChild(tr3);
    
    var tr4 = document.createElement('tr');
    var td5_2 = document.createElement('td');
    var td6_2 = document.createElement('td');
    var td7_2 = document.createElement('td');
    var td8_2 = document.createElement('td');
    var td9_2 = document.createElement('td');
    
    td5_2.appendChild(label_produto_peso);
    td6_2.appendChild(input_produto_peso);
    
    tr4.appendChild(td5_2);
    tr4.appendChild(td6_2);
    tr4.appendChild(td7_2);
    tr4.appendChild(td8_2);
    tr4.appendChild(td9_2);
    table.appendChild(tr4);

    var tr5 = document.createElement('tr');
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
    tr5.appendChild(td10);
    tr5.appendChild(td11);
    table.appendChild(tr5);

    var tr6 = document.createElement('tr');
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
    tr6.appendChild(td12);
    tr6.appendChild(td13);
    table.appendChild(tr6);

    var tr7 = document.createElement('tr');
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
    tr7.appendChild(td14);
    tr7.appendChild(td15);
    table.appendChild(tr7);
    td1_table_externa.appendChild(table);

    var divImagem = document.createElement('div');
    divImagem.align = 'center';

    var _imagemProduto = edicao ? obterImagemPorProduto(jsonProduto.id) : '';
    var imgProduto = document.createElement('img');
    imgProduto.style.width = '90%';
    if (edicao) {
        imgProduto.setAttribute('onclick', 'javascript:navigateToImagemProduto('+jsonProduto.id+')');
    }
    
    if (_imagemProduto != null && _imagemProduto != 'undefined' && _imagemProduto != ''
    && _imagemProduto.id != 'undefined' && _imagemProduto.id != '') {
        var imagemProduto = JSON.parse(_imagemProduto);
        console.log(imagemProduto);
        imgProduto.src = 'data:image/'+imagemProduto.extensao+';base64,'+imagemProduto.dadosBase64;
    } else {
        imgProduto.src = 'images/imagem_nao_disponivel.jpeg';
    }

    divImagem.appendChild(imgProduto);
    td2_table_externa.appendChild(divImagem);
    tr_table_externa.appendChild(td1_table_externa);
    tr_table_externa.appendChild(td2_table_externa);
    table_externa.appendChild(tr_table_externa);

    form.appendChild(table_externa);

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

function builderCliente(idCliente) {
    let cliente = obterCliente(idCliente);
    let table1 = document.createElement('table');
    let tr1 = document.createElement('tr');
    let _tr1 = document.createElement('tr');
    let tr2 = document.createElement('tr');
    let _tr2 = document.createElement('tr');
    
    let td1 = document.createElement('td');
    let _td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let _td2 = document.createElement('td');

    let table0 = document.createElement('table');
    let tr3 = document.createElement('tr');
    let _tr3 = document.createElement('tr');
    
    let td3 = document.createElement('td');
    let _td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let _td4 = document.createElement('td');

    _td3.innerHTML = "<span style='font-weight:bolder;'>Tipo Pessoa: </span>";
    td3.innerHTML = "<input type='text' disabled style='width:90%; font-size: larger;' value='"+(cliente.tipoCliente == 'FISICA' ? 'Física' : 'Jurídica')+"'/>";
    _td4.innerHTML = "<span style='font-weight:bolder;'>Data/Hora Cadastro: </span>";
    td4.innerHTML = "<input type='text' disabled style='width:90%; font-size: larger;' value='"+cliente.dtHrCadastroFmt+"'/>";
    _tr3.appendChild(_td3);
    _tr3.appendChild(_td4);
    tr3.appendChild(td3);
    tr3.appendChild(td4);
    table0.appendChild(_tr3);
    table0.appendChild(tr3);

    let table2 = document.createElement('table');
    let tr5 = document.createElement('tr');
    let _tr5 = document.createElement('tr');
    let tr6 = document.createElement('tr');
    let _tr6 = document.createElement('tr');
    
    let td5 = document.createElement('td');
    let _td5 = document.createElement('td');
    let td6 = document.createElement('td');
    let _td6 = document.createElement('td');
    
    if (cliente.tipoCliente == 'FISICA') {
        //seta nome
        _td1.innerHTML = "<span style='font-weight:bolder;'>Nome: </span>";
        td1.innerHTML = "<input type='text' disabled style='width:90%; font-size: larger;' value='"+cliente.nome+"'/>";
        _tr1.appendChild(_td1);
        tr1.appendChild(td1);
        table1.appendChild(_tr1);
        table1.appendChild(tr1);
        //seta cpf
        _td5.innerHTML = "<span style='font-weight:bolder;'>CPF: </span>";
        td5.innerHTML = "<input type='text' disabled style='width:90%; font-size: larger;' value='"+cliente.cpfFmt+"'/>";
        _tr5.appendChild(_td5);
        tr5.appendChild(td5);
        table2.appendChild(_tr5);
        table2.appendChild(tr5);
    } else {
        //seta nome fantasia e razao social
        _td1.innerHTML = "<span style='font-weight:bolder;'>Nome Fantasia: </span>";
        td1.innerHTML = "<input type='text' disabled style='width:90%; font-size: larger;' value='"+cliente.nomeFantasia+"'/>";
        _td2.innerHTML = "<span style='font-weight:bolder;'>Razão Social: </span>";
        td2.innerHTML = "<input type='text' disabled style='width:90%; font-size: larger;' value='"+cliente.razaoSocial+"'/>";
        _tr1.appendChild(_td1);
        tr1.appendChild(td1);
        _tr2.appendChild(_td2);
        tr2.appendChild(td2);
        table1.appendChild(_tr1);
        table1.appendChild(tr1);
        table1.appendChild(_tr2);
        table1.appendChild(tr2);
        //seta cnpj
        _td5.innerHTML = "<span style='font-weight:bolder;'>CNPJ: </span>";
        td5.innerHTML = "<input type='text' disabled style='width:90%; font-size: larger;' value='"+cliente.cnpjFmt+"'/>";
        _td6.innerHTML = "<span style='font-weight:bolder;'>Inscrição Estadual: </span>";
        td6.innerHTML = "<input type='text' disabled style='width:90%; font-size: larger;' value='"+cliente.ie+"'/>";
        _tr5.appendChild(_td5);
        tr5.appendChild(tr5);
        _tr6.appendChild(_td6);
        tr6.appendChild(tr6);
        table2.appendChild(_tr5);
        table2.appendChild(tr5);
        table2.appendChild(_tr6);
        table2.appendChild(tr6);
    }

    let table3 = document.createElement('table');
    let tr7 = document.createElement('tr');
    let _tr7 = document.createElement('tr');
    let tr8 = document.createElement('tr');
    let _tr8 = document.createElement('tr');
    let tr9 = document.createElement('tr');
    let _tr9 = document.createElement('tr');
    let tr10 = document.createElement('tr');
    let _tr10 = document.createElement('tr');

    let tr7col1 = document.createElement('td');
    let _tr7col1 = document.createElement('td');
    let tr8col1 = document.createElement('td');
    let _tr8col1 = document.createElement('td');
    let tr8col2 = document.createElement('td');
    let _tr8col2 = document.createElement('td');
    let tr8col3 = document.createElement('td');
    let _tr8col3 = document.createElement('td');
    let tr9col1 = document.createElement('td');
    let _tr9col1 = document.createElement('td');
    let tr9col2 = document.createElement('td');
    let _tr9col2 = document.createElement('td');
    let tr10col1 = document.createElement('td');
    let _tr10col1 = document.createElement('td');
    let tr10col2 = document.createElement('td');
    let _tr10col2 = document.createElement('td');

    let cidade = obterCidade(cliente.endereco.cidade);
    let estado = obterEstado(cliente.endereco.uf);

    _tr7col1.innerHTML = "<span style='font-weight:bolder;'>CEP: </span>";
    tr7col1.innerHTML = "<input type='text' disabled style='width:90%; font-size: larger;' value='"+cliente.endereco.cep;
    _tr8col1.innerHTML = "<span style='font-weight:bolder;'>Tipo Logradouro: </span>";
    tr8col1.innerHTML = "<input type='text' disabled style='width:90%; font-size: larger;' value='"+cliente.endereco.tipoLogradouroFmt+"'/>";
    _tr8col2.innerHTML = "<span style='font-weight:bolder;'>Logradouro: </span>";
    tr8col2.innerHTML = "<input type='text' disabled style='width:90%; font-size: larger;' value='"+cliente.endereco.logradouro+"'/>";
    _tr8col3.innerHTML = "<span style='font-weight:bolder;'>Número: </span>";
    tr8col3.innerHTML = "<input type='text' disabled style='width:90%; font-size: larger;' value='"+cliente.endereco.numLogradouro+"'/>";
    _tr9col1.innerHTML = "<span style='font-weight:bolder;'>Complemento: </span>";
    tr9col1.innerHTML = "<input type='text' disabled style='width:90%; font-size: larger;' value='"+cliente.endereco.complemento+"'/>";
    _tr9col2.innerHTML = "<span style='font-weight:bolder;'>Bairro: </span>";
    tr9col2.innerHTML = "<input type='text' disabled style='width:90%; font-size: larger;' value='"+cliente.endereco.bairro+"'/>";
    _tr10col1.innerHTML = "<span style='font-weight:bolder;'>Cidade: </span>";
    tr10col1.innerHTML = "<input type='text' disabled style='width:90%; font-size: larger;' value='"+cidade.nome+"'/>";
    _tr10col2.innerHTML = "<span style='font-weight:bolder;'>Estado: </span>";
    tr10col2.innerHTML = "<input type='text' disabled style='width:90%; font-size: larger;' value='"+estado.nome+"'/>";

    _tr7.appendChild(_tr7col1);
    tr7.appendChild(tr7col1);
    _tr8.appendChild(_tr8col1);
    tr8.appendChild(tr8col1);
    _tr8.appendChild(_tr8col2);
    tr8.appendChild(tr8col2);
    _tr8.appendChild(_tr8col3);
    tr8.appendChild(tr8col3);
    _tr9.appendChild(_tr9col1);
    tr9.appendChild(tr9col1);
    _tr9.appendChild(_tr9col2);
    tr9.appendChild(tr9col2);
    _tr10.appendChild(_tr10col1);
    tr10.appendChild(tr10col1);
    _tr10.appendChild(_tr10col2);
    tr10.appendChild(tr10col2);

    table3.appendChild(_tr7);
    table3.appendChild(tr7);
    table3.appendChild(_tr8);
    table3.appendChild(tr8);
    table3.appendChild(_tr9);
    table3.appendChild(tr9);
    table3.appendChild(_tr10);
    table3.appendChild(tr10);

    let table4 = document.createElement('table');
    let tr11 = document.createElement('tr');
    let _tr11 = document.createElement('tr');
    let tr11col1 = document.createElement('td');
    let _tr11col1 = document.createElement('td');
    let tr11col2 = document.createElement('td');
    let _tr11col2 = document.createElement('td');

    _tr11col1.innerHTML = "<span style='font-weight:bolder;'>E-mail: </span>";
    tr11col1.innerHTML = "<input type='text' disabled style='width:90%; font-size: larger;' value='"+cliente.email+"'/>";
    
    if (cliente.tipoCliente == 'JURIDICA') {
        _tr11col1.innerHTML = "<span style='font-weight:bolder;'>Site: </span>";
        tr11col1.innerHTML = "<input type='text' disabled style='width:90%; font-size: larger;' value='"+cliente.site+"'/>";
    }
    _tr11.appendChild(_tr11col1);
    _tr11.appendChild(_tr11col2);
    tr11.appendChild(tr11col1);
    tr11.appendChild(tr11col2);
    table4.appendChild(_tr11);
    table4.appendChild(tr11);

    let contato = cliente.contato;
    for (let i=0; i < contato.length; i++) {
        if (i == 0) {
            let thTel = document.createElement('tr');
            let thTelcol1 = document.createElement('td');
            let thTelcol2 = document.createElement('td');
            let thTelcol3 = document.createElement('td');

            thTelcol1.innerHTML = "<span style='font-weight:bolder;'>Tipo: </span>";
            thTelcol2.innerHTML = "<span style='font-weight:bolder;'>Telefone: </span>";
            thTelcol3.innerHTML = "<span style='font-weight:bolder;'>É Whatsapp: </span>";

            thTel.appendChild(thTelcol1);
            thTel.appendChild(thTelcol2);
            thTel.appendChild(thTelcol3);

            table4.appendChild(thTel);
        }

        let trTel = document.createElement('tr');
        let trTelcol1 = document.createElement('td');
        let trTelcol2 = document.createElement('td');
        let trTelcol3 = document.createElement('td');

        trTelcol1.innerHTML = "<input type='text' disabled style='width:90%; font-size: larger;' value='"+contato[i].tipoTelefoneFmt+"'/>";
        trTelcol2.innerHTML = "<input type='text' disabled style='width:90%; font-size: larger;' value='"+contato[i].telefoneFmt+"'/>";
        trTelcol3.innerHTML = "<input type='text' disabled style='width:90%; font-size: larger;' value='"+(contato[i].isWhatsapp ? 'Sim' : 'Não')+"'/>";

        trTel.appendChild(trTelcol1);
        trTel.appendChild(trTelcol2);
        trTel.appendChild(trTelcol3);

        table4.appendChild(trTel);
    }

    let div = document.createElement('div');
    let divButtons = document.createElement('div');
    div.style.width = '100%';
    div.style.alignContent = 'center';
    divButtons.align = 'center';
    table0.style.width = '100%';
    table1.style.width = '100%';
    table2.style.width = '100%';
    table3.style.width = '100%';
    table4.style.width = '100%';
    let h3Endereco = document.createElement('h3');
    let h3Contato = document.createElement('h3');
    h3Endereco.innerHTML = 'Endereço';
    h3Contato.innerHTML = 'Contato';
    
    div.appendChild(table0);
    div.appendChild(table1);
    div.appendChild(table2);
    div.appendChild(document.createElement('hr'));
    div.appendChild(h3Endereco);
    div.appendChild(table3);
    div.appendChild(document.createElement('hr'));
    div.appendChild(h3Contato);
    div.appendChild(table4);
    div.appendChild(document.createElement('hr'));

    divButtons.appendChild(builderButton('Voltar', 'javascript:navigateToClientes();'));
    div.appendChild(divButtons);

    return div;
}

function builderCompras() {
    let div = document.createElement('div');
    let abrirSpan = "<span style='font-weight:bold; font-size: larger;'>";
    let fecharSpan = "</span>";
    let compras = listarCompras();

    for (let i=0; i < compras.length; i++) {
        let table = document.createElement('table');
        let corLinha = (compras[i].entregue ? '#3366ff' : '#ff3333');
        table.cellSpacing = '0';
        table.style.width = '100%';
        table.style.border = '2px solid black';
        table.style.borderRadius = '10px';

        let tr0 = document.createElement('tr');
        let tdExpandir = document.createElement('td');
        let tdIndex = document.createElement('td');
        let tdCliente = document.createElement('td');
        let tdQtds = document.createElement('td');
        let tdValorVenda = document.createElement('td');
        let tdDtHrVenda = document.createElement('td');
        let tdBotaoEntregue = document.createElement('td');
        let tdTirarPedido = document.createElement('td');

        tr0.style.backgroundColor = corLinha;
        tr0.style.borderTopLeftRadius = '10px';
        tr0.style.borderTopRightRadius = '10px';
        tdExpandir.style.borderTopLeftRadius = '10px';
        tdExpandir.style.borderBottomLeftRadius = '10px';
        tdTirarPedido.style.borderTopRightRadius = '10px';
        tdTirarPedido.style.borderBottomRightRadius = '10px';
        tdExpandir.style.width = '3%';
        tdIndex.style.width = '5%';
        tdCliente.style.width = '35%';
        tdQtds.style.width = '5%';
        tdValorVenda.style.width = '10%';
        tdDtHrVenda.style.width = '18%';
        tdBotaoEntregue.style.width = '14%';
        tdTirarPedido.style.width = '10%';

        tdExpandir.style.textAlign = 'center';
        tdDtHrVenda.style.textAlign = 'center';
        tdIndex.style.paddingLeft = '5px';
        tdQtds.style.paddingLeft = '5px';
        tdCliente.style.paddingLeft = '5px';
        tdValorVenda.style.paddingLeft = '5px';

        let cliente = obterCliente(compras[i].idCliente);
        let itens = compras[i].itensCompra;
        let total = 0;
        let qtds = 0;
        for (let k=0; k < itens.length; k++) {
            qtds += itens[k].quantidade;
            total += itens[k].quantidade * itens[k].preco;
        }
        
        let iconeMais = document.createElement('img');
        iconeMais.id = 'icone_'+compras[i].id;
        iconeMais.src = 'images/iconeMais.jpeg';
        iconeMais.style.height = '15px';
        iconeMais.style.width = '15px';
        iconeMais.setAttribute('onclick', 'javascript:expandirRetrairTabela('+compras[i].id+');');
        iconeMais.style.cursor = 'pointer';

        let buttonEntregue = document.createElement('button');
        buttonEntregue.setAttribute('onclick', 'javascript:alterarEntregue('+compras[i].id+');');
        buttonEntregue.innerHTML = compras[i].entregue ? 'Marcar Não Entregue' : 'Marcar Entregue';
        buttonEntregue.style.backgroundColor = (compras[i].entregue ? '#ff3333' : '#3366ff');
        buttonEntregue.style.borderRadius = '10px';
        buttonEntregue.style.fontSize = 'larger';
        buttonEntregue.style.cursor = 'pointer';

        let buttonTirarPedido = document.createElement('button');
        buttonTirarPedido.setAttribute('onclick', 'javascript:tirarPedido('+compras[i].id+');');
        buttonTirarPedido.innerHTML = 'Tirar Pedido';
        buttonTirarPedido.style.backgroundColor = 'grey';
        buttonTirarPedido.style.borderRadius = '10px';
        buttonTirarPedido.style.fontSize = 'larger';
        buttonTirarPedido.style.cursor = 'pointer';

        tdExpandir.appendChild(iconeMais);
        tdIndex.innerHTML = abrirSpan+ compras[i].id + fecharSpan;
        tdQtds.innerHTML = abrirSpan+ qtds + fecharSpan;
        tdCliente.innerHTML = abrirSpan+ (cliente.tipoCliente == 'FISICA' ? cliente.nome : cliente.nomeFantasia) + fecharSpan;
        tdValorVenda.innerHTML = abrirSpan+ 'R$'+total.toLocaleString('BR') + fecharSpan;
        tdDtHrVenda.innerHTML =  abrirSpan+ (compras[i].dataFmt+' '+compras[i].horaFmt) +fecharSpan;
        tdBotaoEntregue.appendChild(buttonEntregue);
        tdTirarPedido.appendChild(buttonTirarPedido);

        tdIndex.title = 'ID da venda';
        tdQtds.title = 'Total de itens da venda';
        tdCliente.title = 'Nome do Cliente';
        tdValorVenda.title = 'Valor total da venda';
        tdDtHrVenda.title = 'Data e Hora da compra';
        tdBotaoEntregue.appendChild(buttonEntregue);
        tdTirarPedido.appendChild(buttonTirarPedido);

        tr0.appendChild(tdExpandir);
        tr0.appendChild(tdIndex);
        tr0.appendChild(tdCliente);
        tr0.appendChild(tdQtds);
        tr0.appendChild(tdValorVenda);
        tr0.appendChild(tdDtHrVenda);
        tr0.appendChild(tdBotaoEntregue);
        tr0.appendChild(tdTirarPedido);

        table.appendChild(tr0);

        for (let j=0; j < itens.length; j++) {
            let tr1 = document.createElement('tr');
            let _produto = obterProduto(itens[j].idProduto);
            let produto = JSON.parse(_produto);

            let tdVazia1 = document.createElement('td');
            let tdVazia2 = document.createElement('td');
            let tdProduto = document.createElement('td');
            let tdQuantidade = document.createElement('td');
            let tdPreco = document.createElement('td');
            let tdVazia3 = document.createElement('td');
            let tdVazia4 = document.createElement('td');
            let tdVazia5 = document.createElement('td');

            if (j == 0) {
                tdVazia1.style.borderTop = '1px solid black';
                tdVazia2.style.borderTop = '1px solid black';
                tdProduto.style.borderTop = '1px solid black';
                tdQuantidade.style.borderTop = '1px solid black';
                tdPreco.style.borderTop = '1px solid black';
                tdVazia3.style.borderTop = '1px solid black';
                tdVazia4.style.borderTop = '1px solid black';
                tdVazia5.style.borderTop = '1px solid black';
            }

            tr1.setAttribute('name', 'linha_'+compras[i].id);
            tr1.style.display = 'none';

            tdVazia1.style.width = '3%';
            tdVazia2.style.width = '5%';
            tdProduto.style.width = '35%';
            tdQuantidade.style.width = '5%';
            tdPreco.style.width = '10%';
            tdVazia3.style.width = '18%';
            tdVazia4.style.width = '14%';
            tdVazia5.style.width = '10%';

            tdProduto.style.paddingLeft = '5px';
            tdQuantidade.style.paddingLeft = '5px';
            tdPreco.style.paddingLeft = '5px';

            //tdProduto.colSpan = '2';
            tdProduto.innerHTML = abrirSpan+ (produto.nome) +fecharSpan;
            tdQuantidade.innerHTML = abrirSpan+ itens[j].quantidade +fecharSpan;
            tdPreco.innerHTML = abrirSpan+ 'R$'+itens[j].preco.toLocaleString('BR') +fecharSpan;

            tr1.appendChild(tdVazia1);
            tr1.appendChild(tdVazia2);
            tr1.appendChild(tdProduto);
            tr1.appendChild(tdQuantidade);
            tr1.appendChild(tdPreco);
            tr1.appendChild(tdVazia3);
            tr1.appendChild(tdVazia4);
            tr1.appendChild(tdVazia5);

            table.appendChild(tr1);
        }

        div.appendChild(table);
    }

    return div;
}

function builderCatalogo() {
    let div = document.createElement('div');
    let divLabelCategorias = document.createElement('div');
    let divLabelFabricantes = document.createElement('div');
    let divLabelPrecoMinimo = document.createElement('div');
    let divLabelPrecoMaximo = document.createElement('div');
    let divLabelProdutos = document.createElement('div');

    let divCategorias = document.createElement('div');
    let divFabricantes = document.createElement('div');
    let divPrecoMaximo = document.createElement('div');
    let divPrecoMinimo = document.createElement('div');
    let divProdutos = document.createElement('div');

    divLabelCategorias.innerHTML = builderLabelSpanPadrao('Categorias');
    divLabelFabricantes.innerHTML = builderLabelSpanPadrao('Fabricantes');
    divLabelPrecoMinimo.innerHTML = builderLabelSpanPadrao('Preço Mínimo');
    divLabelPrecoMaximo.innerHTML = builderLabelSpanPadrao('Preço Máximo');
    divLabelProdutos.innerHTML = builderLabelSpanPadrao('Produtos Filtrados');

    let _categorias = listarCategorias();
    let _fabricantes = listarFabricantes();
    let categorias = JSON.parse(_categorias);
    let fabricantes = JSON.parse(_fabricantes);
    let _produtos = listarProdutos();
    let produtos = JSON.parse(_produtos);

    divCategorias.style.display = 'inline';
    divFabricantes.style.display = 'inline';

    for (let i=0; i < categorias.length; i++) {
        let checkbox = document.createElement('input');
        let span = document.createElement('span');
        span.innerHTML = categorias[i].descricao;
        checkbox.type = 'checkbox';
        checkbox.id = 'cat_check_'+categorias[i].id;
        checkbox.name = 'cat_check';
        checkbox.value = categorias[i].id;
        checkbox.style.height = '18px';
        checkbox.style.width = '18px';
        divCategorias.appendChild(checkbox);
        divCategorias.appendChild(span);
    }

    for (let j=0; j < fabricantes.length; j++) {
        let checkbox = document.createElement('input');
        let span = document.createElement('span');
        span.innerHTML = fabricantes[j].descricao;
        checkbox.type = 'checkbox';
        checkbox.id = 'fab_check_'+fabricantes[j].id;
        checkbox.name = 'fab_check';
        checkbox.value = fabricantes[j].id;
        checkbox.style.height = '18px';
        checkbox.style.width = '18px';
        divFabricantes.appendChild(checkbox);
        divFabricantes.appendChild(span);
    }

    for (let k=0; k < produtos.length; k++) {
        let checkbox = document.createElement('input');
        let span = document.createElement('span');
        span.innerHTML = produtos[k].nome;
        checkbox.type = 'checkbox';
        checkbox.id = 'prod_check_'+produtos[k].id;
        checkbox.name = 'prod_check';
        checkbox.value = produtos[k].id;
        checkbox.style.height = '18px';
        checkbox.style.width = '18px';
        divProdutos.appendChild(checkbox);
        divProdutos.appendChild(span);
    }

    let valoresMinMax = carregarValoresMinMax();
    let inputMin = document.createElement('input');
    inputMin.id = 'input_preco_minimo';
    inputMin.type = 'number';
    inputMin.min = valoresMinMax.minPreco;
    inputMin.max = valoresMinMax.maxPreco;
    let inputMax = document.createElement('input');
    inputMax.id = 'input_preco_maximo';
    inputMax.type = 'number';
    inputMax.min = valoresMinMax.minPreco;
    inputMax.max = valoresMinMax.maxPreco;

    divPrecoMinimo.appendChild(inputMin);
    divPrecoMaximo.appendChild(inputMax);

    div.appendChild(divLabelCategorias);
    div.appendChild(divCategorias);
    div.appendChild(divLabelFabricantes);
    div.appendChild(divFabricantes);
    div.appendChild(divLabelPrecoMinimo);
    div.appendChild(inputMin);
    div.appendChild(divLabelPrecoMaximo);
    div.appendChild(inputMax);
    div.appendChild(divLabelProdutos);
    div.appendChild(divProdutos);

    let divButtons = document.createElement('div');
    divButtons.align = 'center';
    divButtons.appendChild(builderButton('Gerar Catálogo', 'javascript:gerarCatalogo();'))
    div.appendChild(divButtons);

    return div;
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