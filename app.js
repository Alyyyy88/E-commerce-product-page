// what are my prolblems : 1- when clicking add to cart the image and all of the product details appear
// i have add quantity buttons which change quantity of the cart of product
// change quantity in cart when clicking on the add or dec buttons
// calculate price based on quantity

// PROBLEM 1 --> WHEN CLICKING ON CART ICON APPEAR CART [✅✅]
// PROBLEM 2 --> WHEN CLICKING ON ADD TO BTN CART COUNTER ICON CHANGE  COUNTER OF QUANTITY
// , PRODUCT CREATED DYNMACIALLY [✅✅✅]
// FACED PROBLEM --> remove button how to remove it [✅✅✅✅]
// QUANTITY BUTTONS


const cart = document.querySelector(".cart_icon");
const cartCon = document.querySelector(".cart_con");
const addBtn = document.querySelector(".add_btn");
const emptyCart = document.querySelector(".empty_cart");
const incBtn = document.querySelector(".inc_con");
const decBtn = document.querySelector(".dec_con");
const quantityCtr = document.querySelector(".counter");
const cartCounter =document.querySelector(".counter_icon");







const updateQuantity = ()=>{
 const cartSpan = document.querySelector(".counter_cart");
 if(cartSpan){
   cartSpan.textContent = `X${counter}`;
 }
};



const productHtml = `<div class="product_cart_desc">

      <div class="img_con">
        <img src="./images/image-product-1-thumbnail.jpg" alt="sneakers">
      </div>
      <div class="product_desc">
      <div class="name_con">
        <p>
          Fall Limited Edition Sneakers
        </p>
      </div>
      <div class="price_con_cart">
        <p>
          $125
        </p>
        <span class="counter_cart">
          X 1
        </span>
        <p class="total_p">
          $375
        </p>
      </div>
      </div>

      <div class="remove_con">
        <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
      </div>



      </div>

      <button class="place_order_btn">Checkout</button>`;


      let counter = 0;

const addToCart = ()=>{
  emptyCart.classList.add("nonactive");
  counter = 1;
  quantityCtr.textContent = counter;
  cartCounter.textContent = counter;


  const increase = ()=>{
    counter++;
    quantityCtr.textContent = counter;
    updateQuantity();
    cartCounter.textContent = counter;

  };

  const decrease = ()=>{
    if(counter > 1){
      counter--;
      quantityCtr.textContent = counter;
      updateQuantity();
      cartCounter.textContent = counter;
      console.log(counter);

    }
    else{
      removeItem();
    
    }
    
  };




  if(cartCon.querySelector(".product_cart_desc")){
    document.querySelector(".add_btn").disabled = true;
    return;
  }
  else{
    cartCon.insertAdjacentHTML("beforeend" , productHtml);

  }

  document.querySelector(".remove_con").addEventListener("click",()=>{
    document.querySelector(".product_cart_desc").remove();
    document.querySelector(".place_order_btn").remove();
    emptyCart.classList.remove("nonactive");
    counter = 0;
    updateQuantity();
  });
  


  incBtn.addEventListener("click",increase);
decBtn.addEventListener("click",decrease);
 

};


const showCart = ()=>{
  cartCon.classList.toggle("active");
};






cart.addEventListener("click",showCart);
addBtn.addEventListener("click",addToCart);









