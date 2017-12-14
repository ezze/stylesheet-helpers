const selectorSplitRegExp = /(\.|::?)?([^.:]+)/g;

export function getStylesheets() {
    return document.styleSheets;
}

export function getStylesheetRule(pattern) {
    const stylesheets = getStylesheets();
    for (let i = 0; i < stylesheets.length; i++) {
        const cssRules = stylesheets[i].cssRules;
        for (let j = 0; j < cssRules.length; j++) {
            const cssRule = cssRules[j];
            if (matchSelector(cssRule.selectorText, pattern)) {
                return cssRule;
            }
        }
    }
    return null;
}

export function getStylesheetRules(pattern) {
    const stylesheets = getStylesheets();
    const rules = [];
    for (let i = 0; i < stylesheets.length; i++) {
        const cssRules = stylesheets.cssRules;
        for (let j = 0; j < cssRules.length; j++) {
            const cssRule = cssRules[j];
            if (matchSelector(cssRule.selectorText, pattern)) {
                rules.push(cssRule);
            }
        }
    }
    return rules;
}

function matchSelector(selector, pattern) {
    if (selector === undefined) {
        return false;
    }

    if (pattern instanceof RegExp) {
        return pattern.test(selector);
    }

    const selectorParts = selector.split(' ');
    const patternParts = pattern.split(' ');
    if (selectorParts.length !== patternParts.length) {
        return false;
    }

    for (let i = 0; i < selectorParts.length; i++) {
        const selectorPartSplit = selectorParts[i].match(selectorSplitRegExp);
        if (selectorPartSplit === null) {
            return false;
        }

        let unmatched = patternParts[i];
        for (let j = 0; j < selectorPartSplit.length; j++) {
            unmatched = unmatched.replace(selectorPartSplit[j], '');
        }

        if (unmatched.length > 0) {
            return false;
        }
    }
    return true;
}
