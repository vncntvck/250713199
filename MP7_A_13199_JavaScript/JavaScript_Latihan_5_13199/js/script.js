function fn_ValForm(){
    var iUmur;
    var sMas;
    var eMail;

    var sMas = "";
    if(document.getElementById("nama").value==""){
        sMas += "\n* Anda belum mengisi nama";
    }
    if(document.getElementById("umur").value==""){
        sMas += "\n* Umur anda belum cukup";
    }
    if(document.getElementById("pilihan lomba").value==""){
        sMas += "\n* Anda harus memilih lomba";
    }

    var eMail = "^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$";
    if(document.getElementById("email").value==""){
        eMail !="\n* email anda belum sesuai";
    }

    if(iUmur>=10 && iUmur<=18){
        if(iUmur<=14){
            alert("Kategori Junior");
        }else{
            alert("Kategori Senior");
        }
    }
}