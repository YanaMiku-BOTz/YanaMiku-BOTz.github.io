const wallpaperImage = document.getElementById('wallpaperImage');
const newWallpaperBtn = document.getElementById('newWallpaperBtn');

// Menggunakan Unsplash Source untuk mendapatkan gambar acak.
// Anda bisa mengganti resolusi (misalnya, 1920x1080) atau menambahkan kata kunci (misalnya, nature, abstract).
// Format: https://source.unsplash.com/WIDTHxHEIGHT/?KEYWORD1,KEYWORD2
// Untuk wallpaper yang lebih beragam, kita bisa variasikan kata kuncinya.
const wallpaperCategories = ['wallpaper', 'nature', 'technology', 'architecture', 'minimalist', 'abstract', 'space', 'landscape'];

function getRandomCategory() {
    const randomIndex = Math.floor(Math.random() * wallpaperCategories.length);
    return wallpaperCategories[randomIndex];
}

function getRandomWallpaperUrl() {
    const category = getRandomCategory();
    // Menggunakan resolusi yang cukup umum, misalnya 1600x900
    // Menambahkan parameter unik (timestamp) untuk memastikan gambar baru selalu diambil (mencegah cache peramban).
    return `https://source.unsplash.com/1600x900/?${category}&sig=${Date.now()}`;
}

function displayRandomWallpaper() {
    wallpaperImage.alt = 'Sedang memuat wallpaper baru...';
    wallpaperImage.src = ''; // Kosongkan src agar alt text terlihat jika gambar lama masih ada

    const imageUrl = getRandomWallpaperUrl();
    wallpaperImage.src = imageUrl;

    wallpaperImage.onload = () => {
        wallpaperImage.alt = 'Wallpaper acak yang berhasil dimuat';
    };

    wallpaperImage.onerror = () => {
        console.error("Gagal memuat wallpaper dari:", imageUrl);
        wallpaperImage.alt = 'Gagal memuat wallpaper. Silakan coba lagi.';
        // Opsional: bisa mencoba memuat gambar lain atau menampilkan gambar fallback default
        // wallpaperImage.src = 'default_error_wallpaper.jpg';
    };
}

// Event listener untuk tombol "Ganti Wallpaper"
newWallpaperBtn.addEventListener('click', displayRandomWallpaper);

// Tampilkan wallpaper acak saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', () => {
    displayRandomWallpaper();
});