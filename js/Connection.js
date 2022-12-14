const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const DELETE = 'DELETE';
const producao = false;
const BASE_URL_FILTROS = producao ? 'http://www.erico1916.c41.integrator.host:10500/' : 'http://localhost:8080/';
const BASE_URL_PRODUTOS = producao ? 'http://www.erico1916.c41.integrator.host:10499/' : 'http://localhost:8180/';
const BASE_URL_CLIENTES = producao ? 'http://www.erico1916.c41.integrator.host:10500/' : 'http://localhost:8280/';
const BASE_URL_COMPRAS = producao ? 'http://www.erico1916.c41.integrator.host:10500/' : 'http://localhost:8380/';
const BASE_URL_SERVICOS = producao ? '' : 'http://localhost:8580/';

function wsutils(method, url, body) {
    const conn = new XMLHttpRequest();
    conn.open(POST, BASE_URL_SERVICOS+"servicos", false);
    conn.setRequestHeader('content-type','application/json');
    let _body = '';
    if (body != null && body != '' && body != 'undefined') {
        _body = ', "body":['+body+']';
    }
    let jsonTxt = '{'+'"method":"'+method+'", "url":"'+url+'"'+_body+'}';
    console.log(jsonTxt);
    let jsonObj = JSON.parse(jsonTxt);
    conn.send(JSON.stringify(jsonObj));
    return conn.responseText;
}

function listarProdutos() {
    //const conn = new XMLHttpRequest();
    //conn.open(GET, BASE_URL_PRODUTOS+"produtos", false);
    //conn.send();
    //let resposta = conn.responseText
    let resposta = wsutils(GET,BASE_URL_PRODUTOS+"produtos",'');
    console.log(resposta);
    
    return resposta;
}

function listarCategorias() {
    //const conn = new XMLHttpRequest();
    //conn.open(GET, BASE_URL_FILTROS+"categorias", false);
    //conn.send();
    //let resposta = conn.responseText
    let resposta = wsutils(GET,BASE_URL_FILTROS+"categorias",'');
    console.log(resposta);
    
    return resposta;
}

function listarFabricantes() {
    //const conn = new XMLHttpRequest();
    //conn.open(GET, BASE_URL_FILTROS+"fabricantes", false);
    //conn.send();
    //let resposta = conn.responseText
    let resposta = wsutils(GET,BASE_URL_FILTROS+"fabricantes",'');
    console.log(resposta);
    
    return resposta;
}

function listarEstoque() {
    //const conn = new XMLHttpRequest();
    //conn.open(GET, BASE_URL_PRODUTOS+"estoque/controle", false);
    //conn.send();
    //let resposta = conn.responseText
    let resposta = wsutils(GET,BASE_URL_PRODUTOS+"estoque/controle",'');
    console.log(resposta);
    
    return resposta;
}

function listarClientes() {
    //const conn = new XMLHttpRequest();
    //conn.open(GET, BASE_URL_CLIENTES+"clientes", false);
    //conn.send();
    //let resposta = conn.responseText
    let resposta = wsutils(GET,BASE_URL_CLIENTES+"clientes",'');
    console.log(resposta);
    
    return JSON.parse(resposta);
}

function listarCompras() {
    //const conn = new XMLHttpRequest();
    //conn.open(GET, BASE_URL_COMPRAS+"compras", false);
    //conn.send();
    //let resposta = conn.responseText
    let resposta = wsutils(GET,BASE_URL_COMPRAS+"compras",'');
    console.log(resposta);
    
    return JSON.parse(resposta);
}

function obterProduto(id) {
    //const conn = new XMLHttpRequest();
    //conn.open(GET, BASE_URL_PRODUTOS+"produtos/"+id, false);
    //conn.send();
    //let resposta = conn.responseText
    let resposta = wsutils(GET,BASE_URL_PRODUTOS+"produtos/"+id,'');
    console.log(resposta);
    
    return resposta;
}

