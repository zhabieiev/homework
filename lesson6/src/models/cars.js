export class Cars {
    #brand;
    #model;
    color;

    constructor(brand, model, color) {
        this.#brand = brand;
        this.#model = model;
        this.color = color;
    }

    get brand() {
        return this.#brand.toUpperCase();
    };

    set brand(value) {
        this.#model = value.toLocaleLowerCase();
    };

    get model() {
        return this.#model;
    };

    logInfo() {
        console.log(this.#brand, this.#model, this.color);
    }
};
