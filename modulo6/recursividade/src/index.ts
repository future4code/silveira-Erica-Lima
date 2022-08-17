//Exercício 1) a. e b.
const printNumbers1 = (n: number) => {
    if (n >= 0) {
      printNumbers1(n - 1);
      console.log(n);
    }
  };
  const printNumbers2 = (n: number) => {
    if (n >= 0) {
      console.log(n);
      printNumbers2(n - 1);
    }
  };

  //Exercício 2 

  export const calculateSumTo = (n: number, acc: number = 0): number => {
    if (n === 0) {
      return acc;
    }
    return calculateSumTo(n - 1, acc + n);
  };
  
  console.log(calculateSumTo(13));
 ;

 //Exercício 3

 export const calculateSumTo2 = (n: number): number => {
    var sum = 0
      for (var i = 0 ; i <= n ; i++) {
          sum += i;
    }
      return sum;
  };
      
  console.log(calculateSumTo2(100));

  //Exercício 4

  export const printArray = (arr: number[], i: number = arr.length - 1) => {
    if (i >= 0) {
      printArray(arr, i - 1);
      console.log(`Elemento ${i}: `, arr[i]);
    }
  };
  
  const array = [1, 2, 3, 4];
  printArray(array);