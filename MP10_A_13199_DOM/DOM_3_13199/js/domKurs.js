var targetNode;
function init() {
    targetNode = document.getElementById("hasil").firstChild;
}

function hitungKurs(id) {
    var inputEl = document.getElementById(id);
    var nominal = parseFloat(inputEl.value);
    var hasilUsd = (nominal / 18246).toFixed(2);
    targetNode.data = hasilUsd;
    var liBaru = document.createElement("li");
    var teksCatatan = "Rp " + nominal + " = US$" + hasilUsd;
    var nodeTeks = document.createTextNode(teksCatatan);
    liBaru.appendChild(nodeTeks);
    var daftarRiwayat = document.getElementById("riwayat");
    daftarRiwayat.appendChild(liBaru);
}