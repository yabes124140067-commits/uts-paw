
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import KartuItem from './KartuItem.jsx'

test('KartuItem menampilkan judul dan kategori tempat kuliner', () => {
    const item = {
        id: "1",
        judul: 'Warung Mirah WayHuwi',
        kategori: 'Warung Makan Rumahan',
        jamBuka: '05:30 - 22:00'
    }

    render(
        <MemoryRouter>
            <KartuItem item={item} />
        </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: 'Warung Mirah WayHuwi' }))
        .toBeInTheDocument()

    expect(screen.getByText(/Warung Makan Rumahan/))
        .toBeInTheDocument()
})
