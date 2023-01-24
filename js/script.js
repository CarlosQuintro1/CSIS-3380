let list = users;
console.log(list);


const rows = 10;
let current_page = 1;

let list_items = document.getElementById("list");
let pagination_section = document.getElementById("buttons");
let heading = document.getElementById("header");




function ShowTotalContacts(){
    
    let header ="";
    header += "<h2>Contacts</h2>"
    header += "<h3>Total: "+ list.length +"</h3>";

    heading.innerHTML = header;

}

function ShowList(current_page, list_items){
    list_items.innerHTML = "";
    current_page--;
    let start = rows * current_page;
    let items = list.slice(start, start + rows)

    
    for(let i = 0; i < items.length; i++){
        
        const ul = document.createElement("ul");
        let info = "";
        let user = items[i];
        info += "<li class='contact-item cf'>"
        info += "<div class='contact-details'>"
        info += "<img class='avatar' src="+user.image+">";
        info += "<h3>"+user.name+"</h3>"
        info += "<span class='email'>"+user.name +"@hotmail.com"+"</span></div>"
        info += "<div class='joined-details'>"
        info += "<span class='date'>"+user.joined+"</span></div></li>"
        ul.innerHTML = info;
        list_items.appendChild(ul);
    }
}

function DisplayPagination(list_items){
    pagination_section.innerHTML = "";
    let buttons = Math.ceil(list.length / rows)

    for(i = 0; i < buttons; i++){
        let button = document.createElement("button");
        button.innerText = i+1;
        pagination_section.appendChild(button);
        button.addEventListener("click", function(){
        ShowList(button.innerText, list_items);

        })
    }

    
}


ShowTotalContacts();
ShowList(current_page, list_items);
DisplayPagination( list_items);