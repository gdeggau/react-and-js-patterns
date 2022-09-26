import { ToastContainer, toast } from "react-toastify";
import { observable } from "./observable";

function logger(data: string) {
  console.log(`${Date.now()} ${data}`);
}

function toastify(data: string) {
  toast(data);
}

observable.subscribe(logger);
observable.subscribe(toastify);

export const Observe = () => {
  function handleClick1() {
    observable.notify("Clicked 1!");
  }

  function handleClick2() {
    observable.notify("Clicked 2!");
  }

  return (
    <div className="App">
      <button onClick={handleClick1}>Button 1</button>
      <button onClick={handleClick2}>Button 2</button>
      <ToastContainer />
    </div>
  );
};
