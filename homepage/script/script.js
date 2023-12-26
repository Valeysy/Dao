document.addEventListener('DOMContentLoaded', function () {
    const scrollToBottomButton = document.getElementById('scroll-to-bottom');

    scrollToBottomButton.addEventListener('click', function () {
        const documentHeight = document.documentElement.scrollHeight;
        window.scrollTo({
            top: documentHeight,
            left: 0,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const scrollToBottomButton = document.getElementById('scroll-to-bottom2');

    scrollToBottomButton.addEventListener('click', function () {
        const documentHeight = document.documentElement.scrollHeight;
        window.scrollTo({
            top: documentHeight,
            left: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest('[data-dropdown]') !== null) return;

    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        if (currentDropdown) {
            currentDropdown.classList.toggle('active');
        }
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
    });
});