function obterFabricante(id) {
    //const conn = new XMLHttpRequest();
    //conn.open(GET, BASE_URL_FILTROS+"fabricantes/"+id, false);
    //conn.send();
    //let resposta = conn.responseText
    let resposta = wsutils(GET,BASE_URL_FILTROS+"fabricantes/"+id,'');
    console.log(resposta);
    
    return resposta;
}

function obterCategoria(id) {
    //const conn = new XMLHttpRequest();
    //conn.open(GET, BASE_URL_FILTROS+"categorias/"+id, false);
    //conn.send();
    //let resposta = conn.responseText
    let resposta = wsutils(GET,BASE_URL_FILTROS+"categorias/"+id,'');
    console.log(resposta);
    
    return resposta;
}

function obterCliente(id) {
    //const conn = new XMLHttpRequest();
    //conn.open(GET, BASE_URL_CLIENTES+"clientes/"+id, false);
    //conn.send();
    //let resposta = conn.responseText
    let resposta = wsutils(GET,BASE_URL_CLIENTES+"clientes/"+id,'');
    console.log(resposta);
    
    return JSON.parse(resposta);
}

function obterCidade(id) {
    //const conn = new XMLHttpRequest();
    //conn.open(GET, BASE_URL_CLIENTES+"clientes/endereco/cidade/"+id, false);
    //conn.send();
    //let resposta = conn.responseText
    let resposta = wsutils(GET,BASE_URL_CLIENTES+"clientes/endereco/cidade/"+id,'');
    console.log(resposta);
    
    return JSON.parse(resposta);
}

function obterEstado(id) {
    //const conn = new XMLHttpRequest();
    //conn.open(GET, BASE_URL_CLIENTES+"clientes/endereco/estado/"+id, false);
    //conn.send();
    //let resposta = conn.responseText
    let resposta = wsutils(GET,BASE_URL_CLIENTES+"clientes/endereco/estado/"+id,'');
    console.log(resposta);
    
    return JSON.parse(resposta);
}

function obterHttpMethod(httpMethod) {
    if (httpMethod == 'GET') {
        return GET;
    } else if (httpMethod == 'POST') {
        return POST;
    } else if (httpMethod == 'PUT') {
        return PUT;
    } else if (httpMethod == 'DELETE') {
        return DELETE;
    } else {
        return '';
    }
}

function prepararJsonCategoria() {
    var input_categoria_id = document.getElementById('input_categoria_id');
    var input_categoria = document.getElementById('input_categoria');
    var _id = input_categoria_id.value;
    var id = _id != '' && _id != 'undefined' && _id != 'null' && _id != null ? _id : null;
    var descricao = input_categoria.value;
    var jsonObj = JSON.parse('{"id":"'+id+'","descricao":"'+descricao+'"}'); 
    var jsonTxt = JSON.stringify(jsonObj);
    return jsonTxt;
}

function criarAlterarCategoria(httpMethod, id) {
    const conn = new XMLHttpRequest();
    let path = BASE_URL_FILTROS+"categorias";
    if (httpMethod == PUT) {
        path = path + '/'+id;
    }
    conn.open(obterHttpMethod(httpMethod), path, false);
    conn.setRequestHeader('content-type','application/json')
    conn.send(prepararJsonCategoria());
    let resposta = conn.responseText
    //let resposta = wsutils(obterHttpMethod(httpMethod),path,prepararJsonCategoria());

    console.log(resposta);

    return navigateToCategorias();
}

function prepararJsonFabricante() {
    var input_fabricante_id = document.getElementById('input_fabricante_id');
    var input_fabricante = document.getElementById('input_fabricante');
    var _id = input_fabricante_id.value;
    var id = _id != '' && _id != 'undefined' && _id != 'null' && _id != null ? _id : null;
    var descricao = input_fabricante.value;
    var jsonObj = JSON.parse('{"id":"'+id+'","descricao":"'+descricao+'"}'); 
    var jsonTxt = JSON.stringify(jsonObj);
    return jsonTxt;
}

