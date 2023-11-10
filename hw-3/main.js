function checkNumberType() {
  
    const userInput = prompt("Введите число:");

   
    if (!isNaN(userInput)) {
        
        const num = parseFloat(userInput);

        if (num % 2 === 0) {
            alert("Четное");
        } else {
            alert("Нечетное");
        }

        if (num > 0) {
            alert("Положительное");
        } else if (num < 0) {
            alert("Отрицательное");
        } else {
            alert("Ноль");
        }
    } else {
        alert("Введите только числа");
    }
}


checkNumberType();