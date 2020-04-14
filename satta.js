//satta interval for 2 hour 

setInterval (function myFunction() {
  var x = document.getElementById("demo")
  var y = Math.floor((Math.random() * 2) + 1);
switch (y) {

    case 1:
        var num1 = "1";
        document.getElementById("demo").innerHTML=num1;
        //console.log("1");
        
        break;

        case 2:
          var num2 = "6";
          document.getElementById("demo").innerHTML=num2; 
          //  console.log("6");
            break;

}
},100000);
