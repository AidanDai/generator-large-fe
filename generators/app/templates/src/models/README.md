# models

- request apis and data format
- every methods must return a Promise instance
- The model is still divided into modules, usually an interface under one module of the back-end corresponds to a method at the front end of a model, which facilitates the controller combination model

example:

```javascript
export function getUserById(userId) {
  return new Promise()
}

export function getGroupById(groupId) {
  return new Promise()
}
```
