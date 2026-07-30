# Portfolio — Akhdan Rafif Nugraha

Website portfolio pribadi, menampilkan proyek, pengalaman, sertifikasi, dan skill sebagai DevOps & Infrastructure Engineer.

## Teknologi

- **Frontend:** HTML, CSS, JavaScript (vanilla)
- **Server:** Nginx (alpine)
- **Deployment:** Docker & Docker Compose
- **CI/CD:** GitHub Actions → GHCR

## Struktur

```
.
├── index.html          # Halaman utama
├── styles.css          # Styling
├── script.js           # Typewriter effect, scroll animation, nav, dll.
├── config.js           # Konfigurasi URL sertifikat
├── cv.md               # CV dalam format Markdown
├── Dockerfile          # Build image Nginx
└── docker-compose.yml  # Deployment config
```

## Menjalankan Lokal

Cukup buka `index.html` langsung di browser.

## Menjalankan dengan Docker

```bash
docker compose up -d
```

Akses di `http://localhost:8050`.

## Deployment

Image Docker otomatis dibuild dan dipush ke GHCR melalui GitHub Actions setiap push ke `master`. Mendukung arsitektur `linux/amd64` dan `linux/arm64`.
