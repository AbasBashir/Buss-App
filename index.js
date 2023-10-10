

let count = 0;

let total = 0;

let strTotal = "# Currently: ";

let strStop = "# Per Station: ";

let people = document.getElementById("count-people");

let entries = document.getElementById("save-nr");

let currentTotal = document.getElementById("current-nr");


function increment(){
    
    if (count < 20){


        if (entries.innerHTML.includes("20"))
        {
            entries.innerHTML = strStop;
            currentTotal.innerHTML = strTotal;

        }

        //Evalute the total once passengers enter by adding count to total
        if ( (total + count) == 20 ){

            people.innerHTML = "Full";
            return;
        }

        count += 1; // increment count since (total + count) < 20
        people.innerHTML = count; // Update screen to current value 
        
    }else // If 20 people enter in the first stop then execute else
    {
        people.innerHTML = "Full"; 
        return;

    }

}


function save(){
    
    let countStr = count + " - "; 

    total += count; // update total passengers

    if (total == 0){

        if (entries.innerHTML.includes("20")) // if subway is full and user presses more than once, alert user it is already saved
        {
            alert("Subway is Full, already saved!");
        }else{

            alert("Nobody has entered, cannot save!"); // if subway is empty and user tries to save, alert user it is not possible to save
        }

    }else if ( total < 20){

        entries.innerHTML += countStr;  // update # people per stop by concatenation
        currentTotal.innerHTML = strTotal + total;

        people.innerHTML = 0;
        count = 0;

    }else
    {
        entries.innerHTML += count + `(${total})`; 
        console.log(entries);
        currentTotal.innerHTML = strTotal + "Full";
        total = 0;
        count = 0;

    }
    

}