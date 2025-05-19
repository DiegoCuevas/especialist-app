"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { tecnicos } from "@/lib/data"

interface ContratarModalProps {
  tecnicoId: number
  isOpen: boolean
  onClose: () => void
}

export function ContratarModal({ tecnicoId, isOpen, onClose }: ContratarModalProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    direccion: "",
    descripcion: "",
    horas: "2", // Valor predeterminado de 2 horas
  })
  const [enviando, setEnviando] = useState(false)

  const tecnico = tecnicos.find((t) => t.id === tecnicoId)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnviando(true)

    // Simulamos una petición a un servidor
    setTimeout(() => {
      setEnviando(false)
      onClose()

      // Codificamos los datos para pasarlos en la URL
      const params = new URLSearchParams({
        tecnicoId: tecnicoId.toString(),
        nombre: formData.nombre,
        horas: formData.horas,
      }).toString()

      // Redirigimos a la página de pago con los parámetros
      router.push(`/cliente/pago?${params}`)
    }, 1000)
  }

  if (!tecnico) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Contratar a {tecnico.nombre}</DialogTitle>
          <DialogDescription>
            Completa el formulario para solicitar los servicios de {tecnico.especialidadNombre.toLowerCase()}.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre completo</Label>
              <Input id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono</Label>
              <Input id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="direccion">Dirección</Label>
            <Input id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="horas">Horas estimadas</Label>
              <select
                id="horas"
                name="horas"
                value={formData.horas}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                required
              >
                <option value="1">1 hora</option>
                <option value="2">2 horas</option>
                <option value="3">3 horas</option>
                <option value="4">4 horas</option>
                <option value="5">5 horas</option>
                <option value="6">6 horas</option>
                <option value="8">8 horas</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label>Tarifa por hora</Label>
              <div className="flex h-10 items-center px-3 border rounded-md bg-gray-50 text-gray-700">
                S/. {tecnico.tarifaHora.toFixed(2)}
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="descripcion">Descripción del servicio</Label>
            <Textarea
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              placeholder="Describe brevemente qué necesitas"
              required
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" disabled={enviando}>
              {enviando ? "Enviando..." : "Continuar al pago"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
