const quotes = [
    {quote: "Don't comment bad code - rewrite it.", author: "Brian Kernighan", }, 
    {quote: "The computer was born to solve problems that did not exist before.",author:"- Bill Gates",},
    {quote: " Measuring programming progree by lines of code is like measuring aircraft building progree by weight.",author: "Bill Gates"},
    {quote: "One of my most productive days was throwing away 1000 lines of code." ,author: "Ken Thompson",},
    {quote: "I don't care if it works on your machine! We are not shipping your machine!",author:"Vidiu Platon", },
    {quote: " If debudding is the process of removing software bugs, then programming must be the process of putting them in." ,author:"Edsger W. Dijkstra", },
    {quote: "System programmers are the high priests of a low cult.",author:"Robert S. Barton", },
    {quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",author:"Dan Salomon", },
    {quote: " Debugging is twice as hard as writing the code in the first place.Therfore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",author:"Rajanand", },
    {quote: "It´s better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive.",author: "Steve McConnell",}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
