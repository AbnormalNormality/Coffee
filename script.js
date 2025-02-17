const currentUrl = window.location.href;

window.onload_DISABLED = function() {
    const detailsElements = document.querySelectorAll('details');

    detailsElements.forEach(detail => {
        detail.addEventListener('click', function () {
            detailsElements.forEach(otherDetail => {
            if (otherDetail !== detail) {
                otherDetail.removeAttribute('open');
            }
            });
        });
    });
}