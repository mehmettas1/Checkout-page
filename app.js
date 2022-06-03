const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", ()=>{
  
    //set item to LocalStorage
    localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);

     //set item to SessionStorage
    //  sessionStorage.setItem("taxRate", taxRate);
    //  sessionStorage.setItem("shippingPrice", shippingPrice);

});

//capturing method

let productsDiv = document.querySelector(".products");
productsDiv.addEventListener(".click",(event) => {
    if(event.target.className == "minus") {
        event.target.nextElementSibling.innerText--;
        // console.log("minus button clicked");
    }
    else if(event.target.classList.contains("plus")) {
        event.target.previousElementSibling.innerText++
        console.log("plus buttton clicked");
    }
    else if(event.target.classList.contains("remove-product")) {
       event.target.parentElement.parentElement.parentElement.remove();
       // console.log("remove button clicked");
    }
    else{
        // console.log("other element clicked");
    }
})