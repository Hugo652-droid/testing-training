"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    #articleIdValue;
    #nameValue;
    #quantity;
    #price;
    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {
        this.#articleId = articleId;
        this.#name = name;
        this.quantity = quantity;
        this.price = price;
    }

    get articleId() {
        return this.#articleIdValue;
    }

    get name() {
        return this.#nameValue;
    }

    get quantity() {
        return this.#quantity;
    }

    set quantity(value) {
        this.#quantity = this.#validateQuantity(value);
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        this.#validatePrice(value);
        return this.#price = value;
    }

    get total() {
        return this.#quantity * this.#price;
    }
    //endregion public methods

    //region private methods
    set #articleId(value) {
        this.#articleIdValue = this.#validateArticleId(value);
    }

    set #name(value) {
        return this.#nameValue = value;
    }

    #validateArticleId(articleId) {
        //TODO Implement this method
    }

    #validateQuantity(quantity) {
        //TODO Implement this method
    }

    #validatePrice(price) {
        //TODO Implement this method
    }
    //endregion private methods
}



