window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

const nama = []
const alamat = []
const telp = []
const pesanan = []
const variasi = []
const bayar = []
const jumlah = []
const total1 = []
let i = 0

penambahan = () =>{
    parseInt(document.getElementById("jumlah").value)
    document.getElementById("hasil").value = document.getElementById("jumlah").value * 10000
    
}


clear = ()=>{
    document.getElementById("name").value = ""
    document.getElementById("alamat").value = ""
    document.getElementById("telp").value = ""
    document.getElementById("pesan").value = ""
    document.getElementById("variasi").value = ""
    document.getElementById("jumlah").value = ""
    document.getElementById("hasil").value = ""
}



document.getElementById("lanjut").addEventListener("click", lanjut = () =>{
    nama[i] = document.getElementById("name").value
    alamat[i] = document.getElementById("alamat").value
    telp[i] = document.getElementById("telp").value
    pesanan[i] = document.getElementById("pesan").value
    variasi[i] = document.getElementById("variasi").value
    if(document.getElementById("bank").checked == true){
       document.getElementById("bank").value = "Bank"
       bayar[i] = document.getElementById("bank").value
    }else if(document.getElementById("shopeePay").checked == true){
        bayar[i] = "ShopeePay"
    }else if(document.getElementById("dana").checked == true){
        bayar[i] = "Dana"
    }else (document.getElementById("cod").checked == true)
        bayar[i] = "COD(Cash On Delivery)"
    
    jumlah[i] = document.getElementById("jumlah").value
    total1[i] = document.getElementById("hasil").value
    i++
    alert("Data telah disimpan")
    clear()
})

document.getElementById("tampilkan").addEventListener("click", tampil = () =>{
    var isi1 = "<tr><td>"
    var isi2 = "<td>"
    var hasil
    var total = nama.length
    for(var i = 0;i<total;i++){
        hasil = isi1 + "Nama" + isi2 + ": " + nama[i] + isi2 + "Variasi" + isi2 + ": " + variasi[i] + isi1 + "Alamat" + isi2 + ": " + alamat[i] +  isi2 + "Pembayaran" + isi2 + ": " + bayar[i] + isi1 + "No Telpon" + isi2 + ": " + telp[i] + isi2 + "Jumlah" + isi2 + ": " + jumlah[i] + isi1 + "Pesanan" + isi2 + ": " + pesanan[i] + isi2 + "Total" + isi2 + ": " + total1[i] 
    }
    document.getElementById("tampil").innerHTML = hasil
})

