function aumentarEstoque(id) {
    alterarQtdEstoque(id,'aumentar');
} 

function diminuirEstoque(id) {
    alterarQtdEstoque(id,'diminuir');
}

function alterarQtdEstoque(id,operacao) {
    var span = document.getElementById('span_quantidade_'+id);
    var quantidade = Number.parseInt(span.innerHTML);
    if (operacao == 'aumentar') {
        quantidade = quantidade + 1;
    } else if (operacao == 'diminuir') {
        quantidade = (quantidade > 0) ? quantidade - 1 : 0;
    }
    span.innerHTML = '';
    span.innerHTML = ''+quantidade+'';
}

function expandirRetrairTabela(id) {
  let linhas = document.getElementsByName('linha_'+id);
  let img = document.getElementById('icone_'+id);
  console.log(linhas);
  if (linhas.length > 1) {
    for (let i=0; i < linhas.length; i++) {
      if (linhas[i].style.display == 'none') {
        linhas[i].style.removeProperty('display');
        img.src = 'images/iconeMenos.jpeg';
      } else {
        linhas[i].style.display = 'none';
        img.src = 'images/iconeMais.jpeg';
      }
    }
  } else if (linhas.length == 1) {
    if (linhas.style.display == 'none') {
      linhas[i].style.removeProperty('display');
      img.src = 'images/iconeMenos.jpeg';
    } else {
      linhas.style.display = 'none';
      img.src = 'images/iconeMais.jpeg';
    }
  } else {
    return;
  }
}

function builderMenuFuncoesMouseOver() {
  let li_funcoes = document.getElementById('li_funcoes');
  li_funcoes.innerHTML = '';
  let divExterna = document.createElement('div');
  let divInterna1 = document.createElement('div');
  let divInterna2 = document.createElement('div');
  divExterna.setAttribute('onmouseleave', 'javascript:builderMenuFuncoesMouseLeave();');
  divExterna.style.width = '100px';
  divExterna.style.display = 'inline-grid';
  //divExterna.style.position = 'fixed';
  divExterna.style.textAlign = 'left';
  divExterna.style.zIndex = '555';
  divInterna1.style.width = '100%';
  divInterna2.style.width = '100%';
  divInterna1.innerHTML = '<a id="nav_catalogo"  onclick="javascript:navigateToCatalogo();" href="#">Catalogo</a>';
  divInterna2.innerHTML = '<a id="nav_catalogo"  onclick="javascript:navigateToRelatorios();" href="#">Relatórios</a>';
  divExterna.appendChild(divInterna1);
  divExterna.appendChild(divInterna2);
  li_funcoes.appendChild(divExterna);
}

function builderMenuFuncoesMouseLeave() {
  let li_funcoes = document.getElementById('li_funcoes');
  li_funcoes.innerHTML = '';
  li_funcoes.innerHTML = '<a id="nav_fun" href="#" onmouseover="javascript:builderMenuFuncoesMouseOver();">Funções</a>';
}

function builderLabelSpanPadrao(label) {
  return "<span style='font-weight:bolder'>"+label+"</span>";
}

function base64ArrayBuffer(arrayBuffer) {
    var base64    = ''
    var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  
    var bytes         = new Uint8Array(arrayBuffer)
    var byteLength    = bytes.byteLength
    var byteRemainder = byteLength % 3
    var mainLength    = byteLength - byteRemainder
  
    var a, b, c, d
    var chunk
  
    // Main loop deals with bytes in chunks of 3
    for (var i = 0; i < mainLength; i = i + 3) {
      // Combine the three bytes into a single integer
      chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]
  
      // Use bitmasks to extract 6-bit segments from the triplet
      a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
      b = (chunk & 258048)   >> 12 // 258048   = (2^6 - 1) << 12
      c = (chunk & 4032)     >>  6 // 4032     = (2^6 - 1) << 6
      d = chunk & 63               // 63       = 2^6 - 1
  
      // Convert the raw binary segments to the appropriate ASCII encoding
      base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
    }
  
    // Deal with the remaining bytes and padding
    if (byteRemainder == 1) {
      chunk = bytes[mainLength]
  
      a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2
  
      // Set the 4 least significant bits to zero
      b = (chunk & 3)   << 4 // 3   = 2^2 - 1
  
      base64 += encodings[a] + encodings[b] + '=='
    } else if (byteRemainder == 2) {
      chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]
  
      a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
      b = (chunk & 1008)  >>  4 // 1008  = (2^6 - 1) << 4
  
      // Set the 2 least significant bits to zero
      c = (chunk & 15)    <<  2 // 15    = 2^4 - 1
  
      base64 += encodings[a] + encodings[b] + encodings[c] + '='
    }
    
    return base64
  }