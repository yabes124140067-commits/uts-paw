
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import FormItem from '../components/FormItem.jsx'
import './Tambah.css'

const AWAL = {
    judul: '',
    kategori: 'Makanan Cepat Saji',
    alamat: '',
    hargaRataRata: '',
    jamBuka: ''
}

export default function Tambah() {
    const { tambah } = useKoleksi()
    const navigate = useNavigate()
    const [form, setForm] = useState(AWAL)
    const [galat, setGalat] = useState('')

    const ubah = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

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
        <FormItem
            form={form}
            galat={galat}
            ubah={ubah}
            simpan={simpan}
        />
    )
}
