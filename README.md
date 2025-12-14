# 🏥 Sistem Informasi IGD - Rumah Sakit Jaya Sehat

**Sistem Manajemen Informasi Rumah Sakit Berbasis Web** dengan fokus pada pelayanan Gawat Darurat (IGD), Portal Pasien, dan Manajemen Keuangan.

Interface modern, responsif, dan user-friendly untuk memudahkan staf rumah sakit dan pasien dalam mengelola data medis.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📊 Status Proyek: 27/27 Halaman (100% Selesai)

Semua 27 halaman sistem informasi IGD telah berhasil dibuat dan siap digunakan.

## 📋 Daftar Halaman yang Telah Diimplementasikan

### A. Halaman Utama & Login (4 Halaman)
1. ✅ **index.html** - Homepage dengan hero section, layanan, departemen, dokter
2. ✅ **login-admin.html** - Form login admin dengan password toggle, remember me
3. ✅ **create-admin.html** - Form registrasi akun admin dengan validasi
4. ✅ **login-pasien.html** - Form login pasien menggunakan No RM + NIK

### B. Dashboard & Manajemen Pasien (4 Halaman)
5. ✅ **dashboard-admin.html** - Dashboard admin dengan statistik, sidebar, aktivitas
6. ✅ **identitas-pasien.html** - Form identitas lengkap pasien (20+ fields)
7. ✅ **pendaftaran-pasien.html** - Form pendaftaran + info penanggung jawab
8. ✅ **daftar-kunjungan.html** - Tabel daftar kunjungan dengan filter & pagination

### C. Pemeriksaan IGD (4 Halaman)
9. ✅ **triase-igd.html** - Formulir triase gawat darurat dengan vital signs
10. ✅ **assessment-igd.html** - Penilaian IGD dengan pain scale & risk assessment
11. ✅ **general-consent.html** - Persetujuan umum tindakan medis
12. ✅ **pemeriksaan-fisik-1.html** - Pemeriksaan fisik bagian atas (kepala-mulut)

### D. Pemeriksaan Lanjutan (3 Halaman)
13. ✅ **pemeriksaan-fisik-2.html** - Pemeriksaan fisik bagian bawah (leher-ekstremitas)
14. ✅ **laboratorium-1.html** - Form permintaan pemeriksaan laboratorium
15. ✅ **laboratorium-2.html** - Form spesimen & detail laboratorium

### E. Pemeriksaan Penunjang (2 Halaman)
16. ✅ **radiologi.html** - Form permintaan radiologi dengan 9 modalitas
17. ✅ **hasil-laboratorium.html** - Tampilan hasil laboratorium dengan tabel dinamis

### F. Pelayanan Medis (2 Halaman)
18. ✅ **farmasi.html** - Formulir resep obat dengan multiple medicines
19. ✅ **keuangan.html** - Formulir pembayaran dengan kalkulasi otomatis

### G. Diagnosis & Screening (2 Halaman)
20. ✅ **diagnosis.html** - Form diagnosis dengan ICD-10, komorbiditas, prognosis
21. ✅ **screening-risiko.html** - Screening risiko komprehensif (6 kategori)

### H. Kekhususan IGD (3 Halaman)
22. ✅ **informed-consent.html** - Persetujuan spesifik tindakan/operasi
23. ✅ **psikologis-pemulangan.html** - Penilaian psikologis & discharge planning
24. ✅ **terapi.html** - Dokumentasi terapi/tindakan/prosedur

### I. Pasien Spesial (2 Halaman)
25. ✅ **identitas-unknown.html** - Form untuk pasien tidak dikenal
26. ✅ **identitas-bayi.html** - Form bayi baru lahir dengan APGAR score

### J. Portal Pasien (1 Halaman)
27. ✅ **dashboard-pasien.html** - Dashboard pasien dengan riwayat medis & appointment

## 📁 Struktur Folder

