import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const  QUOTES =  [
  {
      quote : "It’s not the years in your life that count. It’s the life in your years.",
      author : "- Abraham Lincoln"
  },
  {
      quote : "Everything you’ve ever wanted is on the other side of fear.",
      author : "- George Addair"
  },
  {
      quote : "Education costs money. But then so does ignorance.",
      author : "- Sir Claus Moser"
  },
  {
      quote : "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
      author : "- John Lennon"
  },
  {
      quote : "You miss 100% of the shots you don’t take.",
      author : "- Wayne Gretzky"
  },
]

const colorMaker = (changed__color, changed__color__text, a, root)=>{
const arr = []
for(let i = 0; i < 3; i++){
  arr.push(Math.floor(Math.random() * 255))
}
Array.from(changed__color).forEach(el=>{ 
  el.style.backgroundColor = `rgb(${arr.join(",")})`
  el.style.transition = "2s";
})
Array.from(a).forEach(el=>{ 
el.style.backgroundColor = `rgb(${arr.join(",")})`
el.style.transition = "2s";
})
Array.from(changed__color__text).forEach(el=> { 
  el.style.transition = "2s";
  el.style.color = `rgb(${arr.join(",")})`
  root.style.transition = "2s";
  root.style.backgroundColor = `rgb(${arr.join(",")})`;
})
}
const randomQuote = () => {
  let rndIndex ;

    rndIndex = Math.floor(Math.random() * 4 + 1)

  
  return QUOTES[rndIndex];
}
const  quoteSelector = () =>{
const quoteCcs = document.querySelector(".card__quote");
const author = document.querySelector(".card__author");


const changedColor = document.getElementsByClassName("changed__color");
const changedColorText = document.getElementsByClassName("changed__color__text");
const root = document.getElementById("root")
const a = document.getElementsByTagName("a");


  colorMaker(changedColor, changedColorText, a, root)

  quoteCcs.animate(
    [
      {
        
        opacity:0
      },
      {   
        opacity:1}
    ],1500 )

  author.animate(
    [
      {
       
        opacity:0
      },
      {   
        opacity:1}
    ], 1500,
  )
 

      }

    

class App extends React.Component {

constructor(){
  super();
  this.state = "";
  this.handleClick = this.handleClick.bind(this);
}
componentDidMount() {
  quoteSelector();
  this.setState(randomQuote())
}

 handleClick() {
 quoteSelector();
 this.setState(randomQuote())
}
render(){
    return(
      <div className = "card" id = "quote-box">
          <div className="card__margin">
          <p className="card__quote changed__color__text" id ="text"><i class="bi bi-quote"></i>{this.state.quote}</p>
          <p className="card__author changed__color__text" id="author">  {this.state.author}</p>
          <div className="card__footer">
            <div className="card__footer__icons__wrapper">
            <a target="_blank" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22It%E2%80%99s%20not%20the%20years%20in%20your%20life%20that%20count.%20It%E2%80%99s%20the%20life%20in%20your%20years.%22%20Abraham%20Lincoln" id ="tweet-quote">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg>
            </a>  
            <a target="_blank" href="https://web.telegram.org/k/" id ="telegram-quote">          
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
</svg>
            </a>
            </div>  
            <button 
            id="new-quote"
            className="card__footer__button changed__color"
            onClick={this.handleClick}
            >
              New quote
              </button>
          </div>
          </div>
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);


