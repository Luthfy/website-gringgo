window.onload = () => {

    setTimeout(() => {
        if (document.getElementsByClassName('number').length > 0) {
            autoCounterInterval();
        }
    }, 100);
}

function toggleMenu()
{
    if (document.getElementById("menuMobile").classList.toggle("d-none")) {
        document.getElementById("menuMobile").classList.add("d-none")
    } else {
        document.getElementById("menuMobile").classList.remove("d-none")
    }
}

function autoCounterInterval()
{
    var tagNumber = document.getElementsByClassName('number');

    var timer = setInterval(() => {

        let tagNumberArray = [].slice.call(document.getElementsByClassName('number'));

        const smallerTo = tagNumberArray.map(object => {
            return Number(object.getAttribute('data-to'));
        });

        if (Number(document.getElementsByClassName('number')[0].getAttribute('data-current')) > Math.min.apply(null, smallerTo)) {
            Array.prototype.forEach.call(tagNumber, function(el) {
                el.innerHTML = el.getAttribute('data-to') + el.getAttribute('data-append')
            });
            
            clearInterval(timer);
            return; 
        }

        Array.prototype.forEach.call(tagNumber, function(el) {
            incrementCounterAnimation(el.getAttribute('data-to'), el.getAttribute('data-append'), el);
        });
    }, 100);
}

function incrementCounterAnimation(to, append, target)
{
    let index = Number(target.getAttribute('data-current')) + 1;
        target.innerText = index + append;
        target.setAttribute('data-current', index);
}




