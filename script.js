function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
        } else if (item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    alert('Thank you for your message!');
    
    document.querySelector('form').reset();
});
