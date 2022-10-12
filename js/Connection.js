const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const DELETE = 'DELETE';
const producao = true;
const BASE_URL_PRODUTOS = producao ? 'http://www.erico1916.c41.integrator.host:10499/' : 'http://localhost:8180/';
const BASE_URL_FILTROS = producao ? 'http://www.erico1916.c41.integrator.host:10500/' : 'http://localhost:8080/';


function listarProdutos() {
    const conn = new XMLHttpRequest();
    conn.open(GET, BASE_URL_PRODUTOS+"produtos", false);
    conn.send();
    let resposta = conn.responseText
    console.log(resposta);
    
    return resposta;
}

function listarCategorias() {
    const conn = new XMLHttpRequest();
    conn.open(GET, BASE_URL_FILTROS+"categorias", false);
    conn.send();
    let resposta = conn.responseText
    console.log(resposta);
    
    return resposta;
}

function listarFabricantes() {
    const conn = new XMLHttpRequest();
    conn.open(GET, BASE_URL_FILTROS+"fabricantes", false);
    conn.send();
    let resposta = conn.responseText
    console.log(resposta);
    
    return resposta;
}

function obterProduto(id) {
    const conn = new XMLHttpRequest();
    conn.open(GET, BASE_URL_PRODUTOS+"produtos/"+id, false);
    conn.send();
    let resposta = conn.responseText
    console.log(resposta);
    
    return resposta;
}

function obterFabricante(id) {
    const conn = new XMLHttpRequest();
    conn.open(GET, BASE_URL_FILTROS+"fabricantes/"+id, false);
    conn.send();
    let resposta = conn.responseText
    console.log(resposta);
    
    return resposta;
}

function obterCategoria(id) {
    const conn = new XMLHttpRequest();
    conn.open(GET, BASE_URL_FILTROS+"categorias/"+id, false);
    conn.send();
    let resposta = conn.responseText
    console.log(resposta);
    
    return resposta;
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

    return navigateToProdutos();
}

function deleteCategoria(id) {
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