function criarAlterarFabricante(httpMethod,id) {

    const conn = new XMLHttpRequest();
    let path = BASE_URL_FILTROS+"fabricantes";
    if (httpMethod == PUT) {
        path = path + '/'+id;
    }
    conn.open(obterHttpMethod(httpMethod), path, false);
    conn.setRequestHeader('content-type','application/json')
    
    conn.send(prepararJsonFabricante());

    let resposta = conn.responseText
    console.log(resposta);

    return navigateToFabricantes();
}

function prepararJsonProduto() {
    var input_produto_id = document.getElementById('input_produto_id');
    var input_produto_nome = document.getElementById('input_produto_nome');
    var input_produto_descricao = document.getElementById('input_produto_descricao');
    var input_produto_preco = document.getElementById('input_produto_preco');
    var input_produto_peso = document.getElementById('input_produto_peso');
    var select_fabricante = document.getElementById('select_fabricante');
    var input_hidden_categorias_selecionadas = document.getElementById('input_hidden_categorias_selecionadas');
    
    var _id = input_produto_id.value;
    var id = _id != '' && _id != 'undefined' && _id != 'null' && _id != null ? _id : null;
    var nome = input_produto_nome.value;
    var descricao = input_produto_descricao.value;
    var preco = input_produto_preco.value;
    var peso = input_produto_peso.value;
    var fabricante = select_fabricante.value;
    var _categorias = input_hidden_categorias_selecionadas.value;
    var categorias = _categorias != '' ? '['+_categorias+']' : null;
    var jsonObj = JSON.parse('{"id":"'+id+'","nome":"'+nome+'","descricao":"'+descricao+'","preco":'+preco+',"peso":'+peso+',"fabricante":'+fabricante+',"categorias":'+categorias+'}'); 
    var jsonTxt = JSON.stringify(jsonObj);

    return jsonTxt;
}

function criarAlterarProduto(httpMethod,id) {

    const conn = new XMLHttpRequest();
    let path = BASE_URL_PRODUTOS+"produtos";
    if (httpMethod == PUT) {
        path = path + '/'+id;
    }
    conn.open(obterHttpMethod(httpMethod), path, false);
    conn.setRequestHeader('content-type','application/json')
    
    conn.send(prepararJsonProduto());

    let resposta = conn.responseText;
    console.log(resposta);

    let json = JSON.parse(resposta);
    if (json)

    return navigateToProdutos();
}

function criarAlterarEstoque(httpMethod,estoque,id) {

    const conn = new XMLHttpRequest();
    let path = BASE_URL_PRODUTOS+"estoque/controle";
    if (httpMethod == PUT) {
        path = path + '/'+id;
    }
    conn.open(obterHttpMethod(httpMethod), path, false);
    conn.setRequestHeader('content-type','application/json')
    
    conn.send(estoque);

    let resposta = conn.responseText;
    console.log(resposta);
}

function alterarEntregue(id) {
    const conn = new XMLHttpRequest();
    let path = BASE_URL_COMPRAS+"compras/entregue/"+id;
    conn.open(PUT, path, false);
    
    conn.send();

    return navigateToCompras();
}

function deleteCategoria(id) {
    deleteFabricanteCategoriaProdutoCascade(null,id)
    const conn = new XMLHttpRequest();
    let path = BASE_URL_FILTROS+"categorias/"+id;
    conn.open(obterHttpMethod(DELETE), path, false);
    conn.setRequestHeader('content-type','application/json')
    
    conn.send();

    let resposta = conn.responseText;
    console.log(resposta);

    return navigateToCategorias();
}

function deleteFabricante(id) {
    deleteFabricanteCategoriaProdutoCascade(id,null)
    const conn = new XMLHttpRequest();
    let path = BASE_URL_FILTROS+"fabricantes/"+id;
    conn.open(obterHttpMethod(DELETE), path, false);
    conn.setRequestHeader('content-type','application/json')
    
    conn.send();

    let resposta = conn.responseText;
    console.log(resposta);

    return navigateToFabricantes();
}

