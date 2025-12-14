// Role-Based Access Control Management
class RoleManager {
    constructor() {
        this.currentRole = localStorage.getItem('userRole') || null;
        this.currentUser = JSON.parse(localStorage.getItem('userData')) || null;
    }

    // Set role ketika login
    setRole(role, userData = {}) {
        this.currentRole = role;
        this.currentUser = {
            name: userData.name || 'User',
            email: userData.email || '',
            id: userData.id || '',
            role: role
        };
        localStorage.setItem('userRole', role);
        localStorage.setItem('userData', JSON.stringify(this.currentUser));
    }

    // Get current role
    getRole() {
        return this.currentRole;
    }

    // Get current user
    getUser() {
        return this.currentUser;
    }

    // Check if user is logged in
    isLoggedIn() {
        return this.currentRole !== null;
    }

    // Check if user has specific role
    hasRole(role) {
        if (Array.isArray(role)) {
            return role.includes(this.currentRole);
        }
        return this.currentRole === role;
    }

    // Logout
    logout() {
        localStorage.removeItem('userRole');
        localStorage.removeItem('userData');
        this.currentRole = null;
        this.currentUser = null;
        window.location.href = 'index.html';
    }

    // Clear role (alias for logout, used by external code)
    clearRole() {
        this.logout();
    }

    // Redirect if not logged in (disabled for mock/demo views)
    requireLogin(allowedRoles = null) {
        // Access control is intentionally disabled to allow figma-style preview.
        // Always return true without redirect so all roles (or no role) can see the UI.
        return true;
    }

    // Get menu items based on role
    getMenuItems() {
        const menus = {
            pasien: [
                { name: 'Beranda', icon: 'fas fa-home', href: 'dashboard-pasien.html' },
                { name: 'Identitas Saya', icon: 'fas fa-id-card', href: 'identitas-pasien.html' },
                { name: 'Pendaftaran Kunjungan', icon: 'fas fa-clipboard', href: 'pendaftaran-pasien.html' },
                { name: 'Riwayat Kunjungan', icon: 'fas fa-history', href: 'daftar-kunjungan.html' },
                { name: 'Hasil Laboratorium', icon: 'fas fa-flask', href: 'hasil-laboratorium.html' },
                { name: 'Terapi', icon: 'fas fa-pills', href: 'terapi.html' },
                { name: 'Halaman Utama', icon: 'fas fa-arrow-left', href: 'index.html' }
            ],
            perawat: [
                { name: 'Dashboard', icon: 'fas fa-home', href: 'dashboard-admin.html' },
                { name: 'Identifikasi Pasien', icon: 'fas fa-id-card', href: 'identitas-pasien.html' },
                { name: 'Daftar Kunjungan', icon: 'fas fa-list', href: 'daftar-kunjungan.html' },
                { name: 'Triase IGD', icon: 'fas fa-heartbeat', href: 'triase-igd.html' },
                { name: 'Assessment IGD', icon: 'fas fa-stethoscope', href: 'assessment-igd.html' },
                { name: 'Pemeriksaan Fisik', icon: 'fas fa-procedures', href: 'pemeriksaan-fisik-1.html' },
                { name: 'Pengaturan', icon: 'fas fa-cog', href: 'setting.html' }
            ],
            dokter: [
                { name: 'Dashboard', icon: 'fas fa-home', href: 'dashboard-admin.html' },
                { name: 'Identifikasi Pasien', icon: 'fas fa-id-card', href: 'identitas-pasien.html' },
                { name: 'Daftar Kunjungan', icon: 'fas fa-list', href: 'daftar-kunjungan.html' },
                { name: 'General Consent', icon: 'fas fa-file-contract', href: 'general-consent.html' },
                { name: 'Assessment IGD', icon: 'fas fa-stethoscope', href: 'assessment-igd.html' },
                { name: 'Pemeriksaan Fisik', icon: 'fas fa-procedures', href: 'pemeriksaan-fisik-1.html' },
                { name: 'Laboratorium', icon: 'fas fa-flask', href: 'laboratorium-1.html' },
                { name: 'Diagnosis', icon: 'fas fa-file-medical', href: 'diagnosis.html' },
                { name: 'Pengaturan', icon: 'fas fa-cog', href: 'setting.html' }
            ],
            pmik: [
                { name: 'Dashboard', icon: 'fas fa-home', href: 'dashboard-admin.html' },
                { name: 'Identifikasi Pasien', icon: 'fas fa-id-card', href: 'identitas-pasien.html' },
                { name: 'Daftar Kunjungan', icon: 'fas fa-list', href: 'daftar-kunjungan.html' },
                { name: 'General Consent', icon: 'fas fa-file-contract', href: 'general-consent.html' },
                { name: 'Triase IGD', icon: 'fas fa-heartbeat', href: 'triase-igd.html' },
                { name: 'Assessment IGD', icon: 'fas fa-stethoscope', href: 'assessment-igd.html' },
                { name: 'Pemeriksaan Fisik', icon: 'fas fa-procedures', href: 'pemeriksaan-fisik-1.html' },
                { name: 'Laboratorium', icon: 'fas fa-flask', href: 'laboratorium-1.html' },
                { name: 'Diagnosis', icon: 'fas fa-file-medical', href: 'diagnosis.html' },
                { name: 'Pengaturan', icon: 'fas fa-cog', href: 'setting.html' }
            ],
            farmasi: [
                { name: 'Dashboard', icon: 'fas fa-home', href: 'dashboard-admin.html' },
                { name: 'Identifikasi Pasien', icon: 'fas fa-id-card', href: 'identitas-pasien.html' },
                { name: 'Daftar Kunjungan', icon: 'fas fa-list', href: 'daftar-kunjungan.html' },
                { name: 'Diagnosis', icon: 'fas fa-file-medical', href: 'diagnosis.html' },
                { name: 'Farmasi', icon: 'fas fa-prescription-bottle', href: 'farmasi.html' },
                { name: 'Pengaturan', icon: 'fas fa-cog', href: 'setting.html' }
            ],
            keuangan: [
                { name: 'Dashboard', icon: 'fas fa-home', href: 'dashboard-admin.html' },
                { name: 'Daftar Kunjungan', icon: 'fas fa-list', href: 'daftar-kunjungan.html' },
                { name: 'Keuangan', icon: 'fas fa-credit-card', href: 'keuangan.html' },
                { name: 'Pengaturan', icon: 'fas fa-cog', href: 'setting.html' }
            ],
            admin: [
                { name: 'Dashboard', icon: 'fas fa-home', href: 'dashboard-admin.html' },
                { name: 'Identifikasi Pasien', icon: 'fas fa-id-card', href: 'identitas-pasien.html' },
                { name: 'Daftar Kunjungan', icon: 'fas fa-list', href: 'daftar-kunjungan.html' },
                { name: 'General Consent', icon: 'fas fa-file-contract', href: 'general-consent.html' },
                { name: 'Triase IGD', icon: 'fas fa-heartbeat', href: 'triase-igd.html' },
                { name: 'Assessment IGD', icon: 'fas fa-stethoscope', href: 'assessment-igd.html' },
                { name: 'Pemeriksaan Fisik', icon: 'fas fa-procedures', href: 'pemeriksaan-fisik-1.html' },
                { name: 'Laboratorium', icon: 'fas fa-flask', href: 'laboratorium-1.html' },
                { name: 'Diagnosis', icon: 'fas fa-file-medical', href: 'diagnosis.html' },
                { name: 'Farmasi', icon: 'fas fa-prescription-bottle', href: 'farmasi.html' },
                { name: 'Keuangan', icon: 'fas fa-credit-card', href: 'keuangan.html' },
                { name: 'Pengaturan', icon: 'fas fa-cog', href: 'setting.html' }
            ]
        };

        return menus[this.currentRole] || [];
    }

