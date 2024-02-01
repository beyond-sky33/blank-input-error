let form = document.querySelector("form");
let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");
let h4 = document.querySelector('h4');

let inps = document.querySelectorAll('input[type="text"]');

/*------------*/
form.addEventListener("submit",function(event){
     event.preventDefault();
    //console.log(inp1.value , inp2.value);
    if(inp1.value.trim() === "" || inp2.value.trim() === ""){
        h4.textContent = "Error,some fileds are blank";
        h4.style.color = "red";
    }else{
        h4.textContent = "";
        h4.style.color = "";
    }
});
/*------------*/

// form.addEventListener("submit",function(event){
//        event.preventDefault();
//     inps.forEach(function(elem){
//         if(elem.value === ''){
//             h4.textContent = "Error,some fileds are blank";
//             h4.style.color = "red";
//         }else{
//             h4.textContent = "";
//             h4.style.color = "";
//         }
//     })
// });

/*------------*/

form.addEventListener("submit",function(event){
        event.preventDefault();
    for(let i=0; i<=inps.length ; i++){
        if(inps[i].value.trim() === ''){
            h4.textContent = "Error,some fileds are blank";
            h4.style.color = "red";
            break;
        }else{
            h4.textContent = "";
            h4.style.color = "";
        }
        
    };
});