export default function gambarPengurus() {
    const divisi = import.meta.glob('/src/assets/img/pengurus/**/*.jpg', { eager: true });

    // console.log('Divisi:', divisi); // Tambahkan ini untuk melihat path yang terdaftar

    return (fileName) => {
        const key = `/src/assets/img/pengurus/${fileName}`;
        // console.log('Key:', key); // Tambahkan ini untuk melihat key yang dicari
        return divisi[key]?.default || '';
    };
}
