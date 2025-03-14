async function clearCacheAndReload() {
    if ("caches" in window) {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(name => caches.delete(name)));
    }

    if (navigator.serviceWorker) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (let registration of registrations) {
            registration.unregister();
        }
    }

    window.location.reload(true);
}

const detailsElements = document.querySelectorAll('details');

document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode == 8) {
        closeDetails();
    }

    if (event.isComposing || event.keyCode == 13) {
        openDetails();
    }
});

function openDetails() {
    detailsElements.forEach(otherDetail => {
        otherDetail.setAttribute('open', true);
    });
};

function closeDetails() {
    detailsElements.forEach(otherDetail => {
        otherDetail.removeAttribute('open');
    });
};