function calcer() {
  var zipCode = document.getElementById("zipcode").value
  var date = new Date();
  var day = (date.getDate());
  if (zipCode.length != 5) {
    alert("Sorry, but you need to input a five-digit US postal code.")
    return;
  } 
  else {
  	prob = (6 * ((zipCode + (day * 12)) / 6)) % 100;
  }
  
  alert("The snowday calculator predicts that there is a(n) " + prob +" percent chance.");
}
