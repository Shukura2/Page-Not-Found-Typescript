//interfaces

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "ola",
  age: 12,
  speak(text) {
    console.log(text);
  },
  spend(amount){
    return amount
  }
};
// console.log('he owes me', me.spend(200));
// console.log('he owes me 200');

let someOne: IsPerson;
someOne = {
    name: 'shola',
    age: 30,
    speak(text) {
        console.log(text);
      },
      spend(amount){
        return amount
      }
}
// console.log(someOne.speak('nicely'));

const greetAgain = (a:IsPerson) => {
    console.log(a.name);
    
}
greetAgain(someOne)


