"use strict";

const persone = {
    name: "Alex",
    tel: "+998913333333",
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.dad = 'John';
clone.parents.mom = 'Ann';

console.log(persone);
console.log(clone);