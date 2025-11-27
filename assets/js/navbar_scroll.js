document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const header = document.querySelector('.site-header');
    const scrollThreshold = 100;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScroll <= scrollThreshold) {
            header.classList.remove('hidden');
            return;
        }
        
        // Scrolling down
        if (currentScroll > lastScrollTop) {
            header.classList.add('hidden');
        } 
        // Scrolling up
        else {
            header.classList.remove('hidden');
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false);
});