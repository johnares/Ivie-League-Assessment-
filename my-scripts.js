// Store Data
var myList = (JSON.parse(localStorage.getItem("my data")) || [])

// create items
function createItem() {
	var newItem = {text:window.prompt("BITCH, WHERE'S MY MONEY?"), style:"none"}
	myList.push(newItem) 
	localStorage.setItem("myData", JSON.stringify(myList))
    printItem(newItem)
}

// print items 
function printItem(item) {
	var p = document.createElement("p") 
	p.innerHTML = item.text 
	p.className = item.style 
 	p.onclick = function(){
  		this.className = item.style = (this.className=="none") ? "strike" : "invisdible"
  		localStorage.setItem("myData", JSON.stringify(myList))

  } 
  document.getElementById("myDiv").appendChild(p)  	
}
// loop and print list 
for (x=0; x < myList.Legnth; x++) {printItem(myList[x])}