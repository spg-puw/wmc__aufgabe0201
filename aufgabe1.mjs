//TODO A01: erstelle ein Array mit genau 10 Elementen (z.B. Zahlen)
let array10;
// array10 = TODO

//TODO A02: gib dem Objekt 2 weitere Properties: farbe ... orange-weiss, preis ... 11490
const einMotorrad = { typ: "Motorrad", bezeichnung: "KTM Freeride E-XC" };
einMotorrad.leistungKW = 9;
einMotorrad.antrieb = "elektrisch";

//TODO A03: lösche die Properties antrieb und preis von einAnderesMotorrad
const einAnderesMotorrad = structuredClone(einMotorrad);

//TODO A04: korrigiere die Funktion; hier stimmt etwas nicht!
function greet1(name) {
    return 'Hello ${name}!';
};

//TODO A05: finde den Fehler in dieser Funktion
function greet2(name) {
    return 'Dein Name ist ' + nama;
};

//TODO A06: ändere die Funktion so ab, dass der default Wert "Peter" übernommen wird, wenn man greet3() aufruft
function greet3(name) {
    return name;
};

//TODO A07: ergänze die Funktion
function quadratBerechnen(seitenlaenge) {
    return;
}

//TODO A08: ergänze die Funktion; das Ergebnis sollte "(basis hoch exponent) durch 2" sein
function potenzBerechnenUndHalbieren(basis, exponent) {
    return;
}

//TODO A09: ergänze die Funktion; im Fehlerfall oder wenn es kein Array ist wird 0 zurückgegeben
function anzahlDerElementeImArray(a) {
    return;
}

//TODO A10: gib alle keys des Objekts memObj mit Beistrich und Leerzeichen getrennt als String zurück; am Ende des String darf kein ", " sein
// z.B. "key1, key2, key3"
function memoryString() {
    const memObj = process.memoryUsage();
    return "hier ein string";
}

//TODO A11: rufe die Funktion console.log 100x auf
function sinnlos() {
    console.log("100x aufrufen");
}

function main() {
    console.log("Das wird nicht ausgeführt, wenn man die Aufgabe als Modul importiert!");

    //TODO A12: gib auf der Konsole den JSON-String der Variable einAnderesMotorrad aus
}

export default { main, array10, einMotorrad, einAnderesMotorrad, greet1, greet2, greet3, quadratBerechnen, potenzBerechnenUndHalbieren, anzahlDerElementeImArray, memoryString, sinnlos }
import { pathToFileURL as _path } from 'url'
if (import.meta.url === _path(process.argv[1]).href) {
    main();
}
