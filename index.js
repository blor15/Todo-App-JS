//Creating an array of objects which will store every input of the user inside the array
const todoObjectList = [];

/* Created a class called Todo_Class which uses the <ul> element as the parameter of the class and then set up methods for adding the user input to todoObjectList, changing the done or undone status of <li> element, deleting elements and displaing the list on screen */
class Todo_Class {
    constructor(item) {
        this.ulElement = item;
    }
    // add() gives the user the ability to enter an input into the todo list
    add() {
        const todoInput = document.querySelector("#userInput").value;
        if (todoInput == "") {
            alert('You did not enter any item!')
        } else {
            const todoObject = {
                id: todoObjectList.length,
                todoText: todoInput,
                isDone: false,
            }

            todoObjectList.unshift(todoObject);
            this.display()
            document.querySelector('#userInput').value = ' ';
        }
    }

    done_undone(x) {
        const selectedTodoIndex = todoObjectList.findIndex((item) => item.id == z);
        console.log(todoObject[selectedTodoIndex].isDone);
        todoObjectList[selectedTodoIndex].isDone == false ? todoObjectList[selectedTodoIndex].isDone = true : todoObjectList[selectedTodoIndex.isDone = false];
        this.display();
    }

    deleteElement(z) {
        const selectedDelIndex = todoObjectList.findIndex((item) => item.id == z);

        todoObjectList.splice(selectedDelIndex, 1);

        this.display();
    }


    display() {
        //This clears the content of the element at the beginning so we don't get any repeats everytime a user clicks add
        this.ulElement.innerHTML = "";

        todoObjectList.forEach((object_item) => {

            const liElement = document.createElement("li");
            const delBtn = document.createElement("i");

            liElement.innerText = object_item.todoText;
            liElement.setAttribute("data-id", object_item.id);

            delBtn.setAttribute("data-id", object_item.id);
            delBtn.classList.add("far", "fa-trash-alt");

            liElement.appendChild(delBtn);

            delBtn.addEventListener("click", function (e) {
                const deleteId = e.target.getAttribute("data-id");
                myTodoList.deleteElement(deleteId);
            })

            liElement.addEventListener("click", function (e) {
                const selectedId = e.target.getAttribute("data-id");
                myTodoList.done_undone(selectedId);
            })

            if (object_item.isDone) {
                liElement.classList.add("checked");
            }

            this.ulElement.appendChild(liElement);
        })
    }
}


//Created a variable called listSection which will be assigned to our <ul> element. Document.querySelector grabs our html element by the id. 
const listSection = document.querySelector('#todoList');
//This is an instance in which we call a new Todo_Class and use listSection as parameter
myTodoList = new Todo_Class(listSection);

//We grab our add button from the html and add an event listener which is looking for a click from the user and then initiate our script to add to our todo list
document.querySelector(".addBtn").addEventListener('click', function () {
    myTodoList.add()
})




