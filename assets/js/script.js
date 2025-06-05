import "../css/style.css";
import "../bootstrap-5.3.2-dist/css/bootstrap.css";
import img from "../image/icon.svg";

document.getElementById("myImage").src = img;

import { deoperation } from "./operation.js";
import { getUserInput } from "./userInput.js";
import { handleerror } from "./handelerror.js";
import { validInput } from "./validationinput.js";


// 5- get result
function setuserOutput(res){
    let result=document.getElementById("result")
        result.innerText="Result: "+res
}
//6- done calaculation
 document.getElementById("cal").addEventListener('click',calculate)
 function calculate(){
   handleerror(false,"")
  let inputs= getUserInput();
  console.log(validInput(inputs[0])&&validInput(inputs[1]));
  if(validInput(inputs[0])&&validInput(inputs[1])){
    let res=deoperation(inputs[0],inputs[1],inputs[2])
   // console.log(res);
    setuserOutput(res)
  } else{
    for(let i=0 ; i<(inputs.length-1);i++){
      let error= !validInput(inputs[i])
      handleerror(error,"Invalid Num :"+(i+1)+"")
    }
  }
 }
