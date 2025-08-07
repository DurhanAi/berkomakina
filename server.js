import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname ve __filename tanımı
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Express uygulaması
const app = express();
const port = 3000;

// Statik dosyaları dist/public klasöründen sun
const staticPath = path.join(__dirname, 'dist', 'public');
app.use(express.static(staticPath));

// Ana sayfa için index.html'i sun
app.get('/', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`✅ Site yayında: http://localhost:${port}`);
});
