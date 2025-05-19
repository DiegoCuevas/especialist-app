// Tipos para los datos de usuario
export interface User {
  id: string
  nombre: string
  email: string
  telefono: string
  distrito: string
  direccion?: string
  tipo: "cliente" | "tecnico"
  createdAt: string
}

// Función para generar un ID único
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

// Función para guardar un usuario en localStorage
export const saveUser = (user: User): void => {
  // Obtener usuarios existentes
  const users = getUsers()

  // Verificar si el email ya existe
  const existingUser = users.find((u) => u.email === user.email)
  if (existingUser) {
    throw new Error("El correo electrónico ya está registrado")
  }

  // Añadir el nuevo usuario
  users.push(user)

  // Guardar en localStorage
  localStorage.setItem("users", JSON.stringify(users))
}

// Función para obtener todos los usuarios
export const getUsers = (): User[] => {
  const usersJson = localStorage.getItem("users")
  return usersJson ? JSON.parse(usersJson) : []
}

// Función para autenticar un usuario
export const loginUser = (email: string, password: string): User | null => {
  // En un sistema real, las contraseñas estarían hasheadas
  // Para este ejemplo, usamos un localStorage separado para las contraseñas
  const passwordsJson = localStorage.getItem("passwords")
  const passwords = passwordsJson ? JSON.parse(passwordsJson) : {}

  // Verificar si existe la contraseña para este email
  if (!passwords[email] || passwords[email] !== password) {
    return null
  }

  // Buscar el usuario
  const users = getUsers()
  return users.find((user) => user.email === email) || null
}

// Función para registrar un nuevo usuario
export const registerUser = (userData: Omit<User, "id" | "createdAt">, password: string): User => {
  // Crear el nuevo usuario
  const newUser: User = {
    ...userData,
    id: generateId(),
    createdAt: new Date().toISOString(),
  }

  // Guardar el usuario
  saveUser(newUser)

  // Guardar la contraseña (en un sistema real, estaría hasheada)
  const passwordsJson = localStorage.getItem("passwords")
  const passwords = passwordsJson ? JSON.parse(passwordsJson) : {}
  passwords[newUser.email] = password
  localStorage.setItem("passwords", JSON.stringify(passwords))

  return newUser
}

// Función para guardar el usuario actual en sesión
export const setCurrentUser = (user: User | null): void => {
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user))
  } else {
    localStorage.removeItem("currentUser")
  }
}

// Función para obtener el usuario actual
export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem("currentUser")
  return userJson ? JSON.parse(userJson) : null
}

// Función para cerrar sesión
export const logoutUser = (): void => {
  localStorage.removeItem("currentUser")
}
