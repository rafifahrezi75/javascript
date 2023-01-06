function coba(){
    a = document.querySelector(".isi");
    a.innerHTML = "belajar eventlistener";
    console.log("coba eventlistener");
}


// judul.addEventListener("click", coba());

// judul.onmouserver = coba; ==> jika tulisan di klik maka akan bertambah tulisan selanjutnya

judul.onmouserver = function () {
    console.log("coba function anonymous");
}