"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { especialidades, distritos } from "@/lib/data"

export function SearchForm() {
  const router = useRouter()
  const [servicio, setServicio] = useState("")
  const [distrito, setDistrito] = useState("")

  const handleSearch = () => {
    // Construir la URL con los parámetros de búsqueda
    const params = new URLSearchParams()
    if (servicio) params.append("servicio", servicio)
    if (distrito) params.append("distrito", distrito)
    console.log(servicio)
    // Redirigir a la página de resultados con los parámetros
    router.push(`/cliente/dashboard?${params.toString()}`)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Busca un especialista ahora</h2>
      <div className="space-y-3">
        <Select value={servicio} onValueChange={setServicio}>
          <SelectTrigger className="w-full bg-white/20 cursor-pointer">
            <SelectValue placeholder="Tipo de servicio" />
          </SelectTrigger>
          <SelectContent>
            {especialidades.map((especialidad) => (
              <SelectItem key={especialidad.value} value={especialidad.value} className="cursor-pointer">
                {especialidad.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={distrito} onValueChange={setDistrito}>
          <SelectTrigger className="w-full bg-white/20 cursor-pointer">
            <SelectValue placeholder="Distrito o zona" />
          </SelectTrigger>
          <SelectContent>
            {distritos.map((distrito) => (
              <SelectItem key={distrito.value} value={distrito.value} className="cursor-pointer">
                {distrito.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button className="w-full bg-[#007aff] hover:bg-[#0056b3] cursor-pointer" onClick={handleSearch}>
          <Search className="mr-2 h-4 w-4" /> Buscar especialistas
        </Button>
      </div>
    </div>
  )
}
