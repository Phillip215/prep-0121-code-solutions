var languagesArray = ['html', 'css', 'javascript', 'react', 'node'];
console.log(languagesArray);
console.log(languagesArray.length);

languagesArray.push('c#', 'php');
console.log(languagesArray);

languagesArray.pop();
console.log(languagesArray);

languagesArray.unshift('C++');
console.log(languagesArray);

languagesArray.shift();
console.log(languagesArray);

var thirdElement = languagesArray[2];
console.log(thirdElement);

var arrayLength = languagesArray.length;
console.log(`The array length is ${arrayLength}`);

var lastItem = languagesArray[5];
console.log(`The last item in the array is ${lastItem}`);
