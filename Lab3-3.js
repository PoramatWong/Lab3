min = 1
max = 100
function guessNumber(){
    Ans = Math.floor(Math.random() * 100);
    num = parseInt(Ans); 
    guess = prompt('Guess the number between ' + min + ' and ' + max + ' inclusive or input other numbers to see the secret number?');
    g1 = parseInt(guess); 
    if(g1 != num){
        while(g1 !== num){
            if(g1 < min || g1 > max){
                alert('The secret number is ' + num)
            }
            if(g1 < num ){
                min = g1
                g2 = parseInt(g1);
                g1 = prompt('Guess the number between ' + (g2 + 1) + ' and ' + max + ' inclusive or input other numbers to see the secret number.')
                if(g1 < min || g1 > max){
                    alert('The secret number is ' + num)
                }
                if(g1 == num){
                    alert('Matched! You win The secret number is ' + num)
                }
            }else if(g1 > num){
                max = g1;
                g1 = prompt('Guess the number between ' + min + ' and ' + (g1 - 1)  + ' inclusive or input other numbers to see the secret number.')
                if(g1 < min || g1 > max){
                    alert('The secret number is ' + num)
                }
                if(g1 == num){
                    alert('Matched! You win.\nThe secret number is ' + num)
                }
            }
        } 
    }
}

guessNumber()  