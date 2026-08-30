let banner = document.querySelector('.banner')
let main = document.querySelector('main')

let nav1 = document.getElementById('nav1');
let links = nav1.querySelectorAll('section ul li a');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        e.preventDefault();
        let href = this.href;
        
        if (banner){
            banner.classList.add('upNOut');
        }
        main.classList.add('downNFade');

        main.addEventListener('animationend', function(){
            window.location.href = href;
        })
    });
}