    // Get role display name
    getRoleDisplayName() {
        const roleNames = {
            pasien: 'Pasien',
            perawat: 'Perawat',
            dokter: 'Dokter',
            pmik: 'PMIK',
            farmasi: 'Farmasi',
            keuangan: 'Keuangan',
            admin: 'Administrator'
        };
        return roleNames[this.currentRole] || 'User';
    }
}

// Create global instance
const roleManager = new RoleManager();

// Update navbar profile dengan role dan user info
function updateNavbarProfile() {
    if (roleManager.isLoggedIn()) {
        const user = roleManager.getUser();
        const profileSpans = document.querySelectorAll('.admin-profile span');
        if (profileSpans.length > 0) {
            profileSpans[0].textContent = user.name || 'User';
        }

        // Tambah role indicator di navbar
        const navbarLogo = document.querySelector('.navbar-logo span');
        if (navbarLogo && !navbarLogo.textContent.includes(roleManager.getRoleDisplayName())) {
            // Update berdasarkan halaman
        }
    }
}

// Render sidebar berdasarkan role
function renderSidebar() {
    // Skip if unified sidebar is active
    if (window.DISABLE_ROLE_SIDEBAR) {
        console.log('Unified sidebar active, skipping role-based sidebar');
        return;
    }
    
    if (!roleManager.isLoggedIn()) {
        console.log('User not logged in');
        return;
    }

    const sidebarNav = document.querySelector('.sidebar-nav');
    // Skip if unified sidebar is injected elsewhere
    if (!sidebarNav || window.DISABLE_ROLE_SIDEBAR) return;

    const menuItems = roleManager.getMenuItems();
    const currentPage = window.location.pathname.split('/').pop();

    sidebarNav.innerHTML = '';

    menuItems.forEach(item => {
        const link = document.createElement('a');
        link.href = item.href;
        link.className = 'nav-item';
        
        // Set active class if current page matches
        if (currentPage === item.href || (currentPage === '' && item.href === 'dashboard-admin.html')) {
            link.classList.add('active');
        }

        link.innerHTML = `
            <i class="${item.icon}"></i>
            <span>${item.name}</span>
        `;

        sidebarNav.appendChild(link);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit to let unified shell build first
    setTimeout(() => {
        if (!window.DISABLE_ROLE_SIDEBAR) {
            updateNavbarProfile();
            renderSidebar();
        }
    }, 50);
});
