const button = document.getElementById("generateBtn");
const image = document.getElementById("qrImage");

image.setAttribute('src', '');

button.addEventListener('click', function(){
    const imageAddress = document.getElementById("qrInput").value;
    const qrSource = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${imageAddress}`;
    image.setAttribute('src', qrSource);
})