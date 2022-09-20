const person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
};

// some use cases: validation, formatting, notifications, or debugging.

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    /*
      Can be used as Reflect.get(obj, prop) or obj[prop]
    */
    if (!obj[prop]) {
      console.log(
        `Hmm.. this property doesn't seem to exist on the target object`
      );
    } else {
      console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
    }
  },
  set: (obj, prop, value) => {
    if (prop === "age" && typeof value !== "number") {
      console.log(`Sorry, you can only pass numeric values for age.`);
    } else if (prop === "name" && value.length < 2) {
      console.log(`You need to provide a valid name.`);
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
      Reflect.set(obj, prop, value);
    }
  },
});

personProxy.name;
personProxy.name = "Gabriel";
personProxy.name;

personProxy.nonExistentProperty;
personProxy.age = "44";
personProxy.name = "";
