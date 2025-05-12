document.addEventListener('DOMContentLoaded', () => {
    const bitcoinPriceElement = document.getElementById('bitcoin-price');
    const lastUpdatedElement = document.getElementById('last-updated');
    const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=idr';

    async function fetchBitcoinPrice() {
        if (!bitcoinPriceElement || !lastUpdatedElement) {
            console.error('Elemen DOM tidak ditemukan.');
            return;
        }

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                let errorMessage = `Gagal mengambil data: ${response.statusText} (Status: ${response.status})`;
                if (response.status === 429) {
                    errorMessage += '. Batas permintaan API mungkin telah tercapai.';
                }
                throw new Error(errorMessage);
            }
            const data = await response.json();
            
            if (data.bitcoin && typeof data.bitcoin.idr !== 'undefined') {
                const priceInIdr = data.bitcoin.idr;
                const formatter = new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                });
                bitcoinPriceElement.textContent = formatter.format(priceInIdr);
                lastUpdatedElement.textContent = `Update terakhir: ${new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`;
            } else {
                throw new Error('Format data API tidak sesuai atau harga IDR tidak tersedia.');
            }

        } catch (error) {
            console.error('Error fetching Bitcoin price:', error);
            bitcoinPriceElement.textContent = 'Gagal memuat harga.';
            lastUpdatedElement.textContent = `Error: ${error.message}`;
        }
    }

    // Panggil fungsi saat halaman dimuat
    fetchBitcoinPrice();

    // Refresh harga setiap 60 detik (60000 ms) untuk menjaga batas API CoinGecko
    setInterval(fetchBitcoinPrice, 60000);
});