let button = document.querySelector('button[type=submit]')
button.addEventListener('click', function() {
    let str = document.querySelector('form input[name=word]').value;
    let arr = str.split(',').map(Number);
    // let arrSorted = str.split(',').map(Number).sort();
    let result;

    if (arr.length === 1) {
        result = 'TRUE';
    } else
    
    {for (let i = 1; i <= arr.length - 1; i++) {
        
        if (arr[i - 1] < arr[i]) {
            result = 'TRUE'; 
        } else {
            result = 'FALSE';
            break;
        }
    }}
    console.log(arr);
    alert(result);
    
   
})




// let str = document.querySelector('form input[name=word]').value;
//     let arr = str.split(',').map(Number);
//     // let arrSorted = str.split(',').sort();
//     let result;

//     // if (arr = [0]) {
//     //     result = 'TRUE';
//     // }

//     for (let i = 1; i <= arr.length - 1; i++) {

//         if (arr[i - 1] < arr[i]) {
//             result = 'TRUE'; 
//         } else {
//             result = 'FALSE';
//             break;
//         }
//     }
//     console.log(arr);
//     alert(result);
    
   
// })