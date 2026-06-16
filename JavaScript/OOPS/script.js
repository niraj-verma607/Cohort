//OOPS

//Classes (Blueprint kisi bhi chiz ko banane ka)

//Constructor(automatic chalne wala function)

class BiscuitMaker1 {
  constructor() {
    this.name = "parleG";
    this.price = 5;
  }
}

let biscuit = new BiscuitMaker1();

// Classes banate hai taki har baar ek naya object mil sake
// Classes object ki factory hai
// Har baar new word ke saath class run karne pe ek naya object milega

class BiscuitMaker {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

let biscuit2 = new BiscuitMaker("Oreo", 10);
let biscuit3 = new BiscuitMaker("ParleG", 5);

class AlooChaat {
  constructor() {
    this.price = 55;
    this.oil = "5ml";
    this.oilBrand = "Saffola";
    this.masaale = ["dhaniya", "pudina", "mirch"];
  }

  pack() {
    console.log("Aloo Chaat packed");
  }

  unpack() {
    console.log("Aloo Chaat Unpacked");
  }
}

let alooChat1 = new AlooChaat();
alooChat1.pack();
alooChat1.unpack();

class Kitaab {
  constructor(bookName, price, authorName, pageColor) {
    this.name = bookName;
    this.price = price;
    this.author = authorName;
    this.color = pageColor;
  }

  pannaPalto() {
    console.log("Page Palto");
  }

  bookmarkLagaoo() {
    console.log("Bookmark lagaoo");
  }

  padhlo() {
    console.log("Padhlo");
  }
}

let chem = new Kitaab("Chemistry", 200, "Niraj", "White");
let phy = new Kitaab("Physics", 250, "Newton", "White");
let math = new Kitaab("Math", 500, "KC Sinha", "White");

class User {
  constructor() {
    this.username = "niraj";
    this.age = 20;
    this.email = "try@try.com";
  }

  khaanaKhaao() {
    console.log("Khaana Khaoo");
  }

  saansLo() {
    console.log("Saans Loooo");
  }
}

let user1 = new User();

//Prototypes

// this => this ki value likhte waqt nahi chalte waqt decide hoti hai

class Human {
  constructor() {
    this.name = "Niraj";
    this.age = 20;
  }
}

Human.prototype.saansLo = function () {
  console.log("Saans Lo");
};
Human.prototype.khaanaKhaao = function () {
  console.log("Khaana Khaao");
};

let h1 = new Human();
let h2 = new Human();
