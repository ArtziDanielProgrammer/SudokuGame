function clickInput(element) {

    let arrOfInputsGame = document.getElementsByClassName('numbersButton');
    let boardFull = true;
    // אחרי חשיפת התא נבדוק אם כל הלוח פתור
    for (let buttonNow in arrOfInputsGame) {

        if (buttonNow == "length") {
            break;
        }
        arrOfInputsGame[buttonNow].disabled = false;
    }

    // רק לאינפוט גלוי נוצר enebald
    // כל השאר null
    // if(element.enebeld != null)
    // {
    //     alert(element.enebeld);
    // }
    let tdParent;
    let trParent;

    let tableParent;
    let columnNumber;
    let lineNumber;

    // במקרה בו בצענו לחיצה על אינפוט נרצה למחוק את הסימון בלחיצה על אינפוט אחר
    if (saveToChange != null) {

        tdParent = saveToChange.parentElement;
        trParent = tdParent.parentElement;

        tableParent = trParent.parentElement;
        columnNumber = saveToChange.id;
        lineNumber = trParent.id;

        for (let index = 0; index < 9; index++) {
            let tdChild = trParent.children[index];
            let inputChild = tdChild.firstChild;
            if (inputChild.disabled) {
                inputChild.style.backgroundColor = "lightyellow";
            }
            else {
                inputChild.style.backgroundColor = "white";
            }
        }
        for (let index = 0; index < 9; index++) {
            let trChild = tableParent.children[index];
            let tdChild = trChild.children[columnNumber % 9];
            let inputChild = tdChild.firstChild;
            if (inputChild.disabled) {
                inputChild.style.backgroundColor = "lightyellow";
            }
            else {
                inputChild.style.backgroundColor = "white";
            }
        }


        //כל ריבוע מחולק ל3 שורות  נסמן את ריבוע האינפוט המצוין 

        //נמיר מחרוזת אידי למספר לחישובי אינדקסים
        let indexChar = lineNumber.indexOf('-') + 1;
        lineNumber = lineNumber.slice(indexChar);
        //נמיר מחרוזת אידי למספר לחישובי אינדקסים
        let lineNumberParse = parseInt(lineNumber);
        let columnNumberParse = parseInt(columnNumber);

        // חישוב העמודות לסימון על פי העמודות לא משתנה
        // מה שחשוב הוא השגת מיקומי השורות הדרושות לסימון 
        let posLineToColor1;
        let posLineToColor2;

        // שורה עליונה
        if (lineNumber % 3 == 0) {
            posLineToColor1 = tableParent.children[lineNumberParse + 1];
            posLineToColor2 = tableParent.children[lineNumberParse + 2];
        }

        // שורה אמצעית
        else if (lineNumber % 3 == 1) {
            posLineToColor1 = tableParent.children[lineNumberParse + 1];
            posLineToColor2 = tableParent.children[lineNumberParse - 1];
        }

        // שורה תחתונה
        else {
            posLineToColor1 = tableParent.children[lineNumberParse - 1];
            posLineToColor2 = tableParent.children[lineNumberParse - 2];
        }

        // כל שנותר הוא מציאת העמודות לסימון על פי מיקום אינפוט העמודה 

        let columnToColor;
        let inputToColor;
        // עמודה שמאלית
        if (columnNumber % 3 == 0) {

            columnToColor = posLineToColor1.children[columnNumber % 9 + 1];
            inputToColor = columnToColor.firstChild;
            if (inputToColor.disabled) {
                inputToColor.style.backgroundColor = "lightyellow";
            }
            else {
                inputToColor.style.backgroundColor = "white";
            }
            columnToColor = posLineToColor1.children[columnNumber % 9 + 2];
            inputToColor = columnToColor.firstChild;
            if (inputToColor.disabled) {
                inputToColor.style.backgroundColor = "lightyellow";
            }
            else {
                inputToColor.style.backgroundColor = "white";
            }

            columnToColor = posLineToColor2.children[columnNumber % 9 + 1];
            inputToColor = columnToColor.firstChild;
            if (inputToColor.disabled) {
                inputToColor.style.backgroundColor = "lightyellow";
            }
            else {
                inputToColor.style.backgroundColor = "white";
            }
            columnToColor = posLineToColor2.children[columnNumber % 9 + 2];
            inputToColor = columnToColor.firstChild;
            if (inputToColor.disabled) {
                inputToColor.style.backgroundColor = "lightyellow";
            }
            else {
                inputToColor.style.backgroundColor = "white";
            }

        }

        // עמודה אמצעית
        else if (columnNumber % 3 == 1) {
            columnToColor = posLineToColor1.children[columnNumber % 9 + 1];
            inputToColor = columnToColor.firstChild;
            if (inputToColor.disabled) {
                inputToColor.style.backgroundColor = "lightyellow";
            }
            else {
                inputToColor.style.backgroundColor = "white";
            }
            columnToColor = posLineToColor1.children[columnNumber % 9 - 1];
            inputToColor = columnToColor.firstChild;
            if (inputToColor.disabled) {
                inputToColor.style.backgroundColor = "lightyellow";
            }
            else {
                inputToColor.style.backgroundColor = "white";
            }

            columnToColor = posLineToColor2.children[columnNumber % 9 + 1];
            inputToColor = columnToColor.firstChild;
            if (inputToColor.disabled) {
                inputToColor.style.backgroundColor = "lightyellow";
            }
            else {
                inputToColor.style.backgroundColor = "white";
            }
            columnToColor = posLineToColor2.children[columnNumber % 9 - 1];
            inputToColor = columnToColor.firstChild;
            if (inputToColor.disabled) {
                inputToColor.style.backgroundColor = "lightyellow";
            }
            else {
                inputToColor.style.backgroundColor = "white";
            }

        }

        // עמודה ימנית
        else {
            columnToColor = posLineToColor1.children[columnNumber % 9 - 1];
            inputToColor = columnToColor.firstChild;
            if (inputToColor.disabled) {
                inputToColor.style.backgroundColor = "lightyellow";
            }
            else {
                inputToColor.style.backgroundColor = "white";
            }
            columnToColor = posLineToColor1.children[columnNumber % 9 - 2];
            inputToColor = columnToColor.firstChild;
            if (inputToColor.disabled) {
                inputToColor.style.backgroundColor = "lightyellow";
            }
            else {
                inputToColor.style.backgroundColor = "white";
            }

            columnToColor = posLineToColor2.children[columnNumber % 9 - 1];
            inputToColor = columnToColor.firstChild;
            if (inputToColor.disabled) {
                inputToColor.style.backgroundColor = "lightyellow";
            }
            else {
                inputToColor.style.backgroundColor = "white";
            }
            columnToColor = posLineToColor2.children[columnNumber % 9 - 2];
            inputToColor = columnToColor.firstChild;
            if (inputToColor.disabled) {
                inputToColor.style.backgroundColor = "lightyellow";
            }
            else {
                inputToColor.style.backgroundColor = "white";
            }
        }

    }

    // קבלת העמודה והשורה של האינפוט הנלחץ
    tdParent = element.parentElement;
    trParent = tdParent.parentElement;

    tableParent = trParent.parentElement;
    columnNumber = element.id;
    lineNumber = trParent.id;

    // נרוץ על העמודות של השורה בה לחצנו על האינפוט
    for (let index = 0; index < 9; index++) {
        let tdChild = trParent.children[index];
        tdChild.firstChild.style.backgroundColor = "chartreuse";
    }

    // נרוץ על שורות הסודוקו ונסמן את העמודה הספציפית בכל שורה לפי אינדקס האינפוט 
    // האידי רץ מ 0 עד 81 ובשורות של 9 ולכן נחפש אחר השארית המתאימה.
    for (let index = 0; index < 9; index++) {
        let trChild = tableParent.children[index];
        let tdChild = trChild.children[columnNumber % 9];
        tdChild.firstChild.style.backgroundColor = "chartreuse";
    }


    //כל ריבוע מחולק ל3 שורות  נסמן את ריבוע האינפוט המצוין 

    //נמיר מחרוזת אידי למספר לחישובי אינדקסים
    let indexChar = lineNumber.indexOf('-') + 1;
    lineNumber = lineNumber.slice(indexChar);
    let lineNumberParse = parseInt(lineNumber);
    let columnNumberParse = parseInt(columnNumber);

    // חישוב העמודות לסימון על פי העמודות לא משתנה
    // מה שחשוב הוא השגת מיקומי השורות הדרושות לסימון 
    let posLineToColor1;
    let posLineToColor2;

    // שורה עליונה
    if (lineNumber % 3 == 0) {
        posLineToColor1 = tableParent.children[lineNumberParse + 1];
        posLineToColor2 = tableParent.children[lineNumberParse + 2];
    }

    // שורה אמצעית
    else if (lineNumber % 3 == 1) {
        posLineToColor1 = tableParent.children[lineNumberParse + 1];
        posLineToColor2 = tableParent.children[lineNumberParse - 1];
    }

    // שורה תחתונה
    else {
        posLineToColor1 = tableParent.children[lineNumberParse - 1];
        posLineToColor2 = tableParent.children[lineNumberParse - 2];
    }

    // כל שנותר הוא מציאת העמודות לסימון על פי מיקום אינפוט העמודה 

    let columnToColor;
    // עמודה שמאלית
    if (columnNumber % 3 == 0) {

        columnToColor = posLineToColor1.children[columnNumber % 9 + 1];
        columnToColor.firstChild.style.backgroundColor = "chartreuse";
        columnToColor = posLineToColor1.children[columnNumber % 9 + 2];
        columnToColor.firstChild.style.backgroundColor = "chartreuse";

        columnToColor = posLineToColor2.children[columnNumber % 9 + 1];
        columnToColor.firstChild.style.backgroundColor = "chartreuse";
        columnToColor = posLineToColor2.children[columnNumber % 9 + 2];
        columnToColor.firstChild.style.backgroundColor = "chartreuse";

    }

    // עמודה אמצעית
    else if (columnNumber % 3 == 1) {
        columnToColor = posLineToColor1.children[columnNumber % 9 + 1];
        columnToColor.firstChild.style.backgroundColor = "chartreuse";
        columnToColor = posLineToColor1.children[columnNumber % 9 - 1];
        columnToColor.firstChild.style.backgroundColor = "chartreuse";

        columnToColor = posLineToColor2.children[columnNumber % 9 + 1];
        columnToColor.firstChild.style.backgroundColor = "chartreuse";
        columnToColor = posLineToColor2.children[columnNumber % 9 - 1];
        columnToColor.firstChild.style.backgroundColor = "chartreuse";

    }

    // עמודה ימנית
    else {
        columnToColor = posLineToColor1.children[columnNumber % 9 - 1];
        columnToColor.firstChild.style.backgroundColor = "chartreuse";
        columnToColor = posLineToColor1.children[columnNumber % 9 - 2];
        columnToColor.firstChild.style.backgroundColor = "chartreuse";

        columnToColor = posLineToColor2.children[columnNumber % 9 - 1];
        columnToColor.firstChild.style.backgroundColor = "chartreuse";
        columnToColor = posLineToColor2.children[columnNumber % 9 - 2];
        columnToColor.firstChild.style.backgroundColor = "chartreuse";
    }

    saveToChange = element;
}

