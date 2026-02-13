# Example usage     
```index.html      
<!DOCTYPE html>
<script type="module" src="index.js"></script>
<div id="Header">
    <h1>
        Counter!
    </h1>
</div>
<div id="count-body">
    <p id="p"></p>
    <button id="b1">
        +1
    </button>
    <button id="b2">
        *2
    </button>
    <button id="b3">
        reset!
    </button>
</div>
</div>
```
```index.js
import { state, effect, get, set } from "./src/signals.js";

document.addEventListener('DOMContentLoaded', () => {
    const p = document.querySelector("#p")
    const b1 = document.querySelector('#b1');
    const b2 = document.querySelector('#b2');
    const b3 = document.querySelector('#b3');


    let count = state(0);
    effect(() => p.textContent = get(count));
    b1.addEventListener('click', () => set(count, get(count) + 1));
    b2.addEventListener('click', () => set(count, get(count) * 2));
    b3.addEventListener('click', () => set(count, 0));
})
```
This is a basic counter with +1, double and reset!
