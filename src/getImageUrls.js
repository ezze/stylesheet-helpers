const imgUrlRegExp = /url\((['"])?([^'"()]+(jpg|png|svg))(['"])\)?/;

import { getStylesheets } from './stylesheet';

export default function getImageUrls() {
    const stylesheets = getStylesheets();
    const urls = [];
    for (let i = 0; i < stylesheets.length; i++) {
        const cssRules = stylesheets[i].cssRules;
        for (let j = 0; j < cssRules.length; j++) {
            const cssRule = cssRules[j];
            if (!(cssRule.style instanceof CSSStyleDeclaration)) {
                continue;
            }
            for (let k = 0; k < cssRule.style.length; k++) {
                const property = cssRule.style[k];
                const urlMatch = cssRule.style[property].match(imgUrlRegExp);
                if (urlMatch !== null && !urls.includes(urlMatch[2])) {
                    urls.push(urlMatch[2]);
                }
            }
        }
    }
    return urls;
}
