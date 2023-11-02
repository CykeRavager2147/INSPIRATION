
let txt1 = document.getElementById("txt1");
let txt = document.getElementById("txt");
let aut = document.getElementById("aut");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random"

async function getQuote () {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    txt.textContent=data.content
    aut.textContent=data.author
};

getQuote();

btn.addEventListener('click', getQuote);