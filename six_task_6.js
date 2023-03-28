
    const colors = document.querySelectorAll(".color");
    const shoes = document.querySelectorAll(".shoe");
    const gradients = document.querySelectorAll(".gradient");
    const shoeBackground = document.querySelector(".shoeBackground");
    const price = document.querySelector("#outprice");

    colors.forEach(color => color.addEventListener("click", changeColor));
    gradients.forEach(gradient => gradient.addEventListener("click", changeGradient));

    function changeColor(){
        // Встановлюємо активний клас для кольорів
        colors.forEach(c => c.classList.remove("active"));
        this.classList.add("active");

        // Отримуємо вибраний колір
        const primary = this.getAttribute("primary");
        const color = this.getAttribute("color");

        // Змінюємо фонове зображення та відповідну ціну
        shoeBackground.style.backgroundImage = `url('https://i.postimg.cc/${color}.png')`;
        price.textContent = this.getAttribute("data-price");

        // Змінюємо колір вибраних варіацій взуття
        shoes.forEach(shoe => shoe.setAttribute("src", `https://i.postimg.cc/${color}.png`));
    }

    function changeGradient(){
        // Встановлюємо активний клас для градієнтів
        gradients.forEach(g => g.classList.remove("second"));
        this.classList.add("second");

        // Отримуємо вибраний градієнт
        const primary = this.getAttribute("primary");
        const color = this.getAttribute("color");

        // Змінюємо фоновий градієнт та відповідну ціну
        shoeBackground.style.background = `linear-gradient(to right, ${primary}, #000)`;
        price.textContent = this.getAttribute("data-price");
    }

    const sizeButtons = document.querySelectorAll(".size");

    sizeButtons.forEach(button => button.addEventListener("click", changeSize));

    function changeSize() {
        // Встановлюємо активний клас для розміру
        sizeButtons.forEach(button => button.classList.remove("active"));
        this.classList.add("active");

        // Оновлюємо ціну відповідно до вибраного розміру
        const price = parseInt(document.querySelector("#outprice").textContent);
        const newSizePrice = parseInt(this.getAttribute("data-price"));
        const newTotalPrice = price + newSizePrice;
        document.querySelector("#outprice").textContent = newTotalPrice.toFixed(2);
    }

