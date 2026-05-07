# 🎓 SMK Telkom Purwokerto — Website Resmi

Website resmi **SMK Telkom Purwokerto** — Sekolah Menengah Kejuruan Unggulan berbasis Teknologi dan Informatika di Purwokerto, Jawa Tengah.

## 🌐 Demo

Akses website di: `http://IP-VPS-ANDA` atau `https://www.smktelkompurwokerto.sch.id`

---

## 📁 Struktur Proyek

```
smk-telkom-purwokerto/
├── index.html              ← Halaman Utama (Beranda)
├── README.md               ← Dokumentasi ini
├── .gitignore              ← File yang diabaikan Git
│
├── css/
│   └── style.css           ← Stylesheet global
│
├── js/
│   └── main.js             ← JavaScript utama
│
└── pages/
    ├── profil.html         ← Profil Sekolah
    ├── ppdb.html           ← Penerimaan Peserta Didik Baru
    ├── kontak.html         ← Halaman Kontak
    ├── berita.html         ← Berita & Kegiatan
    ├── galeri.html         ← Galeri Foto
    ├── rpl.html            ← Program RPL
    ├── tkj.html            ← Program TKJ
    ├── multimedia.html     ← Program Multimedia
    └── akuntansi.html      ← Program Akuntansi
```

---

## 🚀 Cara Deploy ke Web Server (Ubuntu + Nginx)

### 1. Clone Repository ke Server

```bash
# Masuk ke VPS via SSH
ssh root@IP-VPS-ANDA

# Bersihkan direktori web default
rm -rf /var/www/html/*

# Clone repository langsung ke /var/www/html
git clone git@github.com:USERNAME/smk-telkom-purwokerto.git /var/www/html

# Atur kepemilikan file ke Nginx
chown -R www-data:www-data /var/www/html
chmod -R 755 /var/www/html
```

### 2. Update Website (Setelah Push ke GitHub)

```bash
cd /var/www/html
git pull origin main
chown -R www-data:www-data /var/www/html
```

### 3. Menggunakan Script Deploy Otomatis

```bash
# Jalankan script deploy
deploy.sh
```

### 4. Konfigurasi Nginx

File konfigurasi sudah sesuai untuk static website. Pastikan Nginx dikonfigurasi:

```nginx
server {
    listen 80;
    server_name smktelkompurwokerto.sch.id www.smktelkompurwokerto.sch.id;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache untuk aset statis
    location ~* \.(css|js|jpg|png|gif|ico|svg|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_types text/html text/css application/javascript;
}
```

---

## ✨ Fitur Website

| Fitur | Deskripsi |
|-------|-----------|
| 📱 Responsive | Tampil sempurna di desktop, tablet, dan mobile |
| 🎨 Modern UI | Desain profesional dengan animasi smooth |
| ⚡ Fast | Murni HTML/CSS/JS — tanpa framework berat |
| 🔍 SEO Ready | Meta tags lengkap untuk mesin pencari |
| ♿ Accessible | Semantic HTML dan ARIA labels |
| 🌙 No Dependencies | Tidak perlu npm install atau build step |

---

## 📄 Halaman yang Tersedia

- **Beranda** — Hero, program keahlian, berita, fasilitas, galeri, testimoni
- **Profil** — Data sekolah, visi misi, struktur organisasi, prestasi
- **PPDB 2025** — Jalur penerimaan, jadwal, syarat, formulir pendaftaran
- **Kontak** — Alamat, telepon, email, jam operasional, form kontak
- **Berita** — Arsip berita dan kegiatan sekolah
- **Galeri** — Dokumentasi foto kegiatan
- **Program Keahlian** — RPL, TKJ, Multimedia, Akuntansi

---

## 🛠️ Teknologi yang Digunakan

- **HTML5** — Struktur semantik
- **CSS3** — Custom Properties, Grid, Flexbox, Animasi
- **JavaScript ES6** — Vanilla JS (tanpa framework)
- **Google Fonts** — Plus Jakarta Sans & Space Mono
- **Nginx** — Web Server di VPS IDCloudHost
- **Ubuntu 22.04 LTS** — Sistem Operasi Server

---

## 📞 Informasi Sekolah

| | |
|---|---|
| **Nama** | SMK Telkom Purwokerto |
| **NPSN** | 20302437 |
| **Akreditasi** | A (Unggul) |
| **Alamat** | Jl. D.I. Panjaitan No.128, Purwokerto Timur, Banyumas 53115 |
| **Telepon** | (0281) 635231 |
| **Email** | info@smktelkompurwokerto.sch.id |
| **Website** | www.smktelkompurwokerto.sch.id |

---

## 📝 Lisensi

© 2025 SMK Telkom Purwokerto. Hak cipta dilindungi undang-undang.  
Website ini dibuat untuk keperluan pendidikan dan informasi publik.

---

*Dibuat dengan ❤️ oleh Tim IT SMK Telkom Purwokerto*
