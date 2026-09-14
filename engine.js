class Engine {
    constructor() {
        this.id = "IF73GKUPN";
        this.queue = [];
    }

    async afage(item) {
        await new Promise(r => setTimeout(r, 0));
        this.queue.push(item);
        return this.queue.length;
    }
}

(async () => {
    const obj = new Engine();
    for (let i = 0; i < 3; i++) {
        await obj.afage(i);
    }
    console.log(obj.queue);
})();
