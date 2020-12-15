class EventBus {
    private subscriber: Array<Function>;

    constructor() {
        this.subscriber = [];
    }

    public subscribe(name: string, callbackFunction: Function): void {
        if (name in this.subscriber) {
            this.subscriber[name].push(callbackFunction);
            return;
        }

        this.subscriber[name] = [callbackFunction];
    }

    public publish(name: string, ...payload: any): void {
        if (!(name in this.subscriber)) {
            return;
        }

        this.subscriber[name].forEach((callbackFunction) => {
            callbackFunction(payload);
        })
    }
}

export default EventBus;