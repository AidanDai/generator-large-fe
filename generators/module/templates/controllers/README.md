# module controllers

- combination models
- every method must return a promise

example:

```javascript
// user.js
import { getUserById, getUserGroupById } from '../models/user'

export async function getUserAndUserGroupById() {
  let data = {}

  await user = getUserById()
  await userGroup = getUserGroupById()

  data = {
    user: user,
    userGroup: userGroup
  }

  return data
}
```