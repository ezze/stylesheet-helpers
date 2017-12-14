import ensureStylesheetsAreReady from './ensureStylesheetsAreReady';
import getImageUrls from './getImageUrls';

export default async function preloadImages(logging) {
    logging = logging || false;

    await ensureStylesheetsAreReady();

    const urls = getImageUrls();

    return new Promise(resolve => {
        let count = 0;

        const onImageLoad = url => {
            return () => {
                if (logging) {
                    console.log(`Image "${url}" is loaded.`);
                }
                count++;
                if (url.length === count) {
                    resolve();
                }
            };
        };

        const onImageError = url => {
            return () => {
                if (logging) {
                    console.error(`Unable to load image "${url}".`);
                }
                count++;
                if (url.length === count) {
                    resolve();
                }
            };
        };

        for (let i = 0; i < urls.length; i++) {
            const url = urls[i];
            const image = new Image();
            image.src = url;
            image.onload = onImageLoad(url);
            image.onerror = onImageError(url);
        }
    });
}
