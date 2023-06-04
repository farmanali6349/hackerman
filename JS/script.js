const loading = document.getElementsByTagName('span')[0];
const h2 = document.getElementsByTagName('h2')[0];
const container = document.getElementsByClassName('container')[0];
const para = document.getElementsByClassName('para')[0];

function hacking() {
    text.innerHTML = "Hacking Your Facebook ID";

    setTimeout(()=> {
        text.innerHTML = "Obtaining Username and Password";
        para.insertAdjacentHTML('beforeend', '<p>URL Obtained.</p>');
    }, 5000)

    setTimeout(()=> {
        text.innerHTML = "Signing In To Facebook";
        para.insertAdjacentHTML('beforeend', '<p>Found Username & Password</p>');
    }, 7000)
    
    setTimeout(()=> {
        loading.style.display = 'none';
        h2.style.display = 'none';
        text.innerHTML = "ID HACKED";
        para.insertAdjacentHTML('beforeend', '<p>Now, We are signed In. Location : Pakistan</p>');
        container.classList.add('center');
    }, 9000)

    
}

hacking();