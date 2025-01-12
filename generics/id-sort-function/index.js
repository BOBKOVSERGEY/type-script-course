"use strict";
const data = [
    {
        id: 1,
        name: 'Vasa'
    },
    {
        id: 2,
        name: 'Petya'
    },
    {
        id: 3,
        name: 'Nadya'
    }
];
function sort(data, type = 'asc') {
    return data.sort((a, b) => {
        switch (type) {
            case 'asc':
                return a.id - b.id;
            case 'desc':
                return b.id - a.id;
        }
    });
}
console.log(sort(data, 'desc'));
console.log(sort(data));
