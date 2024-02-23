function openForm() {
    document.getElementById("formContainer").style.display = "block";
}

function cancelForm() {
    document.getElementById("formContainer").style.display = "none";
}

function createCard() {
var className = document.getElementById("className").value;
var section = document.getElementById("section").value;


var cardContainer = document.getElementById("maincard");


var newCard = document.createElement("div");
newCard.className = "card";


var cardHeader = document.createElement("div");
cardHeader.className = "card-header";

var h1 = document.createElement("h1");
h1.innerText = className;

var span = document.createElement("span");
span.innerText = section;


cardHeader.appendChild(h1);
cardHeader.appendChild(span);


var cardBody = document.createElement("div");
cardBody.className = "card-body";


var cardFooter = document.createElement("div");
cardFooter.className = "card-footer";

var icon1 = document.createElement("span");
icon1.className = "material-icons";
icon1.textContent = "trending_up";



var icon2 = document.createElement("span")
icon2.className = "material-icons";
icon2.textContent = "shopping_bag";


cardFooter.appendChild(icon1);
cardFooter.appendChild(icon2);


newCard.appendChild(cardHeader);
newCard.appendChild(cardBody);
newCard.appendChild(cardFooter);


cardContainer.appendChild(newCard);
    document.getElementById("classForm").reset();
document.getElementById("formContainer").style.display = "none";


}
