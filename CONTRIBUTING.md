# Contributing Guidelines

Terima kasih telah tertarik untuk berkontribusi pada proyek Sistem Informasi IGD Rumah Sakit Jaya Sehat!

## Cara Berkontribusi

### 1. Pelaporan Bug
Jika menemukan bug, silakan buat issue dengan detail:
- Deskripsi masalah yang jelas
- Steps untuk reproduce
- Expected behavior
- Actual behavior
- Screenshot (jika relevan)
- Browser & OS info

### 2. Mengusulkan Fitur
Untuk fitur baru:
- Jelaskan use case & keuntungannya
- Berikan contoh atau mockup
- Diskusikan implementasi yang mungkin

### 3. Code Contribution

#### Setup Development
```bash
git clone https://github.com/yourusername/rumah-sakit-sistem-igd.git
cd rumah-sakit-sistem-igd
```

#### Branch Naming
- `feature/nama-fitur` - untuk fitur baru
- `bugfix/nama-bug` - untuk perbaikan bug
- `docs/nama-doc` - untuk dokumentasi
- `style/nama-perubahan` - untuk styling

#### Commit Message Format
```
[TYPE] Deskripsi singkat

Penjelasan lebih detail jika diperlukan
- Poin 1
- Poin 2
```

**Types:**
- `feat:` - Fitur baru
- `fix:` - Perbaikan bug
- `docs:` - Dokumentasi
- `style:` - Formatting/styling
- `refactor:` - Refactoring code
- `perf:` - Performance improvement
- `test:` - Testing
- `chore:` - Maintenance tasks

#### Pull Request Process
1. Fork repository
2. Buat branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit dengan pesan yang jelas (`git commit -m 'feat: Add amazing feature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request dengan deskripsi lengkap

### 4. Code Style Guide

#### HTML
- Gunakan semantic HTML5 tags
- Indent 4 spaces
- Attribute names lowercase
- Self-closing tags: `<input ... />`

#### CSS
- Gunakan CSS3 features
- Class naming: kebab-case
- BEM naming convention untuk kompleks component
- Group related properties
- Comment untuk logic kompleks

#### JavaScript
- Use `const` dan `let`, hindari `var`
- Camel case untuk variable & function names
- Arrow functions untuk callbacks
- Template literals untuk string
- JSDoc comments untuk functions

### 5. Testing
- Test di berbagai browser (Chrome, Firefox, Safari, Edge)
- Test responsive design (mobile, tablet, desktop)
- Test form validation
- Test navigation & routing

### 6. Documentation
- Update README jika ada fitur baru
- Dokumentasi API/function jika perlu
- Update CHANGELOG.md

---

## Code Review Checklist

- ✅ Code mengikuti style guide
- ✅ Tidak ada console errors/warnings
- ✅ Responsive & accessible
- ✅ Performance-optimized
- ✅ Browser compatibility
- ✅ Documentation updated

---

## Community Guidelines

- Bersikap sopan & respek satu sama lain
- Hindari spam atau promotion
- Bantu sesama contributor
- Terima feedback dengan baik

---

Terima kasih atas kontribusinya! 🎉
