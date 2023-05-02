/* Sivun runko, Jori */

//
// IMPORT WEBSITE COMPONENTS USING fetch()
//

// External components listed here will be fetched (imported)
const loadComponents = ["nav"];
const submit = document.getElementById('submitSecret');


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

const addSecrets = () => {
    const secrets = document.getElementById('secrets');
    const newNode = document.createElement('article');
    const newNodeClasses = ['row', 'article', 'primary-article']
    const now = new Date();

    const month = (now.getMonth() < 10) ? '0' + now.getMonth() : now.getMonth();
    const day = (now.getDay() < 10) ? '0' + now.getDay() : now.getDay();
    const hours = (now.getHours() < 10) ? '0' + now.getHours() : now.getHours();
    const minutes = (now.getMinutes() < 10) ? '0' + now.getMinutes() : now.getMinutes();

    const newNodeContents = [
        [
            ['span', `${now.getFullYear()}/${month}/${day}/`],
            ['span', `${hours}${minutes}/`],
            ['span', document.getElementById('name').value]
        ],
        [
            ['p', document.getElementById('secret').value]
        ]
    ]
    newNodeContents.forEach((div) => {
        // console.log(i);
        let tempChild = document.createElement('div');
        tempChild.classList.add('col-12')
        div.forEach((elem) => {
            let tempElem, tempTextNode;

            console.log(elem[1]);
            tempElem = document.createElement(elem[0]);
            tempTextNode = document.createTextNode(elem[1]);
            tempElem.appendChild(tempTextNode);
            tempChild.appendChild(tempElem);
        })
        newNode.appendChild(tempChild);
        secrets.appendChild(newNode);
    }
    )
    // newNode.appendChild()

    for (c of newNodeClasses) {
        newNode.classList.add(c);
    }

    secrets.appendChild(newNode);
}
submit.addEventListener('click', addSecrets);