function Calculator(){
    const FrtNum=Number(document.querySelector('.frtNum').value)
    const Opera=document.querySelector('.Operator').value
    const SecNum=Number(document.querySelector('.secNum').value)
    let equal=0
    switch (Opera) {
        case '+':
            equal=FrtNum + SecNum;
            break;
    
        case '-':
            equal=FrtNum - SecNum;
            break;
    
        case '*':
            equal=FrtNum * SecNum;
            break;
    
        case '/':
            equal=FrtNum / SecNum;
            break;
    
        case '%':
            equal=FrtNum % SecNum;
            break;
    }
    document.querySelector('.result').innerHTML=equal
}