// משתנה שישמור את האינפוט האחרון שלחצנו עליו ולפיו הראנו שורה ועמודה
var saveToChange;





function createSud() {
    let table1 = document.createElement('table');
    table1.setAttribute('class', 'tableS');
    let indexInput = 0;
    for (let index = 0; index < 9; index++) {
        let tr = document.createElement('tr');
        if (index == 2 || index == 5)
            tr.setAttribute('class', 'trSS');
        else
            tr.setAttribute('class', 'trS');
        tr.setAttribute('id', 'tr-' + index);
        for (let index2 = 0; index2 < 9; index2++) {
            let td1 = document.createElement('td');
            let input1 = document.createElement('input');
            if (index2 == 2 || index2 == 5 || index2 == 8)
                td1.setAttribute('class', 'tdSS');
            else
                td1.setAttribute('class', 'tdS');
            input1.setAttribute('class', 'inputS');
            input1.setAttribute('maxLength', '1');
            input1.setAttribute('size', '1');
            input1.setAttribute('id', indexInput);
            indexInput++;
            input1.onclick = function () {
                clickInput(this);
            };
            td1.appendChild(input1);
            tr.appendChild(td1);
        }
        table1.appendChild(tr);
    }
    document.body.appendChild(table1);
}
createSud();


// בלחיצת כפתור נבדוק איזה אינפוט נלחץ
//נוסיף את ערך הכפתור לאינפוט
// הסימון יעלם באמצעות הפונקציה הבודקת אם לחצנו על אזור שאינו אינפוט
// במקרה שלנו כפתור
function addNumToCell(button) {
    if(saveToChange != null)
    {
        saveToChange.value = button.value;
    }
    // alert(button.value);
}


