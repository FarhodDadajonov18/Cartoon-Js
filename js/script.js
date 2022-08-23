let elSelect = document.querySelector(".select"),
    elInput = document.querySelector(".input"),
    elList = document.querySelector(".list");

 let options=[];
    
function addOption(){
  pokemons.forEach((el)=>{
    el.type.forEach((number)=>{
      if(options.includes(number)) {
         
      }else {
        options.push(number)
      }
     
      
    })

  })

  options.forEach(option =>{
    let elOption = document.createElement("option");
    elOption.textContent = option;
    elSelect.appendChild(elOption);
  
  
  })
 
}
addOption()

  function fullName(){
    pokemons.forEach((el) =>{

    let elItem = document.createElement("li");
    elItem.setAttribute("class", "item col-md-3  text-center");
    elItem.setAttribute("style" , "min-height:350px");

    let elDiv = document.createElement("div");
    elDiv.setAttribute("class", "card-body card pb-2");
  
  
    let elImg = document.createElement("img");
    elImg.setAttribute("src" , `${el.img}`);
    elImg.setAttribute("class", "card-img");
    elImg.style.height = "270px"

    let elHeading = document.createElement("h5");
    elHeading.setAttribute("class", "card-title");
    elHeading.textContent = el.name;



    let parag = document.createElement("p");
    parag.setAttribute("class", "parag");
    
    el.weaknesses.forEach((num)=>{
      let elSpanName = document.createElement("span");
      elSpanName.setAttribute("class","text-success");
      elSpanName.textContent = num + " ";
      parag.append(elSpanName);

    })

    elDiv.append(elImg,elHeading,parag);  
    elItem.appendChild(elDiv);
    elList.appendChild(elItem);
  })

  }
fullName(); 



