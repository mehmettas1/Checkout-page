// const taxRate = 0.18;
// const shippingPrice = 15.0;

window.addEventListener("load", ()=>{
    calculateCartTotal();
    //set item to LocalStorage
    // localStorage.setItem("taxRate", taxRate);
    // localStorage.setItem("shippingPrice", shippingPrice);

     //set item to SessionStorage
    //  sessionStorage.setItem("taxRate", taxRate);
    //  sessionStorage.setItem("shippingPrice", shippingPrice);

});

//capturing method

let productsDiv = document.querySelector(".products");
productsDiv.addEventListener(".click",(event) => {
    if(event.target.className == "minus") {
        console.log("minus button clicked");
    }
    else if(event.target.classList.contains("plus")) {
        console.log("plus buttton clicked");
    }
    else if(event.target.classList.contains("remove-product")) {
        console.log("remove button clicked");
    else {
        console.log("other element clicked");
    }
})