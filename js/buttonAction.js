var inputText = document.getElementById("txt"),
items = document.querySelectorAll("#books li"),
tab = [], index;


for(var i = 0; i < items.length; i++){
tab.push(items[i].innerHTML);
}

// get li index onclick
for(var i = 0; i < items.length; i++){

items[i].onclick = function(){
    index = tab.indexOf(this.innerHTML);
    console.log(this.innerHTML + " INDEX = " + index);
    // set the selected li value into input text
    inputText.value = this.innerHTML;
};

}

function refreshArray()
{
// clear array
tab.length = 0;
items = document.querySelectorAll("#books li");
// fill array
for(var i = 0; i < items.length; i++){
tab.push(items[i].innerHTML);
}
}
function addb(){

var listNode = document.getElementById("books"),
   textNode = document.createTextNode(inputText.value),
   liNode = document.createElement("books");
   
   liNode.appendChild(textNode);
   listNode.appendChild(liNode);
   
   refreshArray();
   
   // add event new
   
   liNode.onclick = function(){
    index = tab.indexOf(liNode.innerHTML);
    console.log(liNode.innerHTML + " INDEX = " + index);
    // set the selected li value into input text
    inputText.value = liNode.innerHTML;
};
   
}

function editb(){
// edit the selected li using input text
items[index].innerHTML = inputText.value;
refreshArray();
}

function deleteb(){
 
     refreshArray();
     if(items.length > 0){
         items[index].parentNode.removeChild(items[index]);
         inputText.value = "";
     }
}