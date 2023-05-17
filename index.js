const row = document.getElementsByClassName('row')
const submitButton = document.querySelector('#btn')
const row1col1 = document.querySelector('.row-1 .col-1 input')

const correctWord = "bilal";
let winner = false;



const verifyWord = (col)=>{
    let word = '';
    for(let i = 1; i <= 5; i++){
        const letter = document.querySelector(`.row-${i}>.col-${col}>input`)
        word = word.concat(letter.value);
    }
    console.log(word)
    if(word === correctWord){
        for(let i = 1; i <= 5; i++){
           console.log(document.querySelector(`.row-${i}>.col-${col}>input`)) 
           document.querySelector(`.row-${i}>.col-${col}>input`).style.background = 'green'
           
        }
        winner = true;
    }else{
        for(let i = 0; i < 5; i++){
            if(correctWord.charAt(i) === word.charAt(i)){
                document.querySelector(`.row-${i+1}>.col-${col}>input`).style.background = 'green'
                
            }else if(correctWord.includes(word.charAt(i))){
                document.querySelector(`.row-${i+1}>.col-${col}>input`).style.background = 'yellow'
            }else{
                document.querySelector(`.row-${i+1}>.col-${col}>input`).style.background = 'grey'
            } 
            document.querySelector(`.row-${i+1}>.col-${col}>input`).readOnly = true
              

        }
    
    }
    if(!winner && col===6){
        document.querySelector('h3').innerHTML = `YOU LOSE:(`
        document.querySelector('h3').style.color = 'red'
    }else if(winner){
       document.querySelector('h3').innerHTML = `YOU WIN:)`
        document.querySelector('h3').style.color = 'green'
    }
}
submitButton.addEventListener('click', e => {
    verifyWord(1)
    submitButton.addEventListener('click', e => {
        verifyWord(2)
        submitButton.addEventListener('click', e => {
            verifyWord(3)
            submitButton.addEventListener('click', e => {
                verifyWord(4)
                submitButton.addEventListener('click', e => {
                    verifyWord(5)
                    submitButton.addEventListener('click', e => {
                        verifyWord(6)
                      
                    })
                })
            })
        })
    })
})





    
    
    
    
    
    


