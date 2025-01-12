"use strict";
const data = [
    {
        group: 1,
        name: 'John'
    },
    {
        group: 1,
        name: 'Jess'
    },
    {
        group: 2,
        name: 'Nadin'
    },
    {
        group: 2,
        name: 'Nadya'
    },
    {
        group: 3,
        name: 'Stepan'
    }
];
function group(array, key) {
    return array.reduce((map, item) => {
        const itemKey = item[key];
        let curEl = map[itemKey];
        if (Array.isArray(curEl)) {
            curEl.push(item);
        }
        else {
            curEl = [item];
        }
        map[itemKey] = curEl;
        return map;
    }, {});
}
const res = group(data, 'group');
console.log(res);
