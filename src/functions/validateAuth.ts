const mockEmail = 'admin@admin.com'
const mockPassword = 'Admin@123'

export function validateAuth(email: string, password: string) {
  return email === mockEmail && password === mockPassword
}
