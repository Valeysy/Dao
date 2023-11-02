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