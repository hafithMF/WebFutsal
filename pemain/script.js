let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');

// Load data from data.json
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let listProducts = data;
        let productFilter = listProducts;

        showProduct(productFilter);

        function showProduct(productFilter) {
            count.innerText = productFilter.length;
            list.innerHTML = '';
            productFilter.forEach(item => {
                let newItem = document.createElement('div');
                newItem.classList.add('item');

                // create image
                let newImage = new Image();
                newImage.src = item.image;
                newItem.appendChild(newImage);
                // create name product
                let newTitle = document.createElement('div');
                newTitle.classList.add('title');
                newTitle.innerText = item.name;
                newItem.appendChild(newTitle);
                // create price
                let newPrice = document.createElement('div');
                newPrice.classList.add('price');
                newPrice.innerText = item.price.toLocaleString();
                newItem.appendChild(newPrice);

                list.appendChild(newItem);
            });
        }

        filter.addEventListener('submit', function (event) {
            event.preventDefault();
            let valueFilter = event.target.elements;
            productFilter = listProducts.filter(item => {
                // check posisi
                if (valueFilter.posisi.value !== '') {
                    if (item.type !== valueFilter.posisi.value) {
                        return false;
                    }
                }
                // check name
                if (valueFilter.name.value !== '') {
                    if (!item.name.includes(valueFilter.name.value)) {
                        return false;
                    }
                }
                // check min price
                if (valueFilter.minNo.value !== '') {
                    if (item.price < valueFilter.minNo.value) {
                        return false;
                    }
                }
                // check max price
                if (valueFilter.maxNo.value !== '') {
                    if (item.price > valueFilter.maxNo.value) {
                        return false;
                    }
                }

                return true;
            });
            showProduct(productFilter);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

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
    display: flex;
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
    padding: 10px 20px;
    border-radius: 20px;
    margin-left: 10px;
    background: transparent;
    color: white;
    border: 2px solid white;
}
.container{
    color: white;
    margin: 50px auto 0;
    justify-content: space-between;
    width: 80%;
    align-items: center;
}
.filter{
    padding: 20px;
    display: grid;
    grid-template-columns: 32.666% 32.666% 32.666%;
    column-gap: 1%;
    row-gap: 10px;
    color: black;
}
.filter .item{
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.filter .item select,
.filter .item input,
.filter .item button{
    width: 100%;
    padding: 5px;
    border: none;
    background-color: transparent;
    outline: none;
}
.filter .item label{
    display: block;
    width: 40%;
    padding: 0 10px;
}
.filter .item.submit button{
    background-color: #292929;
    color: #fff;
}
.countResults{
    font-size: xx-large;
    text-align: center;
    padding: 20px;
}
#list{
    padding: 20px;
    display: grid;
    column-gap: 1%;
    grid-template-columns: 32.66% 32.66% 32.66%;
    row-gap: 10px;
}
#list .item img{
    width: 90%;
    height:300px;
    object-fit: cover;
    margin: 20px 0;
    border-radius: 10px;
}
#list .item{
    background-color: #292929;
    text-align: center;
    border-radius: 10px;
}
#list .item .title{
    font-weight: bold;
}
#list .item .price{
    color: #F5B976;
    letter-spacing: 1px;
    padding: 20px;
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