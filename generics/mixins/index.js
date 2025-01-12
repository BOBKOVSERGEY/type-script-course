"use strict";
/*type Constructor = new (...args: any[]) => any;
type GConstructor<T = {}> = new (...args: any[]) => T;

class List {
    constructor(public items: string[]) {}
}

class Accordion {
    isOpened: boolean
}



type ListType = GConstructor<List>;
type AccordionType = GConstructor<Accordion>;

class ExtendedList extends List {
    first() {
        return this.items[0];
    }
}

function ExtendedListMixin<TBase extends ListType & AccordionType>(Base: TBase) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0];
        }
    }
}

class AccordionList {
    isOpened: boolean
    items: string[]
    constructor(public items: string[]) {}

}

const list = ExtendedListMixin(AccordionList);

const extendedList = new list(['z', 'b', 'c']);
console.log(extendedList.first());*/ 
