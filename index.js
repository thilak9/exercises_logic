//Question 1
const pluralItem = (item, count) => {
    return count>1 ? 'I have ' + count + ' '  + item + 's'
          : count = 1 ? 'I have ' + count + ' ' + item
          : 'Error';
}
console.log(pluralItem('apple',1))
console.log(pluralItem('pear',3))


//Question 2 [One way of doing it]
console.log('Basic way');
for (let i=0; i<5; i++){
    console.log('& & & & & ');
    console.log(' & & & & &');
}

//Question 2
console.log('Using lots of loops');
for (let i=0; i<5; i++){
    array = [];
    for(let j=0;j<10;j++){
        if (j%2 === 0){
            array.push('&');
        }
        else if (j%2 === 1){
            array.push(' ');
        }
        else{
            'Error';
        }
    }
    console.log(array.join(''));
    array=[];
    for(let k=0;k<10;k++){
        if (k%2 === 0){
            array.push(' ');
        }
        else if (k%2 === 1){
            array.push('&');
        }
        else{
            'Error';
        }
    }
    console.log(array.join(''));
}
