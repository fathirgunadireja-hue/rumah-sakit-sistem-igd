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
    
            const nip = document.getElementById('nip')?.value.trim();
            const username = document.getElementById('username-register')?.value.trim();
            const email = document.getElementById('email-register')?.value.trim();
            const password = document.getElementById('password-register')?.value || '';
            const confirmPassword = document.getElementById('confirm-password')?.value || '';

            if (!nip || !username || !email || !password || !confirmPassword) {
                alert('Semua field wajib diisi.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Password dan konfirmasi password tidak cocok!');
                return;
            }
    
            if (password.length < 8) {
                alert('Password minimal harus 8 karakter!');
                return;
            }

            const accounts = loadAdminAccounts();
            const usernameExists = accounts.some(acc => acc.username.toLowerCase() === username.toLowerCase());
            const emailExists = accounts.some(acc => acc.email.toLowerCase() === email.toLowerCase());

            if (usernameExists) {
                alert('Username sudah digunakan. Silakan pilih username lain.');
                return;
            }

            if (emailExists) {
                alert('Email sudah terdaftar. Gunakan email lain.');
                return;
            }

            const newAccount = {
                nip,
                username,
                email,
                password,
                name: username,
                createdAt: new Date().toISOString()
            };

            accounts.push(newAccount);
            saveAdminAccounts(accounts);
            localStorage.setItem('adminRememberedUser', username);

            alert('Akun admin berhasil dibuat! Silakan login dengan username dan password Anda.');
            window.location.href = 'admin.html';
}

        // ============================================
        // DAFTAR KUNJUNGAN FUNCTIONS
        // ============================================

        function applyFilter() {
            alert('Filter diterapkan. Data akan diperbarui sesuai kriteria pencarian.');
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

// ============================================
// ADMIN ACCOUNT STORAGE (LOCALSTORAGE)
// ============================================

const ADMIN_STORAGE_KEY = 'adminAccounts';

function ensureDefaultAdmin(accounts) {
    const hasDefault = accounts.some(acc => acc.username === 'admin');
    if (!hasDefault) {
        accounts.push({
            username: 'admin',
            email: 'admin@rsjayasehat.com',
            password: 'admin123',
            nip: '000000',
            name: 'Administrator',
            createdAt: new Date().toISOString()
        });
    }
    return accounts;
}

function loadAdminAccounts() {
    try {
        const raw = localStorage.getItem(ADMIN_STORAGE_KEY);
        let accounts = raw ? JSON.parse(raw) : [];
        if (!Array.isArray(accounts)) accounts = [];
        accounts = ensureDefaultAdmin(accounts);
        localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(accounts));
        return accounts;
    } catch (error) {
        const fallback = ensureDefaultAdmin([]);
        localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(fallback));
        return fallback;
    }
}

function saveAdminAccounts(accounts) {
    localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(accounts));
}

// ============================================
// LOCAL STORAGE MANAGEMENT SYSTEM
// ============================================

const StorageManager = {
    KEYS: {
        IDENTITAS_PASIEN: 'identitasPasienList',
        PASIEN_UNKNOWN: 'pasienUnknownList',
        DAFTAR_KUNJUNGAN: 'daftarKunjunganList',
        TRIASE_IGD: 'triaseIGDList',
        ASSESSMENT_IGD: 'assessmentIGDList',
        PEMERIKSAAN_FISIK: 'pemeriksaanFisikList',
        SCREENING_RISIKO: 'screeningRisikoList',
        PSIKOLOGIS_PEMULANGAN: 'psikologisPemulangan',
        DIAGNOSIS: 'diagnosisList',
        INFORMED_CONSENT: 'informedConsentList',
        GENERAL_CONSENT: 'generalConsentList',
        PEMERIKSAAN_PENUNJANG: 'pemeriksaanPenunjangList',
        RADIOLOGI: 'radiologiList',
        LABORATORIUM: 'laboratoriumList',
        HASIL_LABORATORIUM: 'hasilLaboratoriumList',
        TERAPI: 'terapiList'
    },

    getAll(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error(`Error loading ${key}:`, error);
            return [];
        }
    },

    saveAll(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error(`Error saving ${key}:`, error);
            return false;
        }
    },

    add(key, record) {
        const data = this.getAll(key);
        record.id = record.id || 'ID-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
        record.createdAt = record.createdAt || new Date().toISOString();
        data.push(record);
        this.saveAll(key, data);
        return record;
    },

    update(key, id, updates) {
        const data = this.getAll(key);
        const index = data.findIndex(item => item.id === id);
        if (index !== -1) {
            data[index] = { ...data[index], ...updates, updatedAt: new Date().toISOString() };
            this.saveAll(key, data);
            return data[index];
        }
        return null;
    },

    delete(key, id) {
        const data = this.getAll(key);
        const filtered = data.filter(item => item.id !== id);
        this.saveAll(key, filtered);
        return filtered.length < data.length;
    },

    getById(key, id) {
        const data = this.getAll(key);
        return data.find(item => item.id === id);
    },

    search(key, query) {
        const data = this.getAll(key);
        const lowerQuery = query.toLowerCase();
        return data.filter(item => 
            JSON.stringify(item).toLowerCase().includes(lowerQuery)
        );
    },

    clearAll(key) {
        localStorage.removeItem(key);
    }
};

