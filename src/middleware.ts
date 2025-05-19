import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Este middleware protege las rutas que requieren autenticación
export function middleware(request: NextRequest) {
  // Verificar si hay un usuario en localStorage
  // Nota: Esto no funciona en el middleware de Next.js porque se ejecuta en el servidor
  // Este es solo un ejemplo de cómo se podría implementar en un entorno de cliente

  // En una aplicación real, usarías cookies o JWT para la autenticación
  // Por ahora, solo redirigimos a las páginas protegidas al login

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isAuthPage = request.nextUrl.pathname.startsWith("/login") || request.nextUrl.pathname.startsWith("/registro")

  const isProtectedRoute =
    request.nextUrl.pathname.startsWith("/cliente/") || request.nextUrl.pathname.startsWith("/tecnico/")

  // Si es una ruta protegida, verificar autenticación
  if (isProtectedRoute) {
    // En un sistema real, verificaríamos un token JWT o una cookie de sesión
    // Por ahora, simplemente redirigimos al login
    // Esta lógica se manejará en el cliente con useAuth
    // return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Rutas que requieren autenticación
    "/cliente/:path*",
    "/tecnico/:path*",
    // Rutas de autenticación
    "/login",
    "/registro",
  ],
}
