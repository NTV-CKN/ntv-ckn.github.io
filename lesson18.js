let obj = {
    name: "NTV",
    old: 12,
    getName: function () {
        return this.name
    },
    getOld1: () => {
        console.log("getOld1", this);

        this.old
    },
    getOld: function () {
        getThis()
        return this.old
    }

}

console.log(obj.getName(), obj.getOld());
// console.log(this.obj);
// let obj2 = this.obj
// console.log(obj2);
// console.log(new Dog("You").getName());

getThis(this)


class Dog {
    constructor(name) {
        this.name = name
        getName: () => {
            return this.name
        }
    }
}


function getThis(param) {
    console.log(param);
}
function getThis() {
    console.log(this);
}

