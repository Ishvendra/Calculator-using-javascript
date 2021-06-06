var operand1 = 0;
var operator = null;
var operand2 = null;
var display = document.getElementById("display");
var button = document.getElementsByTagName('button');

for(var i=0; i<button.length;i++){
    button[i].addEventListener('click', function (){
        var value = this.getAttribute('data-value');
        if(value == 'X'){
            var text = display.innerHTML;
            display.innerHTML = text.slice(0, -1);
        }
        else if(value == '+/-'){
            display.innerHTML = parseFloat(display.innerHTML)*-1;
        }
        else if(value == '%'){           
            operand2 = parseFloat(display.innerHTML.match(/(\d+)/));

            if(operator == '/'){
                display.innerHTML = (operand1 / operand2)*100;
            } 
            else{
                display.innerHTML = (display.innerHTML)/100;
            }
        }
        else if(value == '/'){
            operator = '/'; 
            operand1 = parseFloat(display.textContent);
            display.innerHTML = "/ ";
        }
        else if(value == '*'){
            operator = '*';
            operand1 = parseFloat(display.textContent);
            display.innerHTML = "* ";
        }
        else if(value == '-'){
            operator = '-';
            operand1 = parseFloat(display.textContent);
            display.innerHTML = "- ";
        }
        else if(value == '+'){
            operator = '+';
            operand1 = parseFloat(display.textContent);
            display.innerHTML = "+ ";
        }
        else if(value == 'A/c'){
            operand1 = 0;
            operand2 = null;
            operator = null;
            display.innerHTML = "";
        }
        else if(value == '.'){
            display.innerHTML += value;
        }
        else if(value == '='){
            operand2 = parseFloat(display.innerHTML.match(/(\d+)/));
            if(operator == '+'){
                var res = operand1 + operand2;
            }
            else if(operator == '-'){
                var res = operand1 - operand2;
            }
            else if(operator == '*'){
                var res = operand1 * operand2;
            }
            else if(operator == '/'){
                var res = operand1 / operand2;
            }
            
            display.innerHTML = res;
            operand1 = 0;
            operand2 = null;
            operator = null;
        }
        else{
            display.innerHTML += value;
        }
        
    });
}

