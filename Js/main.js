inames = []
iqtyp = []
iprice = []

function addCliente(){
    let cliente = document.getElementById("nomeCliente").value
    let rua = document.getElementById("ruaCliente").value
    let numero = document.getElementById("numeroCliente").value
    alert('Nome Cliete : '+ cliente +'\nRua : '+ rua +'\nN° : '+ numero +'')
    cart1.innerHTML = `Nome Cliente : ${cliente} Rua : ${rua} Número : ${numero}<br>`
    dataEhora()
}
function dataEhora(){
    var data = new Date()
    var dia = data.getDate()
    var mes = (data.getMonth()+1)
    var ano = data.getFullYear()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    cart1.innerHTML += `Data ${dia} / ${mes} / ${ano} Horas ${hora} : ${min} : ${seg}`
}
function imprimir(){
    alert('Você chamou a impressora'+'\nPara imprimir'+'\n Deu certo')
    window.print()
}

function addItem() {
    inames.push(document.getElementById('pname').value)
    iqtyp.push(parseInt(document.getElementById('pqty').value))
    iprice.push(parseFloat(document.getElementById('price').value))
    displayCart()
    
}

function displayCart() {
    cartdata = '<table><tr><th>Produto Nome :</th><th>Quantidade :</th><th>Preço :</th><th>Total :</th></th>';
    total = 0;
    for (i = 0; i < inames.length; i++) {
        total += iqtyp[i] * iprice[i].toFixed(2)
        cartdata += "<tr><td>" + inames[i] + "</td><td>" +
            iqtyp[i] + "</td><td> R$" + iprice[i].toFixed(2) + "</td><td> R$" + iqtyp[i] * iprice[i].toFixed(2) + "</td><td><button onclick='delElement(" + i + ")'>Delete</button></td></tr>"
    }
    cartdata += '<tr><td></td><td></td><td></td><td>Total : R$ ' +
        total.toFixed(2) + '</td></tr></table>'
    document.getElementById('cart').innerHTML = cartdata 
}
function delElement(a) {
    inames.splice(a, 1);
    iqtyp.splice(a, 1)
    iprice.splice(a, 1)
    displayCart()
}
