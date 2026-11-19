function gantiInfo(kode, warnaBG, deskripsi){
    var kartu = document.getElementById("kartuMataUang");
    var log = document.getElementById("logAtribut");

    kartu.firstChild.data = deskripsi;
    kartu.style.backgroundcolor = warnaBG;

    kartu.setAttribute("data-aktif", kode);
    var nilaiAktif = kartu.getAttribut("data-aktif");
    log.firstChild.data = "Kode Aktif: " + nilaiAktif;
}