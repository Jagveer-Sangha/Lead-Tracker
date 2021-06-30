
let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// Get the leads from the localStorage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

const deleteBtn = document.getElementById("delete-btn")

const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    });
})

// Can take in any array and render it out
function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
        // Utilized Template strings to create more user friendly code

        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

        listItems +=
            `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    // Render the listItems inside the unordered list
    ulEl.innerHTML = listItems
}

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
    render(myLeads)

    // To verify that it works:
    console.log(localStorage.getItem("myLeads"))

})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


