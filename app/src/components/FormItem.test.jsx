
import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import FormItem from './FormItem.jsx'

test('FormItem menampilkan pesan galat ketika judul kosong', () => {
    const form = {
        judul: '',
        kategori: 'Makanan Cepat Saji',
        alamat: '',
        hargaRataRata: '',
        jamBuka: ''
    }

    render(
        <FormItem
            form={form}
            galat="Tidak boleh kosong"
            ubah={vi.fn()}
            simpan={vi.fn()}
        />
    )

    expect(screen.getByRole('alert'))
        .toHaveTextContent('Tidak boleh kosong')
})
