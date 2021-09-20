
    //stretch with es6 looping method
    //this loop creates the following divs for all moods in json
    // <div>
    //     <h2>Title</h2>
    //     <img></img>
    //     <p>description
    //        price
    //     </p>
    //     <button></button>
    // </div>
    //the divs will change each time we go through the loop, 
    //because we are advancing our input's location from the data array  
    //with our loop in respect to i

import data from './data.js'
const itemsContainer = document.querySelector('#items')

//Using a loop to add content to cut down on repitition
for(let i = 0; i < data.length; i++){
// Create div in HTML
    const newDiv = document.createElement('div')
    newDiv.className = 'item'
//Create children
    const header = document.createElement('h2')
    const img = document.createElement('img')
    const paragraph = document.createElement('p')
    const price = document.createElement('p')
    const button = document.createElement('button')
//Get content for children from json data
    
    header.innerText = data[i].name
    
    img.src = data[i].image
    img.width = 300
    img.height = 300
    
    paragraph.innerText = data[i].desc + "\n"  
    
    price.id = "price"
    price.innerText = "$" + data[i].price

    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    button.id = data[i].name


//Add children to the div we created, which adds our content to our HTML
    newDiv.appendChild(header)
    newDiv.appendChild(img)
    newDiv.appendChild(paragraph)
    newDiv.appendChild(price)
    newDiv.appendChild(button)
    itemsContainer.appendChild(newDiv)
}

//Button functionality
const allItemsButton = Array.from(document.querySelectorAll("button"))
console.log(allItemsButton)
    allItemsButton.forEach(elt => elt.addEventListener('click', () => {
        addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
        showItems()
    }))



//Shopping cart tutorial
const cart = []

//------------------------------------------------

function addItem(name, price){

    for(let i = 0; i < cart.length; i++){
        if(cart[i].name === name){
            cart[i].quantity +=1
            return
        }

    }
    const item = {
        name: name,
        price: price,
        quantity: 1
    }
    cart.push(item)
    return
}

//------------------------------------------------

//the Footer where we will display cart
const shoppingCart = document.querySelector('footer')
//header for cart shows how many items
const header = document.createElement('h3')
shoppingCart.prepend(header)
//footer for cart where we display total price of cart
const priceFooter = document.createElement('h3')
shoppingCart.append(priceFooter)
//item list where our cart items live
const itemList = document.getElementById('item-list')
itemList.innerHTML = '<li> Hello World</li>'

//------------------------------------------------

function showItems(){
    header.innerText = `You have ${getQuantity()} items in your cart`
//total cost
priceFooter.innerText = `Total cost: ${getTotalCost()}`

    let itemString = ''
    for(let i = 0; i < cart.length; i++){
        itemString += 
        `<li> 
        ${cart[i].name} $${cart[i].price} x ${cart[i].quantity} 
        <button class="remove" data-name="${cart[i].name}">Remove</button>
        <button class="add" data-name="${cart[i].name}"> + </button>
        <button class="minus" data-name="${cart[i].name}"> - </button>
        <input class="update" type="number" min = "0" data-name="${cart[i].name}">
        </li>`
    }
    itemList.innerHTML = itemString
}

//------------------------------------------------
//Handle clicks on cart
itemList.onclick = function(e){
    const name = e.target.dataset.name
    if(e.target && e.target.classList.contains('remove')){
        removeItem(name) 
    }
    else if(e.target && e.target.classList.contains('add')){
        addItem(name)
    }
    else if(e.target && e.target.classList.contains('minus')){
        removeItem(name, 1)
    }
    showItems()
}

//------------------------------------------------

//handle change events on cart input
itemList.onchange = function(e){
    if(e.target && e.target.classList.contains('update')){
        const name = e.target.dataset.name
        const quantity = parseInt(e.target.value)
        updateCart(name, quantity)
    }
}

//------------------------------------------------

function getQuantity(){
    let quantity = 0
    for(let i = 0; i < cart.length; i++){
        quantity += cart[i].quantity
    }
return quantity
}

//------------------------------------------------

function getTotalCost(){
    let cost = 0
    for(let i = 0; i < cart.length; i++){
        cost += cart[i].price*cart[i].quantity
    }
return cost.toFixed(2)   
}

//------------------------------------------------

function removeItem(name, quantity = 0){
    for(let i = 0; i < cart.length; i++){
        if(name === cart[i].name){
            if(quantity > 0){
                cart[i].quantity -= quantity
            }
            if(cart[i].quantity < 1 || quantity === 0){
                cart.splice(i, 1)
            }
            return
        }
    }
}

//------------------------------------------------

function updateCart(name, quantity){
    for(let i = 0; i < cart.length; i++){
        if(cart[i].name === name){
            if(quantity < 1){
                removeItem(name)
                return
            }
            cart[i].quantity = quantity
            showItems()
            return
        }
    }
}