import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'
const AWAL = { judul: '', kategori: 'Restoran', alamat: '', hargaRataRata: '', waktuBuka: '' }

export default function Tambah() {
    const { tambah } = useKoleksi()
    const navigate = useNavigate()
    const [form, setForm] = useState(AWAL)
    const [galat, setGalat] = useState('')

    const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })


    const simpan = (e) => {
        e.preventDefault()
        if (form.judul.trim().length < 3) {
            setGalat('judul wajib diisi, minimal 3 karakter.')
            return
        }
        if (form.alamat.trim() === '') {
            setGalat('Alamat wajib diisi')
            return
        }
        if (form.hargaRataRata === '' || Number(form.hargaRataRata) < 0) {
            setGalat('Harga rata-rata wajib diisi dan tidak boleh kurang dari 0')
            return
        }
        if (form.waktuBuka.trim() === '') {
            setGalat('Waktu buka wajib diisi')
            return
        }
        tambah({
            ...form,
            judul: form.judul.trim(),
            alamat: form.alamat.trim(),
            waktuBuka: form.waktuBuka.trim(),
            hargaRataRata: Number(form.hargaRataRata)
        })
        navigate('/koleksi')
    }

    return (
        <form className="formulir" onSubmit={simpan} noValidate>
            <h1>Tambah Direktori Kuliner</h1>

            <label htmlFor="judul">Nama Tempat Kuliner</label>
            <input id="judul" name="judul" value={form.judul} onChange={ubah} />

            <label htmlFor="kategori">Kategori</label>
            <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
                <option>Makanan Cepat Saji</option>
                <option>Warung Makan Rumahan</option>
                <option>Restoran</option>
            </select>

            <label htmlFor="alamat">Alamat </label>
            <input id="alamat" name="alamat" placeholder="Jl. Airan Raya, Way Hui, Jati Agung, Lampung Selatan" value={form.alamat} onChange={ubah} />

            <label htmlFor="hargaRataRata">Harga Rata-rata</label>
            <input id="hargaRataRata" name="hargaRataRata" type='number' required min={0} value={form.hargaRataRata} onChange={ubah} />


            <label htmlFor="waktuBuka">Waktu Buka</label>
            <input id="waktuBuka" name="waktuBuka" required placeholder="Contoh: 09:00 - 22:00 WIB" value={form.waktuBuka} onChange={ubah} />
            {galat && <p role="alert">{galat}</p>}
            <button type="submit">Simpan</button>
        </form>


    )
}