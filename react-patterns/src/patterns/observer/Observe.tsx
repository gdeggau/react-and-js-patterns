import { ToastContainer, toast } from "react-toastify";
import { observable } from "./observable";
import { fromEvent, merge } from "rxjs";
import { sample, mapTo } from "rxjs/operators";

merge(
  fromEvent(document, "mousedown").pipe(mapTo(false)),
  fromEvent(document, "mousemove").pipe(mapTo(true))
)
  .pipe(sample(fromEvent(document, "mouseup")))
  .subscribe((isDragging) => {
    console.log("Were you dragging?", isDragging);
  });

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
    <div>
      <button onClick={handleClick1}>Button 1</button>
      <button onClick={handleClick2}>Button 2</button>
      <div>Click or drag anywhere and check the console!</div>
      <ToastContainer />
    </div>
  );
};
