npm install --save-dev angular-in-memory-web-api@0.16.0

### Presentation and Container Components

Scenario:
Smart Container --->  dumb course ---> dumb news letter

Issues:

1. Passing inputs from container to course just because newsletter requires it. Dumb course component
doesnt use the inputs.

2. Passing outputs from the dumb newsletter to the smart container via the dumb course. If the dumb newsletter exposes an output event, it will be visible to its immediate parent: dumb course and not to its next parent:smart container.

Solutions

1. Convert the nested child component i.e dumb news letter into a smart container component.

2. Keep the newsletter as dumb but wrap it inside a smart container component.

Smart Container --->  dumb course --->smart newsletter container ---> dumb news letter

This way the dumb newsletter can still be reused inside any other smart container component.

3. Use subjects for communication between the smart container and the dumb newsletter.


### How to approach component design ?

1. Avoid defining from the start, what  will be a component and of what type.

2. When the templates start growing bigger, we start splitting it into components. If something is used in several parts of the application,
and always triggers an action like a store dispatch, we can consider refactorting it into a smaller smart component.

3. If we later realize that, we need to present the same data like the smart component we just created, we can extract the presentation part
from it into a seperate presentation component.

4. Well Designed components can be obtained by continous refactoring, which can be done without burden using the angular CLI.

### Presentation-Container component vs Switching views using router. Which to use when ?

Use routing when :

1. User of the application saves the link on the browser and opens them later.
2. User sends another user a page link and he opens the link.

Otherwise, we go for Smart-Dumb component approach.


### Event Bus Service for component communication

Event Bus can send data between multiple components. It follows the mediator pattern. It uses rxjs subject.

The ToDoComponent emits an event whenever a todo is deleted.
The UserDetail component subscribes to the event.

In the EventService,  we have created an enum which lists the event types.

export enum Events{
  UserSelected,
  ToDoDeleted
}

Below is an interface which describes the shape of the event details.

export interface EventModel{
  name:Events,
  value?:any
}

A component can listen to an event type using the on() by passing the event type as argument
A component can emit details of an event using the emit() passing the event type and optional
event details as argument.

The component subscribing to the event must remember to unsubscribe from the subject.
Also this is a very loosely coupled technique and the subscriber has no iddea about who
has emitted the event.


### State Management Goals

As the application grows more complex and the same data is getting updated at multiple places.

1. We want a single source of truth of data.

2. Predictable state of data

3. Immutable data

4. Better debugging of state changes.

5. Min amount of code required.

6. Works with any lib/framework.


Options:

1. Service
2. ngrx
3. ngrx-data
4. Observable store
5. Akita
6. ngxs
7. Mobx

Go for Observable Store when ngrx is too much but services is not enough.







