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
    conteudo.innerHTML = 'Em breve!!!';
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