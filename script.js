document.querySelector('input').addEventListener('input', () => {
a();
})

function a() {
    document.querySelector('div').innerHTML = `${document.querySelector('input').value}`;

}