```
f:\Rumah Sakit\
├── index.html                          # Halaman utama
├── login-admin.html                    # Login admin
├── create-admin.html                   # Registrasi admin
├── login-pasien.html                   # Login pasien
├── dashboard-admin.html                # Dashboard admin
├── dashboard-pasien.html               # Dashboard pasien
├── identitas-pasien.html               # Form identitas pasien
├── pendaftaran-pasien.html             # Form pendaftaran pasien
├── daftar-kunjungan.html               # Daftar kunjungan
├── triase-igd.html                     # Triase IGD
├── assessment-igd.html                 # Assessment IGD
├── general-consent.html                # General consent
├── informed-consent.html               # Informed consent spesifik
├── pemeriksaan-fisik-1.html            # Pemeriksaan fisik bagian atas
├── pemeriksaan-fisik-2.html            # Pemeriksaan fisik bagian bawah
├── laboratorium-1.html                 # Form permintaan lab
├── laboratorium-2.html                 # Form spesimen lab
├── hasil-laboratorium.html             # Hasil laboratorium
├── radiologi.html                      # Form radiologi
├── farmasi.html                        # Form resep farmasi
├── keuangan.html                       # Form pembayaran
├── diagnosis.html                      # Form diagnosis
├── screening-risiko.html               # Screening risiko
├── psikologis-pemulangan.html         # Penilaian psikologis & discharge
├── terapi.html                         # Dokumentasi terapi
├── identitas-unknown.html              # Form pasien tidak dikenal
├── identitas-bayi.html                 # Form bayi baru lahir
├── css/
│   └── style.css                       # Stylesheet utama
├── js/
│   └── script.js                       # JavaScript utama
├── assets/
│   ├── fonts/                          # Font files
│   └── images/                         # Image files
└── README.md                           # Dokumentasi (file ini)
```


## 🎨 Fitur Utama

### Responsive Design
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (< 768px)

### JavaScript Interaktif
- ✅ Modal untuk formulir
- ✅ Toggle password visibility
- ✅ Hamburger menu mobile
- ✅ Smooth scrolling
- ✅ Form validation
- ✅ Hitung usia otomatis
- ✅ Hitung total biaya pembayaran
- ✅ Filter dan search data
- ✅ Pagination

### Form Features
- ✅ Auto-generate nomor (RM, registrasi, antrian)
- ✅ Validasi field required
- ✅ Dynamic field visibility
- ✅ Multiple select checkbox
- ✅ Datetime input

## 🚀 Cara Menggunakan

### 1. Akses Homepage
```
http://localhost:8000
```

### 2. Login Admin
- Klik tombol "Admin" di navbar
- Masukkan username dan password
- Akan diarahkan ke dashboard admin

### 3. Buat Pasien Baru
1. Dari dashboard, klik menu "Pendaftaran"
2. Isi form "Identitas Pasien"
3. Lanjut ke "Pendaftaran Pasien"
4. Sistem akan auto-generate No RM dan No Antrian

### 4. Lihat Daftar Kunjungan
- Dari menu sidebar, klik "Daftar Kunjungan"
- Gunakan filter untuk mencari pasien
- Klik tombol "Lihat Detail" untuk melihat informasi

### 5. Input Triase IGD
- Dari menu, klik "Triase IGD"
- Isi form dengan data pasien dan tanda vital
- Simpan data

### 6. Input Pemeriksaan Lab
- Dari menu, klik "Laboratorium"
- Pilih kategori pemeriksaan
- Pilih jenis pemeriksaan
- Lanjut ke bagian 2

### 7. Input Resep Farmasi
- Dari menu, klik "Farmasi"
- Isi data pasien dan diagnosa
- Tambah obat dengan dosis dan frekuensi
- Simpan resep

### 8. Input Data Pembayaran
- Dari menu, klik "Keuangan"
- Isi data pasien
- Pilih cara pembayaran
- Input rincian biaya
- Sistem akan otomatis hitung total dan sisa pembayaran

## 🔐 Login Demo

### Admin
- Username: `admin` (atau apapun)
- Password: `password` (atau apapun)

### Pasien
- No RM: `RM-2024-001`
- NIK: `1234567890123456`
- Password: `password`

## 📊 Halaman-Halaman yang Akan Dibuat Berikutnya

### Phase 3:
- [ ] Assessment Awal IGD
- [ ] Pemeriksaan Fisik (Bagian 1 & 2)
- [ ] Radiologi
- [ ] Laboratorium Part 2 & Hasil Lab

### Phase 4:
- [ ] General Consent
- [ ] Informed Consent
- [ ] Diagnosis
- [ ] Screening & Kajian Risiko
- [ ] Pemeriksaan Psikologis
- [ ] Setting/Pengaturan
- [ ] Dashboard Pasien

### Phase 5:
- [ ] Pasien Tidak Dikenal
- [ ] Bayi Baru Lahir
- [ ] Terapi/Tindakan
- [ ] Export & Print
- [ ] Laporan

## 🎯 CSS Custom Properties

