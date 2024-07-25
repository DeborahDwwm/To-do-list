//recupérer la saisie de l'utilisateur dans un console.log//

const taskInput = document.querySelector("button");

taskInput.addEventListener("click", (button) => {
    let recupTask = document.getElementById("task");
    let task = recupTask.value
    
    let listTask = document.getElementById("ulPerso");
    let li = document.createElement('li');
    li.textContent = task;
    listTask.appendChild(li);
    console.log(listTask);
    
    const boutonCheck = document.createElement("img");
    boutonCheck.src = "square-check-solid.svg";
    li.appendChild(boutonCheck);
    boutonCheck.addEventListener("click",() => {
    li.style.textDecoration ="line-through";
})
    const boutonCross = document.createElement("img");
    boutonCross.src = "square-xmark-solid.svg";
    li.appendChild(boutonCross);
    boutonCross.addEventListener("click",() => {
        li.remove()
})

const boutonPencil = document.createElement("img");
    boutonPencil.src = "pencil-solid.svg";
    li.appendChild(boutonPencil);
    boutonPencil.addEventListener("click",() => {
        const newliTxt = prompt("Resaisir la tâche");
        li.firstChild.textContent=(newliTxt);
        console.log(li.lastChild);
        // li.replaceChild(newLi, last);
})

})

// const boutonCheck = document.createElement("button");
//     boutonCheck.textContent="réalisée";
//     li.appendChild(boutonCheck);
//     boutonCheck.addEventListener("click",() => {
//     li.style.textDecoration ="line-through";







//valider les tâches avec un bouton check//
// let liBouton = document.querySelector("li")
//     let boutonCheck = document.createElement("img");
//     boutonCheck.src = "square-check-solid.svg"
//     li.appendChild(liBouton);

 
//lui faire rayer la tâche//

//supprimer les tâches avec un boutoncross//

// let liBouton2 = document.querySelector("li")
// let boutonCross = document.createElement("img");
// boutonCross.src = "square-xmark-solid.svg"
// li.appendChild(liBouton2);

