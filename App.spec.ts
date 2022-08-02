import { EasyBroker } from "./App";

const easyBroker: EasyBroker = new EasyBroker();

describe('GET - EasyBroker', () => {
    test('Probando el metodo title()', () => {
        const expeted = easyBroker.title();
        const result = easyBroker.title();
        expect(result).toStrictEqual(expeted);
    });
});