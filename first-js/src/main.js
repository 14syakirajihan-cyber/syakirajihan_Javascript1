//JavaScrip --> Programming language
/*
Programming language
1. input & output
2.variable and data type
3.condition(if,else)
4. looping(pengulangan)
5.function
*/

//output
//1. using console.log()
console.log("Hello world!");
console.log("my name is syakira");
console.log(5+4);

//2.alert()
alert("welcome to my website")

//3. document
document.write()

//4. using innerHTML
//document.getElementByID("id_name").innerHTML="text";
document.getElementById("first").innerHTML="My Name Is Syakira";

//variable --> to store data

//let
let name="syakir";
name="syakira jihan";
console.log(name)
let a = 4;
let b = 3;
let c = a+b;
let d = a*b;
console.log(a+b);
console.log(c);
console.log(c+d);
let address= "solo";
console.log("my name is " + name +" i am from "+ address);

let _oke1 = 8;
let OKE = 7;
console.log(_oke1);
console.log(OKE);

const school="SMA ABBS SKA"
console.log(school);

/*Operator Aritmatika
penjumlahan (+)
pengurangan (-)
perkalian (*)
pembagisn (/)
modulus (%)
perpangkatan (**)
*/

let number1 = 100;
let number2 = 250;
console.log(number1+number2);
console.log(number1-number2);
console.log(number1*number2);
console.log(number1/number2);
console.log(number1%number2);
console.log(number1 ** 2);

//calculator BMI

//variable= let, var, const
let angka = 5;
angka=6;
console.log(angka);

var angka1 = 5;
var angka1 = 6;
console.log(angka1);

const angka2 = 5;
//angka2 = 6; (tidak boleh) x
console.log(angka2)
//const tidak bisa diubah nilainya(tetap)

/*Data Type
1. String = character --> using ""/''
2. number (integer, float)
    -    integer = bilangan bulat
    -    float = bilangan pecahan
3. Boolean = true, false
*/
let data = "SMA ABBS SURAKARTA"; //string
let data1 = "100"; //strig
let data3 = 50; //integer
let data4 =25.25; //float
let data5 = false; //boolean

/*Comparison Operator --> the output of comparison operator are true 
- Equal (==)
- Nor Equal (!=)
- Greater than (>)
- greather than or equal (>=)
- less than (<)
- less than or equal (<=)
*/
//example
let x = 5;
console.log(x == 5); //true
console.log(x != 5); //false
console.log(x > 10); //false
console.log(x >= 10); //false
console.log(x < 10); //true
console.log(x <= 10); //true

/*Logical Operators
- and (&&) = semua kodisi harus bernilai true
- or (!!) = paling tidak ada 1 kondisi yang bernilai true
- not (!) = kebalikan dari kondisinya
*/

/*EXAMPLE
1.AND
    A && B --> result
    1 && 1 --> true
    1 && 0 --> false
    0 && 1 --> false
    0 && 0 --> false

2.or
    A !! B --> result
    1 !! 1 --> true
    1 !! 0 --> true
    0 !! 1 --> true
    0 !! ) --> false
*/

//condition

/*1. if (1 condition)
    if (condition){
        action;
    }/
*/

let time = 6;
if (time <= 6){
    console.log("Good Morning");
}

/*2. if (2 condition)
    if (condition){
        action 1;
    }
    else{
        action 2;
    }
*/

let time1 = 5;
if (time1 <= 6){
    console.log("Good Morning");
}
else{
    console.log("Good Bye");
}

/*kondisi
1. jika hari ini hujan, maka membawa payung.
2. jika hari ini tidak hujan, maka tidak membawa payung.
*/