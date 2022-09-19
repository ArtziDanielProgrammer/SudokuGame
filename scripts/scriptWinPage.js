window.addEventListener('load',() => {
    let finishTimeUser = sessionStorage.getItem('finishTime');
    if(finishTimeUser == null)
    return;
    let time = document.getElementById('time');
    time.innerHTML = finishTimeUser;
});



function playWin()
{
    let soundWeb = document.getElementById('soundWeb');
    soundWeb.play();
}







