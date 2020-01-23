// $(document).ready(function () {
//
// })
// alert("ss")



function focusInput(input) {
    var valueInput = input.getAttribute('value')
    if (valueInput == 0) {
        input.setAttribute('value', '')
    }
}
function blurInput(input) {
    var valueInput = input.getAttribute('value')
    if (valueInput == '') {
        input.setAttribute('value', 0)
    }
}


var input = document.querySelectorAll('input');
// console.log(input)
for (var i = 0; i < input.length; i++) {
    input[i].setAttribute('onfocus', 'focusInput(this)');
    input[i].setAttribute('onblur', 'blurInput(this)');
}
// input.setAttribute('onfocus', 'focusInput(this)');




// for(var i=0; i<input.length; i++){
//     input.setAttribute('value', 'qwdqwd')
//     input.setAttribute('onfocus', focusInput(this))
//     input.setAttribute('onblur', 'blurInput(this)')
// }
