
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
//Shopping cart tutorial
const cart = []



function addItem(name, price){
    for(let i = 0; i < cart.length; i++){
        if(cart[i].name === name){
            cart[i].quantiy +=1
            return
        }
    }
    const item = {
        name: name,
        price: price,
        quantity: 1
    }
    cart.push(item)
}


function showItems(){
console.log(`You have ${getQuantity()} items in your cart`)
//total cost
console.log(`Total cost: ${getTotalCost()}`)

    for(let i = 0; i < cart.length; i++){
        console.log(`- ${cart[i].name} $${cart[i].price} x ${cart[i].quantity}`)
    }
}


function getQuantity(){
    let quantity = 0
    for(let i = 0; i < cart.length; i++){
        quantity += cart[i].quantity
    }
return quantity
}

function getTotalCost(){
    let cost = 0
    for(let i = 0; i < cart.length; i++){
        cost += cart[i].price*cart[i].quantity
    }
    return cost.toFixed(2)   
}