function handleAdminLogin(event) {
    // Langsung login tanpa validasi
    roleManager.setRole('admin', {
        name: 'Admin',
        email: 'admin@rsjayasehat.com',
        id: 'admin-' + Date.now()
    });

    window.location.href = 'dashboard-admin.html';
}

function handleIdentitasPasien(event) {
    event.preventDefault();
    
    const formData = {
        nik: document.getElementById('nik')?.value,
        noRm: document.getElementById('no-rm')?.value || 'RM-' + Date.now(),
        namaLengkap: document.getElementById('nama-lengkap')?.value,
        tanggalLahir: document.getElementById('tanggal-lahir')?.value,
        jenisKelamin: document.getElementById('jenis-kelamin')?.value,
        alamat: document.getElementById('alamat')?.value,
        nomorTelepon: document.getElementById('nomor-telepon')?.value,
        pekerjaan: document.getElementById('pekerjaan')?.value,
        pendidikan: document.getElementById('pendidikan')?.value,
        statusPerkawinan: document.getElementById('status-perkawinan')?.value
    };
    
    const result = StorageManager.add(StorageManager.KEYS.IDENTITAS_PASIEN, formData);
    
    alert(`✅ Data identitas pasien berhasil disimpan!\nNo RM: ${result.noRm}`);
    
    if (document.getElementById('identitas-pasien-form')) {
        document.getElementById('identitas-pasien-form').reset();
    }
}

function handlePasienUnknown(event) {
    event.preventDefault();
    
    const formData = {
        noRmTemporary: 'RM-TEMP-' + Date.now(),
        jenisKelamin: document.getElementById('jenis-kelamin-unknown')?.value,
        perkiraaanUmur: document.getElementById('perkiraan-umur')?.value,
        ciriCiri: document.getElementById('ciri-ciri')?.value,
        keterangan: document.getElementById('keterangan-unknown')?.value,
        tanggalDitemukan: document.getElementById('tanggal-ditemukan')?.value
    };
    
    const result = StorageManager.add(StorageManager.KEYS.PASIEN_UNKNOWN, formData);
    
    alert(`✅ Data pasien tidak dikenal berhasil disimpan!\nNo RM Sementara: ${result.noRmTemporary}`);
    
    if (document.getElementById('pasien-unknown-form')) {
        document.getElementById('pasien-unknown-form').reset();
    }
}

