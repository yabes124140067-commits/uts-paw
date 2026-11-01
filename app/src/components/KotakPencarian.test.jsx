
import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import KotakPencarian from './KotakPencarian.jsx'

test('KotakPencarian memanggil onUbah dengan nilai pencarian', () => {
    const onUbah = vi.fn()

    render(
        <KotakPencarian nilai="" onUbah={onUbah} />
    )

    const input = screen.getByRole('searchbox')

    fireEvent.change(input, {
        target: { value: 'Kuliner' }
    })

    expect(onUbah).toHaveBeenCalledWith('Kuliner')
})
