let nameInput  = document.getElementById("name");
let fruitsCheck  = document.getElementById("fruits");
let legumesCheck  = document.getElementById("legumes");
let addSpecificBtn  = document.getElementById("addSpecificBtn");
let addGeneralBtn  = document.getElementById("addGeneralBtn");
let searchBtn = document.getElementById("search");
let deleteBtn = document.getElementById("delete");
let searchInput = document.getElementById("searchInput");
let fruitsHolder = document.getElementById("fruitsHolder");
let generalHolder = document.getElementById("generalHolder");
let legumesHolder = document.getElementById("legumesHolder");

function InputEventCheck (){
    let name = nameInput.value;

    if(name == ''){
        addSpecificBtn.disabled = true;
        addGeneralBtn.disabled = true;
    }else{
        addSpecificBtn.disabled = false;
        addGeneralBtn.disabled = false;
    }
}
nameInput.addEventListener("input",InputEventCheck);

addSpecificBtn.addEventListener("click", () =>{
    let name = nameInput.value;

    if(name == '' || (!fruitsCheck.checked && !legumesCheck.checked)){
        alert("Please enter all needed Information");
    }else{
        
        if(fruitsCheck.checked){      
            appendFruit(name);

        }else if(legumesCheck.checked){    
            appendLegumes(name);
        }
 
    }
});

addGeneralBtn.addEventListener("click", () =>{
    let name = nameInput.value;

    if(name == '' || (!fruitsCheck.checked && !legumesCheck.checked)){
        alert("Please enter all needed Information");
    }else{
        let type = "";
        if(fruitsCheck.checked){
            type = "Fruits";
        }else if(legumesCheck.checked){
            type = "Legumes";
        }
    
        appendGeneral(name,type);
    }
});

searchBtn.addEventListener('click', function() {
    var searchValue = searchInput.value;
    var rows = document.getElementsByTagName('li');

    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var value = row.textContent.toLowerCase();
    
      if(searchValue == ''){
        row.classList.remove("bgRed");
      }
      else if(value.includes(searchValue)){
        row.classList.add("bgRed");
      }else{
        row.classList.remove("bgRed");
      }
  
    }
  });

  deleteBtn.addEventListener("click", () =>{
    var searchValueDel = searchInput.value;
    var rowsDel = document.getElementsByTagName('li');
    if(searchValueDel == ''){
        alert("Nothing to remove");
    }else{
        for (var i = 0; i < rowsDel.length; i++) {
            var rowDel = rowsDel[i];
            var valueDel = rowDel.textContent.toLowerCase();
          
            if(valueDel.includes(searchValueDel)){
              rowDel.remove();
            }
        
          }
    }

  });

  generalHolder.addEventListener("click", (event) =>{
    if(event.target.classList.contains("alert")){
        let content =event.target.querySelector('span');
        let type = content.querySelector('.type').innerHTML;
        let name = content.querySelector('.name').innerHTML;

        if(type == "Fruits"){
            event.target.remove();
            appendFruit(name);
        }else if(type == "Legumes"){
            event.target.remove();
            appendLegumes(name);
        }
    }
  });

const appendLegumes = (name) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<li class="alert alert-danger alert-dismissible" role="alert">
            <span class="fs-6 fw-bold">Legumes! - ${name}</span>
        </li>`,
    ].join('')

    legumesHolder.append(wrapper)
}

const appendFruit = (name) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<li class="alert alert-success alert-dismissible" role="alert">
            <span class="fs-6 fw-bold">Fruits! - ${name}</span>
        </li>`,
    ].join('')

    fruitsHolder.append(wrapper)
}

const appendGeneral = (name,type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<li class="alert alert-primary alert-dismissible" role="alert">
            <span class="fs-6 fw-bold"><label class="type">${type}</label>! - <label class="name">${name}</label></span>
        </li>`,
    ].join('')

    generalHolder.append(wrapper)
}