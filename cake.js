let cart = document.querySelector(".cart");
let cartItem = document.querySelector(".cart_item");
let count = 2;
let cartList = document.querySelector(".cart_item ");
cart.addEventListener('click', () => {
    cartItem.classList.toggle('item');
})


let coin = 21;
const cartH=(id)=>{
    fetch(`https://cake-shop-7008.herokuapp.com/list/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
        let { img, name, price } = data;
        // console.log(img)
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
}
let list = document.querySelector(".content");
const show=()=>{
    fetch('https://cake-shop-7008.herokuapp.com/list')
    .then((res)=>res.json())
    .then((data)=>{
        data.map((item)=>{
            let { id,img, name, price }=item;
            let box = document.createElement('div');
            box.classList.add('box');
            box.innerHTML = `
    <div class="image">
                    <img src="${img}" alt="">
                    <div class="cart_logo">
                        <i class="fa-solid fa-cart-shopping" id="${id}" onclick="cartH(${id})"></i>
                    </div>
                </div>
                <div class="cart_content">
                    <div>${name}</div>
                    <div class="cost">$${price}</div>
                </div>`
            list.append(box);
            // console.log(id)
        })
    })

}
show();


const cakeShow=(k)=>{
    list.innerHTML = "";
   fetch('https://cake-shop-7008.herokuapp.com/list')
    .then((res)=>res.json())
    .then((data)=>{
        let cakeItem = data.filter(item => item.name === `${k} Item`);
        cakeItem.map((item) => {
            
                    let { id, img, name, price } = item;
                  
                    let box = document.createElement('div');
                    box.classList.add('box');
                    box.innerHTML = `
    <div class="image">
                    <img src="${img}" alt="">
                    <div class="cart_logo">
                        <i class="fa-solid fa-cart-shopping" id="${id}" onclick="cartH(${id})"></i>
                    </div>
                </div>
                <div class="cart_content">
                    <div>${name}</div>
                    <div class="cost">$${price}</div>
                </div>`
            list.append(box);
                })
        // console.log(cakeItem)
    })
    
}
// adding cart on click of cart logo

let bar = document.querySelector(".fa-bars");
let navbar = document.querySelector(".navbar");
bar.addEventListener('click', () => {
    navbar.classList.toggle('hide');
})