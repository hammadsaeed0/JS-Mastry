// let isName = "Hammad";

// console.log(isName);

// let isName1 = new String("Hammad");
// console.log(isName1);

// Some usefull Method of String

// console.log(isName[0]);
// ----------------------------------------------------------------------------------------------------
// console.log(isName.charAt(5));
// const sentence = "The quick brown fox jumps over the lazy dog.";

// const index = 4;

// console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// Expected output: "The character at index 4 is q"
// ---------------------------------------------------------------------------------------------------
// console.log(isName.concat("saeed", "khan"));
// console.log(isName.endsWith("d"));
// console.log(isName.includes("m"));
// const sentence = "The quick brown fox jumps over the lazy dog.";

// const word = "the";

// console.log(isName.includes("m"));
// // Expected output: "The word "fox" is in the sentence"

// console.log(isName.indexOf("m"));
// console.log(isName.repeat(100));
// console.log(isName.replace("Ham", "saeed"));
// console.log(isName.search("d"));

// const str = "The quick brown fox jumps over the lazy dog.";

// // console.log(str.slice(31));
// // // Expected output: "the lazy dog."

// // console.log(str.slice(4, 19));
// // // Expected output: "quick brown fox"

// // console.log(isName.slice(-2, -1));
// // // Expected output: "dog."

// console.log(str.slice(-9, -8));
// // // Expected output: "lazy"

// const str = "The quick brown fox jumps over the lazy dog.";

// const words = str.split(" ");
// console.log(words);
// // Expected output: "fox"

// const chars = str.split("");
// console.log(chars);
// Expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // Expected output: Array ["The quick brown fox jumps over the lazy dog."]

// // Question And Answers

// // Question1 : What are strings in JavaScript?
// String is another datatype in javascript that is use to store line or paragraph, String in Primitive datatype that mean these are immutable.

// // Question2 : Explain the difference between single quotes (') and double quotes (") when creating strings.
// Eventully there is no big differece between single qoutes and double qoutes both can be use for
// creating string but if we want nested string where there is main string and in between there is sub string then we commenly use doube qoutes outside and signle qoutes inner side.Eventully

// // Question3 : How can you access individual characters in a string in JavaScript?
// To access the individual characters in string we use split method.
// For example
// const isName = "Hammad";
// console.log(isName.split());

// // Question4 : What is string concatenation? Can you provide an example?
// To concatinate any two string we commenly use concate,
// const firstName = "hammad";
// const secondName = "saeed";
// console.log(firstName.concat(secondName));

// Question5 : How do you determine the length of a string in JavaScript?
// We simple use str length() property to get the length of string

// // Question6: Explain the indexOf() method in JavaScript strings.
// We commenly use indexOf() method to get the index value of specfic character in string

// // Qouestion7: What are template literals in JavaScript, and how do they differ from regular strings?
// There is a big differece between template literals and regular String, in regular string we use single or double qouetes to declear and we cannot call any funciton between them but in template literals we use double ticks and we can call any variable or function between it using dollar sign

// // Question8 : Can you explain the difference between slice(), substring(), and substr() methods in JavaScript strings?
// Slice is another function of the string that is use to cut a string with one index number to another index number, str.slice(0,5) here we try to cut the string into index 0 to index 5, sorry i dont know about substring() and substr() please provide me information regarding them

// // Qouestion9: What does it mean for a string to be immutable?
// String are immutable because they are form Primitive datatype and we cannot modify it directly but we assign them new value

// Qouestion10: How do you convert a string to uppercase or lowercase in JavaScript?
// Yes we can by using toUpperCase and toLowerCase to convert stirng into upper or lower string
