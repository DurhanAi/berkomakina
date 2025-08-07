import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname ve __filename tanımı
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Express uygulaması
const app = express();
const port = process.env.PORT || 3000;

// 1. www’den ana domaine yönlendirme middleware’i
app.use((req, res, next) => {
  if (req.headers.host === 'www.berkomakina.com') {
    return res.redirect(301, 'https://berkomakina.com' + req.url);
  }
  next();
});

// 2. Statik dosyaları dist/public klasöründen sun
const staticPath = path.join(__dirname, 'dist', 'public');
app.use(express.static(staticPath));

// 3. Ana sayfa için index.html'i sun
app.get('/', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

// 4. Sunucuyu başlat
app.listen(port, () => {
  console.log(`✅ Site yayında: http://localhost:${port}`);
});
