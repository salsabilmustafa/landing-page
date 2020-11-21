/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections=document.querySelectorAll("section");

const ulele=document.querySelector("ul");

/**
 * End Global Variables
 * Start Helper Functions
 //function for navbar-menu responsive button
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the button */
function Responsiveli() {
    if (ulele.className === "topnav") {
      ulele.className += " responsive";
    } else {
      ulele.className = "topnav";
    };
  };

/** 
*/




// build the nav
let fragment =document.createDocumentFragment();
let navbar   =document.querySelector(".navbar__menu");
let responsiveli     =document.createElement('li');
responsiveli.innerHTML= `<a href="#" class="icon" onclick="Responsiveli()">click to list Sections </a>`;
 sections.forEach(section => {
     let text = section.getAttribute("data-nav");
     let newli =document.createElement("li");
     let link =document.createElement("a");
     link.setAttribute("href",`#${section.id}`);
     link.setAttribute("class","menu__link");
     let textnode =document.createTextNode(text);
    
     link.appendChild(textnode);
     newli.appendChild(link);
    fragment.appendChild(newli);

     
 });
 ulele.appendChild(fragment);
 ulele.appendChild(responsiveli);
 



// for helping active link
let tabs =document.querySelectorAll('a');
 tabs.forEach(tab => {
     tab.addEventListener("click",function(){
     tabs.forEach(tab=>{
         tab.classList.remove("active");
     });
     this.classList.add("active");
     });
     
});
// Scroll to anchor ID using scrollTO event
// Add class 'active' to section when near top of viewport
 document.addEventListener("scroll",function(){
     sections.forEach(section => {
        let rect = section.getBoundingClientRect();
        if (rect.top>=0 && rect.bottom<window.innerHeight) {
            sections.forEach(section => {
                section.classList.remove("your-active-class");
        });
      };  
        section.classList.add("your-active-class");
  });

});





/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


