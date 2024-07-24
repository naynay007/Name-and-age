// Name Section
const nameLabel = document.getElementById("nameLabel");
//let name = "?";
console.log('ddd',nameLabel);
//document.getElementById("nameLabel") = function() {
    nameLabel.addEventListener('keydown',(event) => {
        console.log('ff');
        if (event.key==='Enter'){
            const name = nameLabel.value;
            console.log(name);
            this.updateName(name);
        }

    } );
   
//}




/*------------------------------------------------------*/


// Age Section 

const decrease = document.getElementById("myDecrease");
const clear = document.getElementById("myClear");
const increase = document.getElementById("myIncrease");

let counter = 0; 


decrease.onclick = function(){
    counter--; 
    counterLabel.textContent = counter;
    updateAge(counter);
}

increase.onclick = function(){
    counter ++;
    counterLabel.textContent = counter;
    updateAge(counter);

}

clear.onclick = function(){
    counter = 0;
    counterLabel.textContent = counter;
    updateAge(counter);

}

/*------------------------------------------------------*/

// output

const nameHead = document.getElementById("nameHeader");
const ageHead = document.getElementById("ageHeader");


//check if age / name was left empty



updateName("?");
updateAge("?");

//appending to the header
function updateName(name) {
  console.log('im here', name);
  nameHead.innerText = ` Welcome ${name}`;
}

function updateAge(age) {
    console.log('im here', age);
    ageHead.innerText = `your age is: ${age}` ;
}










    

