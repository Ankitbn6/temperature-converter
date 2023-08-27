let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

celsius.addEventListener("input",()=>{
  celsius.readonly=false;
  let cvalue=parseInt(celsius.value);
  kelvin.value=cvalue+273;
  fahrenheit.value=(cvalue*9/5)+32;
  celsius.addEventListener("blur",()=>{
    celsius.readonly=true;
  })
})

fahrenheit.addEventListener("input",()=>{
  fahrenheit.readonly=false;
  let fvalue=parseInt(fahrenheit.value);
  let cvalue=Math.round((fvalue-32)*5/9);
  kelvin.value=cvalue+273;
  celsius.value=cvalue;
  fahrenheit.addEventListener("blur",()=>{
    fahrenheit.readonly=true;
  })
})
kelvin.addEventListener("input",()=>{
  kelvin.readonly=false;
  let kvalue=parseInt(kelvin.value);
  let cvalue=kvalue-273;
  celsius.value=cvalue;
  fahrenheit.value=(cvalue*9/5)+32;
  kelvin.addEventListener("blur",()=>{
    kelvin.readonly=true;
  })
})