// Menangani event saat form Pre-Order disubmit
document.getElementById('preorderForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Mengambil nilai dari form
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const nomor = document.getElementById('nomor').value.trim();
    const warna = document.getElementById('warna').value;
    const catatan = document.getElementById('catatan').value.trim();
  
    // Validasi format email
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
    // Mengecek apakah semua field terisi
    if (!nama || !email || !nomor || !warna || !catatan) {
      alert("Semua field wajib diisi!");
    } else if (!emailValid) {
      alert("Email tidak valid!");
    } else {
      alert("Terima kasih telah melakukan pre-order!");
      // Reset form setelah berhasil submit
      this.reset();
    }
});

// Menangani event saat tombol Lihat Spesifikasi diklik
document.getElementById("show-specs").addEventListener("click", function() {
    var specs = document.getElementById("specs");
    // Toggle visibility untuk kontainer spesifikasi
    if (specs.style.display === "none" || specs.style.display === "") {
        specs.style.display = "grid";
    } else {
        specs.style.display = "none";
    }
});
