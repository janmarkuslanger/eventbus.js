# eventbus.js
A dead simple event bus written in typescript. 

## Example

``` javascript
import EventBus from '@janmarkuslanger/eventbus';

// create event bus instance
const MyEventBus = new EventBus();

// subscribe to a specific event
MyEventBus.subscribe('after-log-in', (name, email) => {
    console.log(`${name} is logged in with email ${email}`); // Foo is logged in
});

// ...

// for example if user is logged in publish the event
MyEventBus.publish('after-log-in', 'Foo', 'bar@gmail.com');

```

## API 

**EventBus**

The EventBus class handles everything. 
You need to create an instance to subscribe or publish events. 

``` javascript
const MyEventBus = new EventBus()
```

### API - subscribe

Subscribe to a specific event.

``` javascript
EventBus.subscribe(name, callback)
```

@param **name**:  Name of the event you want to subscribe
@param **callback**:  Function that gets called when the event gets published
@returns Returns an object with method `unpublish`


### API - publish 

Dispatch a specific event.

``` javascript
EventBus.publish(name, ...payload)
```

**name**: Name of the published event
**payload** Can be anything and as much arguments you want to add as payload


### API - unsubscribe

Unsubscribe from a specific event. 

Subscribe will return an Object of type EventType which holds the unsubscribe method. 
So you only need to call that method.

``` javascript
// now i want to listen 
const myEvent = MyEventBus.subscribe('after-log-in', (name, email) => {
    console.log(`${name} is logged in with email ${email}`); // Foo is logged in
});

// ...

// now i dont want to listen anymore
myEvent.unsubscribe()

```






