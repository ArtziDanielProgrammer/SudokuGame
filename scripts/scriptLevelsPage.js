const selectLevels = (numLevel) =>
{
    sessionStorage.setItem('level',numLevel);
    location.href = '../htmls/theGamePage.html'
}