function deleteProduto(id) {
    const conn = new XMLHttpRequest();
    let path = BASE_URL_PRODUTOS+"produtos/"+id;
    conn.open(obterHttpMethod(DELETE), path, false);
    conn.setRequestHeader('content-type','application/json')
    
    conn.send();

    let resposta = conn.responseText;
    console.log(resposta);

    return navigateToProdutos();
}

function deleteFabricanteCategoriaProdutoCascade(fabricante,categoria) {
    
    let _url = '';
    if (fabricante != null) {
        _url = "/delete/fabricantes/"+fabricante;
    } else if (categoria != null) {
        _url = "/delete/categorias/"+categoria;
    } else {
        return;
    }
    const conn = new XMLHttpRequest();
    let path = BASE_URL_PRODUTOS+"produtos/"+_url;
    conn.open(obterHttpMethod(DELETE), path, false);
    conn.setRequestHeader('content-type','application/json')
    
    conn.send();

    let resposta = conn.responseText;
    console.log(resposta);

}

function alterarEstoque() {
    var _estoque = listarEstoque();
    let estoque = JSON.parse(_estoque);
    console.log(estoque);
    for (let i = 0; i < estoque.length; i++) {
        var estoqueId = estoque[i].id;
        console.log(estoqueId);
        var span_quantidade = document.getElementById('span_quantidade_'+estoqueId);
        console.log(span_quantidade);
        console.log(span_quantidade.innerHTML);
        var novaQuantidade = Number.parseInt(span_quantidade.innerHTML);
        if (novaQuantidade != estoque[i].quantidade) {
            estoque[i].quantidade = novaQuantidade;
            criarAlterarEstoque(PUT,JSON.stringify(estoque[i]),estoque[i].id);
        }
    }

    return navigateToEstoque();
}

function listarImagensProduto(produto) {
    const conn = new XMLHttpRequest();
    conn.open(GET, BASE_URL_PRODUTOS+"imagens/produtos/"+produto, false);
    conn.send();
    let resposta = conn.responseText
    console.log(resposta);
    
    return resposta;
}

function obterImagemPorProduto(produto) {
    const conn = new XMLHttpRequest();
    conn.open(GET, BASE_URL_PRODUTOS+"imagens/produto/"+produto, false);
    conn.send();
    let resposta = conn.responseText
    console.log(resposta);
    
    return resposta;
}

function prepararJsonUploadImagem(produto) {
    var input_upload_arquivos = document.getElementById('input_upload_arquivos');
    var nomeArquivo = input_upload_arquivos.value;
    var dados = input_upload_arquivos.files[0];
    var formData = new FormData();

    formData.append("dados",dados);

    return formData;
}

function uploadFoto(produto) {
    const conn = new XMLHttpRequest();
    let path = BASE_URL_PRODUTOS+"imagens/"+produto;
    conn.open(POST, path, false);
    
    conn.send(prepararJsonUploadImagem(produto));

    let resposta = conn.responseText;
    console.log(resposta);

    return navigateToImagemProduto(produto);
}

function excluirImagem(idImagem, idProduto) {
    const conn = new XMLHttpRequest();
    let path = BASE_URL_PRODUTOS+"imagens/"+idImagem;
    conn.open(obterHttpMethod(DELETE), path, false);
    conn.setRequestHeader('content-type','application/json')
    
    conn.send();

    let resposta = conn.responseText;
    console.log(resposta);

    return navigateToImagemProduto(idProduto);
}

function alterarImagemPrincipal(idImagem, idProduto) {
    const conn = new XMLHttpRequest();
    let path = BASE_URL_PRODUTOS+"imagens/alterarImagemPrincipal/"+idImagem;
    conn.open(PUT, path, false);
    conn.setRequestHeader('content-type','application/json')
    
    conn.send();

    let resposta = conn.responseText;
    console.log(resposta);

    return navigateToImagemProduto(idProduto);
}

