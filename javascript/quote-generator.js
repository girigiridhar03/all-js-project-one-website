const blockquote = document.querySelector("blockquote");
const authorName = document.querySelector(".author-name");


const nxtbtn = async()=>{
     try {
        let res = await fetch(`https://api.quotable.io/random`);
        let data = await res.json();
        blockquote.innerHTML = data.content;
        authorName.innerHTML = `-${data.author}`;
     } catch (error) {
        
     }
}