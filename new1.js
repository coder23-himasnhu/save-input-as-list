const form=document.querySelector('#shelterform')
const input=document.querySelector("#catName")
const list=document.querySelector("#cats")
form.addEventListener('submit',function (e){
    e.preventDefault();
    const catName=input.value;
    const NewLI=document.createElement("LI")  //create new empty LI
    NewLI.innerText=catName;
    list.append(NewLI)
})