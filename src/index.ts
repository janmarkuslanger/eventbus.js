import SubscriberType from './subscriber-type';
import EventType from './event-type';
import generateRandomNumber from './generate-random-number';

class EventBus {
    private subscriber: SubscriberType;

    constructor() {
        this.subscriber = {};
    }

    public subscribe(name: string, callbackFunction: Function): EventType {
        const _this = this;

        const event: EventType = {
            callback: callbackFunction,
            unsubscribe() {
                const events = _this.subscriber[name];
                const index = events.indexOf(this);
                events.splice(index, 1);
            }
        };

        if (name in this.subscriber) {
            this.subscriber[name].push(event);
            return event;
        }

        this.subscriber[name] = [event];
        return event;
    }

    public publish(name: string, ...payload: any): void {
        if (!(name in this.subscriber)) {
            return;
        }

        this.subscriber[name].forEach((event) => {
            event.callback(...payload);
        })
    }
}

export default EventBus;