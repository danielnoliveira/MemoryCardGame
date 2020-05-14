var gameScreen = document.querySelector('.screen__game');
var initialScreen = document.querySelector('.screen__initial');
var cards = document.querySelector('#cardsQuant');
var deck = document.querySelector('.game__container');
var acertos = 0;
var erros = 0;
var acertos_cont = document.querySelector('.scores__rigths');
var erros_cont = document.querySelector('.scores__wrongs');
var cards_selects = [];
function sleep(ms){
    return new Promise(resolve=> setTimeout(resolve,ms));
}
const cards_front = [
    "android.png","dialog-flow.png" , "hackguy.jpeg" , "php.png"   ,   "sass.jpeg",
"angular.png" ,"facebook.png"    , "html5.png"     ,"python.jpeg" , "vscode.jpeg",
"apple.jpeg"   ,  "github.png"    ,   "java.jpeg"  ,   "react.png"  ,  "vue.png",
"bootstrap.png" , "git.png"      ,    "js.jpeg"    ,   "redux.png" ,   "windows.png",
"css3.jpeg"     , "google.jpeg" ,     "linux.png"  ,   "ruby.jpeg",    "youtube.jpeg"
];
var size_list = [
    "card--ten",
    "card--twenty",
    "card--thirty",
    "card--fourty",
    "card--fifithy"
];
function getMapCards(cards_number){
    let map = [];
    
}
function startGame(){
    gameScreen.style.left = 0;
    initialScreen.style.left = "-100%";
    if(cards.value>30){
        deck.style.width = "843px";
    }else if(cards.value==30){
        deck.style.width = "1143px";
    }else if(cards.value==10){
        deck.style.width = "911px";
    }else{
        deck.style.width = "950px";
    }
    const mapFrontCards = getMapCards(Number(cards.value));
    for(let i = 0;i<cards.value;i++){
        let card = document.createElement('div');
        card.setAttribute('value',false);
        card.setAttribute('front',cards_front[Math.floor(Math.random() * (+25 - +0)) + +0]);
        card.classList.add('card');
        card.classList.add(size_list[(cards.value/10)-1]);
        card.addEventListener('click',async function(){
            if(card.getAttribute('value')=='true' || cards_selects.length==2){
                return; 
            }
            card.style.background = `#fff url(./cards_front/${card.getAttribute('front')}) no-repeat`;
            card.style.backgroundSize = '100% 100%';
            cards_selects.push(card);
            card.setAttribute('value',true);
            if(cards_selects.length==2){
                if(cards_selects[0].getAttribute('front')==cards_selects[1].getAttribute('front')){
                    await sleep(500);
                    cards_selects[0].style.visibility = "hidden";
                    cards_selects[1].style.visibility = "hidden";
                    acertos++;
                }else{
                    await sleep(500);
                    cards_selects[0].style.background = '#fff url(card-back.jpeg) no-repeat';
                    cards_selects[1].style.background = '#fff url(card-back.jpeg) no-repeat';
                    cards_selects[0].style.backgroundSize = '100% 100%';
                    cards_selects[1].style.backgroundSize = '100% 100%';
                    cards_selects[0].setAttribute('value',false);
                    cards_selects[1].setAttribute('value',false);
                    erros++;
                }
                cards_selects = [];
                acertos_cont.innerHTML = `Acertos:${acertos}`;
                erros_cont.innerHTML = `Erros:${erros}`;
            }
        },true);
        deck.appendChild(card);
        
    }
}
function gameExit(){
    gameScreen.style.left = '100%';
    initialScreen.style.left = 0;
    setTimeout(()=>{deck.innerHTML='';},1600);
}