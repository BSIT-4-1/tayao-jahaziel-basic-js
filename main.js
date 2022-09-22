console.log("Hello World!");

//console.error()
//console.table()
//console.warn()
//console.time()
//console.timeEnd()

let name = "Lee";
let age = 22;
let isSingle = false;
let hobby =["watching anime","playing basketball","Playing video games"];
let jsonObject ={ name: name, age: age, isSingle: isSingle, hobby: hobby};
let run = function(){
    console.log(name + "is running,");
}
console.log("My name is" + name, 
"My age is " + age,
 "Am I taken?" + isSingle, 
  "My Hobbies are" + hobby
  );
  console.log(jsonObject);

  let n = 5;
// Upside pyramid
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(' ')
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    process.stdout.write('*')
  }
  console.log();
}

// downside pyramid
for (let i = 1; i <= n - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
     process.stdout.write(' ');
  }
  // printing star
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    process.stdout.write('*');
  }
  console.log();
}