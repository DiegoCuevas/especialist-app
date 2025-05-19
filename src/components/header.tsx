"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { LogOut, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/contexts/auth-context"

export function Header() {
  const router = useRouter()
  const { user, logout, isAuthenticated } = useAuth()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-[#333e5d]">
          <span className="text-[#007aff]">Todito</span>
        </Link>

        {/* Nav y Botones */}
        {isAuthenticated ? (
          <div className="flex items-center gap-4 ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#007aff] text-white">
                    {user?.nombre.charAt(0).toUpperCase()}
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user?.nombre}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push("/cliente/dashboard")}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Mi perfil</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Cerrar sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-between">
            {/* Nav centrado */}
            <nav className="hidden md:flex gap-6 mx-auto">
              <Link href="#como-funciona" className="text-sm font-medium hover:text-[#007aff]">
                ¿Cómo funciona?
              </Link>
              <Link href="#beneficios" className="text-sm font-medium hover:text-[#007aff]">
                Beneficios
              </Link>
              <Link href="#testimonios" className="text-sm font-medium hover:text-[#007aff]">
                Testimonios
              </Link>
            </nav>

            {/* Botones */}
            <div className="hidden md:flex items-center gap-2">
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Iniciar sesión
                </Button>
              </Link>
              <Link href="/registro">
                <Button size="sm" className="bg-[#007aff] hover:bg-[#0056b3]">
                  Registrarse
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
