// ============================================
// NAVIGATION & SCROLLING
// ============================================

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// ============================================
// HAMBURGER MENU
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navbarMenu = document.querySelector('.navbar-menu');

    if (hamburger && navbarMenu) {
        hamburger.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when link is clicked
        const navLinks = navbarMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbarMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
});

// ============================================
// MODAL FUNCTIONS
// ============================================

function showModal(modalType) {
    const overlay = document.getElementById('modal-overlay');
    let modal = null;

    // Close all modals first before opening new one
    const allModals = document.querySelectorAll('.modal');
    allModals.forEach(m => m.classList.remove('active'));

    // Map modal types to modal elements
    const modalMap = {
        'appointment': 'appointment-modal',
        'emergency': 'emergency-modal',
        'contact': 'contact-modal'
    };

    if (modalMap[modalType]) {
        modal = document.getElementById(modalMap[modalType]);
    } else {
        // Generic modal for other content
        modal = document.getElementById('generic-modal');
        const modalBody = document.getElementById('generic-modal-body');

        // Load content based on modal type
        const contentMap = {
            'service-inap': '<h2>Layanan Rawat Inap</h2><p>Fasilitas rawat inap kami dilengkapi dengan:</p><ul><li>Ruang perawatan yang nyaman dan bersih</li><li>Perawat 24 jam</li><li>Ketersediaan dokter spesialis</li><li>Fasilitas WiFi gratis</li><li>Ruang kunjung yang luas</li></ul><p>Harga: Mulai dari Rp 500.000 per hari</p>',
            'service-umum': '<h2>Pemeriksaan Umum</h2><p>Layanan pemeriksaan kesehatan rutin kami meliputi:</p><ul><li>Konsultasi dokter umum</li><li>Pemeriksaan tekanan darah</li><li>Pemeriksaan berat badan</li><li>Tes darah dasar</li><li>EKG</li></ul><p>Harga: Rp 150.000 - Rp 300.000</p>',
            'service-lab': '<h2>Laboratorium</h2><p>Fasilitas laboratorium kami menyediakan:</p><ul><li>Tes darah lengkap</li><li>Tes urin</li><li>Kultur mikrobiologi</li><li>Tes hormon</li><li>Immunoserologi</li></ul><p>Hasil dikirim dalam 24-48 jam</p>',
            'service-radiologi': '<h2>Radiologi</h2><p>Peralatan radiologi modern kami:</p><ul><li>CT Scan 64 slices</li><li>X-Ray digital</li><li>Ultrasonografi (USG)</li><li>Mammografi</li><li>Fluoroscopy</li></ul><p>Hasil dikirim dengan CD dan laporan tertulis</p>',
            'service-apotek': '<h2>Apotek</h2><p>Apotek kami melayani:</p><ul><li>Obat-obatan resep</li><li>Obat bebas dan bebas terbatas</li><li>Suplemen dan vitamin</li><li>Peralatan medis</li><li>Konsultasi apoteker gratis</li></ul><p>Jam operasional: 24 jam</p>',
            'service-wellness': '<h2>Program Wellness</h2><p>Program kesehatan kami mencakup:</p><ul><li>Medical check-up berkala</li><li>Fitness dan yoga</li><li>Konseling gizi</li><li>Manajemen stress</li><li>Paket detox</li></ul><p>Konsultasi gratis untuk membership</p>',
            'doctor-1': '<h2>Dr. Ahmad Sutrisno</h2><p class="specialty"><strong>Spesialis Jantung (Kardiologi)</strong></p><p><strong>Pengalaman:</strong> 15 tahun</p><p><strong>Pendidikan:</strong></p><ul><li>Sarjana Kedokteran - Universitas Indonesia</li><li>Spesialis Kardiologi - FKUI</li><li>Fellowship Intervensi Kardiologi - National Heart Centre Singapore</li></ul><p><strong>Jadwal Praktik:</strong></p><ul><li>Senin - Jumat: 08:00 - 16:00</li><li>Sabtu: 08:00 - 12:00</li></ul><p><strong>Keahlian Khusus:</strong> Kateterisasi Jantung, Ekokardiografi, Penanganan Gagal Jantung</p><button class="btn btn-primary" onclick="showModal(\'appointment\')">Buat Janji Temu</button>',
            'doctor-2': '<h2>Dr. Siti Nurhaliza</h2><p class="specialty"><strong>Spesialis Anak (Pediatri)</strong></p><p><strong>Pengalaman:</strong> 12 tahun</p><p><strong>Pendidikan:</strong></p><ul><li>Sarjana Kedokteran - Universitas Gadjah Mada</li><li>Spesialis Anak - FK UGM</li><li>Fellowship Neonatologi - RSCM Jakarta</li></ul><p><strong>Jadwal Praktik:</strong></p><ul><li>Senin - Jumat: 13:00 - 20:00</li><li>Sabtu: 09:00 - 14:00</li></ul><p><strong>Keahlian Khusus:</strong> Tumbuh Kembang Anak, Vaksinasi, Penanganan Bayi Prematur</p><button class="btn btn-primary" onclick="showModal(\'appointment\')">Buat Janji Temu</button>',
            'doctor-3': '<h2>Dr. Budi Santoso</h2><p class="specialty"><strong>Spesialis Saraf (Neurologi)</strong></p><p><strong>Pengalaman:</strong> 18 tahun</p><p><strong>Pendidikan:</strong></p><ul><li>Sarjana Kedokteran - Universitas Airlangga</li><li>Spesialis Neurologi - FK UNAIR</li><li>Fellowship Stroke - National Neuroscience Institute Singapore</li></ul><p><strong>Jadwal Praktik:</strong></p><ul><li>Senin, Rabu, Jumat: 10:00 - 15:00</li><li>Selasa, Kamis: 14:00 - 18:00</li></ul><p><strong>Keahlian Khusus:</strong> Stroke, Epilepsi, Penyakit Parkinson, Sakit Kepala Kronis</p><button class="btn btn-primary" onclick="showModal(\'appointment\')">Buat Janji Temu</button>',
            'doctor-4': '<h2>Dr. Dewi Lestari</h2><p class="specialty"><strong>Spesialis Kandungan (Obstetri & Ginekologi)</strong></p><p><strong>Pengalaman:</strong> 14 tahun</p><p><strong>Pendidikan:</strong></p><ul><li>Sarjana Kedokteran - Universitas Padjadjaran</li><li>Spesialis Obstetri & Ginekologi - FK UNPAD</li><li>Fellowship Fetomaternal - RSCM Jakarta</li></ul><p><strong>Jadwal Praktik:</strong></p><ul><li>Senin - Kamis: 09:00 - 17:00</li><li>Sabtu: 08:00 - 13:00</li></ul><p><strong>Keahlian Khusus:</strong> Kehamilan Risiko Tinggi, Operasi Caesar, USG 4D, Laparoskopi</p><button class="btn btn-primary" onclick="showModal(\'appointment\')">Buat Janji Temu</button>',
            'doctor-5': '<h2>Dr. Rifa\'i Rahman</h2><p class="specialty"><strong>Spesialis Tulang (Ortopedi)</strong></p><p><strong>Pengalaman:</strong> 16 tahun</p><p><strong>Pendidikan:</strong></p><ul><li>Sarjana Kedokteran - Universitas Diponegoro</li><li>Spesialis Ortopedi - FK UNDIP</li><li>Fellowship Spine Surgery - Singapore General Hospital</li></ul><p><strong>Jadwal Praktik:</strong></p><ul><li>Selasa, Kamis: 10:00 - 16:00</li><li>Sabtu: 08:00 - 12:00</li></ul><p><strong>Keahlian Khusus:</strong> Operasi Tulang Belakang, Penanganan Patah Tulang, Artroskopi Lutut</p><button class="btn btn-primary" onclick="showModal(\'appointment\')">Buat Janji Temu</button>',
            'doctor-6': '<h2>Dr. Indah Kusuma</h2><p class="specialty"><strong>Spesialis Paru (Pulmonologi)</strong></p><p><strong>Pengalaman:</strong> 13 tahun</p><p><strong>Pendidikan:</strong></p><ul><li>Sarjana Kedokteran - Universitas Indonesia</li><li>Spesialis Paru - FKUI</li><li>Fellowship Intervensi Paru - Persahabatan Hospital Jakarta</li></ul><p><strong>Jadwal Praktik:</strong></p><ul><li>Senin, Rabu, Jumat: 08:00 - 14:00</li><li>Selasa: 13:00 - 17:00</li></ul><p><strong>Keahlian Khusus:</strong> Asma, PPOK, Tuberkulosis, Sleep Apnea, Bronkoskopi</p><button class="btn btn-primary" onclick="showModal(\'appointment\')">Buat Janji Temu</button>'
        };

        if (contentMap[modalType]) {
            modalBody.innerHTML = contentMap[modalType];
        }
    }

    if (modal) {
        modal.classList.add('active');
        overlay.classList.add('active');
    }
}

