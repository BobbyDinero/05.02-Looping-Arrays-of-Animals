const animalPicsDiv = document.querySelector('#animal-pics');
const videoPlayer = document.querySelector('#video-player');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');

h2.textContent = animalsArr[0].name;
p.textContent = animalsArr[0].desc;

videoPlayer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${animalsArr[0].youTube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

let index = 0;
for (const animal of animalsArr) {
    let imgFile = animal.name.replace(" ", "-").toLowerCase() + ".jpg";
    let imgTag = `<img src="images/${imgFile}" onclick="swapAnimal(${index})">`;
    animalPicsDiv.innerHTML += imgTag;
    index++;
}

function swapAnimal(i) {
    let animal = animalsArr[i];
    h2.textContent = `${animal.name} - ${animal.class} - ${animal.region}`;
    p.innerHTML = animal.desc;
    videoPlayer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${animal.youTube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}