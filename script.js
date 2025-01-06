document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("transaksiForm");

    form.addEventListener("submit", function (event) {
    
        event.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const nik = document.getElementById("nik").value.trim();
        const jenisKelaminPria = document.getElementById("jkel_pria").checked;
        const jenisKelaminWanita = document.getElementById("jkel_wanita").checked;
        const tempatLahir = document.getElementById("tempatlahir").value.trim();
        const alamat = document.getElementById("alamat").value.trim();
        const telepon = document.getElementById("telepon").value.trim();
        const tingkatPendidikan = document.getElementById("tingkatpendidikan").value.trim();
        const pekerjaan = document.getElementById("pekerjaan").value;
        const tanggal = document.getElementById("tanggal").value;
        const jumlahPinjaman = document.getElementById("jumlahpinjaman").value.trim();
        const durasiPinjaman = document.getElementById("durasipinjaman").value;

        if (!nama) {
            alert("Nama harus diisi!");
            return;
        }
        if (!nik || nik.length !== 16 || isNaN(nik)) {
            alert("NIK harus berupa 16 digit angka!");
            return;
        }
        if (!jenisKelaminPria && !jenisKelaminWanita) {
            alert("Jenis kelamin harus dipilih!");
            return;
        }
        if (!tempatLahir) {
            alert("Tempat lahir harus diisi!");
            return;
        }
        if (!alamat) {
            alert("Alamat harus diisi!");
            return;
        }
        if (!telepon || telepon.length < 10 || isNaN(telepon)) {
            alert("Nomor telepon harus berupa angka minimal 10 digit!");
            return;
        }
        if (!tingkatPendidikan) {
            alert("Tingkat pendidikan harus diisi!");
            return;
        }
        if (!pekerjaan) {
            alert("Pekerjaan harus dipilih!");
            return;
        }
        if (!tanggal) {
            alert("Tanggal peminjaman harus dipilih!");
            return;
        }
        if (!jumlahPinjaman || isNaN(jumlahPinjaman) || jumlahPinjaman <= 0) {
            alert("Jumlah pinjaman harus berupa angka positif!");
            return;
        }
        if (!durasiPinjaman) {
            alert("Durasi pinjaman harus dipilih!");
            return;
        }

        alert("Transaksi berhasil disimpan!");
        form.reset();
    });
});