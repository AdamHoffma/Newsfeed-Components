/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/*

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
*/

const menuButton = document.querySelector(".header")

console.log(menuButton)

//menuItems.forEach(list => {
  //menuButton.appendChild(menuComponent(list.array))
//})

menuButton.appendChild(menuComponent(menuItems))  

  function menuComponent (menuItems) {
    const menu = document.createElement("div")
    const unOrdered = document.createElement("ul") 
  
    menu.appendChild(unOrdered)    

    menuItems.forEach(list => {
      const items = document.createElement("li")
      items.textContent = list
      unOrdered.appendChild(items)
      
    })
    
    menu.classList.add('menu')
    menuButton.classList.add('menu-button')

    menuButton.addEventListener('click', event => {
      console.log("")      
      menu.classList.toggle('menu--open')
    })
    return menu
  }

/*

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
