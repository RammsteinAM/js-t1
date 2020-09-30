class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    setInterval(() => {
      this.age++;
    }, 1000);
  }
}

let persons = [];
let i = 4;
while (i > 0) {
  persons.push(
    new Person(faker.name.findName(), faker.random.number({ min: 1, max: 50 }))
  );
  i--;
}

const addToDomAndConsole = () => {
  let personsHtml = "", 
    log = "";
  persons.map(p => {
    personsHtml += `<tr class="${p.age >= 37 ? 'almostDead' : ''}">
                      <td>${p.name}</td>
                      <td>${p.age}</td>
                    </tr>`;
    if (log) log += "\n";
    log += `${p.name} ${p.age}`;
    document.getElementById('persons').innerHTML = `<table>${personsHtml}</table>`;
    console.log(log);
  })
}

addToDomAndConsole();

const checkRemoveByAge = () => {
  setInterval(() => { 
    persons = persons.filter(p => p.age < 40);
    addToDomAndConsole();
  }, 1000);
};

const addNewPerson = () => {
  setInterval(() => {
    const person = new Person(
      faker.name.findName(),
      faker.random.number({ min: 1, max: 50 })
    );
    persons.push(person);
  }, 2000);
};

checkRemoveByAge();
addNewPerson();