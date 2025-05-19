"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type User, getCurrentUser, loginUser, registerUser, logoutUser, setCurrentUser } from "@/lib/auth"

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<User | null>
  register: (userData: Omit<User, "id" | "createdAt">, password: string) => Promise<User>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // Cargar usuario al iniciar
  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window !== "undefined") {
      const currentUser = getCurrentUser()
      setUser(currentUser)
      setLoading(false)
    }
  }, [])

  // Función de login
  const login = async (email: string, password: string): Promise<User | null> => {
    try {
      const loggedUser = loginUser(email, password)
      if (loggedUser) {
        setUser(loggedUser)
        setCurrentUser(loggedUser)
        return loggedUser
      }
      return null
    } catch (error) {
      console.error("Error al iniciar sesión:", error)
      return null
    }
  }

  // Función de registro
  const register = async (userData: Omit<User, "id" | "createdAt">, password: string): Promise<User> => {
    try {
      const newUser = registerUser(userData, password)
      setUser(newUser)
      setCurrentUser(newUser)
      return newUser
    } catch (error) {
      console.error("Error al registrar usuario:", error)
      throw error
    }
  }

  // Función de logout
  const logout = () => {
    setUser(null)
    logoutUser()
  }

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider")
  }
  return context
}