var urlImg = [];
for (let index = 0; index < 9; index++) {
    urlImg[index] = `../images/imagesGamePage/numbersTable/${index + 1}a.jpg`;

}


function createNum() {
    let table1 = document.createElement('table');
    table1.setAttribute('class', 'numbersTable');
    for (let i = 0; i < 3; i++) {
        let tr1 = document.createElement('tr');
        tr1.setAttribute('class', 'numbersLine');
        for (let j = 0; j < 3; j++) {
            let td1 = document.createElement('td');
            td1.setAttribute('class', 'numbersColumn')
            let button1 = document.createElement('button');
            button1.setAttribute('disabled', true);
            button1.onclick = function () {
                addNumToCell(this);
            };

            button1.setAttribute('class', 'numbersButton');
            button1.value = (i * 3 + j) + 1;

            button1.style.backgroundImage = `url(${urlImg[i * 3 + j]})`;
            td1.appendChild(button1);
            tr1.appendChild(td1);
        }
        table1.appendChild(tr1);
    }
    document.body.appendChild(table1);
}
createNum();

// מעבר על ערכי המטריצה של המשחק והצבה בערכי אינפוט של המשחק בהתאם לרמה
//  רמה 1 - 75% = 68 משבצות גלויות 
//  רמה 2 - 50% = 45 משבצות גלויות
// רמה 3 - 25% = 22 משבצות גלויות


