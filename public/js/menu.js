/*var body = document.body;
var hamburger = document.querySelector('.mobile-hamburger');
var bar = hamburger.children[0];
var nav = document.querySelector('nav');
hamburger.addEventListener('click', function () {
    nav.classList.toggle('is-open');
    body.classList.toggle('overlay');
    bar.classList.toggle('animate');
});
body.addEventListener('click', function (e) {
    if (e.target.classList.contains('mobile-hamburger')) {
        return;
    }
    if (nav.classList.contains('is-open') && body.classList.contains('overlay')) {
        nav.classList.remove('is-open');
        body.classList.remove('overlay');
        bar.classList.remove('animate');
    }
});




(function () {
    function init() {
        [].slice.call(document.querySelectorAll('.dr-menu')).forEach(function (el, i) {
            var trigger = el.querySelector('div.dr-trigger'), icon = trigger.querySelector('span.dr-icon-menu'), open = false;
            trigger.addEventListener('click', function (event) {
                if (!open) {
                    el.className += ' dr-menu-open';
                    open = true;
                }
            }, false);
            icon.addEventListener('click', function (event) {
                if (open) {
                    event.stopPropagation();
                    open = false;
                    el.className = el.className.replace(/\bdr-menu-open\b/, '');
                    return false;
                }
            }, false);
        });
    }
    init();
})();*/



var myCarousel = document.getElementById('carusel');

if (myCarousel && myCarousel.hasChildNodes()) {
    var imagesWrapper = document.getElementById('wrapper');
    var prevArrow = document.getElementById('prev');
    var nextArrow = document.getElementById('next');
    var childNodes = myCarousel.childNodes;
    var imagesArray = [];

    for (var i = 0; i < childNodes.length; i++) {
        var currentNode = childNodes[i];
        if (currentNode.nodeName === 'IMG') {
            imagesArray.push(currentNode.src);
            currentNode.classList.add('hide');
        }
    }

imagesWrapper.style.backgroundImage = 'url(' + imagesArray[0] + ')';
var currentImage = 0;
var numberOfImages = imagesArray.length;

prevArrow.onclick = function () {
    handleSlideshowArrow('prev');
};

nextArrow.onclick = function () {
    handleSlideshowArrow('next');
};

function handleSlideshowArrow(val) {
    if (val === 'prev') {
        if (currentImage > 0) {
            currentImage--;
        } else {
            currentImage = numberOfImages - 1;
        }
    } else if (val === 'next') {
        if (currentImage < numberOfImages - 1) {
            currentImage++;
        } else {
            currentImage = 0;
        }
    }

    imagesWrapper.classList.add('fade-out');
    imagesWrapper.style.backgroundImage = 'url(' + imagesArray[currentImage] + ')';
    imagesWrapper.classList.remove('fade-out');
}

}




/*var myCarousel1 = document.getElementById('karusel');

if (myCarousel1 && myCarousel.hasChildNodes()) {
    var imagesWrapper1 = document.getElementById('wrapper1');
    var prevArrow1 = document.getElementById('prev1');
    var nextArrow1 = document.getElementById('next1');
    var childNodes1 = myCarousel.childNodes;
    var imagesArray1 = [];

    for (var i = 0; i < childNodes.length; i++) {
        var currentNode1 = childNodes1[i];
        if (currentNode.nodeName === 'IMG') {
            imagesArray.push(currentNode.src);
            currentNode.classList.add('hide');
        }
    }

imagesWrapper.style.backgroundImage = 'url(' + imagesArray1[0] + ')';
var currentImage1 = 0;
var numberOfImages1 = imagesArray.length;

prevArrow.onclick = function () {
    handleSlideshowArrow('prev1');
};

nextArrow.onclick = function () {
    handleSlideshowArrow('next1');
};

function handleSlideshowArrow(val) {
    if (val === 'prev1') {
        if (currentImage1 > 0) {
            currentImage1--;
        } else {
            currentImage1 = numberOfImages1 - 1;
        }
    } else if (val === 'next') {
        if (currentImage1 < numberOfImages1 - 1) {
            currentImage1++;
        } else {
            currentImage1 = 0;
        }
    }

    imagesWrapper.classList.add('fade-out');
    imagesWrapper.style.backgroundImage = 'url(' + imagesArray1[currentImage1] + ')';
    imagesWrapper.classList.remove('fade-out');
}

}*/
