const perspective = require("@jpmorganchase/perspective").default;

const worker = perspective.worker();

const table = worker.table([{ a: 1, b: 3 },], { index: "a" });

const view = table.view();

view.to_json().then(console.log);

table.update([
    { a: 1, b: 1 },
    { a: 2, b: 3 },
    { a: 3, b: 1 },
    { a: 4, b: 2 },
]);

view.to_json().then(console.log);
