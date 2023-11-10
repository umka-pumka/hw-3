let num = prompt('Введите число квадратов') 
g = 0;
for(let i = 0; i < num; i++){ 
   if(i > 9) break ; 
   
   switch(g){ 
      case 0:{ 
         document.write('<div class="card card2"></div>') 
         g++;
         break
  } 
      case 1:{ 
         document.write('<div class="card card3"></div>'); 
         g++;
         break
  }  
      default:{ 
         document.write('<div class="card card4"></div>'); 
         g = 0;
      } 
   }
}

  
