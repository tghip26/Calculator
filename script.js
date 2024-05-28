let display = document.querySelector('body > div > div.result > div.last');
let res = document.querySelector('body > div > div.result > div.new');

let button = document.querySelectorAll('.btn-cal');

button.forEach(el => {
    el.addEventListener('click', function (e) {
        if(display.innerHTML=='0')
            display.innerHTML='';
        if(el.innerHTML=='AC')
            display.innerHTML='0';
        else display.innerHTML+=el.innerHTML;
    })
})

const onClickEqual = () => {
    let evalText = display.innerText
    evalText = evalText.replace('×', '*').replace('÷','/').replace('−', '-');
    res.innerText = eval(evalText)
}

function clean(){
    display.innerText = "";
    res.innerText = "";
    
}

function undo(){
    if (display.innerText !== ""){
        display.innerText = display.innerHTML.substring(0, display.innerText.length - 1);
    } else {
        res.innerText = res.innerHTML.substring(0, res.innerText.length - 1);
    }
}

let checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change', function(){
    if(this.checked){
        document.documentElement.setAttribute('data-theme','dark');
    } else{
        document.documentElement.setAttribute('data-theme','light');
    }
})