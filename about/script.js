const track = document.getElementById("image-track");

window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
};
window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

const styles = `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:  "Lobster", cursive;
}
    .container-1 {
    width: 1200px;
    max-width: 100%;
    margin: auto;   
}
    body {
    background-color: #010001;
    min-height: 10vh;
    line-height: 20px;
    font-family: "Lobster", cursive;
}
    .logo img {
    width: 200px;
    height: auto;
}
header {
    display: absolute;
    justify-content: space-between;
    top: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 100%;
    padding: 40px 0;
}

header a {
    color: #eee;
    margin-right: 40px;
    text-decoration: none;
}

header .signin {
    display: flex;
    justify-content: end;
    align-items: center;
}

header button {
    color: #fff;
    padding: 8px 20px;
    border-radius: 20px;
    margin-left: 10px;
    background: transparent;
    color: white;
    border: 2px solid white;
    font-weight: normal;
}
.about-us{
    padding: 80px 0px;
}
.container-fuild{
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px ;
}
.row{
    display: flex;
    flex-wrap: wrap;
}
.flex{
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 20px;
}
.about-us h2{
    font-size: 45px;
    margin-bottom: 45px;
    color: white;
}
.about-us h3{
    font-size: 22px;
    color: #888;
    margin-bottom: 8px;
}
.about-us p{
    font-size: 18px;
    line-height: 1.5;
    color: white;
    margin-bottom: 20px;
}
.about-us img{
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
}
.social-links{
    margin-bottom: 20px;
}
.social-links a{
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    margin-right: 10px;
    color: #fff;
    background-color: #333;
    box-shadow: 0 2px 5px rgb(0, 0, 0, 0.3);
    transition: all 0.4s ease;
}
.social-links a:hover{
    transform: translate(-3px);
}
.btn{
    text-decoration: none;
    color:#fff;
    display: inline-block;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 5px;
    box-shadow: 0 2px 5px white;
    transition: all 0.4s ease;
}
.btn:hover{
    transform: translate(-3px);
} 
.txt .txt-we h1 {
  color: white;
  text-align: center;
  margin-top: 30px;
  font-size: 60px;
  padding: 70px;
  background-color: #040A18;
}

.container {
  min-height: 100vh;
  width: 100%;
  padding: 78px 0px;
}

.container img {
  height: auto;
  width: 30%;
  border-radius: 10px;
  transition: 0.5s ease ;
}

.cont {
  width: 1200px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.text-fjr {
  margin-left: 50px;
}

.text-fjr h1 {
  color: white;
  font-size: 50px;
  text-transform: capitalize;
  margin-bottom: 70px;
}

.text-fjr h5 {
  color: white;
  font-size: 30px;
  text-transform: 25px;
  margin-bottom: 0.4em;
}

.text-fjr p {
  color: white;
  letter-spacing: 1px;
  line-height: 30px;
  font-size: 18px;
  margin-bottom: 45px;
}

button {
  background: transparent;
  color: #7c7c7c;
  font-size: 16px;
  text-decoration: none;
  border: 2px solid #7c7c7c;
  padding: 13px 30px;
  border-radius: 30px;
  transition: .4s ease;
}
footer {
    position: fixed;
    bottom: 0;
}
  #image-track {
    margin-top: 200px;
    display: flex;
    gap: 4vmin;
    left: 50%;
    top: 50%;
    transform: translate(0%, -50%); 
    user-select: none;
  }
  
  #image-track > .image {
    width: 40vmin;
    height: 56vmin;
    object-fit: cover;
    object-position: 100% center;
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
}`
const styleElement = document.createElement('style');
styleElement.appendChild(document.createTextNode(styles));
document.head.appendChild(styleElement);