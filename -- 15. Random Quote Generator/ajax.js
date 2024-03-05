//variables
const btn = document.querySelector('.get-quotes');
const number = document.getElementById("number");

//fucntions
const getQuotes = (e) =>{
    e.preventDefault();

    if(number.value.length === 0 ) return alert("Please entre a number")

    const http = new XMLHttpRequest();

    http.open("GET", "https://type.fit/api/quotes", true);

    http.onload = function () {
        if (!this.status === 200) return;

        const quotes = JSON.parse(this.responseText);
        const quotesRandomize = quotes.sort(()=>Math.random() - 0.5).slice(0,number.value) //randomized quotes with length selected by user


        quotesRandomize.map((quote) => {
            document.querySelector(".quotes").innerHTML += `
            <hr>
            <ul>
                <li>Text: ${quote.text}</li>
                <li>Author: ${quote.author.replace(", type.fit","")}</li>
            </ul>
            `;
        });
    }; 
    http.send();
};

//event listeners
btn.addEventListener('click', getQuotes);
