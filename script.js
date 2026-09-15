// =========================================================================
// TEMPAT MEMASUKKAN NOMOR WHATSAPP ANDA
// Ubah "628xxxxxxxxxx" di bawah ini dengan nomor WhatsApp bisnis Manpour.
// Gunakan kode negara "62" di awal, TANPA tanda '+' dan TANPA angka '0' di depan.
// Contoh: const whatsappNumber = "6281234567890";
// =========================================================================

const whatsappNumber = "6281545410542"; 

/**
 * Fungsi untuk mengarahkan pengguna ke WhatsApp dengan format pesan otomatis
 * @param {string} itemName - Nama produk/layanan yang dipesan
 */
function orderViaWA(itemName) {
    if (whatsappNumber === "628xxxxxxxxxx") {
        alert("Nomor WhatsApp belum dikonfigurasi. Silakan perbarui variabel 'whatsappNumber' di script.js!");
        return;
    }

    // Format pesan otomatis
    const message = `Halo Manpour, saya ingin memesan/tanya info lebih lanjut tentang: *${itemName}*.`;
    
    // Encode teks agar valid dalam URL
    const encodedMessage = encodeURIComponent(message);
    
    // Buat tautan akhir WhatsApp
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Buka tautan WhatsApp di tab baru
    window.open(waUrl, '_blank');
}
