
var btnAddNewTask = document.querySelector(".btnAddNewTask");
var inputTask = document.querySelector(".inputTask");
var NewTask = document.querySelector(".NewTask");
var btnDelete = document.querySelector(".fa-solid");
var containerTaskAdd = document.querySelector(".containerTaskAdd");


const validateInput = () => inputTask.value.trim().length > 0;

const handleinputTaskvalidation =() =>{
    const inputIsvalid = validateInput();

    console.log(inputIsvalid);

    if(!inputIsvalid){
        return inputTask.classList.add("error")
    };
    //adicionar elementos na div que vao ser a s próprias tarefas


};

const handleIputChange = ()=>{
    const inputIsvalid = validateInput();

    if(inputIsvalid){
        return inputTask.classList.remove("error")
    };
}
inputTask.addEventListener("change", () =>handleIputChange());

btnAddNewTask.addEventListener("click",() =>handleinputTaskvalidation());

