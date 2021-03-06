class Animal {
    constructor(weight, name) {
        this.weight = weight;
        this.name = name;
    }
    eat() {
        return this.name + " appena aver mangiato pesa " + this.weight + "kg";
    }
}
class Mammal extends Animal {
    constructor(weight, name, energy) {
        super(weight, name);
        this.energy = energy;
    }
    eat() {
        return super.eat() + " e assume " + this.energy + " J.";
    }
}
class Reptilis extends Animal {
    constructor(weight, name, temp) {
        super(weight, name);
        this.temp = temp;
    }
    eat() {
        return "Il " + super.eat() + " è ha aumentato la temperatura di " + this.temp + " gradi.";
    }
}
let m = [new Mammal(20, "Zelda", 50)];
let r = [new Reptilis(20, "coccodrillo", 10)];
m.forEach((a) => {
    console.log(a.eat());
});
r.forEach((b) => {
    console.log(b.eat());
});
//# sourceMappingURL=animals.js.map