function tirarPedido(id) {
    const conn = new XMLHttpRequest();
    let path = BASE_URL_SERVICOS+"servicos/tirarPedidoPDF/"+id;
    conn.open(GET, path, false);
    conn.send();

    let resposta = JSON.parse(conn.responseText);
    console.log(resposta);
    if (resposta != null && resposta.ok) {
        var data, filename, link;
        let pedidoPdf = resposta.pedidoPDF;
        var pdf = pedidoPdf.dadosBase64;
        if (pdf == null) return;
        filename = pedidoPdf.fileName;
        let _pdf = 'data:application/pdf;base64,' + pdf;
        //imgProduto.src = 'data:image/'+jsonImagens[i].extensao+';base64,'+jsonImagens[i].dadosBase64;
        data = encodeURI(_pdf);
        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }
}

function prepararJsonCatalogo() {
    let cat_checks = document.getElementsByName('cat_check');
    let fab_checks = document.getElementsByName('fab_check');
    let prod_checks = document.getElementsByName('prod_check');
    let input_preco_minimo = document.getElementById('input_preco_minimo');
    let input_preco_maximo = document.getElementById('input_preco_maximo');

    let fabricantes_txt = '';
    for (let i = 0; i < fab_checks.length; i++) {
        if (fab_checks[i].checked) {
            fabricantes_txt += fab_checks[i].value + ',';
        }
    }
    fabricantes_txt = fabricantes_txt != '' 
        ? '"fabricantes":['+fabricantes_txt.substring(0, fabricantes_txt.length-1)+'],'
        : '';
    
    let categorias_txt = '';
    for (let j = 0; j < cat_checks.length; j++) {
        if (cat_checks[j].checked) {
            categorias_txt += cat_checks[j].value + ',';
        }
    }
    categorias_txt = categorias_txt != '' 
        ? '"categorias":['+categorias_txt.substring(0, categorias_txt.length-1)+'],' 
        : '';
    
    let produtos_txt = '';
    for (let j = 0; j < prod_checks.length; j++) {
        if (prod_checks[j].checked) {
            categorias_txt += prod_checks[j].value + ',';
        }
    }
    produtos_txt = produtos_txt != '' 
        ? '"produtos":['+produtos_txt.substring(0, produtos_txt.length-1)+'],' 
        : '';

    let filtro_preco_min = input_preco_minimo.value != ''
        ? '"precoMinimo":'+input_preco_minimo.value+','
        : '';

    let filtro_preco_max = input_preco_maximo.value != ''
        ? '"precoMaximo":'+input_preco_maximo.value+','
        : '';

    let jsonTxt = '{'
        + fabricantes_txt
        + categorias_txt
        + produtos_txt
        + filtro_preco_min
        + filtro_preco_max
        + '"padrao":"padrao"'
        + '}';
    console.log(jsonTxt);
    let jsonObj = JSON.parse(jsonTxt);

    return JSON.stringify(jsonObj);

}

function gerarCatalogo() {
    const conn = new XMLHttpRequest();
    let path = BASE_URL_SERVICOS+"servicos/catalogoPDF";
    conn.open(POST, path, false);
    conn.setRequestHeader('content-type','application/json');
    conn.send(prepararJsonCatalogo());

    let resposta = JSON.parse(conn.responseText);
    console.log(resposta);
    if (resposta != null && resposta.ok) {
        var data, filename, link;
        let catalogoPdf = resposta.catalogoPDF;
        var pdf = catalogoPdf.dadosBase64;
        if (pdf == null) return;
        filename = catalogoPdf.fileName;
        let _pdf = 'data:application/pdf;base64,' + pdf;
        //imgProduto.src = 'data:image/'+jsonImagens[i].extensao+';base64,'+jsonImagens[i].dadosBase64;
        data = encodeURI(_pdf);
        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }
}

function carregarValoresMinMax() {
    const conn = new XMLHttpRequest();
    conn.open(GET, BASE_URL_PRODUTOS+"produtos/valoresMinMax", false);
    conn.send();
    let resposta = conn.responseText
    console.log(resposta);
    
    return JSON.parse(resposta);
    
}