function closeModal() {
    const modals = document.querySelectorAll('.modal');
    const overlay = document.getElementById('modal-overlay');

    modals.forEach(modal => {
        modal.classList.remove('active');
    });
    overlay.classList.remove('active');
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const overlay = document.getElementById('modal-overlay');
    if (e.target === overlay) {
        closeModal();
    }
});

// ============================================
// FORM HANDLERS
// ============================================

function handleAppointment(event) {
    event.preventDefault();
    alert('Janji temu Anda telah diterima. Kami akan menghubungi Anda dalam 24 jam untuk konfirmasi.');
    closeModal();
    event.target.reset();
}

function handleContactForm(event) {
    event.preventDefault();
    alert('Pesan Anda telah terkirim. Tim kami akan merespon dalam waktu 2x24 jam.');
    closeModal();
    event.target.reset();
}

function handleChat(event) {
    event.preventDefault();
    alert('Chat Anda telah terkirim. Admin akan merespon segera.');
    closeModal();
    event.target.reset();
}

// ============================================
// DEPARTMENT CARD TOGGLE
// ============================================

function toggleDepartment(card) {
    const content = card.querySelector('.dept-content');
    const isExpanded = content.classList.contains('expanded');

    // Close all other expanded cards
    document.querySelectorAll('.dept-content.expanded').forEach(el => {
        if (el !== content) {
            el.classList.remove('expanded');
        }
    });

    // Toggle current card
    content.classList.toggle('expanded');
}

