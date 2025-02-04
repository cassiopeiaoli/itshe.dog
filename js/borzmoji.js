const article = document.querySelector('.article');

(() => {
    article.innerHTML = article.innerHTML.replaceAll(':happy:', "<img class='emoji' src='" + '../assets/img/emojis/happy.png' + "'>");
    article.innerHTML = article.innerHTML.replaceAll(':hmm:', "<img class='emoji' src='" + '../assets/img/emojis/hmm.png' + "'>");
})();