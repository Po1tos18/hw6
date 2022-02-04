// function calculator() {
//     do {
//         let a = prompt('Введите число а');
//         let b = prompt('Введите число b');
//         let x = prompt('Введите знак +,-,/,*');

//         switch (x) {
//             case '+':
//                 alert(a + b);
//                 break;
//             case '-':
//                 alert(a - b);
//                 break;
//             case '/':
//                 alert(a / b);
//                 break;
//             case '*':
//                 alert(a * b);
//             default:
//                 break;
//         }
//     }
//     while (confirm('Хотите ли вы решить ещё один пример?'));
// }
// calculator()
// ----------------------
// function week() {
//     const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//     let currDay = 0;

//     while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
//         currDay = (currDay + 1) % days.length;
//     }
// }
// week()
// --------------------------
// function multi() {
//     for(let i = 2; i <= 9; i++){
//         for(let x = 1; x <= 10; x++){
//             console.log(`${i}*${x}=`+(i*x));
//         }
        
//     }
// }
// multi()
// -------------------------
// prompt(confirm('Пожалуйста загадайте число от 0 до 100 и держите его в уме'));
// function magic() {
//     let N = 50
//     let x = prompt(`Ваше число >${N}, <${N} или ==${N}`)
//     if (x = '=='){ 
//         prompt(confirm(`Ваше число ${N}`));
        
//     } else if (x = '>'){
//         N++;
//         prompt(`Ваше число >${N}, <${N} или ==${N}`)
//         return
//     }else {
//         N--;
//         prompt(`Ваше число >${N}, <${N} или ==${N}`)
//         return
//     }
// }
// magic()
