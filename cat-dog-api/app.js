const catHolder =  document.getElementById("cat-result");
const dogHolder = document.getElementById("dog-result");
const getCat = document.getElementById("cat-btn")
const getDog = document.getElementById("dog-btn")

getCat.addEventListener("click", loadCat)
getDog.addEventListener("click", loadDog)


function loadCat(){
    fetch("https://randomfox.ca/floof/")
    .then(res => res.json())
    .then(data => {
        catHolder.innerHTML = `<img src="${data.image}" />`
    });
    console.log("helo")
}

function loadDog(){
    fetch("https://random.dog/woof.json")
    .then(res => res.json())
    .then(data => {
        if (data.url.includes(".mp4")) {
            loadDog();
        }else{
        dogHolder.innerHTML = `<img src="${data.url}" alt="dog" />`
        }
    })
}