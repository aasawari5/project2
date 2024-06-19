document.querySelectorAll('.todo_checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            this.nextElementSibling.style.color = 'rgb(84, 35, 0)';
            this.nextElementSibling.style.background = 'rgba(0, 0, 0, 0.13)';
            this.nextElementSibling.style.textDecoration = 'line-through 1.5px';
        } else {
            this.nextElementSibling.style.color = '';
            this.nextElementSibling.style.background = '';
            this.nextElementSibling.style.textDecoration = '';
        }
    });
});
