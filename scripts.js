
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
    const button = document.createElement('button')

//Get content for children from json data
    header.id = data[i].name
    header.innerText = data[i].name
    
    img.src = data[i].image
    img.width = 300
    img.height = 300
    
    //need to split paragraph for styling
    paragraph.innerText = data[i].desc + "\n" + "$" + data[i].price

    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"

//Add children to the div we created, which adds our content to our HTML
    newDiv.appendChild(header)
    newDiv.appendChild(img)
    newDiv.appendChild(paragraph)
    newDiv.appendChild(button)
    itemsContainer.appendChild(newDiv)
}  