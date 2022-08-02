"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const easyBroker = new App_1.EasyBroker();
describe('GET - EasyBroker', () => {
    test('Probando el metodo title()', () => {
        const expeted = easyBroker.title();
        const result = easyBroker.title();
        expect(result).toStrictEqual(expeted);
    });
});
