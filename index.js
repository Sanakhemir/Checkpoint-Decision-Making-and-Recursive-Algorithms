

// Prise de décision ==>

    // 1er tâche Leap Year Checker:
let year = 2024

function LeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

}

if (LeapYear(year)) {
    console.log(year + " est une année bissextile.");
} else {
    console.log(year + " n'est pas une année bissextile.");
}

    // 2eme tâche Ticket Pricing:
let age=30;
let price;

if (age <= 12) {
    price = 10;
} else if (age <= 17) {
    price = 15;
} else {
    price = 20;
}

console.log("Le prix de votre billet est de " + price + " €");



// Recursion ==>
   // 1er tâche: Séquence de Fibonacci: est une suite de nombres entiers dans laquelle chaque nombre est la somme des deux nombres qui le précèdent.

function fibonacci(n) {
    if (n === 0) {
      return 0;
    }
    
    if (n === 1) {
      return 1;
    }
    

    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  console.log("Le 20ème nombre de Fibonacci est : " + fibonacci(20));
  console.log("Le 8ème nombre de Fibonacci est : " + fibonacci(8));




//2 éme tâche: Fonction de puissance


  function puissance(base, exposant) {
   
    if (exposant === 0) {
      return 1;
    }

    if (exposant === 1) {
      return base;
    }
    
    return base * puissance(base, exposant - 1);
  }
  
  console.log("1 à la puissance 5 est : " + puissance(1, 5));
  console.log("9 à la puissance 3 est : " + puissance(9, 3)); 
  console.log("7 à la puissance 4 est : " + puissance(7, 4));  
  
  