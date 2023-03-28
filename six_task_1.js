(function (){
   const item = document.querySelectorAll('.list li');
   const result = [
       item[0].textContent,
       item[item.length - 1].textContent,
       item[1].textContent,
       item[3].textContent,
       item[2].textContent,
   ]
console.log(...result);
})();