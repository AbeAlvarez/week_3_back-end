const ajolonauta = require ('./../app/ajolonauta')

describe("Esto es una suite de pruebas", () => {
    test('Caso de prueba 1: Creación de objeto', () => {
        const woopa = new ajolonauta ("Woopa")
        expect(woopa.name).toBe("Woopa");
    });
})