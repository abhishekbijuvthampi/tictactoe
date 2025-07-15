const buttons = document.querySelectorAll('.gameBox button');
let winText = document.getElementById('winText')
const menu = document.querySelector('.menu')
const exitBtn = menu.lastElementChild;
let count = 0;
let val1;
let val2;
let val3;
let turn = true;

//winning patterns
const win= [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]
buttons.forEach(button =>{
    button.addEventListener('click',() => {
        button.disabled = true;
        button.classList.add("disabledBtn");
        count++;
        if(turn)
        {
            button.classList.add('Oplayer');
            button.innerText = "O";
            turn = false;
        }
        else
        {
            button.classList.add('Xplayer');
            button.innerText = "X";
            turn = true;
        }

        checkwin();
        
    });
});

function checkwin()
{
    for(let pattern of win)
    {
        val1 = buttons[pattern[0] -1].innerText;
        val2 = buttons[pattern[1] -1].innerText;
        val3 = buttons[pattern[2] -1].innerText;

        if(val1 != "" && val2 != "" && val3 != "")
        {
            if(val1 == val2 && val2 == val3)
            {
                winnerAlert();
            }
            else if(count == 9)
            {
                drawAlert();
            }
        }
    }
}

function winnerAlert()
{
    openMenu();
    if(turn)
    {
        winText.innerText = `X won`;
    }
    else
    {
        winText.innerText = `O won`;
    }
    exitBtn.style.display = "none";
}

function drawAlert()
{
    openMenu();
    winText.innerText = "Draw Match";
    exitBtn.style.display = "none";
}

function openMenu()
{
    menu.style.display = 'flex';
}

function exitMenu()
{
    menu.style.display = 'none';
}
function resetGame()
{
    buttons.forEach((btn)=>{
        btn.disabled = false;
        btn.classList.remove("disabledBtn","Oplayer","Xplayer");
        btn.innerText = "";
    });
    exitMenu();
    winText.innerText = "";
    turn = true;
    exitBtn.style.display = "block";
    count = 0;
}