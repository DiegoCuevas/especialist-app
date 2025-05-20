import Link from "next/link"
import { Search, PenToolIcon as Tools } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ElegirRegistro() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="container py-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-[#333e5d]">
          <span className="text-[#007aff]">Todito</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-[#333e5d] mb-3">¿Cómo quieres usar Todito?</h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Elige la opción que mejor se adapte a tus necesidades para continuar con el proceso de registro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Opción para clientes */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 flex flex-col items-center text-center h-full">
                <div className="h-20 w-20 rounded-full bg-[#007aff]/10 flex items-center justify-center mb-6">
                  <Search className="h-10 w-10 text-[#007aff]" />
                </div>
                <h2 className="text-xl font-bold text-[#333e5d] mb-3">Quiero encontrar especialistas</h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  Regístrate como cliente para encontrar especialistas confiables que solucionen los problemas de tu hogar.
                </p>
                <Link href="/cliente/registro" className="w-full">
                  <Button className="w-full bg-[#007aff] hover:bg-[#0056b3]">Registrarme como cliente</Button>
                </Link>
              </div>
            </div>

            {/* Opción para técnicos */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 flex flex-col items-center text-center h-full">
                <div className="h-20 w-20 rounded-full bg-[#007aff]/10 flex items-center justify-center mb-6">
                  <Tools className="h-10 w-10 text-[#007aff]" />
                </div>
                <h2 className="text-xl font-bold text-[#333e5d] mb-3">Quiero ofrecer mis servicios</h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  Regístrate como especialista para ofrecer tus servicios y conectar con clientes en tu zona.
                </p>
                <Link href="/tecnico/registro" className="w-full">
                  <Button className="w-full bg-[#007aff] hover:bg-[#0056b3]">Registrarme como especialista</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/login" className="text-[#007aff] hover:underline">
                Iniciar sesión
              </Link>
            </p>
          </div>
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Todito. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
