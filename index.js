
let count = 0;

let total = 0;

let prevTitle = "People Entered: ";

let strTotal = "# Currently: ";

let strStop = "# Per Station: ";

let people = document.getElementById("count-people");

let title = document.getElementById("title");

let entries = document.getElementById("save-nr");

let currentTotal = document.getElementById("current-nr");

let currentStop = 0; 


function increment(){


    if (currentStop == 5){

        alert("This is the final stop, save the log and exit!");
        return;

    }else
    {

        if (count < 20){


            if (entries.innerHTML.includes("20"))
            {   
                title.innerHTML = prevTitle; 
                entries.innerHTML = strStop;
                currentTotal.style.display = "block";
                currentTotal.innerHTML = strTotal;
    
            }
    
            //Evalute the total once passengers enter by adding count to total
            if ( (total + count) == 20 ){
                
                title.innerHTML = "Currently: ";
                people.innerHTML = "Full";
                currentTotal.style.display = "none";
                alert("Bus is full, press save to log last entry!");
                return;
            }
    
            count += 1; // increment count since (total + count) < 20
            people.innerHTML = count; // Update screen to current value 
            
        }else if (people.innerHTML.includes("Full"))
        {
            alert("Bus is full, press save to start over!");
    
        }else
        {
            currentTotal.style.display = "none";
            title.innerHTML = "Currently: ";
            people.innerHTML = "Full"; 
            return;
    
        }
    
        

    }
    


}


function save(){
    
    let countStr = count + " - "; 
    
    currentStop += 1
    
    let i = 0;

    total += count; // update total passengers

    if (total == 0){

        if (entries.innerHTML.includes("20")) // if subway is full and user presses more than once, alert user it is already saved
        {
            alert("Already saved, press count to start over!");
            currentStop = 0;
            
        }else{

            alert("Nobody has entered, cannot save!"); // if subway is empty and user tries to save, alert user it is not possible to save
        }

    }else if ( total < 20){

        if (currentStop > 5){
            
            currentTotal.innerHTML = strTotal;
            entries.innerHTML = strStop;
            people.innerHTML = 0;
            currentStop = 0;
            total = 0;
            count = 0;
            return;

        }

        entries.innerHTML += countStr;  // update # people per stop by concatenation
        currentTotal.innerHTML = strTotal + total;

        people.innerHTML = 0;
        count = 0;

    }else
    {
        if (currentStop > 5){
            
            alert("This is the final stop, exit the bus!");
            entries.innerHTML = strStop;
            people.innerHTML = 0;
            currentStop = 0;
            total = 0;
            count = 0;
            return;

        }

        entries.innerHTML += count + `(${total})`; 
        title.innerHTML = "Currently: ";
        currentTotal.style.display = "none";
        total = 0;
        count = 0;

    }
    

}