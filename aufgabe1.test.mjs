import t from './aufgabe1.mjs'

describe('JSBasics', () => {
    const log = console.log;

    beforeEach(() => {
        console.log = import.meta.jest.fn();
    });

    afterAll(() => {
        console.log = log;
    });

    test("A01", () => {
        expect(t.array10).toHaveLength(10);
    });

    test("A02", () => {
        expect(t.einMotorrad?.farbe).toBe("orange-weiss");
        expect(Number(t.einMotorrad?.preis)).toEqual(11490);
    });

    test("A03", () => {
        expect(t.einAnderesMotorrad).not.toBe(undefined);
        expect(t.einAnderesMotorrad?.antrieb).toBe(undefined);
        expect(t.einAnderesMotorrad?.preis).toBe(undefined);
        //CHECK?
    });

    test("A04", () => {
        const r = t.greet1('test123');
        expect(r).toBe('Hello test123!');
    });

    test("A05", () => {
        const r = t.greet2('test123');
        expect(r).toBe('Dein Name ist test123');
    });
    
    test("A06", () => {
        const r1 = t.greet3();
        expect(r1).toBe('Peter');
        
        const r2 = t.greet3('Anna');
        expect(r2).toBe('Anna');
    });

    test("A07", () => {
        expect(t.quadratBerechnen(2)).toBe(4);
        expect(t.quadratBerechnen(3)).toBe(9);
        expect(t.quadratBerechnen(4)).toBe(16);
    });

    test("A08", () => {
        expect(t.potenzBerechnenUndHalbieren(2, 4)).toBe(8);
        expect(t.potenzBerechnenUndHalbieren(3, 3)).toBe(13.5);
        expect(t.potenzBerechnenUndHalbieren(1, 8)).toBe(0.5);
    });

    test("A09", () => {
        expect(t.anzahlDerElementeImArray([1,2,3])).toBe(3);
        expect(t.anzahlDerElementeImArray([])).toBe(0);
        expect(t.anzahlDerElementeImArray({ a:1, b:2 })).toBe(0);
        expect(t.anzahlDerElementeImArray("test")).toBe(0);
    });

    test("A10", () => {
        const r = t.memoryString();

        expect(r).toEqual(
            expect.stringContaining("rss, heapTotal, heapUsed, external")
        );
    });

    test("A11", () => {
        t.sinnlos();
        expect(console.log).toHaveBeenCalledTimes(100);
    });

    test("A12", () => {
        t.main();

        expect(console.log).toHaveBeenNthCalledWith(
            2,
            `{"typ":"Motorrad","bezeichnung":"KTM Freeride E-XC","leistungKW":9,"farbe":"orange-weiss"}`
        );
    });
});
