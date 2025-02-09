const p1score = document.querySelector('#p1Display');
const p2score = document.querySelector('#p2Display');
const reset = document.querySelector('#reset');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const playto = document.querySelector('#playto');

let  winningscore = 0;
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
p1Button.addEventListener('click', function(){
    if(!gameOver){
    p1Score += 1
    if(p1Score === winningscore){
        p1Display.classList.add('has-text-success');
        p2Display.classList.add('has-text-looser');
        gameOver = true;
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
    p1score.textContent = p1Score;
    }
});
p2Button.addEventListener('click', function(){
    if(!gameOver){
    p2Score += 1
    if(p2Score === winningscore){
        p2Display.classList.add('has-text-success');  
        p1Display.classList.add('has-text-looser');
        gameOver = true;
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
    p2score.textContent = p2Score;
    }
});
function resetfn(){
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1score.textContent = 0
    p2score.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-looser');
    p2Display.classList.remove('has-text-success', 'has-text-looser');
    p1Button.disabled = false;
    p2Button.disabled = false;
}
playto.addEventListener('change', function(){
    winningscore = parseInt(this.value);
    resetfn();
})
reset.addEventListener('click', resetfn)