const mat1 = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
]

// מחיקת סימון בסודוקו בעת לחיצה על תוכן אתר
document.addEventListener('click', function (event) {
    if(event.target.tagName == undefined)
    {
        return;
    }
    if (event.target.tagName.toLowerCase() != 'input') {

        let arrOfInputsGame = document.getElementsByClassName('numbersButton');
        // אחרי לחיצה על מקום בדף שלא תהיה באינפוט
        //נכבה אופצית לחיצת כפתור
        for (let buttonNow in arrOfInputsGame) {

            if (buttonNow == "length") {
                break;
            }
            arrOfInputsGame[buttonNow].disabled = true;
        }

        if (saveToChange != null) {

            tdParent = saveToChange.parentElement;
            trParent = tdParent.parentElement;

            tableParent = trParent.parentElement;
            columnNumber = saveToChange.id;
            lineNumber = trParent.id;

            for (let index = 0; index < 9; index++) {
                let tdChild = trParent.children[index];
                let inputChild = tdChild.firstChild;
                if (inputChild.disabled) {
                    inputChild.style.backgroundColor = "lightyellow";
                }
                else {
                    inputChild.style.backgroundColor = "white";
                }
            }
            for (let index = 0; index < 9; index++) {
                let trChild = tableParent.children[index];
                let tdChild = trChild.children[columnNumber % 9];
                let inputChild = tdChild.firstChild;
                if (inputChild.disabled) {
                    inputChild.style.backgroundColor = "lightyellow";
                }
                else {
                    inputChild.style.backgroundColor = "white";
                }
            }


            //כל ריבוע מחולק ל3 שורות  נסמן את ריבוע האינפוט המצוין 

            //נמיר מחרוזת אידי למספר לחישובי אינדקסים
            let indexChar = lineNumber.indexOf('-') + 1;
            lineNumber = lineNumber.slice(indexChar);
            //נמיר מחרוזת אידי למספר לחישובי אינדקסים
            let lineNumberParse = parseInt(lineNumber);
            let columnNumberParse = parseInt(columnNumber);

            // חישוב העמודות לסימון על פי העמודות לא משתנה
            // מה שחשוב הוא השגת מיקומי השורות הדרושות לסימון 
            let posLineToColor1;
            let posLineToColor2;

            // שורה עליונה
            if (lineNumber % 3 == 0) {
                posLineToColor1 = tableParent.children[lineNumberParse + 1];
                posLineToColor2 = tableParent.children[lineNumberParse + 2];
            }

            // שורה אמצעית
            else if (lineNumber % 3 == 1) {
                posLineToColor1 = tableParent.children[lineNumberParse + 1];
                posLineToColor2 = tableParent.children[lineNumberParse - 1];
            }

            // שורה תחתונה
            else {
                posLineToColor1 = tableParent.children[lineNumberParse - 1];
                posLineToColor2 = tableParent.children[lineNumberParse - 2];
            }

            // כל שנותר הוא מציאת העמודות לסימון על פי מיקום אינפוט העמודה 

            let columnToColor;
            let inputToColor;
            // עמודה שמאלית
            if (columnNumber % 3 == 0) {

                columnToColor = posLineToColor1.children[columnNumber % 9 + 1];
                inputToColor = columnToColor.firstChild;
                if (inputToColor.disabled) {
                    inputToColor.style.backgroundColor = "lightyellow";
                }
                else {
                    inputToColor.style.backgroundColor = "white";
                }
                columnToColor = posLineToColor1.children[columnNumber % 9 + 2];
                inputToColor = columnToColor.firstChild;
                if (inputToColor.disabled) {
                    inputToColor.style.backgroundColor = "lightyellow";
                }
                else {
                    inputToColor.style.backgroundColor = "white";
                }

                columnToColor = posLineToColor2.children[columnNumber % 9 + 1];
                inputToColor = columnToColor.firstChild;
                if (inputToColor.disabled) {
                    inputToColor.style.backgroundColor = "lightyellow";
                }
                else {
                    inputToColor.style.backgroundColor = "white";
                }
                columnToColor = posLineToColor2.children[columnNumber % 9 + 2];
                inputToColor = columnToColor.firstChild;
                if (inputToColor.disabled) {
                    inputToColor.style.backgroundColor = "lightyellow";
                }
                else {
                    inputToColor.style.backgroundColor = "white";
                }

            }

            // עמודה אמצעית
            else if (columnNumber % 3 == 1) {
                columnToColor = posLineToColor1.children[columnNumber % 9 + 1];
                inputToColor = columnToColor.firstChild;
                if (inputToColor.disabled) {
                    inputToColor.style.backgroundColor = "lightyellow";
                }
                else {
                    inputToColor.style.backgroundColor = "white";
                }
                columnToColor = posLineToColor1.children[columnNumber % 9 - 1];
                inputToColor = columnToColor.firstChild;
                if (inputToColor.disabled) {
                    inputToColor.style.backgroundColor = "lightyellow";
                }
                else {
                    inputToColor.style.backgroundColor = "white";
                }

                columnToColor = posLineToColor2.children[columnNumber % 9 + 1];
                inputToColor = columnToColor.firstChild;
                if (inputToColor.disabled) {
                    inputToColor.style.backgroundColor = "lightyellow";
                }
                else {
                    inputToColor.style.backgroundColor = "white";
                }
                columnToColor = posLineToColor2.children[columnNumber % 9 - 1];
                inputToColor = columnToColor.firstChild;
                if (inputToColor.disabled) {
                    inputToColor.style.backgroundColor = "lightyellow";
                }
                else {
                    inputToColor.style.backgroundColor = "white";
                }

            }

            // עמודה ימנית
            else {
                columnToColor = posLineToColor1.children[columnNumber % 9 - 1];
                inputToColor = columnToColor.firstChild;
                if (inputToColor.disabled) {
                    inputToColor.style.backgroundColor = "lightyellow";
                }
                else {
                    inputToColor.style.backgroundColor = "white";
                }
                columnToColor = posLineToColor1.children[columnNumber % 9 - 2];
                inputToColor = columnToColor.firstChild;
                if (inputToColor.disabled) {
                    inputToColor.style.backgroundColor = "lightyellow";
                }
                else {
                    inputToColor.style.backgroundColor = "white";
                }

                columnToColor = posLineToColor2.children[columnNumber % 9 - 1];
                inputToColor = columnToColor.firstChild;
                if (inputToColor.disabled) {
                    inputToColor.style.backgroundColor = "lightyellow";
                }
                else {
                    inputToColor.style.backgroundColor = "white";
                }
                columnToColor = posLineToColor2.children[columnNumber % 9 - 2];
                inputToColor = columnToColor.firstChild;
                if (inputToColor.disabled) {
                    inputToColor.style.backgroundColor = "lightyellow";
                }
                else {
                    inputToColor.style.backgroundColor = "white";
                }
            }

            saveToChange = null;
        }
    }
});

