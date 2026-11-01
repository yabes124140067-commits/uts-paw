import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, expect, test, vi } from 'vitest'
import App from './App.jsx'

const { mockUseKoleksi } = vi.hoisted(() => ({
  mockUseKoleksi: vi.fn(),
}))

vi.mock('./hooks/useKoleksi.js', () => ({
  default: mockUseKoleksi,
}))

const dataContoh = [
  {
    id: '1',
    judul: 'Warung Mirah',
    kategori: 'Warung Makan Rumahan',
    alamat: 'Way Huwi',
    hargaRataRata: 8000,
    jamBuka: '05:30-22:00',
  },
  {
    id: '2',
    judul: 'Mie Gacoan',
    kategori: 'Makanan Cepat Saji',
    alamat: 'Airan Raya',
    hargaRataRata: 15000,
    jamBuka: '00:00-23:59',
  },
]

beforeEach(() => {
  mockUseKoleksi.mockReturnValue({
    items: dataContoh,
    loading: false,
    error: null,
    hapus: vi.fn(),
    tambah: vi.fn(),
  })
})

test('rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/tidak-ada']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

test('halaman koleksi menampilkan daftar tempat kuliner', () => {
  render(
    <MemoryRouter initialEntries={['/koleksi']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: 'Koleksi Tempat Kuliner' })).toBeInTheDocument()
  expect(screen.getByText('Warung Mirah')).toBeInTheDocument()
  expect(screen.getByText('Mie Gacoan')).toBeInTheDocument()
})

test('pencarian menampilkan tempat sesuai judul', () => {
  render(
    <MemoryRouter initialEntries={['/koleksi']}>
      <App />
    </MemoryRouter>,
  )
  fireEvent.change(screen.getByRole('searchbox'), {
    target: { value: 'Warung Mirah' },
  })
  expect(screen.getByText('Warung Mirah')).toBeInTheDocument()
  expect(screen.queryByText('Mie Gacoan')).not.toBeInTheDocument()
})

test('filter kategori menampilkan kategori yang dipilih', () => {
  render(
    <MemoryRouter initialEntries={['/koleksi']}>
      <App />
    </MemoryRouter>,
  )
  fireEvent.change(screen.getByRole('combobox', { name: 'Kategori' }), {
    target: { value: 'Makanan Cepat Saji' },
  })
  expect(screen.getByText('Mie Gacoan')).toBeInTheDocument()
  expect(screen.queryByText('Warung Mirah')).not.toBeInTheDocument()
})

test('halaman detail menampilkan informasi tempat kuliner', () => {
  render(
    <MemoryRouter initialEntries={['/koleksi/1']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: 'Warung Mirah' })).toBeInTheDocument()
  expect(screen.getByText('Warung Makan Rumahan')).toBeInTheDocument()
  expect(screen.getByText('Way Huwi')).toBeInTheDocument()
  expect(screen.getByText('05:30-22:00')).toBeInTheDocument()
})
