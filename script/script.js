

function criptografar(cripto) {
    const criptografia ={
        "a": "ai",
        "e": "enter",
        "i": "imes", 
        "o": "ober",
        "u": "ufat"
    }
   return criptografia[cripto]
}

function descriptografar(cripto) {
    const descriptografia ={
        "ai": "a",
        "enter": "e",
        "imes": "i", 
        "ober": "o",
        "ufat": "u"
    }
    return descriptografia[cripto]
}

function criptografarTexto() {
    let textoEntrada = document.querySelector('#entradaTexto').value;
    
    if(textoEntrada != '') {
        let textoCript = textoEntrada.replace(/[aeiou]/gi, criptografar);

        document.getElementById('saida').innerHTML = "<textarea class='resultado_saida' id='resultado_saida'>" + textoCript + "</textarea>" + "<button class='btn_copiar' id='btn_copiar' onclick='copiar()'>copiar</button>";
        limparTexto();
    }
}

function descriptoTexto() {
    let textoEntrada = document.querySelector('#entradaTexto').value;

    if(textoEntrada != '') {
        let textoDescript = textoEntrada.replace(/ai|enter|imes|ober|ufat/gi, descriptografar);

        document.getElementById('saida').innerHTML = "<textarea class='resultado_saida' id='resultado_saida'>" + textoDescript + "</textarea>" + "<button class='btn_copiar' id='btn_copiar' onclick='copiar()'>copiar</button>";
        limparTexto();
    }
}

function limparTexto() {
    textoEntrada = document.querySelector('textarea');
    textoEntrada.value = '';
}

// function copiar() {
//     let copiarTexto = document.getElementById('resultado_saida').innerHTML;
//     navigator.clipdoard.writeText(copiarTexto);
//     alert("Texto copiado!");
// }

function copiar() {
    navigator.clipboard.writeText(resultado_saida.value).then(() =>{
        alert("Texto Copiado!");
    })
}