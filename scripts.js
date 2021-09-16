import data from './data.js'
const itemsContainer = document.querySelector('#items')
console.log("5")
//stretch with es6 looping method
for(let i = 0; i < data.length; i++){
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
    const newDiv = document.createElement('div')
    newDiv.className = 'item'

    const header = document.createElement('h2')
    header.innerText = data[i].name

    const img = document.createElement('img')
    img.src = data[i].image
    img.width = 300
    img.height = 300
    console.log(img)

    const paragraph = document.createElement('p')
    paragraph.innerText = data[i].desc + "\n" + data[i].price

    const button = document.createElement('button')
    button.id = data[i].name
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"


    newDiv.appendChild(header)
    newDiv.appendChild(img)
    newDiv.appendChild(paragraph)
    newDiv.appendChild(button)
    itemsContainer.appendChild(newDiv)
}