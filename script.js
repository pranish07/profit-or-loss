const initialStock = document.querySelector('#initial-stock')
const stockQuantity = document.querySelector('#stock-quantity')
const currentStock = document.querySelector('#current-stock')
const submitBtn = document.querySelector('#submit-btn');
const outputBox = document.querySelector('#output-box');

function submitHandler(){
    let ip = Number(initialStock.value);
    let qty = Number(stockQuantity.value);
    let curr = Number(currentStock.value);
 calculateProfitOrLoss(ip,qty,curr);
}

function calculateProfitOrLoss(initial,quantity,current){
if(initial>current){
    let loss = initial - current;
    let lossPercentage = loss * quantity;
    showMessage(`your loss is ${loss} and your lossPercentage is ${lossPercentage}`);
}else if(current>initial){
    let profit =current - initial;
    let profitPercentage = profit *quantity;
    showMessage(`your profit is ${profit} and your profitPercentage is ${profitPercentage}`);

}else{
    showMessage(`NO PAIN NO GAIN and NO GAIN NO PAIN`);
}
}
function showMessage(msg){
    outputBox.innerHTML = msg;
}

submitBtn.addEventListener('click',submitHandler);
