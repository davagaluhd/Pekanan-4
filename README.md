# Pekanan-4
Halo, ini adalah Tugas Pekanan 4 - API Automation (SanberCode Automation) 

Cara menjalankan script:
(https://drive.google.com/file/d/16_k9EO-b46Ld1QjJTRPi7ZTKifI6icfi/view?usp=share_link)

1. Buka Terminal
2. Clone repository ini
```
git clone https://github.com/davagaluhd/Pekanan-4.git
```
3. Jalankan script 
```
npm run test test/login.js
```

Penjelasan:
Terdapat 4 endpoint yaitu CRUD dengan masing-masing memiliki 2 test case (positif dan negatif). Pengujian API ini menggunakan KASIR AJA API CONTRACT/DOCUMENTATION fitur Unit.
1. Create Unit
    - Positif = Dapat membuat unit dengan menggunakan valid data
    - Negatif = Tidak dapat membuat unit jika tidak mengisi nama dan deskripsi

2. Get Unit
    - Positif = Dapat mengambil data unit yang sebelumnya telah dibuat menggunakan unitID
    - Negatif = Tidak dapat mengambil data unit jika unitID salah

3. Update Unit
    - Positif = Dapat memperbaharui data unit yang sebelumnya telah dibuat
    - Negatif = Tidak dapat mengambil data unit jika unitID salah

4. Update Unit
    - Positif = Dapat menghapus data unit yang sebelumnya telah dibuat
    - Negatif = Tidak dapat mengambil data unit jika unitID salah