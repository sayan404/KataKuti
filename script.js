console.log("Welcome to Tic Tac Toe")
let music = new Audio("bgm.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

play = document.getElementById('play');
mute = document.getElementById('mute');

play.addEventListener('click', () => {
    music.play();
    play.style.display = "none";
    mute.style.display = "block";
})

mute.addEventListener('click', () => {
    music.pause();
    mute.style.display = "none";
    play.style.display = "block";
})

human = document.getElementById('human');
human.addEventListener('click', () => {
    computer = document.getElementById('computer');
    computer.style.display = "none";
    human.style.display = "none";
    console.log("Playing with Human");
    let turn = "X"
    let finish = false

    //Function to change turn
    const changeTurn = () => {
        return turn === "X" ? "0" : "X"
    }

    //Function to check for the winning candidate
    const checkWin = () => {
        boxtexts = document.getElementsByClassName('boxtext');
        let wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        wins.forEach(e => {
            if ((boxtexts[e[0]].innerText !== "") && (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText)) {
                document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " WON";
                finish = true;
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '300px';
            }
        })
    }
    // Chief Logic
    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element => {
        let boxtext = element.querySelector('.boxtext');
        element.addEventListener('click', () => {
            if (boxtext.innerText === '') {
                if (finish === false) {
                    boxtext.innerText = turn;
                    turn = changeTurn();
                    audioTurn.play();
                    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                    checkWin();
                }
            }
        })
    })

    reset = document.getElementById('reset');
    reset.addEventListener('click', () => {
        boxtexts = document.getElementsByClassName('boxtext');
        Array.from(boxtexts).forEach(element => {
            element.innerText = "";
        })
        finish = false;
        turn = "X";
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        human.style.display = "block";
    })
})



