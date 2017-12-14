let ready = false;

export default function ensureStylesheetsAreReady() {
    if (ready) {
        return Promise.resolve();
    }

    return new Promise(resolve => {
        const stylesheetLinks = document.querySelectorAll('link[rel="stylesheet"]');
        if (stylesheetLinks.length > 0) {
            let loadedCount = 0;
            for (let i = 0; i < stylesheetLinks.length; i++) {
                const img = document.createElement('img');
                img.onerror = () => {
                    loadedCount++;
                    if (stylesheetLinks.length === loadedCount) {
                        ready = true;
                        resolve();
                    }
                };
                img.src = stylesheetLinks[i].getAttribute('href');
            }
        }
        else {
            ready = true;
            resolve();
        }
    });
}
