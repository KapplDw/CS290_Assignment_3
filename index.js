

// Diplay Modal

function buttonTwitListener(event) {
    var modalBack = document.getElementById("modal-backdrop");
    var modal =document.getElementById("create-twit-modal");
    modalBack.style.display = "block";
    modal.style.display = "block";
}

var create_button = document.querySelector("#create-twit-button");

create_button.addEventListener('click', buttonTwitListener);


// Close From x button

function buttonCloseModal(event) {
    var modalBack = document.getElementById("modal-backdrop");
    var modal =document.getElementById("create-twit-modal");
    modalBack.style.display = "none";
    modal.style.display = "none";

    // Clear Text

    var text = document.querySelector("#twit-text-input");
    var author = document.querySelector("#twit-attribution-input");
    text.value = "";
    author.value = "";
}

var close_button = document.querySelector(".modal-close-button")

close_button.addEventListener('click', buttonCloseModal);


// Close from cancel

var cancel_button = document.querySelector(".modal-cancel-button");

cancel_button.addEventListener('click', buttonCloseModal);

///////////////////////////////////////////////////////////

// <article class="twit">
//    <div class="twit-icon">
//       <i class="fa fa-bullhorn"></i>
//     </div>
//     <div class="twit-content">
//       <p class="twit-text">
//       <--! Put the twit text entered by the user here. -->
//       </p>
//       <p class="twit-author">
//         <a href="#"><--! Put the twit author entered by the user here. --></a>
//        </p>
//       </div>
// </article>

// Create twit from button



function insertTwit(event) {

    var text = document.querySelector("#twit-text-input").value;
    var author = document.querySelector("#twit-attribution-input").value;

    // Checks for empty boxes

    if (text == "") {
        alert("Please fill the text box.");
        return;
    }
    else if(author == ""){
        alert("Please fill the author box.")
        return;
    };


    // Create the element

    var newTwit = document.createElement('article');
    newTwit.classList.add("twit");

    var twitDivIcon = document.createElement('div');
    twitDivIcon.classList.add("twit-icon");
    newTwit.appendChild(twitDivIcon);

    var icon = document.createElement('i');
    icon.classList.add("fa");
    icon.classList.add("fa-bullhorn");
    twitDivIcon.appendChild(icon);

    var twitDivText = document.createElement('div');
    twitDivText.classList.add("twit-content");
    newTwit.appendChild(twitDivText);
    
    var twitText = document.createElement('p');
    twitText.classList.add("twit-text");
    twitText.append(text);
    twitDivText.appendChild(twitText);

    var twitAuthor = document.createElement('p');
    twitAuthor.classList.add("twit-author");
    twitDivText.appendChild(twitAuthor);

    var twitAuthorAnchor = document.createElement('a');
    twitAuthorAnchor.append(author);
    twitAuthor.appendChild(twitAuthorAnchor);

    var twitBox = document.querySelector(".twit-container");
    twitBox.insertBefore(newTwit, twitBox.length);


    // Clear modal

    var modalBack = document.getElementById("modal-backdrop");
    var modal =document.getElementById("create-twit-modal");
    modalBack.style.display = "none";
    modal.style.display = "none";

    // Clear Text

    var text = document.querySelector("#twit-text-input");
    var author = document.querySelector("#twit-attribution-input");
    text.value = "";
    author.value = "";
}



var create_twit = document.querySelector(".modal-accept-button");
create_twit.addEventListener('click', insertTwit);





// Search Functions

function searchCheck(event){
    // Make everything Lower case from the search
    var searchTerm = document.querySelector("#navbar-search-input").value;
    var lowerSearch = [];
    lowerSearch = searchTerm.toLowerCase();
    searchTerm = lowerSearch;
    

    var twits = document.getElementsByClassName("twit-text");
    var twitAuthor = document.getElementsByClassName("twit-author");
    for(var i = twits.length-1; i >= 0; i--){
        var indivTwit = twits[i].textContent.toLocaleLowerCase();
        var indivAuth = twitAuthor[i].textContent.toLocaleLowerCase();
        if (indivTwit.includes(searchTerm) == true || indivAuth.includes(searchTerm) == true){
            console.log("Confirmed");
        }
        else{
            twits[i].parentElement.parentElement.parentElement.removeChild(twits[i].parentElement.parentElement);
        }
    }

}

var search = document.querySelector("#navbar-search-button");
search.addEventListener('click', searchCheck);