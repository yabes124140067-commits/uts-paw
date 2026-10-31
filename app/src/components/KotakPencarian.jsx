export default function KotakPencarian({ nilai, onUbah }) {
    return (
        <input
            type="search"
            placeholder="Cari nama tempat..."
            aria-label="Cari nama tempat"
            value={nilai}
            onChange={(e) => onUbah(e.target.value)}
        />
    )
}