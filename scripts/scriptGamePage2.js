// נאפס את הלוח בכך שכל האינפוטים שניתן להקליד ערכים אליהם יאופסו  
function clearBoard(){
    let arrOfInputsGame = document.getElementsByTagName('input');
    console.log(arrOfInputsGame);
    // נרוץ המערך האינפוטים הגישה אליהם יהיה כאינדקס הרץ לאינפוט הספציפי
    for (let inputNow in arrOfInputsGame) {
        // נבדוק איזה תא ניתן לכתוב בו ונאפס
        if (!arrOfInputsGame[inputNow].disabled) {
            arrOfInputsGame[inputNow].value = '';
            
        }
    }
}


// נרוץ על אינפוטי המשחק ונבדוק אם הם תואמים למטריצה שיצרנו 
function checkBoard()
{

}


// נבדוק איפה המיקום הבא של הספרה 0 כדי שנוסיף מספר למיקום זה
function getPosOfZero(matSudoku) {
    for (let indexLine = 0; indexLine < 9; indexLine++) {
        for (let indexColumn = 0; indexColumn < 9; indexColumn++) {
            if (matSudoku[indexLine][indexColumn] == 0)
                return [indexLine, indexColumn];
        }
    }
    // במקרה ולא נמצא תא כזה יוחזר 1- כאי מציאה
    return [-1, -1];
}

// נבדוק אם המספר קיים בעמודה או בשורה

function checkRowNow(matSudoku, rowCheck, value) {
    for (let indexRow = 0; indexRow < matSudoku[rowCheck].length; indexRow++) {
        if (matSudoku[rowCheck][indexRow] == value) {
            return false;
        }
    }

    return true;
}

function checkColumnNow(matSudoku, columnCheck, value) {
    for (let indexColumn = 0; indexColumn < matSudoku.length; indexColumn++) {
        if (matSudoku[indexColumn][columnCheck] == value) {
            return false;
        }
    }
    return true;
}


// נבדוק אם הריבוע עצמו מכיל את המספר שנרצה להוסיף
function checkSquareNow(matSudoku, rowCheck, columnCheck, value) {

    // כל ריבוע ממוקם בשורה שיש בה 3 ריבועים ו 3 עמודות
    boxRowNow = Math.floor(rowCheck / 3) * 3;
    boxColNow = Math.floor(columnCheck / 3) * 3;

    for (let indexRowBox = 0; indexRowBox < 3; indexRowBox++) {
        for (let indexColumnBox = 0; indexColumnBox < 3; indexColumnBox++) {
            // נוסיף ערך לשורה או לעמודה בהתאם לאיטרציה 
            if (matSudoku[boxRowNow + indexRowBox][boxColNow + indexColumnBox] == value)
                return false;
        }
    }

    return true;
}

// בדיקות עבור ערך לכל גבול
function checkIfGoodValue(matSudoku, rowCheck, columnCheck, value) {
    if (checkRowNow(matSudoku, rowCheck, value) &&
        checkColumnNow(matSudoku, columnCheck, value) &&
        checkSquareNow(matSudoku, rowCheck, columnCheck, value)) {
        return true;
    }

    return false;
}

function createSudoko(matSudoku) {
    let getPosStartOfZero = getPosOfZero(matSudoku);
    let rowFromZero = getPosStartOfZero[0];
    let columnFromZero = getPosStartOfZero[1];

    // אם אין יותר מספרי 0
    if (rowFromZero == -1) {
        return matSudoku;
    }

    //  נרוץ מ 0 עד 9 על המספרים ונראה איזה מספר מתאים 
    // 9 תאים בשורה
    for (let indexInNum = 0; indexInNum < 9; indexInNum++) {
        let num = Math.floor((Math.random() * 9) + 1);
        // במקרה והערך טוב מבחינת שורה עמודה וריבוע 
        if (checkIfGoodValue(matSudoku, rowFromZero, columnFromZero, num)) {
            matSudoku[rowFromZero][columnFromZero] = num;
            // במידה וזה ערך טוב נקרא לפונקציה שוב עם לוח מעודכן
            createSudoko(matSudoku);
        }
        // במקרה ולא נמצא ערך טוב לסודוקו צריך לעבור איפוס ולכן חוזרים צעד 1 לאחור
    }

    // כדי להמשיך לתא הבא נבדוק אם לא נמצא מספר השווה ל0
    // במידה וכו ניקח את האינדקסים שקיבלנו למספר האפס האחרון 
    let getPosStartOfZeroIn = getPosOfZero(matSudoku);
    let rowFromZeroIn = getPosStartOfZeroIn[0];
    if (rowFromZeroIn != -1)
        matSudoku[rowFromZero][columnFromZero] = 0;

    // מה שעשינו הוא לשחזר את התא 1 קודם כדי לתת ערך אחר תואם
    // נחזיר את המטריצה החדשה המייצגת את המשחק 
    return matSudoku;
}




