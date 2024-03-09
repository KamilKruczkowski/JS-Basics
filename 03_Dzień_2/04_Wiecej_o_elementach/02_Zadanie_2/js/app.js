const browserCards = document.querySelectorAll('.card');

const chromeBrowser = browserCards[0];
const edgeBrowser = browserCards[1];
const firefoxBrowser = browserCards[2];

chromeBrowser.querySelector('.chrome').style.width = '100px';
chromeBrowser.querySelector('a').innerText = 'Chrome';

edgeBrowser.querySelector('.edge').style.backgroundImage = "url('./img/edge.jpg')";
edgeBrowser.querySelector('a').href = 'https://microsoft.com/edge';

firefoxBrowser.querySelector('.firefox').style.backgroundImage = "url('./img/firefox.jpg')";
firefoxBrowser.querySelector('a').innerText = 'Firefox';
firefoxBrowser.querySelector('a').href = 'https://mozilla.com/firefox';