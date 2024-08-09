// let s = "hello world";
// let str = s.split(" ");

// (async function()=>{
// for (const word of str) {
//    await setTimeout(() => {
//         console.log(word);
//     }, 2000);
// }
// })();

let s = "hello world";
let str = s.split(" ");

// (async () => {
//     for (const word of str) {
//         await new Promise(resolve => setTimeout(() => {
//             console.log(word);
//             resolve();
//         }, 2000));
//     }
// })();


(async ()=>{
   for (const word of str) {

   setTimeout(() => {
           console.log(word);
       }, 2000);

       
}
    
})();
