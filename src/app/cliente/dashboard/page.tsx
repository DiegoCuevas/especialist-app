"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/contexts/auth-context"
import { HeaderDashboard } from "@/components/header-dashboard"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Search, Star, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { tecnicos, especialidades, distritos } from "@/lib/data"
import { ContratarModal } from "@/components/contratar-modal"

export default function ClienteDashboard() {
  const { isAuthenticated } = useAuth()
  const searchParams = useSearchParams()
  const [servicioFiltro, setServicioFiltro] = useState(searchParams.get("servicio") || "")
  const [distritoFiltro, setDistritoFiltro] = useState(searchParams.get("distrito") || "")
  const [busqueda, setBusqueda] = useState("")
  const [tecnicosFiltrados, setTecnicosFiltrados] = useState(tecnicos)
  const [error, setError] = useState("")

  // Estado para el modal de contratación
  const [modalOpen, setModalOpen] = useState(false)
  const [tecnicoSeleccionado, setTecnicoSeleccionado] = useState<number | null>(null)

  // Función para abrir el modal de contratación
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

  // Aplicar filtros cuando cambien los parámetros
  useEffect(() => {
    let resultado = [...tecnicos]

    // Filtrar por servicio
    if (servicioFiltro && servicioFiltro !== "all") {
      resultado = resultado.filter((tecnico) => tecnico.especialidad === servicioFiltro)
    }

    // Filtrar por distrito
    if (distritoFiltro && distritoFiltro !== "all") {
      resultado = resultado.filter((tecnico) => tecnico.distritos.includes(distritoFiltro))
    }

    // Filtrar por búsqueda de texto
    if (busqueda) {
      const terminoBusqueda = busqueda.toLowerCase()
      resultado = resultado.filter(
        (tecnico) =>
          tecnico.nombre.toLowerCase().includes(terminoBusqueda) ||
          tecnico.especialidadNombre.toLowerCase().includes(terminoBusqueda),
      )
    }

    setTecnicosFiltrados(resultado)
  }, [servicioFiltro, distritoFiltro, busqueda])


  return (
    <div className="min-h-screen flex flex-col">
      <HeaderDashboard />
      <main className="flex-1 bg-gray-50">
        <div className="container py-6 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#333e5d] mb-2">Encuentra especialistas disponibles</h1>
            <p className="text-gray-500">Busca por especialidad o ubicación para encontrar al especialista ideal</p>
            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  placeholder="Buscar por nombre o especialidad"
                  className="pl-9"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
              </div>
              <Select value={servicioFiltro} onValueChange={setServicioFiltro}>
                <SelectTrigger>
                  <SelectValue placeholder="Tipo de servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los servicios</SelectItem>
                  {especialidades.map((especialidad) => (
                    <SelectItem key={especialidad.value} value={especialidad.value}>
                      {especialidad.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={distritoFiltro} onValueChange={setDistritoFiltro}>
                <SelectTrigger>
                  <SelectValue placeholder="Distrito o zona" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los distritos</SelectItem>
                  {distritos.map((distrito) => (
                    <SelectItem key={distrito.value} value={distrito.value}>
                      {distrito.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* <div className="flex items-center mt-4">
              <Button
                size="sm"
                className="bg-[#007aff] hover:bg-[#0056b3]"
                onClick={() => {
                  // Aplicar filtros (ya se aplican automáticamente con useEffect)
                }}
              >
                <Search className="mr-2 h-4 w-4" /> Buscar
              </Button>
            </div> */}
          </div>

          {tecnicosFiltrados.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">No se encontraron especialistas que coincidan con tu búsqueda.</p>
              <p className="text-gray-500 mt-2">Intenta con otros filtros o una búsqueda diferente.</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tecnicosFiltrados.map((tecnico) => (
                <div key={tecnico.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                        <Image
                          src={tecnico.imagen || "/placeholder.svg"}
                          alt={tecnico.nombre}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-lg">{tecnico.nombre}</h3>
                          <Badge
                            className={`${tecnico.disponible ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"} hover:bg-green-100`}
                          >
                            {tecnico.disponible ? "Disponible" : "Ocupado"}
                          </Badge>
                        </div>
                        <p className="text-[#007aff] font-medium">{tecnico.especialidadNombre}</p>
                        <div className="flex items-center mt-1">
                          <div className="flex mr-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < tecnico.calificacion ? "fill-[#007aff] text-[#007aff]" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">({tecnico.numResenas} reseñas)</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPin className="h-3 w-3 mr-1" /> {tecnico.distritosNombre.join(", ")}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500">Tarifa por hora:</span>
                        <span className="font-bold text-[#333e5d]">S/. {tecnico.tarifaHora.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Experiencia:</span>
                        <span className="text-[#333e5d]">{tecnico.experiencia}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 flex gap-2">
                    <Link href={`/cliente/tecnico/${tecnico.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        Ver perfil
                      </Button>
                    </Link>
                    <div className="flex-1">
                      <Button
                        className="w-full bg-[#007aff] hover:bg-[#0056b3]"
                        disabled={!tecnico.disponible}
                        onClick={() => tecnico.disponible && handleContratar(tecnico.id)}
                      >
                        Contratar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Modal de contratación */}
      {tecnicoSeleccionado && (
        <ContratarModal tecnicoId={tecnicoSeleccionado} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </div>
  )
}
