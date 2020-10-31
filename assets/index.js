
function solve(){
    var hoursWorked = parseFloat(document.getElementById('workHour').value);
    
    if (hoursWorked > 4){
        document.getElementById('final').textContent = (4* 1000) + ((hoursWorked - 4) *200);
    } else {
        document.getElementById('final').textContent = hoursWorked * 1000;
    }

}


var submitButton = document.getElementById("submit");
submitButton.onclick = function() {
  solve();	
};



//This is for the two input fields, i changed it when the structure of the question was changed

// function solve(){
//     var hoursWorked = parseFloat(document.getElementById('workHour').value);
//     var extraHourz = parseFloat(document.getElementById('extraHour').value);
//     var salary = (hoursWorked, extraHourz) =>  { 
//         return (hoursWorked * 1000) + (extraHourz * 200); 
//       }

//     document.getElementById('final').textContent = salary(hoursWorked, extraHourz);
// } 



