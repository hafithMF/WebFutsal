let items = document.querySelectorAll('.allowActive');
let containerFuild = document.querySelector('.container-fuild');

containerFuild.addEventListener('scroll', ()=>{
    items.forEach(item => {
        if(item.offsetTop - containerFuild.scrollTop < window.innerHeight*(3/4)){
            item.classList.add('active');
        }else{
            item.classList.remove('active');
        }
    })
})

// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Load sport library from JSON
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const sportLibrary = document.getElementById("sportLibrary");
            data.sports.forEach((sport, index) => {
                const sportItem = document.createElement("div");
                sportItem.classList.add("item");
                sportItem.innerText = sport;
                sportLibrary.appendChild(sportItem);

                // Add background image to every second item
                if (index % 2 === 1) {
                    sportItem.style.backgroundImage = `url(img/${sport.toLowerCase()}.jpg)`;
                    sportItem.style.transitionDelay = `${0.3 + index * 0.2}s`;
                }
            });
            sportLibrary.classList.add("active");
        });

    // Load school description from JSON
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const schoolDescription = document.getElementById("schoolDescription");
            schoolDescription.innerText = data.schoolDescription;
            schoolDescription.classList.add("active");
        });
});


const styles = `
body {
    margin: 0;
    font-family: "Lobster", cursive;
    background-color: #010001;
    color: #fff;
}

a {
    text-decoration: none;
}

.container-fuild {
    height: 100vh;
    overflow-x: hidden;
    perspective: 20px;
}

.banner {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transform-style: preserve-3d;
}
.content {
    font-size: xxx-large;
    transform: translateZ(10px);
}

.container {
    width: 1200px;
    max-width: 100%;
    margin: auto;
    padding-bottom: 100px;
}

img {
    width: 200px;
    height: auto;
}

header {
    position: absolute;
    top: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 1200px;
    max-width: 100%;
    padding: 40px 0;
}

header a {
    color: #eee;
    margin-right: 40px;
}

header .signin {
    display: flex;
    justify-content: end;
    align-items: center;
}

header button {
    color: #fff;
    padding: 10px 20px;
    border-radius: 20px;
    margin-left: 10px;
    background: transparent;
    color: white;
    border: 2px solid white;
}
h1 {
    list-style: none;
    display: flex;
    justify-content: center;
    font-size: 50px;
}


.library {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 500px);
    margin-top: 100px;
    column-gap: 20px;
    row-gap: 20px;
}

.library .item {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(img/renang.jpg);
    background-size: cover;
    transition: 0.5s;
    opacity: 0;
    transition-delay: 0.3s;
}

.library .item:nth-child(2) {
    background-image: url(img/futsal.JPG);
    transition-delay: 0.5s;
}

.library .item:nth-child(3) {
    background-image: url(img/badminton.jpg);
    transition-delay: 0.7s;
}

.library .item:nth-child(4) {
    background-image: url(img/sepakbola.jpg);
    transition-delay: 0.9s;
}

.des {
    width: 70%;
    text-align: center;
    margin: 100px auto;
    transition: 0.5s;
    transform: translateY(30px);
    opacity: 0;
}

.library.active .item {
    opacity: 1;
}

.des.active {
    opacity: 1;
    transform: translateY(0px);
}

footer {
    position: fixed;
    bottom: 0;
}

.footer {
    background-color: #040A18;
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font: bold 16px sans-serif;
    padding: 50px 50px 60px 50px;
    margin-top: 80px;
}

.footer .footer-left,
.footer .footer-center,
.footer .footer-right {
    display: inline-block;
    vertical-align: top;
}

@media (max-height:800px) {
    footer {
        position: static;
    }

    header {
        padding-top: 40px;
    }
}

.footer .footer-left {
    width: 30%;
}


.footer .footer-left img {
    width: 40%;
    vertical-align: middle;
    margin-left: 120px;
    margin-top: 30px;
}

.footer .footer-left .credit-cards {
    width: 100%;
}

.footer .footer-copyright {
    color: #8f9296;
    font-size: 14px;
    font-weight: normal;
    margin: 0;
    padding-top: 10%;
}

.footer .footer-center {
    width: 35%;
}

.footer .footer-center i {
    background-color: #292929;
    color: #ffffff;
    font-size: 25px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    text-align: center;
    line-height: 42px;
    margin: 10px 15px;
    vertical-align: middle;
}

.footer .footer-center i.fa-envelope {
    font-size: 17px;
    line-height: 38px;
}

.footer .footer-center p {
    display: inline-block;
    color: #ffffff;
    vertical-align: middle;
    margin: 0px;
}

.footer .footer-center p span {
    display: block;
    font-weight: normal;
    font-size: 14px;
    line-height: 2;
}

.footer .footer-center p a {
    color: rgb(175, 175, 175);
    text-decoration: none;
}

.footer .footer-right {
    width: 30%;
}

.footer .footer-about {
    line-height: 20px;
    color: #92999f;
    font-size: 13px;
    font-weight: normal;
    margin: 0px;
}

.footer .footer-about span {
    display: block;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
}

.footer .footer-media {
    margin-top: 25px;
}

.footer .footer-media a {
    display: inline-block;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: #292929;
    border-radius: 50%;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 50px;
    margin-right: 3px;
    margin-bottom: 5px;
}

.footer .footer-media a:hover {
    background-color: rgb(219, 50, 50);
}
`;
const styleElement = document.createElement('style');
styleElement.appendChild(document.createTextNode(styles));
document.head.appendChild(styleElement);
