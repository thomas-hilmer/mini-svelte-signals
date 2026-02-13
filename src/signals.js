let activeEffect = undefined;

export function state(value) {
    const signal = { value, listeners: new Set([]) }
    return signal
}

export function effect(handler) {
    activeEffect = handler;
    handler();
    activeEffect = undefined;
}

export function derived(handler) {
    let value = state(handler());
    effect(() => set(value, handler()));
    return value;
}

export function get(signal) {
    if (activeEffect) signal.listeners.add(activeEffect);
    return signal.value;
};

export function set(signal, newValue) {
    signal.value = newValue;
    signal.listeners.forEach(effect => effect());
}
