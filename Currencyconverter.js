var myObj = 0;

function ConvertFunc() {
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

function DateFunc() {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "cNhzO2khu8ukvvXhSCRqBDdNETeQIL7c");
  
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

   var date = document.getElementById("Datet").value
   var symbols = document.getElementById("Symbolst").value
   var base = document.getElementById("Baset").value

  
  fetch("https://api.apilayer.com/exchangerates_data/" + date + "?symbols=" + symbols + "&base=" + base, requestOptions)
    .then(response => response.text())
    .then(result => z(result)      )
    .catch(error => console.log('error', error));
  
}

function Latest() {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "cNhzO2khu8ukvvXhSCRqBDdNETeQIL7c");
  
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

   var symbols = document.getElementById("symbolsl").value
   var base = document.getElementById("Basel").value

  
  fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=" + symbols + "&base=" + base, requestOptions)
    .then(response => response.text())
    .then(result => z(result)      )
    .catch(error => console.log('error', error));
  
}


function Symbols() {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "cNhzO2khu8ukvvXhSCRqBDdNETeQIL7c");
  
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
  fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
  .then(response => response.text())
  .then(result => s(result))
  .catch(error => console.log('error', error));


}

  function f(result)
  {
        myObj = JSON.parse(result)
        alert(myObj.result)
  }

  function z(result)
  {
        myObj = JSON.parse(result)
        alert(Object.values(myObj.rates))

  }

  function s(result) {
    myObj = JSON.parse(result)
    alert(Object.keys(myObj.symbols))
  
  }


