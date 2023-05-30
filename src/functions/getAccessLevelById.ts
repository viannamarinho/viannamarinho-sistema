import { accessLevel } from '@/data/usersData'

export function getAccessLevelById(userAccessId: string) {
  const access = accessLevel.find(
    (level) => level.accessLevelId === userAccessId
  )
  return access
}
