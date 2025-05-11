const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const luckyButton = document.getElementById('luckyButton');
const recommendationsDiv = document.getElementById('recommendations');

// Contoh data rekomendasi
const sampleRecommendations = [
    "html tutorial",
    "css examples",
    "javascript basics",
    "web development for beginners",
    "how to learn coding",
    "best programming languages",
    "AI tools",
    "machine learning projects",
    "data science courses"
];

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    recommendationsDiv.innerHTML = ''; // Bersihkan rekomendasi sebelumnya
    recommendationsDiv.style.display = 'none';

    if (query.length > 0) {
        const filteredRecommendations = sampleRecommendations.filter(item =>
            item.toLowerCase().includes(query)
        );

        if (filteredRecommendations.length > 0) {
            recommendationsDiv.style.display = 'block';
            filteredRecommendations.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('recommendation-item');
                div.textContent = item;
                div.addEventListener('click', () => {
                    searchInput.value = item;
                    recommendationsDiv.style.display = 'none';
                    performSearch(item);
                });
                recommendationsDiv.appendChild(div);
            });
        }
    }
});

// Sembunyikan rekomendasi jika klik di luar
document.addEventListener('click', (event) => {
    if (!searchInput.contains(event.target) && !recommendationsDiv.contains(event.target)) {
        recommendationsDiv.style.display = 'none';
    }
});


function performSearch(query) {
    if (query.trim() === '') return;
    // Redirect ke halaman pencarian Google
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

searchButton.addEventListener('click', () => {
    performSearch(searchInput.value);
});

luckyButton.addEventListener('click', () => {
    const query = searchInput.value;
    if (query.trim() === '') {
        // Perilaku default "I'm Feeling Lucky" tanpa query adalah Google Doodles
        window.location.href = 'https://www.google.com/doodles';
    } else {
        // Redirect ke hasil pertama (simulasi, aslinya lebih kompleks)
        // Google sekarang biasanya langsung ke hasil pencarian dengan ?btnI=1
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=1`;
    }
});

searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        performSearch(searchInput.value);
    }
});