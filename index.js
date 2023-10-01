"use strict";
//stripping Names: store a person's name, and include some whitespace characters at the begining and end of name. Make sure you use each character combination, "/t" and "/n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white space.
let personName = "/t Atif Ali shah /n";
console.log("Name with whitespace:, personName");
let strippedName = personName.trim();
console.log("stripped name:, strippedName");
