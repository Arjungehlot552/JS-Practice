h1 = document.querySelector("h1");

function changeColor(color , delay ) {
    return new Promise(resolve , reject)
    setTimeout(() => {
        let rnum = math.floor(math.random()*5) +1;
        if(rnum>3){
            reject("Promise rejected");
        }
        h1.style.color = color; 
        console.log(`Color change to ${color}`)
        resolve("Color Changed!!");
    }, delay);
}

// changeColor("red" , 1000 , () => {
//     changeColor("orange" , 1000 , () => {
//         changeColor("green" , 1000 , ()=>{
//             changeColor("pink" , 1000)
//         })
//     })
// })

async function Demo(){
   try{
    await changeColor("red" , 1000);
    await changeColor("blue" , 1000);
    await changeColor("pink" , 1000);
    await changeColor("yellow" , 1000);
    await changeColor("green" , 1000);
    await changeColor("black" , 1000);
   }catch(err){
    console.log("Error caught");
    console.log(err);
   }
}