```css
--primary-color: #0066cc        /* Biru */
--secondary-color: #00ccff      /* Cyan */
--danger-color: #ff4444         /* Merah */
--success-color: #00cc44        /* Hijau */
--warning-color: #ffcc00        /* Kuning */
--dark-color: #1a1a1a          /* Gelap */
--light-color: #f5f5f5         /* Terang */
--border-color: #e0e0e0        /* Border */
--text-color: #333333          /* Teks */
--text-light: #666666          /* Teks Terang */
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔧 Fitur Teknis

### Form Validation
- Validasi field required
- Validasi format email
- Validasi panjang NIK (16 digit)
- Validasi tanggal lahir untuk hitung usia

### Data Processing
- Auto-generate nomor dengan format
- Hitung total otomatis
- Hitung sisa pembayaran
- Filter dan search data real-time

### User Experience
- Modal dialogs untuk action
- Alert notifications
- Loading states
- Success messages
- Responsive sidebar

---

## 🚀 Cara Memulai

### Prasyarat
- Browser modern (Chrome, Firefox, Safari, Edge)
- Web server lokal (optional, untuk development)

### Instalasi & Penggunaan

1. **Clone repository ini**
```bash
git clone https://github.com/fathirgunadireja-hue/rumah-sakit-sistem-igd.git
cd rumah-sakit-sistem-igd
```

2. **Buka di browser**
   - Langsung buka file `index.html` di browser Anda
   - Atau gunakan web server lokal (Python, Node.js, dll)

**Dengan Python 3:**
```bash
python -m http.server 8000
# Akses: http://localhost:8000
```

**Dengan Node.js (http-server):**
```bash
npm install -g http-server
http-server
# Akses: http://localhost:8080
```

3. **Login ke sistem**
   - **Admin**: Username: `admin` | Password: `admin123`
   - **Pasien**: No RM: `RM-2025-00001` | NIK: `3201012345678901`
   - Atau gunakan tombol "Masuk Langsung" untuk akses cepat

---

## 📁 Struktur Folder

```
rumah-sakit-sistem-igd/
├── index.html                 # Halaman utama
├── login-admin.html           # Login admin
├── login-pasien.html          # Login pasien
├── dashboard-admin.html       # Dashboard admin
├── portal-pasien.html         # Portal pasien
├── admin.html                 # Admin panel
├── create-admin.html          # Buat admin
│
├── css/
│   └── style.css              # Stylesheet utama
│
├── js/
│   ├── script.js              # Script utama
│   └── role-manager.js        # Role-based access control
│
├── assets/
│   ├── fonts/                 # Custom fonts
│   └── images/                # Images & icons
│
├── .gitignore                 # Git ignore file
└── README.md                  # Dokumentasi
```

---

## 🔐 Fitur Keamanan

- ✅ Role-Based Access Control (Admin & Pasien)
- ✅ Session management
- ✅ Input validation & sanitization
- ✅ Protected routes
- ✅ Secure password handling

---

## 🎨 Fitur UI/UX

- ✅ Modern & professional design
- ✅ Responsive layout (desktop, tablet, mobile)
- ✅ Smooth animations & transitions
- ✅ Glassmorphism effects
- ✅ Gradient backgrounds
- ✅ Dark mode ready
- ✅ Accessible forms
- ✅ Intuitive navigation

---

## 📋 Catatan Penting

- Aplikasi berjalan **100% client-side** (tidak memerlukan backend)
- Data disimpan di **LocalStorage** (reset setelah clear cache browser)
- Untuk production, integrasi dengan backend API diperlukan
- Pastikan JavaScript diaktifkan di browser

---

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:

1. Fork repository ini
2. Buat branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

---

## 📝 Update Terakhir

**Desember 2025** - Perbaikan UI/UX
- ✅ Portal Pasien redesign dengan animated cards
- ✅ Form input styling modernisasi
- ✅ Card header alignment optimization
- ✅ Admin login simplification
- ✅ Sidebar reorganization
- ✅ Button styling standardization

---

## 👨‍💻 Developer

**Dikembangkan dengan ❤️ untuk Rumah Sakit Jaya Sehat**

---

## 📞 Kontak & Support

Untuk pertanyaan atau feedback:
- Email: info@rumahsakitmodern.com
- Telepon: (021) 5555-0123
- Darurat: 112

---

## 📄 License

Proyek ini dilisensikan di bawah **MIT License** - lihat file [LICENSE](LICENSE) untuk detail.

---

## ⭐ Jika proyek ini membantu, jangan lupa kasih star! ⭐


© 2024 Rumah Sakit Modern. Semua hak dilindungi.

---

**Last Updated**: 13 Desember 2025
**Version**: 1.0.0

