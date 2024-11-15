console.log(`To do list!`);

const btnElement = document.querySelector(`input`);
console.log(btnElement);

const addItem = document.querySelector(`button`);
console.log(addItem);

const listItself = document.querySelector(`.listItself`)
console.log(listItself);

let clickCount = 0;
console.log(clickCount);

addItem.addEventListener(`click`, function(){    
    if(btnElement.value != ``){
        clickCount++;
        console.log(clickCount);
        item = document.createElement(`li`);
        listItself.append(item);
        item.classList.add(`li${clickCount}`);
        const createdItem = document.querySelector(`.li${clickCount}`)
        console.log(createdItem);
        createdItem.textContent = btnElement.value;
        btnElement.value = ``;
        deleteItem = document.createElement(`button`)
        createdItem.append(deleteItem)
        deleteItem.textContent = `Delete!`

            deleteItem.addEventListener(`click`, function(){
                const userResponse = prompt(`Do you want to delete this?`);
                userResponse;
                if(userResponse === `yes`){
                    createdItem.remove()
                }else if(userResponse === `no`){
                    alert(`Ok, it will not be deleted!`)
                }else {
                    alert(`Invalid input!`);
                }
            })
    }else {
        console.log(`You forgot to input anything`);
    }
})