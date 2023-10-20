
Input=document.getElementById("userInput");
homeContent=document.getElementById("homeContent");
searchInput=document.getElementById("searchInput");
var submitBtn=document.getElementById('submitBtn');
var updateBtn=document.getElementById('updateBtn');
var editIndex;

var allItems=[];
if(localStorage.getItem("Items")!=null){
    allItems=JSON.parse(localStorage.getItem("Items"));
    displayItem(allItems);
}


function addItem(){
    Item=Input.value;
    allItems.push(Item);
    localStorage.setItem("Items",JSON.stringify(allItems));
    clear();
    displayItem(allItems);
    
}

function clear(){
    Input.value="";
    searchInput="";
}


function displayItem(allItems){
    var cartona="";
    for(var i=0; i<allItems.length; i++){
        cartona+=` <div class="home-item mb-2 px-3  text-dark mx-auto w-50 bg-white d-flex justify-content-between align-items-center">
        <p id="x">${allItems[i]}</p>
        <div>
        <i class=" fa-sharp fa-solid fa-trash px-2" onclick="deleteItem(${i})"></i>
        <i class="fa-solid fa-pen-to-square" onclick="setItemToUpdate(${i})"></i>
        </div>
    </div>`
    }
    homeContent.innerHTML=cartona;
    

}

function deleteItem(index){
    allItems.splice(index,1);
    localStorage.setItem("Items",JSON.stringify(allItems));
    displayItem(allItems);
}

var searchItemsArr=[];
function searchItem(){
    searchItemsArr=[];
    for(var i=0 ; i<allItems.length ; i++) 
    {
    if(allItems[i].includes(searchInput.value) == true )
    {
        searchItemsArr.push(allItems[i]);
    }
    }
    displayItem(searchItemsArr);
}
searchInput.addEventListener('input',searchItem);


function setItemToUpdate(index){
    userInput.value=allItems[index];
    submitBtn.classList.replace("d-block","d-none");
    updateBtn.classList.replace("d-none","d-block");
    editIndex=index;
}


function updateItem(){
    allItems[editIndex]=userInput.value;
    displayItem(allItems);
    localStorage.setItem("Items",JSON.stringify(allItems));
    clear();
    updateBtn.classList.replace("d-block","d-none");
    submitBtn.classList.replace("d-none","d-block");

}



updateBtn.addEventListener("click",updateItem)