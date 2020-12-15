import EventType from './event-type';

interface SubscriberType {
    [name: string]: Array<EventType>;    
};

export default SubscriberType;