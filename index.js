
const btnAddNewTask = document.querySelector(".btnAddNewTask");
const inputTask = document.querySelector(".inputTask");
const NewTask = document.querySelector(".NewTask");
const btnDelete = document.querySelector(".fa-solid");
const containerTaskAdd = document.querySelector(".containerTaskAdd");


const validateInput = () => inputTask.value.trim().length > 0;



const handleinputTaskvalidation =() =>{
    const inputIsvalid = validateInput();
    //Captura do valor do input
    var NewtaskValue = inputTask.value;

          //validação do input
    if(!inputIsvalid){
        return inputTask.classList.add("error");  
    };

    //adicionar elementos na div que vao ser as próprias tarefas
    const containerNewTask = document.createElement("div"); // div que recebe o "p" & o "i"
    const newtaskP = document.createElement("p"); //paragrafo para trarefa
    const Delete = document.createElement("i") //icon Delete
    
//
    //adicinando o estilo ou novo elemento "div"
    containerNewTask.classList.add("NewTask");
    Delete.classList.add("fa-solid")// class1 do icone i
    Delete.classList.add("fa-trash")// class2 do icone i

    //newtaskP.addEventListener("click", () => handleCompletd(newtaskP));

    //Delete.addEventListener("click", () => handleDelete());

    //adicionando os elementos à nova "div"
    containerTaskAdd.appendChild(containerNewTask)
    containerNewTask.appendChild(newtaskP);
    containerNewTask.appendChild(Delete);

    //adicionando o texto ao elemento p
    newtaskP.innerHTML = NewtaskValue;
    
    //removendo o valor do input apos aterefa adicionada a lista
    inputTask.value = null;

};
    //Função que valida se o valor do input é valido
const handleIputChange = ()=>{
    const inputIsvalid = validateInput();

    if(inputIsvalid){
        return inputTask.classList.remove("error")
    };
}


/*const handleCompletd = (newtaskP) =>{
    const tasks = containerTaskAdd.childNodes;

    for( const task of tasks){
        if(task.firstChild.isSameNode(newtaskP)){
            task.firstChild.classList.toggle("completd");
        };
        
    };

};*/

//const handleDelete () =>{

//



inputTask.addEventListener("change", () =>handleIputChange());

btnAddNewTask.addEventListener("click",() =>handleinputTaskvalidation());


