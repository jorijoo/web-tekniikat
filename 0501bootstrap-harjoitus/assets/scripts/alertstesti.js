document.getElementById('submit').onclick = () => {
    const sisus = document.getElementById('teksti').value;
    const varoitus = document.getElementById('alert');

    if (sisus.length) {
        varoitus.className = 'alert alert-primary';
        varoitus.setHTML('OK!');
    }
    else {
        varoitus.className = 'alert alert-danger';
        varoitus.setHTML('Syötä sisältöä laatikkoon!');
    }

    return false;
}