//For playing with Computer
computer = document.getElementById('computer');
computer.addEventListener('click', () => {
    human = document.getElementById('human');
    computer.style.display = "none";
    human.style.display = "none";
    console.log("Playing with Computer");
    let finish2 = false;
    const checkWin2 = () => {
        let temp2 = 0;
        boxtexts2 = document.getElementsByClassName('boxtext');
        let wins2 = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        wins2.forEach(e => {
            if ((boxtexts2[e[0]].innerText !== "") && (boxtexts2[e[0]].innerText === "X") && (boxtexts2[e[0]].innerText === boxtexts2[e[1]].innerText) && (boxtexts2[e[1]].innerText === boxtexts2[e[2]].innerText)) {
                finish2 = true;
                document.querySelector('.info').innerText = boxtexts2[e[0]].innerText + " YOU WON";
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '300px';
                temp2 = 1;
            }
            else if ((boxtexts2[e[0]].innerText !== "") && (boxtexts2[e[0]].innerText === "0") && (boxtexts2[e[0]].innerText === boxtexts2[e[1]].innerText) && (boxtexts2[e[1]].innerText === boxtexts2[e[2]].innerText)) {
                finish2 = true;
                document.querySelector('.info').innerText = boxtexts2[e[0]].innerText + " Computer WON";
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '300px';
                temp2 = 1;
            }
        })

        if (temp2 === 0) {
            wins2.forEach(e => {
                if ((boxtexts2[e[0]].innerText === "") && (boxtexts2[e[1]].innerText === "0") && (boxtexts2[e[1]].innerText === boxtexts2[e[2]].innerText) && (temp2 === 0)) {
                    boxtexts2[e[0]].innerText = "0";
                    finish2 = true;
                    document.querySelector('.info').innerText = boxtexts2[e[0]].innerText + " Computer WON";
                    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '300px';
                    temp2 = 1;
                }
                else if ((boxtexts2[e[1]].innerText === "") && (boxtexts2[e[0]].innerText === "0") && (boxtexts2[e[0]].innerText === boxtexts2[e[2]].innerText) && (temp2 === 0)) {
                    boxtexts2[e[1]].innerText = "0";
                    finish2 = true;
                    document.querySelector('.info').innerText = boxtexts2[e[0]].innerText + " Computer WON";
                    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '300px';
                    temp2 = 1;
                }
                else if ((boxtexts2[e[2]].innerText === "") && (boxtexts2[e[0]].innerText === "0") && (boxtexts2[e[0]].innerText === boxtexts2[e[1]].innerText) && (temp2 === 0)) {
                    boxtexts2[e[2]].innerText = "0";
                    finish2 = true;
                    document.querySelector('.info').innerText = boxtexts2[e[0]].innerText + " Computer WON";
                    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '300px';
                    temp2 = 1;
                }
            })
        }

        if (temp2 === 0) {
            wins2.forEach(e => {
                if ((boxtexts2[e[0]].innerText === "") && (boxtexts2[e[1]].innerText === "X") && (boxtexts2[e[1]].innerText === boxtexts2[e[2]].innerText) && (temp2 === 0)) {
                    boxtexts2[e[0]].innerText = "0";
                    temp2 = 1;
                }
                else if ((boxtexts2[e[1]].innerText === "") && (boxtexts2[e[0]].innerText === "X") && (boxtexts2[e[0]].innerText === boxtexts2[e[2]].innerText) && (temp2 === 0)) {
                    boxtexts2[e[1]].innerText = "0";
                    temp2 = 1;
                }
                else if ((boxtexts2[e[2]].innerText === "") && (boxtexts2[e[0]].innerText === "X") && (boxtexts2[e[0]].innerText === boxtexts2[e[1]].innerText) && (temp2 === 0)) {
                    boxtexts2[e[2]].innerText = "0";
                    temp2 = 1;
                }
            })
        }
        if (temp2 === 0) {
            if (boxtexts2[4].innerText === "") {
                boxtexts2[4].innerText = "0";
            }
            else if (boxtexts2[0].innerText === "") {
                boxtexts2[0].innerText = "0";
            }
            else if (boxtexts2[1].innerText === "") {
                boxtexts2[1].innerText = "0";
            }
            else if (boxtexts2[2].innerText === "") {
                boxtexts2[2].innerText = "0";
            }
            else if (boxtexts2[3].innerText === "") {
                boxtexts2[3].innerText = "0";
            }
            else if (boxtexts2[5].innerText === "") {
                boxtexts2[5].innerText = "0";
            }
            else if (boxtexts2[6].innerText === "") {
                boxtexts2[6].innerText = "0";
            }
            else if (boxtexts2[7].innerText === "") {
                boxtexts2[7].innerText = "0";
            }
            else if (boxtexts2[8].innerText === "") {
                boxtexts2[8].innerText = "0";
            }
        }
        wins2.forEach(e => {
            if ((boxtexts2[e[0]].innerText !== "") && (boxtexts2[e[0]].innerText === "X") && (boxtexts2[e[0]].innerText === boxtexts2[e[1]].innerText) && (boxtexts2[e[1]].innerText === boxtexts2[e[2]].innerText)) {
                finish2 = true;
                document.querySelector('.info').innerText = boxtexts2[e[0]].innerText + " YOU WON";
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '300px';
            }
            else if ((boxtexts2[e[0]].innerText !== "") && (boxtexts2[e[0]].innerText === "0") && (boxtexts2[e[0]].innerText === boxtexts2[e[1]].innerText) && (boxtexts2[e[1]].innerText === boxtexts2[e[2]].innerText)) {
                finish2 = true;
                document.querySelector('.info').innerText = boxtexts2[e[0]].innerText + " Computer WON";
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '300px';
            }
        })
    }

    let boxes2 = document.getElementsByClassName("box");
    Array.from(boxes2).forEach(element => {
        let boxtext2 = element.querySelector('.boxtext');
        element.addEventListener('click', () => {
            if (boxtext2.innerText === '') {
                if (finish2 === false) {
                    boxtext2.innerText = "X";
                    // turn = changeTurn();
                    audioTurn.play();
                    // document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                    checkWin2();
                }
            }
        })
    })

    reset = document.getElementById('reset');
    reset.addEventListener('click', () => {
        boxtexts2 = document.getElementsByClassName('boxtext');
        Array.from(boxtexts2).forEach(element => {
            element.innerText = "";
        })
        finish2 = false;
        turn = "X";
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        computer.style.display = "block";
    })
})



