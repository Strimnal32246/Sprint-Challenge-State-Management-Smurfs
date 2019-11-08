1. What problem does the context API help solve?

It allows us to store state in context and allows access to it regardless of what componenet we are in.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions represent actions that users could potentiall do on our application. They are essential to trigger our reducers.
reducers are where the logic of our actions are. These really do the heavy lifting in our application. The store is where we can see what changed since it contains our state for our application. This state never gets mutates, so it is the source of truth.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state contains all the state in our app; whereas, the componenet state contains state locally. We would use the application state if we are planning to have many componenets that need access to different parts of state and are very nested.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   redux-thunk allows us to handle asynchronous operations inside our Action Creators. It changes our action creators to perform async API calls.

5. What is your favorite state management system you've learned and this sprint? Please explain why!I would have to say context becuase it is easier. I am starting to get used to reduxby watching videos and using it more.

