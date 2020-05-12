var gameScreen = document.querySelector('.screen__game');
var initialScreen = document.querySelector('.screen__initial');
var cards = document.querySelector('#cardsQuant');
var deck = document.querySelector('.game__container');
var size_list = [
    "card--ten",
    "card--twenty",
    "card--thirty",
    "card--fourty",
    "card--fifithy"
];
function startGame(){
    gameScreen.style.left = 0;
    initialScreen.style.left = "-100%";
    for(let i = 0;i<cards.value;i++){
        var card = document.createElement('div');
        card.classList.add('card');
        card.classList.add(size_list[(cards.value/10)-1]);
        deck.appendChild(card);
    }
}
function gameExit(){
    gameScreen.style.left = '100%';
    initialScreen.style.left = 0;
    setTimeout(()=>{deck.innerHTML='';},1600);
}