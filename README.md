# Direktori Kuliner Sekitar Kampus

Nama: Yabes Situmorang  
NIM: 124140067  
Kelas: RB  
Tema: Direktori Kuliner Sekitar Kampus  
Deployment: https://yabes124140067-commits.github.io/uts-paw/  

![Screenshot Kuliner Sekitar Kampus](docs/screenshots.png)

## Fitur

- Menampilkan daftar tempat kuliner.
- Mencari tempat kuliner berdasarkan judul atau nama tempat.
- Menampilkan dan menyaring tempat kuliner berdasarkan kategori.
- Menampilkan detail informasi setiap tempat kuliner.
- Menambahkan dan menghapus data tempat kuliner.
- Menyimpan data menggunakan localStorage.
- Menampilkan statistik data kuliner.
- Menyediakan halaman tentang, halaman 404, dan tampilan responsif.

## Menjalankan secara lokal

cd app  
npm install  
npm run dev  

## Konsep React yang Dipakai

- Komponen fungsional dengan props (`Layout`, `KartuItem`, `KotakPencarian`, `FormItem`, `TabelStatistik`).
- `useState` dan `useEffect`.
- Context API untuk state koleksi.
- Custom hook `useLocalStorage` dan `useKoleksi`.
- React Router (`NavLink`, `useParams`, `useNavigate`).
- `fetch` dengan `async/await`, form terkontrol, dan rendering daftar dengan `map` dan `key`.
- Pengujian dengan Vitest dan React Testing Library.