// מעבר על ערכי המטריצה של המשחק והצבה בערכי אינפוט של המשחק בהתאם לרמה
//  רמה 1 - 75% = 68 משבצות גלויות 
//  רמה 2 - 50% = 45 משבצות גלויות
// רמה 3 - 25% = 22 משבצות גלויות
function createTheBordWithMat(mat, level) {

    let indexInput = 0;
    let endCreate = false;

    // לולאה עד לחשיפת מספר התאים המבוקש
    // למקרה והוגרל הרבה 0 וכך נחשפו פחות תאים מהמבוקש
    while(true)
    {
        for (let square = 0; square < 9; square++) {
            for (let row = 0; row < 3; row++) {
                for (let column = 0; column < 3; column++) {

                    let indexNow;
                    indexNow = document.getElementById((((square % 3) * 3 + parseInt(square / 3) * (9 * 3)) + row * 9 + column));
                    if(indexNow.value != '')
                    {
                        continue;
                    } 
                    let ExposedNumber = Math.floor(Math.random() * 2);
                    if (ExposedNumber) {
                        // כדי להגיע לאינפוט המבוקש נקח את האינדקס של הלולאה החיצונית
                        // נכפיל ב9 מאחר וידוע כי יש בה לולאה פנימית אשר רצה 9 פעמים
                        // ונרצה מעבר רציף
    
                        // קיימות 2 אופציות לריבוע או שהריבוע אחד ליד השני ואז התזוזה ב3 משבצות
                        // או אחד מתחת לשני ואז התזוזה ב 9 משבצות
                       
    
                        // כל ריבוע שמתחיל שורה חדשה זוהי קפיצה של 9 שורות ב 3 עמודות 
                        // 0 27 54
                        // נשתמש בהמרה ל מספר שלם כדי שנקבל חלוקת מספרים שלמים ללא עשרוני
                        // נרצה חלוקה בשארית 3 כדי לדעת כמה להוסיף 3 בין משבצת 1 לשנייה
                        // שמאל = 0
                        // אמצע = 3
                        // ימין = 6
                       // indexNow = document.getElementById(((square * 9  + square * 3 )+ row*9 + column));
                        indexNow.setAttribute('value', mat[square][row][column]);
                        indexNow.style.backgroundColor = "lightyellow";
                        indexNow.style.color = "blue";
                        indexNow.disabled = true;
                        indexInput++;
    
                    }
                    else {
                        indexNow = document.getElementById((((square % 3) * 3 + parseInt(square / 3) * (9 * 3)) + row * 9 + column));
                        indexNow.disabled = false;
                    }
                    if ((level == 3 && indexInput == 22) ||
                        (level == 2 && indexInput == 45) ||
                        (level == 1 && indexInput == 68)) {
                        endCreate = true;
                        break;
                    }
                }
    
                if (endCreate == true)
                    break;
    
            }
    
            if (endCreate == true)
                break;
        }
        if (endCreate == true)
        break;
    }
    


}

// נמיר את המטריצה לתלת מימד כדי שנוכל להציג את הלוח באתר
function createMat3(mat) {
    let mat3 = [];
    let matRow = [];
    let matColumn = [];

    for (let indexRow = 0; indexRow < mat.length; indexRow++) {
        for (let indexColumn = 0; indexColumn < mat[indexRow].length; indexColumn++) {
            if (indexColumn % 3 == 0) {
                matColumn = [];
                matRow.push(matColumn);
            }

            matColumn.push(mat[parseInt(indexColumn / 3) + parseInt(indexRow / 3) * 3][parseInt(indexColumn % 3) + parseInt(indexRow % 3) * 3]);

        }
        mat3.push(matRow);
        matRow = [];

    }
    return mat3;
}



