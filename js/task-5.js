let country = prompt('Укажите страну в которую хотите совершить доставку');
console.log(country);
const normalizedInput = country.toLowerCase()
console.log(normalizedInput)
let price ;

 
switch (country) {
    case 'Китай': {
        price = 100;
        console.log(`Доставка в ${country}, будет стоить ${price} кредитов`);
          alert(`Доставка в ${country}, будет стоить ${price} кредитов`);
        break;
    }
          case 'Чили': {
        price = 250;
        console.log(`Доставка в ${country}, будет стоить ${price} кредитов`);
        alert(`Доставка в ${country}, будет стоить ${price} кредитов`);
        break;
    }
          case 'Австралия': {
        price = 170;
        console.log(`Доставка в ${country}, будет стоить ${price} кредитов`);
         alert(`Доставка в ${country}, будет стоить ${price} кредитов`);
        break;
    }
          case 'Индия': {
        price = 80;
        console.log(`Доставка в ${country}, будет стоить ${price} кредитов`);
         alert(`Доставка в ${country}, будет стоить ${price} кредитов`);
        break;
    }
          case 'Ямайка': {
        price = 120;
        console.log(`Доставка в ${country}, будет стоить ${price} кредитов`);
         alert(`Доставка в ${country}, будет стоить ${price} кредитов`);
        break;
    }
    default:
        console.log('В вашей стране доставка не доступна');
        alert('В вашей стране доставка не доступна')
        
}