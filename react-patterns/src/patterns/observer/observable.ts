type Observer = (data: string) => void;

class Observable {
  observers: Observer[];
  constructor() {
    this.observers = [];
  }

  subscribe(func: Observer) {
    this.observers.push(func);
  }

  unsubscribe(func: Observer) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify(data: string) {
    this.observers.forEach((observer) => observer(data));
  }
}

export const observable = new Observable();
