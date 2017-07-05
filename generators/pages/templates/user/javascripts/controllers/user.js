import { getUserById, getUserGroupById } from '../models/user'

export async function getUserAndUserTopicById() {
  let data = {}

  await user = getUserById()
  await userGroup = getUserGroupById()

  data = {
    user: user,
    userGroup: userGroup
  }

  return data
}
