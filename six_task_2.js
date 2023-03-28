(function (){
    document.querySelector('h1').style.backgroundColor = 'green';
    const paragraphs = document.querySelectorAll('#myDiv p');
    paragraphs[0].style.fontWeight = 'bolder';
    paragraphs[1].style.color = 'red';
    paragraphs[2].style.textDecoration = 'underline';
    paragraphs[paragraphs.length - 1].style.fontStyle = 'italic';
    document.querySelector('#myList').style.display = 'flex';
    document.querySelector('#myList').style.flexDirection = 'row';
    document.querySelector('span').style.visibility = 'hidden';
})();