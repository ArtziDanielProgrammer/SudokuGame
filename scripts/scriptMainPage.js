let user = {
    userName : 'abcd',
    userPassword : '1234'
};

const urlImg = [
    '../images/imagesMainPage/error.gif',
    '../images/imagesMainPage/Correct.gif'
]

const checkUserName = () =>
{
    let userInput = document.getElementById('input-UserName').value;
    let spanUserName = document.getElementById('span-UserName');
    let imgUserName = document.getElementById('imgUser');
    if(userInput != user.userName){
        spanUserName.innerHTML = `Error : The name is incorrect,<br>&emsp;&emsp;&ensp;are you sure that\'s your name ?`;
        spanUserName.style.color = 'crimson';
        imgUserName.src = urlImg[0];
        imgUserName.style.width = '15%';
        imgUserName.style.height = '15%';
        return false;
    }

    else{
        spanUserName.innerHTML = `Yess it\'s your name,${user.userName} it\'s a special name !`;
        spanUserName.style.color = 'limegreen';
        imgUserName.src = urlImg[1];
        imgUserName.style.width = '10%';
        imgUserName.style.height = '10%';
        return true;
    }
}

const checkPassword = () =>
{
    let userPassword = document.getElementById('input-UserPassword').value;
    let spanUserPassword = document.getElementById('span-UserPassword');
    let imgUserPassword = document.getElementById('imgPassword');
    if(userPassword != user.userPassword)
    {      
        spanUserPassword.innerHTML = 'Error : The password is incorrect,<br>&emsp;&emsp;&ensp;please try to remember it again forgetful * ^ *';
        spanUserPassword.style.color = 'crimson';
        imgUserPassword.src = urlImg[0];
        imgUserPassword.style.width = '15%';
        imgUserPassword.style.height = '15%';
        return false;
    }

    else{
        spanUserPassword.innerHTML = 'Yess This is your password,well done for remembering it !';
        spanUserPassword.style.color = 'limegreen';
        imgUserPassword.src = urlImg[1];
        imgUserPassword.style.width = '10%';
        imgUserPassword.style.height = '10%';
        return true;
    }
}

const pressLogin = () => {
    let correctUserNanme = checkUserName();
    let correctPassword = checkPassword();
    if(correctUserNanme && correctPassword)
    location.href = `../htmls/theLevelsPage.html`;
}