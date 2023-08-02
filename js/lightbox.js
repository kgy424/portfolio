function openModal() {
    document.getElementById("myModal01").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal01").style.display = "none";
}

function plusSlider(n) {
    showSlide(slideIndex += n)
}

function currentSlide(n) {
    showSlide(slideIndex = n)
}

function showSlide(n) {
    let slider = document.getElementsByClassName("slide01");
    let dots = document.getElementsByClassName("demo01");

    let caption = document.getElementById("caption01");

    if (n > slider.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slider.length
    }

    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display = "none"
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slider[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    caption.innerHTML = dots[slideIndex - 1].alt;
}

// ------------------------------- 02

function openModal02() {
    document.getElementById("myModal02").style.display = "block";
}

function closeModal02() {
    document.getElementById("myModal02").style.display = "none";
}

function plusSlider02(n) {
    showSlide02(slideIndex02 += n)
}

function currentSlide02(n) {
    showSlide02(slideIndex02 = n)
}

function showSlide02(n) {
    let slider02 = document.getElementsByClassName("mySlide02");
    let dots02 = document.getElementsByClassName("demo02");

    let caption02 = document.getElementById("caption02");

    if (n > slider02.length) {
        slideIndex02 = 1
    }
    if (n < 1) {
        slideIndex02 = slider02.length
    }

    for (let i = 0; i < slider02.length; i++) {
        slider02[i].style.display = "none"
    }
    for (let i = 0; i < dots02.length; i++) {
        dots02[i].classList.remove("active");
    }

    slider02[slideIndex02 - 1].style.display = "block";
    dots02[slideIndex02 - 1].classList.add("active");

    caption02.innerHTML = dots02[slideIndex02 - 1].alt;
}


// ------------------------------- 03

function openModal03() {
    document.getElementById("myModal03").style.display = "block";
}

function closeModal03() {
    document.getElementById("myModal03").style.display = "none";
}

function plusSlider03(n) {
    showSlide03(slideIndex03 += n)
}

function currentSlide03(n) {
    showSlide03(slideIndex03 = n)
}

function showSlide03(n) {
    let slider03 = document.getElementsByClassName("mySlide03");
    let dots03 = document.getElementsByClassName("demo03");

    let caption03 = document.getElementById("caption03");

    if (n > slider03.length) {
        slideIndex03 = 1
    }
    if (n < 1) {
        slideIndex03 = slider03.length
    }

    for (let i = 0; i < slider03.length; i++) {
        slider03[i].style.display = "none"
    }
    for (let i = 0; i < dots03.length; i++) {
        dots03[i].classList.remove("active");
    }

    slider03[slideIndex03 - 1].style.display = "block";
    dots03[slideIndex03 - 1].classList.add("active");

    caption03.innerHTML = dots03[slideIndex03 - 1].alt;
}