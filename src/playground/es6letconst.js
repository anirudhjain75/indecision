var nameVar = 'Andrew';
var nameVar = 'Nike';
console.log('nameVar',nameVar);

let nameLet = 'Jane';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'Shubham';
    return petName;
}

var fullname  = 'Anirudh Jain';

let firstName;

if(fullname) {
    firstName = fullname.split(' ')[0];
    console.log('First Name', firstName);
}

console.log('First Name sec', firstName);