# Exercise: TodoList using React - Redux Toolkit Query

## Goal

- We start from an already running React Todolist POC running locally
- Now we want to be able to fetch tasks online to exercise ourselves with RTK Query

## Scenario
1. Fetch Data as if Todolist infos were online
2. Update TodoList with the tasks we fetched
3. Add/Delete tasks 
4. Update todolist for added/done/undone/deleted tasks

Fake tasks are provided by [jsonplaceholder](https://jsonplaceholder.typicode.com)

```javascript
// example from jsonplaceholder 
fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then((response) => response.json())
    .then((json) => console.log(json));
```

## Links

[RTK-Query tutorial doc](https://redux-toolkit.js.org/tutorials/rtk-query)
