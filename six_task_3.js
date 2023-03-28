(function (){
   const main = document.createElement('main');
   const div = document.createElement('div');
   const p = document.createElement('p');

   main.classList.add('mainClass', 'check', 'item');
   div.id = 'mDiv';

   p.textContent = 'First paragraph';

    div.appendChild(p);
    main.appendChild(div);
    document.body.appendChild(main);
})();