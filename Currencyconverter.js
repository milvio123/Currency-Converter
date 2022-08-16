var myObj = 0;

function myFunction() {

var myHeaders = new Headers();
myHeaders.append("apikey", "cNhzO2khu8ukvvXhSCRqBDdNETeQIL7c");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

var to = document.getElementById("To").value
var from = document.getElementById("From").value
var amount = document.getElementById("Amount").value
fetch("https://api.apilayer.com/exchangerates_data/convert?to=" + to + "&from=" + from  + "&amount=" + amount, requestOptions)
  .then(response => response.text())
  .then(result => f(result)      )
  .catch(error => console.log('error', error));

}
  function f(result)
  {
        myObj = JSON.parse(result)
        alert(myObj.result)
  }

