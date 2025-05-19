"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { CheckCircle, Home } from "lucide-react"

import { Button } from "@/components/ui/button"
import { tecnicos } from "@/lib/data"

export default function PaginaExito() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const tecnicoId = Number(searchParams.get("tecnicoId") || "0")
  const total = Number(searchParams.get("total") || "0")
  const horas = Number(searchParams.get("horas") || "0")

  // Obtener datos del técnico
  const tecnico = tecnicos.find((t) => t.id === tecnicoId)

  // Si no hay técnico o parámetros válidos, redirigir al dashboard
  useEffect(() => {
    if (!tecnico || total === 0) {
      router.push("/cliente/dashboard")
    }
  }, [tecnico, total, router])

  if (!tecnico) return null

  // Generar fecha estimada (mañana a las 10:00 AM)
  const fechaEstimada = new Date()
  fechaEstimada.setDate(fechaEstimada.getDate() + 1)
  const opciones: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }
  const fechaFormateada = fechaEstimada.toLocaleDateString("es-ES", opciones)

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
            Tu solicitud ha sido enviada a {tecnico.nombre}. Recibirás una confirmación por correo electrónico con los
            detalles.
          </p>

          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                <Image
                  src={tecnico.imagen || "/placeholder.svg"}
                  alt={tecnico.nombre}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <h3 className="font-bold">{tecnico.nombre}</h3>
                <p className="text-[#007aff] text-sm">{tecnico.especialidadNombre}</p>
              </div>
            </div>

            <div className="space-y-2 text-left">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Fecha estimada:</span>
                <span className="font-medium">{fechaFormateada}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Duración estimada:</span>
                <span className="font-medium">
                  {horas} {horas === 1 ? "hora" : "horas"}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total pagado:</span>
                <span className="font-medium">S/. {total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Método de pago:</span>
                <span className="font-medium">Tarjeta terminada en 1234</span>
              </div>
            </div>
          </div>

          {/* <div className="grid gap-3 mb-6">
            <Button variant="outline" className="flex items-center justify-center">
              <Calendar className="mr-2 h-4 w-4" /> Ver detalles de la reserva
            </Button>
            <Button variant="outline" className="flex items-center justify-center">
              <MessageSquare className="mr-2 h-4 w-4" /> Contactar al técnico
            </Button>
          </div> */}

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
