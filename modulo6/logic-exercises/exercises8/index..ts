const filtrando = (number) => {
    let soma =0
     for(var i = 0; i < number.length; i++) {
      soma += number[i];
      if(number[i] > 0)
      soma += soma
  }
  
  }
  
  console.log(filtrando,[1, -1,-2, -5])