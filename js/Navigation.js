function navigateToHome() {
    var id="nav_home";
    var conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = 'Sabores Naturais! Pagina de Administração do Sistema!!!';
} 
function navigateToProdutos() {
    var id="nav_prod";
    var conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = '';
    conteudo.appendChild(builderTitulo('Produtos Cadastrados'));
    conteudo.appendChild(builderProdutos());
    conteudo.appendChild(builderButtonCriarNovo('Novo Produto', 'javascript:navigateToNovoProduto()'));
} 
function navigateToCategorias() {
    var id="nav_cat";
    var conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = '';
    conteudo.appendChild(builderTitulo('Categorias Cadastradas'));
    conteudo.appendChild(builderCategorias());
    conteudo.appendChild(builderButtonCriarNovo('Nova Categoria', 'javascript:navigateToNovaCategoria()'));
}  
function navigateToFabricantes() {
    var id="nav_fab";
    conteudo.innerHTML = '';
    conteudo.appendChild(builderTitulo('Fabricantes Cadastrados'));
    conteudo.appendChild(builderFabricantes());
    conteudo.appendChild(builderButtonCriarNovo('Novo Fabricante', 'javascript:navigateToNovoFabricante()'));
}  
function navigateToEstoque() { 
    var id="nav_est";
    var conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = '';
    conteudo.appendChild(builderTitulo('Controle de Estoque'));
    conteudo.appendChild(builderEstoque());
    conteudo.appendChild(builderButtonCriarNovo('Alterar Estoque', 'javascript:alterarEstoque()'));
}
function navigateToClientes() { 
    var id="nav_cli";
    var conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = '';
    conteudo.appendChild(builderTitulo('Lista de Clientes'));
    conteudo.appendChild(builderClientes());
    //conteudo.appendChild(builderButtonCriarNovo('Alterar Estoque', 'javascript:alterarEstoque()'));
}
function navigateToCompras() { 
    var id="nav_com";
    var conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = '';
    conteudo.appendChild(builderTitulo('Compras Realizadas'));
    conteudo.appendChild(builderCompras());
    //conteudo.appendChild(builderButtonCriarNovo('Alterar Estoque', 'javascript:alterarEstoque()'));
}

function navigateToCatalogo() {
    var id="nav_com";
    var conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = '';
    conteudo.appendChild(builderTitulo('Gerar Catálogo'));
    conteudo.appendChild(builderCatalogo());
    //conteudo.appendChild(builderButtonCriarNovo('Alterar Estoque', 'javascript:alterarEstoque()'));
}

function navigateToNovaCategoria() {
    var conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = '';
    conteudo.appendChild(builderTitulo('Nova Categoria'));
    conteudo.appendChild(builderEditarCategoria());
}

function navigateToNovoFabricante() {
    var conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = '';
    conteudo.appendChild(builderTitulo('Novo Fabricante'));
    conteudo.appendChild(builderEditarFabricante());
}

function navigateToNovoProduto() {
    var conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = '';
    conteudo.appendChild(builderTitulo('Novo Produto'));
    conteudo.appendChild(builderEditarProduto());
}

function navigateToCategoria(categoria,acao) {
    var conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = '';
    conteudo.appendChild(builderTitulo(acao == 'editar' ? 'Alterar Categoria' : (acao == 'exibir' ? 'Exibir Categoria' : "Categoria")));
    conteudo.appendChild(builderEditarCategoria(categoria,acao));
}

function navigateToFabricante(fabricante,acao) {
    var conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = '';
    conteudo.appendChild(builderTitulo(acao == 'editar' ? 'Alterar Fabricante' : (acao == 'exibir' ? 'Exibir Fabricante' : "Fabricante")));
    conteudo.appendChild(builderEditarFabricante(fabricante,acao));
}

function navigateToProduto(produto,acao) {
    var conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = '';
    conteudo.appendChild(builderTitulo(acao == 'editar' ? 'Alterar Produto' : (acao == 'exibir' ? 'Exibir Produto' : "Produto")));
    conteudo.appendChild(builderEditarProduto(produto,acao));
}

function navigateToImagemProduto(produto) {
    var conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = '';
    conteudo.appendChild(builderTitulo("Incluir / Alterar Imagens"));
    conteudo.appendChild(builderImagens(produto));
}

function navigateToCliente(idCliente) {
    var conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = '';
    conteudo.appendChild(builderTitulo("Dados Cliente"));
    conteudo.appendChild(builderCliente(idCliente));
}