function handlePendaftaranPasien(event) {
    event.preventDefault();
    
    const noRegistrasi = 'REG-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random() * 10000)).padStart(4, '0');
    const noAntrian = String(Math.floor(Math.random() * 999)).padStart(3, '0');
    
    const formData = {
        noRm: document.getElementById('no-rm')?.value,
        namaLengkap: document.getElementById('nama-lengkap-daftar')?.value,
        tanggalKunjungan: document.getElementById('tanggal-kunjungan')?.value,
        jamMasuk: document.getElementById('jam-masuk')?.value,
        keluhan: document.getElementById('keluhan')?.value,
        noRegistrasi: noRegistrasi,
        noAntrian: noAntrian,
        status: 'Pending'
    };
    
    const result = StorageManager.add(StorageManager.KEYS.DAFTAR_KUNJUNGAN, formData);
    
    document.getElementById('no-registrasi').value = noRegistrasi;
    document.getElementById('no-antrian').value = noAntrian;
    
    const successMsg = document.getElementById('success-message');
    if (successMsg) {
        successMsg.style.display = 'flex';
        setTimeout(() => {
            alert('Pendaftaran berhasil! No Antrian: ' + noAntrian);
            window.location.href = 'daftar-kunjungan.html';
        }, 1500);
    } else {
        alert('✅ Pendaftaran berhasil! No Antrian: ' + noAntrian);
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

    // Auto-create dengan data random yang di-generate
    const timestamp = Date.now();
    const randomId = Math.random().toString(36).substr(2, 9);
    
    const newAccount = {
        nip: 'NIP-' + timestamp,
        username: 'admin-' + randomId,
        email: 'admin-' + randomId + '@rsjayasehat.com',
        password: 'Pass' + timestamp.toString().slice(-8),
        name: 'Admin ' + randomId.toUpperCase(),
        createdAt: new Date().toISOString()
    };

    const accounts = loadAdminAccounts();
    accounts.push(newAccount);
    saveAdminAccounts(accounts);

    alert(`✅ Akun admin berhasil dibuat!\\n\\nUsername: ${newAccount.username}\\nPassword: ${newAccount.password}\\nEmail: ${newAccount.email}\\n\\nSilakan login menggunakan kredensial ini.`);
    window.location.href = 'admin.html';
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

// ============================================
// TRIASE IGD HANDLER
// ============================================

function handleTriaseIGD(event) {
    event.preventDefault();
    
    const formData = {
        noRm: document.getElementById('no-rm-triase')?.value,
        tanggal: document.getElementById('tanggal-triase')?.value,
        waktu: document.getElementById('waktu-triase')?.value,
        keluhan: document.getElementById('keluhan-utama')?.value,
        sistol: document.getElementById('sistol')?.value,
        diastol: document.getElementById('diastol')?.value,
        nadi: document.getElementById('nadi')?.value,
        respirasi: document.getElementById('respirasi')?.value,
        suhu: document.getElementById('suhu')?.value,
        kategoriTriase: document.getElementById('kategori-triase')?.value,
        tindakanAwal: document.getElementById('tindakan-awal')?.value
    };
    
    const result = StorageManager.add(StorageManager.KEYS.TRIASE_IGD, formData);
    alert(`✅ Data Triase IGD berhasil disimpan!`);
}

// ============================================
// ASSESSMENT IGD HANDLER
// ============================================

function handleAssessmentIGD(event) {
    event.preventDefault();
    
    const formData = {
        noRm: document.getElementById('no-rm-assessment')?.value,
        tanggal: document.getElementById('tanggal-assessment')?.value,
        riwayatPenyakit: document.getElementById('riwayat-penyakit')?.value,
        riwayatAlergi: document.getElementById('riwayat-alergi')?.value,
        riwayatObat: document.getElementById('riwayat-obat')?.value,
        hasilKesadaran: document.getElementById('hasil-kesadaran')?.value,
        hasilPsikis: document.getElementById('hasil-psikis')?.value,
        hasilSosial: document.getElementById('hasil-sosial')?.value,
        kesan: document.getElementById('kesan')?.value
    };
    
    const result = StorageManager.add(StorageManager.KEYS.ASSESSMENT_IGD, formData);
    alert(`✅ Assessment IGD berhasil disimpan!`);
}

// ============================================
// PEMERIKSAAN FISIK HANDLER
// ============================================

function handlePemeriksaanFisik(event) {
    event.preventDefault();
    
    const formData = {
        noRm: document.getElementById('no-rm-fisik')?.value,
        tanggal: document.getElementById('tanggal-fisik')?.value,
        kepalaBidang: document.getElementById('kepala-bidang')?.value,
        mataBidang: document.getElementById('mata-bidang')?.value,
        telingaBidang: document.getElementById('telinga-bidang')?.value,
        muluBidang: document.getElementById('mulu-bidang')?.value,
        leherBidang: document.getElementById('leher-bidang')?.value,
        thoraksBidang: document.getElementById('thoraks-bidang')?.value,
        abdomenBidang: document.getElementById('abdomen-bidang')?.value,
        ekstremitasBidang: document.getElementById('ekstremitas-bidang')?.value,
        kulit: document.getElementById('kulit')?.value,
        kesimpulan: document.getElementById('kesimpulan-fisik')?.value
    };
    
    const result = StorageManager.add(StorageManager.KEYS.PEMERIKSAAN_FISIK, formData);
    alert(`✅ Pemeriksaan Fisik berhasil disimpan!`);
}

// ============================================
// SCREENING RISIKO HANDLER
// ============================================

function handleScreeningRisiko(event) {
    event.preventDefault();
    
    const formData = {
        noRm: document.getElementById('no-rm-risiko')?.value,
        tanggal: document.getElementById('tanggal-risiko')?.value,
        risikoJatuh: document.getElementById('risiko-jatuh')?.value || 'Tidak',
        risikoLuka: document.getElementById('risiko-luka')?.value || 'Tidak',
        risikoInfeksi: document.getElementById('risiko-infeksi')?.value || 'Tidak',
        risikoDelirium: document.getElementById('risiko-delirium')?.value || 'Tidak',
        risikoMalnutrisi: document.getElementById('risiko-malnutrisi')?.value || 'Tidak',
        risikoKekerasan: document.getElementById('risiko-kekerasan')?.value || 'Tidak',
        levelRisiko: document.getElementById('level-risiko')?.value,
        rekomendasi: document.getElementById('rekomendasi')?.value
    };
    
    const result = StorageManager.add(StorageManager.KEYS.SCREENING_RISIKO, formData);
    alert(`✅ Screening Risiko berhasil disimpan!`);
}

// ============================================
// PSIKOLOGIS & PEMULANGAN HANDLER
// ============================================

function handlePsikologisPemulangan(event) {
    event.preventDefault();
    
    const formData = {
        noRm: document.getElementById('no-rm-psikologis')?.value,
        tanggal: document.getElementById('tanggal-psikologis')?.value,
        statusEmosional: document.getElementById('status-emosional')?.value,
        dukunganKeluarga: document.getElementById('dukungan-keluarga')?.value,
        kesiapanPulang: document.getElementById('kesiapan-pulang')?.value,
        instruksiPulang: document.getElementById('instruksi-pulang')?.value,
        nasehatKesehatan: document.getElementById('nasehat-kesehatan')?.value,
        follow_up: document.getElementById('follow-up')?.value
    };
    
    const result = StorageManager.add(StorageManager.KEYS.PSIKOLOGIS_PEMULANGAN, formData);
    alert(`✅ Data Psikologis & Pemulangan berhasil disimpan!`);
}

// ============================================
// DIAGNOSIS HANDLER
// ============================================

function handleDiagnosis(event) {
    event.preventDefault();
    
    const formData = {
        noRm: document.getElementById('no-rm-diagnosis')?.value,
        tanggal: document.getElementById('tanggal-diagnosis')?.value,
        diagnosisPrimer: document.getElementById('diagnosis-primer')?.value,
        diagnosisSkunder: document.getElementById('diagnosis-skunder')?.value,
        kodeDiagnosis: document.getElementById('kode-diagnosis')?.value,
        deskripsi: document.getElementById('deskripsi-diagnosis')?.value,
        dokter: document.getElementById('dokter-diagnosis')?.value
    };
    
    const result = StorageManager.add(StorageManager.KEYS.DIAGNOSIS, formData);
    alert(`✅ Diagnosis berhasil disimpan!`);
}

// ============================================
// INFORMED CONSENT HANDLER
// ============================================

function handleInformedConsent(event) {
    event.preventDefault();
    
    const formData = {
        noRm: document.getElementById('no-rm-informed')?.value,
        tanggal: document.getElementById('tanggal-informed')?.value,
        procedur: document.getElementById('procedur-informed')?.value,
        risiko: document.getElementById('risiko-informed')?.value,
        benefit: document.getElementById('benefit-informed')?.value,
        alternatif: document.getElementById('alternatif-informed')?.value,
        pahamInfo: document.getElementById('paham-info')?.checked,
        bersediaProsedu: document.getElementById('bersedia-prosedur')?.checked,
        tanda_tangan: document.getElementById('tanda-tangan-informed')?.value
    };
    
    const result = StorageManager.add(StorageManager.KEYS.INFORMED_CONSENT, formData);
    alert(`✅ Informed Consent berhasil disimpan!`);
}

// ============================================
// GENERAL CONSENT HANDLER
// ============================================

function handleGeneralConsent(event) {
    event.preventDefault();
    
    const formData = {
        noRm: document.getElementById('no-rm-general')?.value,
        tanggal: document.getElementById('tanggal-general')?.value,
        pasienBersedia: document.getElementById('pasien-bersedia')?.checked,
        hak_hak: document.getElementById('hak-hak')?.value,
        kerahasiaanData: document.getElementById('kerahasiaan-data')?.checked,
        tanda_tangan: document.getElementById('tanda-tangan-general')?.value
    };
    
    const result = StorageManager.add(StorageManager.KEYS.GENERAL_CONSENT, formData);
    alert(`✅ General Consent berhasil disimpan!`);
}

// ============================================
// PEMERIKSAAN PENUNJANG HANDLER
// ============================================

function handlePemeriksaanPenunjang(event) {
    event.preventDefault();
    
    const formData = {
        noRm: document.getElementById('no-rm-penunjang')?.value,
        tanggal: document.getElementById('tanggal-penunjang')?.value,
        jenisPemeriksaan: document.getElementById('jenis-penunjang')?.value,
        indikasi: document.getElementById('indikasi-penunjang')?.value,
        urgency: document.getElementById('urgency-penunjang')?.value,
        catatan: document.getElementById('catatan-penunjang')?.value,
        status: 'Pending'
    };
    
    const result = StorageManager.add(StorageManager.KEYS.PEMERIKSAAN_PENUNJANG, formData);
    alert(`✅ Permintaan Pemeriksaan Penunjang berhasil disimpan!`);
}

// ============================================
// RADIOLOGI HANDLER
// ============================================

function handleRadiologi(event) {
    event.preventDefault();
    
    const formData = {
        noRm: document.getElementById('no-rm-radiologi')?.value,
        tanggal: document.getElementById('tanggal-radiologi')?.value,
        jenisRadiologi: document.getElementById('jenis-radiologi')?.value,
        lokasi: document.getElementById('lokasi-radiologi')?.value,
        indikasi: document.getElementById('indikasi-radiologi')?.value,
        hasilRadiologi: document.getElementById('hasil-radiologi')?.value,
        interpretasi: document.getElementById('interpretasi-radiologi')?.value,
        dokterRadiologi: document.getElementById('dokter-radiologi')?.value
    };
    
    const result = StorageManager.add(StorageManager.KEYS.RADIOLOGI, formData);
    alert(`✅ Data Radiologi berhasil disimpan!`);
}

// ============================================
// LABORATORIUM HANDLER
// ============================================

function handleLaboratorium(event) {
    event.preventDefault();
    
    const formData = {
        noRm: document.getElementById('no-rm-lab')?.value,
        tanggal: document.getElementById('tanggal-lab')?.value,
        jenisLab: document.getElementById('jenis-lab')?.value,
        indikasi: document.getElementById('indikasi-lab')?.value,
        urgency: document.getElementById('urgency-lab')?.value,
        status: 'Pending'
    };
    
    const result = StorageManager.add(StorageManager.KEYS.LABORATORIUM, formData);
    alert(`✅ Permintaan Laboratorium berhasil disimpan!`);
}

// ============================================
// HASIL LABORATORIUM HANDLER
// ============================================

function handleHasilLab(event) {
    event.preventDefault();
    
    const formData = {
        noRm: document.getElementById('no-rm-hasil')?.value,
        tanggalPemeriksaan: document.getElementById('tanggal-hasil')?.value,
        jenisPemeriksaan: document.getElementById('jenis-hasil')?.value,
        hasilPemeriksaan: document.getElementById('hasil-pemeriksaan')?.value,
        nilaiNormal: document.getElementById('nilai-normal')?.value,
        interpretasi: document.getElementById('interpretasi-hasil')?.value,
        dokterValidasi: document.getElementById('dokter-validasi')?.value,
        status: 'Validated'
    };
    
    const result = StorageManager.add(StorageManager.KEYS.HASIL_LABORATORIUM, formData);
    alert(`✅ Hasil Laboratorium berhasil disimpan!\\nNo RM: ${result.noRm}`);\n}

// ============================================
// TERAPI HANDLER
// ============================================

function handleTerapi(event) {
    event.preventDefault();
    
    const formData = {
        noRm: document.getElementById('no-rm-terapi')?.value,
        tanggal: document.getElementById('tanggal-terapi')?.value,
        jenisTerapi: document.getElementById('jenis-terapi')?.value,
        indikasi: document.getElementById('indikasi-terapi')?.value,
        durasi: document.getElementById('durasi-terapi')?.value,
        frekuensi: document.getElementById('frekuensi-terapi')?.value,
        instruksi: document.getElementById('instruksi-terapi')?.value,
        dokter: document.getElementById('dokter-terapi')?.value,
        status: 'Active'
    };
    
    const result = StorageManager.add(StorageManager.KEYS.TERAPI, formData);
    alert(`✅ Data Terapi berhasil disimpan!`);
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
            { href: 'farmasi.html', label: 'Farmasi', icon: 'fas fa-prescription-bottle' },
            { href: 'keuangan.html', label: 'Billing', icon: 'fas fa-credit-card' },
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
