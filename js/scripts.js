// plik scripts.js

var name = prompt('Wpisz swoje imię');
alert('Witaj, ' + name);
console.log('Witaj, ' + name);

var a = 2,
	h = 4,
	triangleArea = a*h/2;

console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);	


var a = prompt("wpisz a"),
	b = prompt("wpisz b"),
	value = (a*a) + (2 *a * b) - (b*b);
console.log(value);	

var whatIsBigger = value > 0 ? 'wynik dodatni' : "wynik ujemny";
console.log(whatIsBigger);

if (value = 0) {
	console.log("Wynik jest równy zero");
} else {
	console.log("wynik jest różny od zera");
}
