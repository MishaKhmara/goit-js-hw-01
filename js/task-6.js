

let input ;
let total = 0;


while (input!==null ) {
   
    input = prompt('введите число');
  
  
    if (input === null) {
        break;
  }
  Number.isNaN(input)
  input = Number(input)
  total += input;
}

alert(`Общая сумма ${total}`);