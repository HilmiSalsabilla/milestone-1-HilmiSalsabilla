(function () {
    const nav = document.querySelector('nav.site-nav');
    const btt = document.getElementById('btt');
    
    if (!nav) return;

    let lastScrollY = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
        window.requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;

            // Menyembunyikan/menampilkan navigasi berdasarkan arah scroll
            nav.classList.toggle('hide', currentScrollY > lastScrollY && currentScrollY > 120);
            
            // Menampilkan tombol Back to Top jika scroll lebih dari 400px
            if (btt) {
            btt.classList.toggle('show', currentScrollY > 400);
            }

            lastScrollY = currentScrollY;
            ticking = false;
        });

        ticking = true;
        }
    });
})();

function handleForm(e) {
    e.preventDefault();

    const btn = document.getElementById('send-btn');
    const statusMsg = document.getElementById('form-status');

    // Mengubah status tombol saat mengirim
    btn.textContent = 'Sending…';
    btn.disabled = true;

    setTimeout(() => {
        // Status setelah sukses terkirim
        btn.textContent = 'Message Sent ✓';
        statusMsg.classList.remove('hidden');
        statusMsg.textContent = "Thanks! I'll get back to you soon.";
        
        e.target.reset();

        // Mengembalikan tombol ke kondisi awal setelah 3 detik
        setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.disabled = false;
        }, 3000);
    }, 900);
}