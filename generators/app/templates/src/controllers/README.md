# controllers

- combination (every method must use async and await) method of model

example:

```javascript
import { getUserById, getGroupById } from '..'

export async function getUserAndGroupById(userId, groupId) {
  let data = {}

  try {
    await data.user = getUserById(userId)
    await data.group = getGroupById(groupId)
  } catch (error) {
    // Error tracking
  }

  return data
}
```