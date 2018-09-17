function printTable(num){
    for(var i=0; i<=num; i++){
        //console.log(num + ' X ' +i + '=' + (num*i));
        console.log(`${num} X ${i} = ${num*i}`);
    }
}

console.log('module myutil loaded');
//by default module.exports represents {} empty object
module.exports = printTable;