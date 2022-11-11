let cart = document.querySelector(".cart");
let cartItem = document.querySelector(".cart_item");
let count = 2;
let cartList = document.querySelector(".cart_item ");
cart.addEventListener('click', () => {
    cartItem.classList.toggle('item');
})

// details of list
let arr = [
    {
        id: "1",
        img: "https://js-beginners.github.io/grocery-cart-project/img/cake-1.jpeg",
        name: "Cake Item",
        price: "5",
    },  {
        id: "4",
        img: "https://js-beginners.github.io/grocery-cart-project/img/cupcake-3.jpeg",
        name: "Cupcake Item",
        price: "5",
    }, 
    {
        id: "11",
        img: "https://js-beginners.github.io/grocery-cart-project/img/doughnut-2.jpeg",
        name: "Dougnut Item",
        price: "10",
    },
    {
        id: "2",
        img: "https://js-beginners.github.io/grocery-cart-project/img/cake-2.jpeg",
        name: "Cake Item",
        price: "10",
    }, {
        id: "6",
        img: "https://js-beginners.github.io/filter-project/img/cupcake-1.jpeg",
        name: "Cupcake Item",
        price: "15",
    },
    {
        id: "3",
        img: "https://js-beginners.github.io/grocery-cart-project/img/cake-3.jpeg",
        name: "Cake Item",
        price: "15",
    },
    {
        id: "10",
        img: "https://js-beginners.github.io/grocery-cart-project/img/doughnut-1.jpeg",
        name: "Dougnut Item",
        price: "5",
    },

    {
        id: "7",
        img: "https://js-beginners.github.io/grocery-cart-project/img/sweets-1.jpeg",
        name: "Sweet Item",
        price: "5",
    },  {
        id: "9",
        img: "https://js-beginners.github.io/grocery-cart-project/img/sweets-3.jpeg",
        name: "Sweet Item",
        price: "15",
    },
    {
        id: "5",
        img: "https://js-beginners.github.io/grocery-cart-project/img/cupcake-2.jpeg",
        name: "Cupcake Item",
        price: "10",
    },
    
    
    {
        id: "12",
        img: "https://js-beginners.github.io/grocery-cart-project/img/doughnut-3.jpeg",
        name: "Dougnut Item",
        price: "15",
    },
    {
        id: "8",
        img: "https://js-beginners.github.io/grocery-cart-project/img/sweets-2.jpeg",
        name: "Sweet Item",
        price: "10",
    }
]

//home page show items 
let list = document.querySelector(".content");
function show() {
    list.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        function render() {
            let { img, name, price } = arr[i];
            let box = document.createElement('div');
            box.classList.add('box');
            box.innerHTML = `
    <div class="image">
                    <img src="${img}" alt="">
                    <div class="cart_logo">
                        <i class="fa-solid fa-cart-shopping" id="${i}"></i>
                    </div>
                </div>
                <div class="cart_content">
                    <div>${name}</div>
                    <div class="cost">$${price}</div>
                </div>`
            list.append(box);
        }
        render();
    }
}
show();

//  show cake items 

function cakeShow(k) {
    list.innerHTML = "";
    console.log(k)
    let cakeItem = arr.filter(item => item.name === `${k} Item`);
    cakeItem.map((item) => {
        let { id, img, name, price } = item;
        console.log(cakeItem[0].img)
        let box = document.createElement('div');
        box.classList.add('box');
        box.innerHTML = `
   <div class="image">
                   <img src="${img}" alt="">
                   <div class="cart_logo">
                       <i class="fa-solid fa-cart-shopping" id="${id}"></i>
                   </div>
               </div>
               <div class="cart_content">
                   <div>${name}</div>
                   <div class="cost">$${price}</div>
               </div>
   `
        list.append(box);
    })
    cartH()
}
// adding cart on click of cart logo

let coin = 21;
function cartH() {
    let cartOption = document.querySelectorAll(".fa-cart-shopping");
    cartOption.forEach((cartAdd) => {
        cartAdd.addEventListener('click', () => {
            let { img, name, price } = arr[cartAdd.id];
            let itemCost = parseInt(price);
            let div = document.createElement("div");
            div.classList.add("cart1");
            div.innerHTML = `
      <img src="${img}" />
      <div class="cart_name">
          <p>${name}</p>
          <span>$${price}</span>
      </div>
      <i class="fa-solid fa-trash-can"></i>
      `
            let pos = cartList.firstElementChild;
            count++;
            coin = coin + itemCost;
            let total = document.getElementById('total');
            total.innerHTML = `${count} Items - $${coin}.98`;
            alert('your item add in cart')
            if (pos === null) {
                cartList.appendChild(div);
            } else {
                cartList.insertBefore(div, pos);
            }
            let trash = document.querySelectorAll('.fa-trash-can');
            trash.forEach((titem) => {
                titem.addEventListener('click', () => {
                    div.remove();
                    if (count == 2) {
                        return;
                    }
                    if (coin == 21) {
                        return;
                    }
                    count--;
                    coin -= itemCost;
                    total.innerHTML = `${count} Items -  $${coin}.98`;
                })
            })

        })
    })
}
cartH();

// adding cart on click of cart logo

let bar = document.querySelector(".fa-bars");
let navbar = document.querySelector(".navbar");
bar.addEventListener('click', () => {
    navbar.classList.toggle('hide');
})
