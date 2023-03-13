const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quoate");
const authorEl = document.getElementById("author");
const url = "https://api.quotable.io/random#";

async function getQuoate() {
  try {
    const response = await fetch(url);
    const data = response.json();
    const quoateContent = data.content;
    const quoateAuthor = data.author;
    quoteEl.innerText = quoateContent;
    authorEl.innerText = "~ " + quoateAuthor;
  } catch (error) {}
}

btnEl.addEventListener("click", getQuoate);
