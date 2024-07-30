const generateBtn = document.querySelector(".generate-btn");
const memeTitle = document.querySelector(".meme-title");
const memeImage = document.querySelector(".meme-image");
const authorOutput = document.querySelector(".author");


function getMeme(){
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data)
        const {author, title, url} = data
        authorOutput.innerText = `Meme by: ${author}`;
        memeTitle.innerText = title;
        memeImage.src = url
    })
}

generateBtn.addEventListener("click",()=>{
    getMeme()
})

getMeme()
