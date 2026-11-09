# Kasva

Aplikasi kasir (point of sale) berbasis web untuk toko kecil, warung, kafe, dan grosir. Dibuat sebagai **PWA satu file**: dipasang di HP atau komputer, bisa dipakai tanpa internet, tanpa server, dan tanpa biaya langganan.

**Coba langsung:** https://asepparker12.github.io/kasva/

## Daftar isi

- [Fitur](#fitur)
- [Cara pasang](#cara-pasang)
- [Data dan cadangan](#data-dan-cadangan)
- [Memperbarui aplikasi](#memperbarui-aplikasi)
- [Pintasan keyboard](#pintasan-keyboard)
- [Isi repositori](#isi-repositori)
- [Pengembangan](#pengembangan)
- [Batasan](#batasan)

## Fitur

### Kasir (penjualan)
- Kartu produk dengan pencarian, filter kategori, dan urutan (abjad, terlaris, terbaru)
- Scan barcode lewat kamera. Barcode yang belum dikenal bisa langsung didaftarkan sebagai produk
- Metode bayar: **Tunai, QRIS, Transfer, dan Kasbon**, dengan tombol uang pas dan nominal cepat
- Diskon per produk dan per transaksi (Rp atau persen), pajak (PPN)
- Harga bebas untuk barang yang nominalnya diisi kasir (cocok untuk donasi)
- Paket hemat (bundling), voucher, dan promo jam tertentu
- Pilih member di transaksi (bila fitur Member dinyalakan)

### Fitur lanjutan restoran dan warung (bisa dinyalakan satu per satu)
- **Bill (bayar nanti)** dan tahan pesanan, dengan PIN bill
- **Tujuan pesanan**: Dine In, Take Away, Delivery, plus biaya antar otomatis
- **Catatan per item** seperti "tanpa es" atau "pedas", tercetak di bill dan struk
- **Tiket dapur**: daftar pesanan tanpa harga untuk dapur
- **Pindah dan gabung bill**, serta **bagi tagihan** (bayar sebagian atau bagi rata)
- **Refund** per transaksi, dengan alasan dan pilihan stok kembali atau tidak

### Struk dan cetak
- Struk berbentuk gambar: bisa disimpan, disalin, atau dibagikan
- Kirim struk lewat **WhatsApp** ke nomor pelanggan
- 5 template struk ditambah template sendiri, logo toko, serta alamat, telepon, dan penutup struk
- Cetak lewat **printer Bluetooth (BLE)**, aplikasi **RawBT**, atau browser (termasuk simpan PDF dan cetak A4)
- Lebar kertas 58 mm, 80 mm, dan A4

### Produk dan stok
- Produk dengan gambar, kategori, harga modal, harga jual, stok, dan stok minimum per produk
- **Impor produk** dari CSV, TXT, atau Excel (ada contoh format)
- **Cek stok (stok opname)**: hitung stok di rak, selisih langsung disesuaikan dan tercatat
- Tambah stok cepat dan notifikasi stok menipis atau habis
- Buat **kode barcode EAN-13** dan **cetak label barcode**

### Pelanggan
- **Kasbon (piutang)**: catat, bayar hutang (cicilan), atur jatuh tempo, dan tagih lewat WhatsApp
- Kasbon harus disetujui Admin: lewat username dan password, lewat kode persetujuan, atau lewat layar Pantau
- **Member** dengan daftar dan pengaturan bawaan

### Pembelian
- Catat pembelian barang dari pemasok. Stok bertambah dan harga modal ikut diperbarui
- Data **pemasok** dan **hutang ke pemasok**
- **Daftar belanja** otomatis dari stok menipis
- **Laporan stok**, termasuk produk yang paling cepat habis dan barang yang tidak laku 30 hari (modal tertahan)

### Shift kasir
- Buka dan tutup shift dengan kas awal, kas akhir, dan selisih
- Ringkasan shift bisa dicetak atau disalin
- Tiap kasir hanya melihat data sesuai haknya

### Laporan dan dashboard
- **Ringkasan hari ini**, produk terlaris hari ini, dan **target penjualan harian**
- Laporan per rentang tanggal: omzet, pajak, HPP, laba kotor, biaya operasional, **laba bersih**, dan diskon diberikan
- Rincian per hari, per kategori, per kasir, per metode bayar, produk terlaris, refund, dan shift
- **Jam ramai** dan perbandingan dengan periode sebelumnya
- Catat **biaya operasional**
- **Ekspor ke Excel** dan cetak laporan

### Pantau (layar pelanggan dan pemantau)
- Layar kedua (misalnya tablet) yang tersambung langsung ke perangkat kasir lewat kode QR atau kode sambung
- Menampilkan keranjang ke pelanggan, atau dipakai Admin untuk memantau
- Admin bisa menyetujui kasbon dan menambah stok dari layar Pantau (bisa dimatikan)
- Transaksi kasir bisa ditahan saat Pantau terputus (opsional)

### Akun dan keamanan
- Peran **Admin dan Kasir**, login dengan password atau PIN
- Admin menambah, mengubah, dan menonaktifkan akun kasir
- **Kunci layar otomatis** (1, 3, 5, atau 10 menit)
- **Kode pemulihan** kalau Admin lupa password
- **Log aktivitas** (bisa dinyalakan)
- Cadangan dan pemulihan data (file JSON), pengingat cadangan, dan reset data

### Tampilan dan kenyamanan
- 15 pilihan warna: terang dan gelap, serta mode malam otomatis
- Bahasa Indonesia dan English
- Menu bawah melayang di HP, tab di atas di layar lebar
- Mode Desktop untuk tablet dan dukungan layar miring
- Pusat notifikasi (ikon lonceng) dan notifikasi gaya Dynamic Island
- Animasi masuk, keluar, dan saat scroll, serta suara ketuk dan suara bayar
- Layar kosong yang memandu, misalnya ajakan "Tambah produk pertama"

## Cara pasang

**Di HP (Android)**
1. Buka https://asepparker12.github.io/kasva/ di Chrome.
2. Ketuk menu titik tiga, lalu **Instal aplikasi** atau **Tambahkan ke layar utama**.
3. Buka dari ikon di layar utama.

**Di komputer**
Buka tautan di Chrome atau Edge, lalu klik ikon pasang di bilah alamat.

Kalau HP kamu mengunci putar otomatis tetapi aplikasi tetap berputar, hapus aplikasi yang terpasang lalu pasang ulang. Pengaturan orientasi layar dibaca saat aplikasi dipasang.

## Data dan cadangan

- Semua data (produk, transaksi, akun) disimpan **di perangkat** (localStorage). Tidak ada server dan tidak ada akun online.
- Karena itu, **menghapus data situs atau data browser akan menghapus data toko**. Buat cadangan rutin lewat menu **Akun**, lalu simpan filenya di tempat lain.
- Data di satu perangkat tidak otomatis muncul di perangkat lain. Pindahkan lewat cadangan dan pemulihan. Memulihkan cadangan menggantikan seluruh data, termasuk akun.
- Layar Pantau memakai koneksi WebRTC antar perangkat. Penyambungan awalnya memakai server sinyal publik (PeerJS), jadi butuh internet saat pertama tersambung.

## Memperbarui aplikasi

Aplikasi memakai service worker dengan cache lebih dulu, jadi pembaruan tidak langsung terlihat.

1. Unggah file baru ke repositori ini (timpa file lama).
2. Buka aplikasinya **dua kali**: pembukaan pertama mengunduh versi baru, pembukaan kedua memakainya.

## Pintasan keyboard

Untuk pemakaian di komputer:

- **Alt + angka** untuk pindah antar tab (Alt + 1 sampai 0, dan Alt + minus untuk tab ke-11)
- **F2** untuk fokus ke kolom cari (Kasir, Produk, Riwayat, Kasbon, Member)
- **F6** untuk produk baru di tab Produk, atau buka dan tutup shift di tab Kasir
- **F1** untuk layar bantuan berisi daftar lengkap, dan **Esc** untuk menutup jendela
- Tiap tab menampilkan petunjuk pintasannya di bagian bawah

## Isi repositori

| File | Fungsi |
|---|---|
| `index.html` | Seluruh aplikasi (HTML, CSS, JavaScript dalam satu file) |
| `sw.js` | Service worker untuk mode offline |
| `manifest.webmanifest` | Pengaturan PWA (nama, ikon, warna) |
| `icon-192.png`, `icon-512.png`, `icon-512-maskable.png` | Ikon aplikasi |
| `shot-narrow-1.png`, `shot-wide-1.png` | Tangkapan layar untuk halaman pemasangan |

## Pengembangan

Tidak perlu build. Jalankan server statis di folder ini, lalu buka di browser:

```bash
python3 -m http.server 8000
```

Service worker hanya aktif lewat `localhost` atau HTTPS.

## Batasan

Kasva masih dalam tahap uji coba di toko.

- Pencetakan lewat printer belum diuji dengan berbagai merek, jadi cek dulu dengan printer yang kamu pakai sebelum dijadikan andalan.
- Sinkronisasi antar perangkat dan banyak kasir dalam satu data belum ada. Setiap perangkat punya data sendiri.
- Layar Pantau butuh internet saat pertama tersambung.
