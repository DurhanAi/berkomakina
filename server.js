import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname tanımı
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Express uygulaması
const app = express();
const port = process.env.PORT || 3000;

// 1. www'den ana domaine yönlendirme
app.use((req, res, next) => {
  if (req.headers.host === 'www.berkomakina.com') {
    return res.redirect(301, 'https://berkomakina.com' + req.url);
  }
  next();
});

// 2. Statik dosyaları sun
const staticPath = path.join(__dirname, 'dist', 'public');
app.use(express.static(staticPath));

// 3. Googlebot erişim log'u (isteğe bağlı)
app.use((req, res, next) => {
  const ua = req.headers['user-agent'] || '';
  if (ua.includes('Googlebot')) {
    console.log('📡 Googlebot erişiyor:', req.url);
  }
  next();
});

// 4. Ana sayfa için index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

// 5. Tüm diğer yolları index.html'e yönlendir (SPA desteği)
app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

// 6. Sunucuyu başlat
app.listen(port, () => {
  console.log(`✅ Site yayında: http://localhost:${port}`);
});
