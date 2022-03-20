//BITCOIN PRICE
let url = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDC";
var out = 0;

function bitcoinP() {
  console.log("ok btc json");

  fetch(url)
    .then((res) => res.json())
    .then((out) => {
     
      console.table(out);
      console.log();
      var output = out[0,1];
      document.getElementById('textInputB').value=output;
    
  
    })
    .catch((err) => {
      throw err;
    });
}

function updateTextInputB(val) {
    document.getElementById('textInputB').value=val; 
    
  }