function checkBoard() {
    let arrOfInputsGame = document.getElementsByClassName('inputS');
    let youWin = true;
    // נרוץ המערך האינפוטים הגישה אליהם יהיה כאינדקס הרץ לאינפוט הספציפי
    for (let inputNow in arrOfInputsGame) {
        if (inputNow == "length") {
            break;
        }
        if (!arrOfInputsGame[inputNow].disabled) {
            // יכול להיות מצב בו כתבנו 
            // ומחקנו ערך ומאותו רגע הקוד יחשיב זאת לא כמחרוזת ריקה
            if(arrOfInputsGame[inputNow].value.length == 0)
            {
                alert('You clown , \nDo you think a resolved board ,\nis a board that has empty cells?')
                return;
            }
            let indexInput = arrOfInputsGame[inputNow].id;
            let valueInput = arrOfInputsGame[indexInput].value;

            // מציאת מיקום הריבוע במשחק
            let lineToCreateSquare = parseInt(indexInput / 9);
            let columnToCreateSquare = parseInt(indexInput % 9);
            let SquareInMat = parseInt(lineToCreateSquare / 3) * 3 + parseInt((columnToCreateSquare / 3));

            // מציאת השורה והעמודה הספציפית במשחק
            let lineInSquare = parseInt(lineToCreateSquare % 3);
            let columnInSquare = parseInt(columnToCreateSquare % 3);
         
            // נבדוק אם הערך במטריצה זהה לערך שרשמנו במידה ולא זהו עוד לא ניצחון
            if (mat3GameSudoko[SquareInMat][lineInSquare][columnInSquare] != valueInput) {                
                youWin = false;
                break;
            }

        }

    }
    if (youWin) {
        let time = document.getElementById('spannTime').innerHTML;
        sessionStorage.setItem('finishTime',time);
        location.href = `../htmls/theWinPage.html`;
    }
    else {
        alert("Idiot! The board is not solved correctly, \nthink where you went wrong");
    }
}

var numClue = 3;
var imgArrNumClue = [];
for (let i = 0; i < 4; i++) {
    imgArrNumClue[i] = `../images/imagesGamePage/clues/${i}MoreClues.png`;
    
}

function getClue(buttonGetClue) {

    let arrOfInputsGame = document.getElementsByClassName('inputS');
    let boardFull = true;
    // אחרי חשיפת התא נבדוק אם כל הלוח פתור
    for (let inputNow in arrOfInputsGame) {
        if (inputNow == "length") {
            break;
        }
        
        if (arrOfInputsGame[inputNow].value == '') {
            boardFull = false;
            break;
        }
    }
    if(boardFull)
    {
        alert('The board is full\nDelete some cells that you think are incorrect')
        return;
    }

    numClue--;
    buttonGetClue.style.backgroundImage  = `url(${imgArrNumClue[numClue]})`;
    if (numClue == 0) {
        buttonGetClue.disabled = true;
    }

    let findCellToDiscover = false;
    // במקרה ורצנו על כל התאים שנשארו ולא חשפנו דבר כי הוגרל 0 נרוץ שוב עליהם
    while (true) {

        // נרוץ המערך האינפוטים הגישה אליהם יהיה כאינדקס הרץ לאינפוט הספציפי
        for (let inputNow in arrOfInputsGame) {
            if (inputNow == "length") {
                break;
            }
            if (!arrOfInputsGame[inputNow].disabled && arrOfInputsGame[inputNow].value=='' ) {

                // ניתן טווח גדול של הגרלה כדי שיהיה סיכוי קטן יותר לחשוף את התא
                let ExposedNumber = Math.floor(Math.random() * 5);
                if (ExposedNumber == 1) {
                    let discoverInput = arrOfInputsGame[inputNow];
                    let indexInput = discoverInput.id;

                    // מציאת מיקום הריבוע במשחק
                    let lineToCreateSquare = parseInt(indexInput / 9);
                    let columnToCreateSquare = parseInt(indexInput % 9);
                    let SquareInMat = parseInt(lineToCreateSquare / 3) * 3 + parseInt((columnToCreateSquare / 3));

                    // מציאת השורה והעמודה הספציפית במשחק
                    let lineInSquare = parseInt(lineToCreateSquare % 3);
                    let columnInSquare = parseInt(columnToCreateSquare % 3);

                    let valueFromSudoku = mat3GameSudoko[SquareInMat][lineInSquare][columnInSquare];
                    // alert(`${valueFromSudoku} at ${indexInput} at Mat Pos => ${SquareInMat} ${lineInSquare} ${columnInSquare}`);
                    discoverInput.value = valueFromSudoku;
                    discoverInput.disabled = true;
                    discoverInput.style.backgroundColor = "lightyellow";
                    discoverInput.style.color = "blue";
                    findCellToDiscover = true;
                    break;
                }



            }

        }
        if (findCellToDiscover) {
            break;
        }
    }

    let finishAllCell = true;
    // אחרי חשיפת התא נבדוק אם כל הלוח פתור
    for (let inputNow in arrOfInputsGame) {
        if (arrOfInputsGame[inputNow].value == '') {
            finishAllCell = false;
            break;
        }
    }

    if (finishAllCell) {
        checkBoard();
    }

}


