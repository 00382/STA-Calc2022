'use strict'
{
  const num_bth = document.querySelectorAll('.num_bth');
  let output_sub = document.getElementById('output_sub');
  const output_total = document.getElementById('output_total');
  let total = 0; 
  let state = 'start';
  let mode = 'integer_mode'; 

 
    const one_nine = document.querySelectorAll('.one_nine');
    one_nine.forEach(index => {     
      index.addEventListener('click', () => {
        console.log(index.dataset.indexId)
        if(total === 0) {
          total = index.dataset.indexId;  
        }else{
          total += index.dataset.indexId;
        }      
        output_sub.textContent = total;
        state = 'calculation'
      })  
    })
  const zero = document.getElementById('zero');
  zero.addEventListener('click', () => {
    console.log(zero.dataset.indexId)
    if(total === 0) {
      total = zero.dataset.indexId;  
    }else{
      total += zero.dataset.indexId;
    }      
    output_sub.textContent = total;
    state = 'calculation'
  })  
  const point = document.getElementById('point');
  point.addEventListener('click', () => {
    console.log(point.dataset.indexId)
    if(total === 0) {
      total = point.dataset.indexId;  
    }else{
      total += point.dataset.indexId;
    }      
    output_sub.textContent = total;
    state = 'calculation'
    mode = 'decimal_mode'; 
  })  
   const cal = document.querySelectorAll('.cal');
   cal.forEach(index => {     
     index.addEventListener('click', () => {
       if(state === 'start') {
         return;
       }
       console.log(index.dataset.indexId)
       if(total === 0) {
         total = index.dataset.indexId;  
       }else{
         total += index.dataset.indexId;
       }      
       output_sub.textContent = total;
       state = 'calBtn'
     })  
   })

  const equal_btn = document.getElementById('equal_btn');
  equal_btn.addEventListener('click',() =>{
    console.log(eval(total));
    output_total.textContent = eval(total);
  });

const clear = document.getElementById('clear')
clear.addEventListener('click', () => {
  reset();
})
function reset() {
 total = 0; 
 output_sub.textContent = 0;
 output_total.textContent = 0;
}
}