window.onscroll = onScroll;

function onScroll() {
    var removeActiveClass = function (elements) {
        for (var i = 0; i < elements.length; ++i) {
            elements[i].classList.remove('active');
        }
    }

    var anchors = document.querySelectorAll('.nav__menu a');
    var previousRefElement = null;

    for (var i = 0; i < anchors.length; ++i) {
        var currentRefElement = document.getElementById(anchors[i].getAttribute('href').substring(1));
        var currentRefElementTop = currentRefElement.getBoundingClientRect().top;
        if (currentRefElementTop <= 1) {
            previousRefElement = anchors[i];
            if (i === anchors.length - 1) {
                removeActiveClass(anchors);
                anchors[i].classList.add("active");
            }
        } else {
            removeActiveClass(anchors);
            previousRefElement.classList.add("active");
            break;
        }   
    }
}