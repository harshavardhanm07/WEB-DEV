var name = prompt("Enter your name");

var firstchar = name.slice(0,1);

var uppercasefirstchar = firstchar.toUpperCase();

var rest = name.slice(1,name.length);

rest = rest.toLowerCase();

var capital = uppercasefirstchar + rest ;

alert("hello " + capital);
