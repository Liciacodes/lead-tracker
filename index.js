let myLeads = []
let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
} 

function render(leads){
    let listItems = ""
    for(let i= 0; i < leads.length; i++) {
 listItems += `
 <li>
 <a target='_blank' href='${leads[i]}'>
  ${leads[i]}
  </a>
 </li>`
    }
    ulEl.innerHTML = listItems
}


deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads= []
    render(myLeads)
})


inputBtn.addEventListener("click", function() {
 myLeads.push(inputEl.value) 
 inputEl.value = ""
localStorage.setItem("myLeads", JSON.stringify(myLeads))
 render(myLeads)
    
})


function add(a, b){
return a + b;
}

console.log(add(3, 4))
console.log(add(9, 102))
 



















//using append and createElement() to display a list
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)



//using innerhtml
// const container = document.getElementById("container")
// container.innerHTML = "<button onclick='buy()'> Buy! </button>" 

// function buy() {
//    container.innerHTML += "<p>Thank you for buying!</p>"
// }