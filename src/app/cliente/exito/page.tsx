import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Calendar, MessageSquare, Home } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function PaginaExito() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-[#333e5d] mb-2">¡Servicio contratado exitosamente!</h1>
          <p className="text-gray-600 mb-6">
            Tu solicitud ha sido enviada a Carlos Mendoza. Recibirás una confirmación por correo electrónico con los
            detalles.
          </p>

          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="especialista"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <h3 className="font-bold">Carlos Mendoza</h3>
                <p className="text-[#007aff] text-sm">Electricista</p>
              </div>
            </div>

            <div className="space-y-2 text-left">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Fecha estimada:</span>
                <span className="font-medium">Mañana, 10:00 AM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Duración estimada:</span>
                <span className="font-medium">2 horas</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total pagado:</span>
                <span className="font-medium">S/. 110.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Método de pago:</span>
                <span className="font-medium">Tarjeta terminada en 1234</span>
              </div>
            </div>
          </div>

          <div className="grid gap-3 mb-6">
            <Button variant="outline" className="flex items-center justify-center">
              <Calendar className="mr-2 h-4 w-4" /> Ver detalles de la reserva
            </Button>
            <Button variant="outline" className="flex items-center justify-center">
              <MessageSquare className="mr-2 h-4 w-4" /> Contactar al especialista
            </Button>
          </div>

          <Link href="/cliente/dashboard">
            <Button className="w-full bg-[#007aff] hover:bg-[#0056b3]">
              <Home className="mr-2 h-4 w-4" /> Volver al inicio
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
