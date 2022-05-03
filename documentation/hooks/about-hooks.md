# About Hooks

- You can use hooks inside function component, not class component
- Every time the component runs, the hooks must run in the exact order
- Never call Hooks from inside a loop, condition or nested function
- Hooks should sit at the top-level of your component
- Only call Hooks from React functional components
- Never call a Hook from a regular function
- Hooks can call other Hooks
- Hooks were added to React in version 16.8.
- Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
- Hooks allow us to `hook` into React features such as state and lifecycle methods.

## Hooks Rules

- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Hooks cannot be conditional