let startTimer = setInterval(addSeconds, 1000);

function addSeconds() {
    let timerString = document.getElementById('spannTime').innerText;
    let timerStringArr = timerString.split(':');

    timerStringArr[2]++;
    let secondes = timerStringArr[2];

    // איפוס כל 60 שניות
    if (secondes == 60) {
        // הוספה 1 לדקה ואיפוס לשניות
        timerStringArr[1]++;
        timerStringArr[2] = 0;

        // בדיקת איפוס דקה
        let minutes = timerStringArr[1];
        if (minutes == 60) {
            // נוסיף 1 לשעה ונאפס דקות
            timerStringArr[0]++;
            timerStringArr[1] = 0

            // בדיקת איפוס שעה
            let houers = timerStringArr[0];
            if (houers == 24) {
                alert("You win - The time : " + timerStringArr[0] + ':' + timerStringArr[1] + ':' + timerStringArr[2]);
                timerStringArr[0] = "Edar";
                timerStringArr[1] = "Tzvi";
                timerStringArr[2] = "Marcos";
                // נעצור טיימר אחרי הגעה ל24 שעות
                clearInterval(startTimer);

            }

        }
    }
    // כל שניה נסים את השניה הנוכחית בשניות
    else {
        timerStringArr[2] = secondes;
    }

    // נבדוק אם יש ספרה 1 ל דקה שעה או שניה ונוסיף 0 משמאל שיהיה טיימר תקין
    for (let index = 0; index < timerStringArr.length; index++) {
        if (timerStringArr[index].toString().length == 1) {
            timerStringArr[index] = '0' + timerStringArr[index];
        }
    }
    // נעדכן טיימר
    // join = חיבור תאי מערך סטרינג באמצעות תו מיוחד
    timerString = timerStringArr.join(':');
    // alert(timerString);
    document.getElementById('spannTime').innerText = timerString;



}