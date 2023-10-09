

let count = 0;

let total = 0;

let strTotal = "# Currently Total: ";

let strStop = "# Passengers / Stop: ";

let people = document.getElementById("count-people");

let entries = document.getElementById("save-nr");

let currentTotal = document.getElementById("current-nr");


function increment(){

    if (count < 20){


        if (entries.innerHTML == strStop + "20")
        {
            entries.innerHTML = strStop;

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

    if ( total < 20){

        entries.innerHTML += countStr;  // update content by concatenation
        currentTotal.innerHTML = strTotal + total;

        people.innerHTML = 0;
        count = 0;

    }else
    {

        entries.innerHTML = strStop + total;
        currentTotal.innerHTML = strTotal + "Full";
        total = 0;
        count = 0;

    }
    

}
