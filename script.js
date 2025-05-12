const bitcoinPriceElement = document.getElementById('bitcoin-price');
const lastUpdatedElement = document.getElementById('last-updated-time');
const coingeckoApiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';

async function fetchBitcoinPrice() {
    try {
        const response = await fetch(coingeckoApiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        if (data.bitcoin && data.bitcoin.usd) {
            const price = data.bitcoin.usd;
            bitcoinPriceElement.textContent = `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            
            const now = new Date();
            lastUpdatedElement.textContent = now.toLocaleTimeString();
        } else {
            bitcoinPriceElement.textContent = 'Data tidak tersedia';
        }
    } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
        bitcoinPriceElement.textContent = 'Gagal memuat harga';
        lastUpdatedElement.textContent = 'N/A';
    }
}

// Fetch price immediately on load
fetchBitcoinPrice();

// Fetch price every 30 seconds (CoinGecko's API has rate limits, be mindful)
setInterval(fetchBitcoinPrice, 30000);