
let myLeads = []

// Can't push strings into an list --> `["www.awesomelead.com"]`
// Storing arrays in localstorage



const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// Get the leads from the localStorage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    renderLeads()
})

/**
 * Can use onclick="" in html but more common to see addeventlistener in real world application
 * Syntax is (Action, Event)
 */
inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    // Clear out the input field
    inputEl.value = ""

    // Turn the myLeads string into an array
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()

    // To verify that it works:
    console.log(localStorage.getItem("myLeads"))

})

function renderLeads() {
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {
        // Utilized Template strings to create more user friendly code

        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

        listItems +=
            `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    // Render the listItems inside the unordered list
    ulEl.innerHTML = listItems
}