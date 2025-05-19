import Link from "next/link"
import { CheckCircle, Home } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function TecnicoGracias() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-[#333e5d] mb-2">¡Gracias por registrarte!</h1>
          <p className="text-gray-600 mb-6">
            Tu cuenta está en revisión y será aprobada pronto. Te notificaremos por correo electrónico cuando tu perfil
            esté activo.
          </p>

          <div className="bg-blue-50 p-4 rounded-md mb-6 text-left">
            <h3 className="font-medium text-blue-800 mb-2">¿Qué sigue?</h3>
            <ol className="list-decimal list-inside text-sm text-blue-700 space-y-2">
              <li>Nuestro equipo revisará tu información y documentos</li>
              <li>Podríamos contactarte para verificar algunos datos</li>
              <li>Una vez aprobado, recibirás un correo de confirmación</li>
              <li>Podrás acceder a tu cuenta y comenzar a recibir solicitudes</li>
            </ol>
          </div>

          <div className="grid gap-3">
            <Link href="/">
              <Button className="w-full bg-[#007aff] hover:bg-[#0056b3]">
                <Home className="mr-2 h-4 w-4" /> Volver al inicio
              </Button>
            </Link>
            <Button variant="outline" className="w-full">
              Explorar como visitante
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
