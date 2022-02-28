const loadPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}
loadPhotos();
const displayPhotos = photos => {
    console.log(photos)
    const allphotos = document.getElementById('allphotos');
    photos.forEach(photo => {
        const div = document.createElement('div');
        div.innerHTML = `
        <h2>${photo.id}</h2>
        <h5>${photo.title}</h5>
        <img class="w-25" src="${photo.thumbnailUrl}">
        `;
        allphotos.appendChild(div)
    })
};

const mealId = Id => {
    const url = ``
}
