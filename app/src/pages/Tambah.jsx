import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'
const AWAL = { judul: '', kategori: 'Makanan Cepat Saji', alamat: '', hargaRataRata: '', jamBuka: '' }

export default function Tambah() {
    const { tambah } = useKoleksi()
    const navigate = useNavigate()
    const [form, setForm] = useState(AWAL)
    const [galat, setGalat] = useState('')

    const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })


    const simpan = (e) => {
        e.preventDefault()
        if (form.judul.trim().length < 1) {
            setGalat('Tidak boleh kosong')
            return
        }
        tambah({
            ...form,
            judul: form.judul.trim(),
            alamat: form.alamat.trim(),
            jamBuka: form.jamBuka.trim(),
            hargaRataRata: Number(form.hargaRataRata)
        })
        navigate('/koleksi')
    }

    return (
        <form className="formulir" onSubmit={simpan} noValidate>
            <h1>Tambah Direktori Kuliner</h1>

            <label htmlFor="judul">Judul</label>
            <input id="judul" name="judul" value={form.judul} onChange={ubah} />

            <label htmlFor="kategori">Kategori</label>
            <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
                <option>Makanan Cepat Saji</option>
                <option>Warung Makan Rumahan</option>
                <option>Restoran</option>
            </select>

            <label htmlFor="alamat">Alamat </label>
            <input id="alamat" name="alamat" placeholder="Jl, Terusan Ryacudu, Way Hui, Jati Agung, Lampung Selatan" value={form.alamat} onChange={ubah} />

            <label htmlFor="hargaRataRata">Harga Rata-rata</label>
            <input id="hargaRataRata" name="hargaRataRata" type='number' required min={0} value={form.hargaRataRata} onChange={ubah} />


            <label htmlFor="jamBuka">Jam Buka</label>
            <input id="jamBuka" name="jamBuka" required placeholder="Contoh: 09:00 - 22:00 WIB" value={form.jamBuka} onChange={ubah} />
            {galat && <p role="alert">{galat}</p>}
            <button type="submit">Simpan</button>
        </form>


    )
}