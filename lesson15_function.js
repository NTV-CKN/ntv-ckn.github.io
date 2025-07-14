function sum(a, b) { return a + b }

function concatTwoObjects(obj1, obj2) {
    return "" + obj1.toString() + obj2.toString()
}

function concat(a, b) { return a + b }

let obj1 = {
    name: "NTX",
    old: 23,
    toString() {
        return this.name + " " + this.old
    }
}

let obj2 = {
    name: "NTX",
    old: 23,
    toString() {
        return this.name + " " + this.old
    }
}


class Dog {
    constructor(fur) {
        this.fur = fur
    }
    toString(name) {
        return `dog's name ${name}, has fur ${this.fur}`
    }
}

class Student extends Dog {
    #name
    #old
    #nameSuper

    constructor(nameSuper, furSuper, name, old) {
        super(furSuper)
        this.#name = name
        this.#old = old
        this.#nameSuper = nameSuper
    }
    toString() {
        return super.toString(this.#nameSuper) + " and second name is " + this.#name + " old " + this.#old
    }

}

console.log(new Dog("soft").toString("NKA"));
console.log(new Student("SS", "soft", "sxs", 12).toString("NKA"));

console.log(concatTwoObjects(obj1, obj2));


console.log(`sum a + b = ${sum(3, 4)}`);
console.log(`concat a + b = ${concat(3, " va 4")}`);
