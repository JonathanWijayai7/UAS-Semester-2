function hasil() {
  var harga = parseInt(document.getElementById("harga").value);
  var jumlah = parseInt(document.getElementById("jumlah").value);
  var total = harga * jumlah;
  document.getElementById("total").innerHTML = total;
  var dis = 0.1;
  var bayar;
  if (total > 100000) {
    bayar = total - total * dis;
    document.getElementById("bayar").innerHTML = bayar;
    document.getElementById("dis").innerHTML = total * dis;
    alert("Total bayar diatas Rp 100.000 dapat diskon 10%");
  } else {
    document.getElementById("bayar").innerHTML = total;
    document.getElementById("dis").innerHTML = "0%";
    alert("Total bayar dibawah Rp 100.000 tidak dapat diskon 10%");
  }
}

function hapus() {
  document.getElementById("barang").innerHTML = "";
  document.getElementById("harga").innerHTML = "";
  document.getElementById("jumlah").innerHTML = "";
  document.getElementById("total").innerHTML = "";
  document.getElementById("dis").innerHTML = "";
  document.getElementById("bayar").innerHTML = "";
  alert("Sudah direset, silahkan masukan ulang kembali data..");
}
