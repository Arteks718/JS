// Задание 1

let firstRow = prompt("Введите первое предложение");
let secondRow = prompt("Введите второе предложение");
let str = prompt("Введите букву");

function getRow(firstRow, secondRow, str)
{
    let a = 0
    let b = 0
    for (let i = 0; i < firstRow.length; i++)
    {  
        if (firstRow.charAt(i) === str)
        {
            a++;
        }
    }
    for (let i = 0; i < secondRow.length; i++)
    {
        if (secondRow.charAt(i) === str)
        {
            b++;
        }
    }
    if(a > b)
    {
        return firstRow  
    }
    else
    {
        return secondRow
    }
}
console.log("Первое предложение: " + firstRow);
console.log("Второе предложение: " + secondRow);
console.log("Буква: " + str);
console.log("");

console.log("Предложение с большим количество заданой буквы " + "'" + str + "'" + ": " + getRow(firstRow, secondRow, str));
console.log("");console.log("");


// Задание 2

let phone = prompt("Введите номер телефона")

function formattedPhone(phone) {
    if (phone.length == 10){
        phone = '+7' + phone;
    }
    else if (phone.length == 11){
        if(phone.charAt(0) == 8){
            phone[0]= '7'
            phone = '+' + phone;
        }
        else if(phone.charAt(0) == 7){
            phone = '+' + phone;
        }
        else{
            alert('Формат номера неверный')
            return ""
        }
        
    }
    else if(phone.length = 12 && phone.charAt(0)== '+' && phone.charAt(1) == 7){

    }
    else{
        alert('Формат номера неверный')
        return ""
    }
    num = ''
    for (let i = 0; i < phone.length; i++) {
        if (i == 2){
            num += " ("
        }
        else if(i == 5){
            num += ") "
        }
        else if(i == 8){
            num += "-"
        }
        else if(i == 10){
            num += "-"
        }
        num += phone.charAt(i);
    }
    return num;
}
phone = formattedPhone(phone);
console.log(phone);