/* Jori Hiltunen */

//
// IMPORT WEBSITE COMPONENTS USING fetch()
//

// External components listed here will be fetched (imported)
const loadComponents = ["nav"];

/**
 * Replaces a tag with /assets/sites/components/tag.html contents
 * For component import to function, a webserver is required
 * @param {string} tag  - Tag to be replaced with tag.html contents
 */
const componentFetch = async (tag) => {
    const targetTag = document.querySelector(tag);
    const tagSrc = `/assets/sites/components/${tag}.html`;

    const newTag = await fetch(tagSrc)
        .then(response => response.text());

    targetTag.insertAdjacentHTML('beforebegin', newTag);
    targetTag.parentNode.removeChild(targetTag);
}

// After page has parsed, external components will replace placeholders
for (component of loadComponents) componentFetch(component);