// ============================================
// LOGIN PAGE FUNCTIONS
// ============================================

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = event.target.closest('.toggle-password').querySelector('i');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

function togglePasswordPasien() {
    const passwordInput = document.getElementById('password-pasien');
    const toggleIcon = event.target.closest('.toggle-password').querySelector('i');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

function handleAdminLogin(event) {
    event.preventDefault();
    
    const role = document.getElementById('role-select')?.value || 'admin';

    // Set role menggunakan roleManager
    roleManager.setRole(role, {
        name: 'Staff',
        email: 'staff@rsjayasehat.com',
        id: 'user-' + Date.now()
    });
    
    // Redirect to dashboard
    window.location.href = 'dashboard-admin.html';
}

function handlePasienLogin(event) {
    event.preventDefault();
    
    // Set role sebagai pasien menggunakan roleManager
    roleManager.setRole('pasien', {
        name: 'Pasien',
        email: 'pasien@rsjayasehat.com',
        id: 'pasien-' + Date.now()
    });
    
    // Redirect to patient portal dashboard
    window.location.href = 'portal-pasien.html';
}

function logout() {
    // Clear role data using roleManager if available
    if (typeof roleManager !== 'undefined') {
        roleManager.clearRole();
    }
    window.location.href = 'index.html';
}

// ============================================
// DASHBOARD FUNCTIONS
// ============================================

function closeAlert(button) {
    button.closest('.alert').style.display = 'none';
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Format date
function formatDate(date) {
    return new Intl.DateTimeFormat('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(date));
}

// Format time
function formatTime(time) {
    const [hours, minutes] = time.split(':');
    return `${hours}:${minutes}`;
}

// ============================================
// FORM FUNCTIONS - IDENTITAS PASIEN
// ============================================

function hitungUsia() {
    const tanggalLahir = document.getElementById('tanggal-lahir').value;
    if (tanggalLahir) {
        const birthDate = new Date(tanggalLahir);
        const today = new Date();
        let usia = today.getFullYear() - birthDate.getFullYear();
        const bulan = today.getMonth() - birthDate.getMonth();
        
        if (bulan < 0 || (bulan === 0 && today.getDate() < birthDate.getDate())) {
            usia--;
        }
        
        document.getElementById('usia').value = usia;
    }
}

function handleIdentitasPasien(event) {
    event.preventDefault();
    
    // Simpan data ke localStorage (bisa disesuaikan dengan backend)
    const formData = {
        nik: document.getElementById('nik')?.value,
        noRm: document.getElementById('no-rm')?.value,
        namaLengkap: document.getElementById('nama-lengkap')?.value,
        tanggalLahir: document.getElementById('tanggal-lahir')?.value,
        savedAt: new Date().toISOString()
    };
    
    localStorage.setItem('dataPasien', JSON.stringify(formData));
    
    alert('✅ Data identitas pasien berhasil disimpan!');
    
    // Reset form setelah simpan (opsional)
    // document.getElementById('identitas-pasien-form').reset();
}

function handlePendaftaranPasien(event) {
    event.preventDefault();
    
    // Generate nomor registrasi
    const noRegistrasi = 'REG-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random() * 10000)).padStart(4, '0');
    const noAntrian = String(Math.floor(Math.random() * 999)).padStart(3, '0');
    
    document.getElementById('no-registrasi').value = noRegistrasi;
    document.getElementById('no-antrian').value = noAntrian;
    
    // Show success message
    const successMsg = document.getElementById('success-message');
    if (successMsg) {
        successMsg.style.display = 'flex';
        setTimeout(() => {
            alert('Pendaftaran berhasil! No Antrian: ' + noAntrian);
            window.location.href = 'daftar-kunjungan.html';
        }, 1500);
    }
}

function resetForm() {
    document.getElementById('identitas-pasien-form')?.reset();
    document.getElementById('pendaftaran-form')?.reset();
}

function goBack() {
    window.history.back();
}

// ============================================
// CREATE ADMIN FUNCTIONS
// ============================================

function togglePasswordRegister() {
    const passwordInput = document.getElementById('password-register');
    const toggleIcon = event.target.closest('.toggle-password').querySelector('i');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

function toggleConfirmPassword() {
    const passwordInput = document.getElementById('confirm-password');
    const toggleIcon = event.target.closest('.toggle-password').querySelector('i');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

function handleCreateAdmin(event) {
    event.preventDefault();
    
    const password = document.getElementById('password-register').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Password dan konfirmasi password tidak cocok!');
        return;
    }
    
    if (password.length < 8) {
        alert('Password minimal harus 8 karakter!');
        return;
    }
    
    alert('Akun admin berhasil dibuat! Silakan login dengan username dan password Anda.');
    window.location.href = 'login-admin.html';
}

// ============================================
// DAFTAR KUNJUNGAN FUNCTIONS
// ============================================

function applyFilter() {
    alert('Filter diterapkan. Data akan diperbarui sesuai kriteria pencarian.');
}

function resetFilter() {
    document.getElementById('filter-tanggal').value = '';
    document.getElementById('filter-no-rm').value = '';
    document.getElementById('filter-nama').value = '';
    document.getElementById('filter-kecamatan').value = '';
    alert('Filter direset.');
}

function exportData() {
    alert('Data akan diexport ke format Excel (.xlsx)');
}

function printData() {
    window.print();
}

function viewDetail(id) {
    const modalOverlay = document.getElementById('modal-overlay');
    const detailModal = document.getElementById('detail-modal');
    
    // Sample data
    const data = {
        1: {
            nama: 'Ahmad Wijaya',
            noRm: 'RM-2024-001',
            noRegistrasi: 'REG-2024-001',
            tanggal: '27/10/2025',
            jam: '08:15',
            dokter: 'Dr. Ahmad Sutrisno',
            status: 'Selesai'
        },
        2: {
            nama: 'Siti Nurhayati',
            noRm: 'RM-2024-002',
            noRegistrasi: 'REG-2024-002',
            tanggal: '27/10/2025',
            jam: '08:45',
            dokter: 'Dr. Siti Nurhaliza',
            status: 'Proses'
        },
        3: {
            nama: 'Budi Santoso',
            noRm: 'RM-2024-003',
            noRegistrasi: 'REG-2024-003',
            tanggal: '27/10/2025',
            jam: '09:30',
            dokter: 'Dr. Budi Santoso',
            status: 'Menunggu'
        }
    };
    
    const patient = data[id] || data[1];
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <div class="detail-info">
            <div class="info-row">
                <label>Nama Pasien:</label>
                <span>${patient.nama}</span>
            </div>
            <div class="info-row">
                <label>No RM:</label>
                <span>${patient.noRm}</span>
            </div>
            <div class="info-row">
                <label>No Registrasi:</label>
                <span>${patient.noRegistrasi}</span>
            </div>
            <div class="info-row">
                <label>Tanggal:</label>
                <span>${patient.tanggal}</span>
            </div>
            <div class="info-row">
                <label>Jam Masuk:</label>
                <span>${patient.jam}</span>
            </div>
            <div class="info-row">
                <label>Dokter:</label>
                <span>${patient.dokter}</span>
            </div>
            <div class="info-row">
                <label>Status:</label>
                <span>${patient.status}</span>
            </div>
        </div>
    `;
    
    modalOverlay.classList.add('active');
    detailModal.classList.add('active');
}

function closeDetailModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    const detailModal = document.getElementById('detail-modal');
    
    modalOverlay.classList.remove('active');
    detailModal.classList.remove('active');
}

function editKunjungan(id) {
    alert('Edit data kunjungan pasien ID: ' + id);
}

function deleteKunjungan(id) {
    if (confirm('Anda yakin ingin menghapus data kunjungan ini?')) {
        alert('Data kunjungan berhasil dihapus.');
    }
}

function previousPage() {
    const currentPage = parseInt(document.getElementById('current-page').textContent);
    if (currentPage > 1) {
        document.getElementById('current-page').textContent = currentPage - 1;
    }
}

function nextPage() {
    const currentPage = parseInt(document.getElementById('current-page').textContent);
    const totalPage = parseInt(document.getElementById('total-page').textContent);
    if (currentPage < totalPage) {
        document.getElementById('current-page').textContent = currentPage + 1;
    }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Website RUMAH SAKIT JAYA SEHAT - Loaded');
    
    // Set tanggal default untuk filter
    const filterTanggal = document.getElementById('filter-tanggal');
    if (filterTanggal) {
        filterTanggal.valueAsDate = new Date();
    }
    
    // Set tanggal default untuk pendaftaran
    const tanggalRegistrasi = document.getElementById('tanggal-registrasi');
    if (tanggalRegistrasi) {
        tanggalRegistrasi.valueAsDate = new Date();
    }
});

// ============================================
// UNIFIED INTERNAL SHELL (ADMIN / PERAWAT / DOKTER)
// ============================================

function buildUnifiedInternalShell() {
    const navbar = document.querySelector('.admin-navbar');
    const sidebar = document.querySelector('.admin-sidebar') || document.querySelector('.sidebar');

    if (!sidebar) return;

    // Hide navbar completely
    if (navbar) navbar.style.display = 'none';

    // Disable role-based sidebar rendering from role-manager
    window.DISABLE_ROLE_SIDEBAR = true;

    // Sidebar content with grouped dropdowns
    if (sidebar) {
        const groups = [
            {
                title: 'Registrasi', icon: 'fas fa-clipboard-list', open: true, links: [
                    { href: 'identitas-pasien.html', label: 'Identifikasi Pasien', icon: 'fas fa-id-card' },
                    { href: 'identitas-unknown.html', label: 'Pasien Tidak Dikenal', icon: 'fas fa-user-secret' },
                    // { href: 'identitas-bayi.html', label: 'Identitas Bayi', icon: 'fas fa-baby' }, // Hidden - feature in development
                    { href: 'daftar-kunjungan.html', label: 'Daftar Kunjungan', icon: 'fas fa-list' }
                ]
            },
            {
                title: 'IGD & Klinik', icon: 'fas fa-heartbeat', links: [
                    { href: 'triase-igd.html', label: 'Triase IGD', icon: 'fas fa-ambulance' },
                    { href: 'assessment-igd.html', label: 'Assessment IGD', icon: 'fas fa-stethoscope' },
                    { href: 'pemeriksaan-fisik.html', label: 'Pemeriksaan Fisik', icon: 'fas fa-procedures' },
                    { href: 'screening-risiko.html', label: 'Screening Risiko', icon: 'fas fa-shield-alt' },
                    { href: 'psikologis-pemulangan.html', label: 'Psikologis & Pemulangan', icon: 'fas fa-brain' }
                ]
            },
            {
                title: 'Diagnosis & Consent', icon: 'fas fa-file-medical', links: [
                    { href: 'diagnosis.html', label: 'Diagnosis', icon: 'fas fa-notes-medical' },
                    { href: 'informed-consent.html', label: 'Informed Consent', icon: 'fas fa-file-signature' },
                    { href: 'general-consent.html', label: 'General Consent', icon: 'fas fa-file-contract' }
                ]
            },
            {
                title: 'Penunjang', icon: 'fas fa-vial', links: [
                    { href: 'pemeriksaan-penunjang.html', label: 'Pemeriksaan Penunjang', icon: 'fas fa-vials' },
                    { href: 'radiologi.html', label: 'Radiologi', icon: 'fas fa-x-ray' },
                    { href: 'laboratorium.html', label: 'Laboratorium', icon: 'fas fa-flask' },
                    { href: 'hasil-laboratorium.html', label: 'Hasil Laboratorium', icon: 'fas fa-microscope' },
                    { href: 'terapi.html', label: 'Terapi', icon: 'fas fa-pills' }
                ]
            }
        ];

        const standaloneLinks = [
            // { href: 'farmasi.html', label: 'Farmasi', icon: 'fas fa-prescription-bottle' }, // Hidden - feature in development
            // { href: 'keuangan.html', label: 'Keuangan', icon: 'fas fa-credit-card' }, // Hidden - feature in development
            { href: 'setting.html', label: 'Pengaturan', icon: 'fas fa-cog' }
        ];

        const currentPage = window.location.pathname.split('/').pop();

        const renderLinks = (links) => links.map(link => {
            const isActive = currentPage === link.href;
            return `
                <a class="nav-item${isActive ? ' active' : ''}" href="${link.href}">
                    <i class="${link.icon}"></i>
                    <span>${link.label}</span>
                </a>
            `;
        }).join('');

        const sidebarHTML = `
            <div class="sidebar-header">
                <h2><i class="fas fa-hospital"></i> RS JAYA SEHAT</h2>
            </div>
            <nav class="sidebar-nav sidebar-groups">
                <a class="nav-item${currentPage === 'dashboard-admin.html' ? ' active' : ''}" href="dashboard-admin.html">
                    <i class="fas fa-home"></i>
                    <span>Dashboard</span>
                </a>
                ${groups.map((group, index) => `
                    <div class="sidebar-group${group.open ? ' open' : ''}">
                        <button class="sidebar-group-header" type="button">
                            <div class="sidebar-group-title">
                                <i class="${group.icon}"></i>
                                <span>${group.title}</span>
                            </div>
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="sidebar-group-links">
                            ${renderLinks(group.links)}
                        </div>
                    </div>
                `).join('')}
                ${renderLinks(standaloneLinks)}
            </nav>
        `;

        sidebar.innerHTML = sidebarHTML;

        // Toggle groups
        sidebar.querySelectorAll('.sidebar-group-header').forEach(header => {
            header.addEventListener('click', () => {
                const group = header.closest('.sidebar-group');
                group.classList.toggle('open');
            });
        });

        // Auto-open group containing active link
        sidebar.querySelectorAll('.nav-item.active').forEach(activeLink => {
            const group = activeLink.closest('.sidebar-group');
            if (group) group.classList.add('open');
        });
    }
}

document.addEventListener('DOMContentLoaded', buildUnifiedInternalShell);

// Call buildUnifiedInternalShell immediately if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildUnifiedInternalShell);
} else {
    buildUnifiedInternalShell();
}