function createAction() {


    let arrImgUrl = [
        '../images/imagesLogos&Icons/logo.png',
        '../images/imagesLogos&Icons/slogan.jpg',
        '../images/imagesGamePage/timer/timer.gif',
        '../images/imagesGamePage/actionButton/restart2.jpg',
        '../images/imagesGamePage/actionButton/board2.jpg',
        '../images/imagesGamePage/actionButton/levels2.jpg',
        // '../images/imagesGamePage/actionButton/clues.jpg',
        '../images/imagesGamePage/clues/3MoreClues.png',
        // '../images/imagesGamePage/actionButton/finish.jpg',
        '../images/imagesGamePage/check2.png',
        '../images/imagesGamePage/iconUser.png'
    ];

    let imgLogo = document.createElement('img');
    imgLogo.setAttribute('id', 'sloganImg');
    imgLogo.setAttribute('alt', 'SudokuOrKuku');
    imgLogo.setAttribute('src', arrImgUrl[1]);
    document.body.appendChild(imgLogo);
    
    let table1 = document.createElement('table');
    table1.setAttribute('class', 'actionTable');

    let tr1 = document.createElement('tr');
    tr1.setAttribute('class', 'actionLine');
    let a1 = document.createElement('a');
    a1.href = '../htmls/theMainPage.html';
    let img1 = document.createElement('img');
    img1.setAttribute('id', 'logoImg');
    img1.setAttribute('alt', 'kingdomOfSudoku');
    img1.setAttribute('src', arrImgUrl[0]);
    a1.appendChild(img1);
    tr1.appendChild(a1);
    table1.appendChild(tr1);
    
    let nameUser = document.createElement('span');
    let imgUser = document.createElement('img');
    imgUser.setAttribute('src', arrImgUrl[8]);
    imgUser.setAttribute('id','imgUser');
    nameUser.appendChild(imgUser);
    nameUser.innerHTML += "abcd";
    nameUser.setAttribute('id','nameUser');
    tr1 = document.createElement('tr');
    tr1.setAttribute('class', 'actionLine');
    tr1.appendChild(nameUser);
    table1.appendChild(tr1);

    // img1 = document.createElement('img');
    // tr1 = document.createElement('tr');
    // tr1.setAttribute('class', 'actionLine');
    // img1.setAttribute('id', 'sloganImg');
    // img1.setAttribute('alt', 'SudokuOrKuku');
    // img1.setAttribute('src', arrImgUrl[1]);
    // tr1.appendChild(img1);
    // table1.appendChild(tr1);


    tr1 = document.createElement('tr');
    tr1.setAttribute('class', 'actionLine');
    let p1 = document.createElement('p');
    p1.setAttribute('id','perTime');
    img1 = document.createElement('img');
    img1.setAttribute('id', 'timerImg');
    img1.setAttribute('alt', 'timer');
    img1.setAttribute('src', arrImgUrl[2]);
    let span1 = document.createElement('span');
    span1.setAttribute('id','spannTime');
    span1.innerHTML = '00:00:00';
    p1.appendChild(img1);
    p1.appendChild(span1);
    tr1.appendChild(p1);
    table1.appendChild(tr1);

    
    for (let index = 0; index < 5; index++) {
        tr1 = document.createElement('tr');
        tr1.setAttribute('class','tr-button-Action');
        let button1 = document.createElement('button');
        button1.setAttribute('class','button-Action');
        button1.setAttribute('id',`action-${index}`);
        button1.style.backgroundImage = `url(${arrImgUrl[index + 3]})`;

        if(index == 0)
        {
            button1.onclick = function() {
                clearBoard();
            }
        }

        if(index == 1)
        {
            button1.onclick = function (){
                location.href = `../htmls/theGamePage.html`;
            }
            
        }

        if(index == 2)
        {
            button1.onclick = function() {
                location.href = `../htmls/theLevelsPage.html`;
            }
        }

        if(index == 3)
        {
            button1.onclick = function() {
                getClue(this);
            }
        }

        if(index == 4)
        {
            button1.onclick = function() {
                checkBoard();  
            }
        }
        tr1.appendChild(button1);
        table1.appendChild(tr1);
    }
// button1.style.backgroundImage  = `url(${'../images/0MoreClues.png'})`;
// button1.onclick = function () {
//     getClue(this);
// }
// document.body.appendChild(button1);

document.body.appendChild(table1);
}
createAction();

let matZero = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];


let matSudoko = createSudoko(matZero);
console.table(matSudoko);

const mat3GameSudoko = createMat3(matSudoko);
console.table(mat3GameSudoko);

let numLevel = sessionStorage.getItem('level');
if(numLevel == null)
numLevel = 1;
createTheBordWithMat(mat3GameSudoko, numLevel);

document.body.addEventListener("click",function(){
    let soundWeb = document.getElementById('soundWeb');
    soundWeb.play();

});
    // document.body.addEventListener("mousemove", playMusic());

    // function playMusic()
    // {
    //     let soundWeb = document.getElementById('soundWeb');
    //     soundWeb.play();
    //     document.body.removeEventListener("mousemove",playMusic());
    // }