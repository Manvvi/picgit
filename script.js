console.log('check')
const firstitem= document.querySelectorAll('.panel');
// console.log(firstitem);
// firstitem.addEventListener('mouseover',()=>{

//     firstitem.style.flex=5;
// })
// firstitem.addEventListener('mouseout',()=>{
    
//     firstitem.style.flex=0.5;
// })
firstitem.forEach((i) =>{
    i.addEventListener('mouseover',()=>{
        console.log('mouseover');
        i.classList.add('active');
        //   i.style.flex=5;  
     });
     i.addEventListener('mouseout',()=>{
         console.log('mouseout');
        //   i
        i.classList.remove('active');
     });
    });


