"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Star, Shield, Clock, MapPin, Calendar, MessageSquare, Award } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "@/contexts/auth-context"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { tecnicos } from "@/lib/data"
import { ContratarModal } from "@/components/contratar-modal"
import { Header } from "@/components/header"


export default function TecnicoDetalle() {
  const params = useParams()
  const router = useRouter()
  const tecnicoId = Number(params.id)
  const [error, setError] = useState("")
  const { isAuthenticated } = useAuth()

  // Estado para el modal de contratación
  const [modalOpen, setModalOpen] = useState(false)
  const [tecnicoSeleccionado, setTecnicoSeleccionado] = useState<number | null>(null)

  const handleContratar = (tecnicoId: number) => {
    if (!isAuthenticated) {
      setError("Debes iniciar sesión para contratar a un especialista.")
      window.scrollTo({ top: 0, left: 0, behavior: "smooth"})
      return
    }
    setError("") // limpia cualquier error anterior
    setTecnicoSeleccionado(tecnicoId)
    setModalOpen(true)
  }
  // Buscar el técnico por ID
  const tecnico = tecnicos.find((t) => t.id === tecnicoId)

  // Si no se encuentra el técnico, redirigir al dashboard
  if (!tecnico) {
    router.push("/cliente/dashboard")
    return null
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container py-6 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/cliente/dashboard"
              className="inline-flex items-center text-sm font-medium text-[#333e5d] hover:text-[#007aff] mb-4"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Volver
            </Link>
            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex flex-col items-center">
                      <div className="h-32 w-32 rounded-full bg-gray-200 overflow-hidden mb-3">
                        <Image
                          src={tecnico.imagen || "/placeholder.svg"}
                          alt={tecnico.nombre}
                          width={128}
                          height={128}
                          className="object-cover"
                        />
                      </div>
                      <Badge
                        className={`${tecnico.disponible ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"} hover:bg-green-100 mb-2`}
                      >
                        {tecnico.disponible ? "Disponible" : "Ocupado"}
                      </Badge>
                      <div className="flex items-center mb-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < tecnico.calificacion ? "fill-[#007aff] text-[#007aff]" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">({tecnico.numResenas} reseñas)</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h1 className="text-2xl font-bold text-[#333e5d]">{tecnico.nombre}</h1>
                        <Shield className="h-5 w-5 text-[#007aff]" />
                      </div>
                      <p className="text-[#007aff] font-medium text-lg mb-4">{tecnico.especialidadNombre}</p>

                      <div className="grid gap-3 mb-6">
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2 text-gray-400" />
                          <span>Disponible de Lunes a Sábado, 8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                          <span>{tecnico.distritosNombre.join(", ")}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                          <span>Experiencia: {tecnico.experiencia}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {tecnico.servicios.slice(0, 4).map((servicio, index) => (
                          <Badge key={index} variant="outline" className="bg-gray-50">
                            {servicio}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                        <div>
                          <p className="text-sm text-gray-500">Tarifa por hora</p>
                          <p className="text-xl font-bold text-[#333e5d]">S/. {tecnico.tarifaHora.toFixed(2)}</p>
                        </div>
                        <Button
                          className="bg-[#007aff] hover:bg-[#0056b3]"
                          disabled={!tecnico.disponible}
                          onClick={() => tecnico.disponible && handleContratar(tecnico.id)}
                        >
                          Contratar ahora
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Tabs defaultValue="descripcion">
                  <TabsList className="w-full border-b rounded-none p-0">
                    <TabsTrigger
                      value="descripcion"
                      className="rounded-none flex-1 py-3 data-[state=active]:border-b-2 data-[state=active]:border-[#007aff]"
                    >
                      Descripción
                    </TabsTrigger>
                    <TabsTrigger
                      value="experiencia"
                      className="rounded-none flex-1 py-3 data-[state=active]:border-b-2 data-[state=active]:border-[#007aff]"
                    >
                      Experiencia
                    </TabsTrigger>
                    <TabsTrigger
                      value="resenas"
                      className="rounded-none flex-1 py-3 data-[state=active]:border-b-2 data-[state=active]:border-[#007aff]"
                    >
                      Reseñas
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="descripcion" className="p-6">
                    <h3 className="font-bold text-lg mb-3">Sobre mí</h3>
                    <p className="text-gray-600 mb-4">{tecnico.descripcion}</p>

                    <h3 className="font-bold text-lg mb-3 mt-6">Servicios</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {tecnico.servicios.map((servicio, index) => (
                        <li key={index}>{servicio}</li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="experiencia" className="p-6">
                    <h3 className="font-bold text-lg mb-3">Formación y Certificaciones</h3>
                    <div className="space-y-4">
                      {tecnico.formacion.map((item, index) => (
                        <div key={index} className="flex gap-3">
                          <Award className="h-5 w-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium">{item.titulo}</h4>
                            <p className="text-sm text-gray-500">{item.anio}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className="font-bold text-lg mb-3 mt-6">Experiencia Laboral</h3>
                    <div className="space-y-4">
                      {tecnico.experienciaLaboral.map((item, index) => (
                        <div key={index}>
                          <h4 className="font-medium">{item.puesto}</h4>
                          <p className="text-sm text-gray-500">{item.periodo}</p>
                          <p className="text-sm text-gray-600 mt-1">{item.descripcion}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="resenas" className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-bold text-lg">Reseñas de clientes</h3>
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < tecnico.calificacion ? "fill-[#007aff] text-[#007aff]" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-medium">{tecnico.calificacion.toFixed(1)}</span>
                        <span className="text-sm text-gray-500 ml-1">({tecnico.numResenas} reseñas)</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {tecnico.resenas.map((resena, index) => (
                        <div key={index} className={index < tecnico.resenas.length - 1 ? "border-b pb-6" : ""}>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                              <Image
                                src="/placeholder.svg?height=100&width=100"
                                alt={resena.cliente}
                                width={40}
                                height={40}
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium">{resena.cliente}</h4>
                              <div className="flex items-center">
                                <div className="flex mr-2">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-3 w-3 ${i < resena.calificacion ? "fill-[#007aff] text-[#007aff]" : "text-gray-300"}`}
                                    />
                                  ))}
                                </div>
                                <span className="text-xs text-gray-500">{resena.fecha}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600">{resena.comentario}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-4">Contactar</h3>
                  <p className="text-gray-600 mb-4">
                    ¿Tienes alguna pregunta o necesitas más información? Envía un mensaje a {tecnico.nombre} y te
                    responderá a la brevedad.
                  </p>
                  <div className="space-y-4">
                    <textarea
                      className="w-full border rounded-md p-3 h-24 text-sm"
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                    <Button className="w-full bg-[#007aff] hover:bg-[#0056b3]">
                      <MessageSquare className="mr-2 h-4 w-4" /> Enviar mensaje
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-4">Técnicos similares</h3>
                  <div className="space-y-4">
                    {tecnicos
                      .filter((t) => t.id !== tecnico.id && t.especialidad === tecnico.especialidad)
                      .slice(0, 3)
                      .map((tecnicoSimilar) => (
                        <div key={tecnicoSimilar.id} className="flex gap-3">
                          <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                            <Image
                              src={tecnicoSimilar.imagen || "/placeholder.svg"}
                              alt={tecnicoSimilar.nombre}
                              width={48}
                              height={48}
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{tecnicoSimilar.nombre}</h4>
                            <p className="text-sm text-[#007aff]">{tecnicoSimilar.especialidadNombre}</p>
                            <div className="flex items-center">
                              <div className="flex mr-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${i < tecnicoSimilar.calificacion ? "fill-[#007aff] text-[#007aff]" : "text-gray-300"}`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500">({tecnicoSimilar.numResenas})</span>
                            </div>
                          </div>
                          <Link href={`/cliente/tecnico/${tecnicoSimilar.id}`}>
                            <Button variant="outline" size="sm">
                              Ver
                            </Button>
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal de contratación */}
      {tecnicoSeleccionado && (
        <ContratarModal tecnicoId={tecnicoSeleccionado} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </div>
  )
}
