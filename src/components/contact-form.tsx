"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Validación básica
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setStatus("error")
      setErrorMessage("Por favor completa todos los campos requeridos.")
      return
    }

    // Simulamos el envío del formulario
    setTimeout(() => {
      try {
        // Guardar en localStorage para simular persistencia
        const comments = JSON.parse(localStorage.getItem("contactComments") || "[]")
        comments.push({
          ...formData,
          id: Date.now(),
          fecha: new Date().toISOString(),
        })
        localStorage.setItem("contactComments", JSON.stringify(comments))

        // Resetear el formulario
        setFormData({
          nombre: "",
          email: "",
          asunto: "",
          mensaje: "",
        })
        setStatus("success")

        // Después de 3 segundos, volver al estado inicial
        setTimeout(() => {
          setStatus("idle")
        }, 3000)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setStatus("error")
        setErrorMessage("Ocurrió un error al enviar tu mensaje. Por favor intenta nuevamente.")
      }
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "error" && (
        <Alert variant="destructive">
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}

      {status === "success" && (
        <Alert className="bg-green-50 text-green-800 border-green-200">
          <AlertDescription>¡Gracias por tu mensaje! Te responderemos a la brevedad.</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nombre">
            Nombre <span className="text-red-500">*</span>
          </Label>
          <Input
            id="nombre"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">
            Correo electrónico <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="asunto">Asunto</Label>
        <Input
          id="asunto"
          name="asunto"
          placeholder="Asunto de tu mensaje"
          value={formData.asunto}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="mensaje">
          Mensaje <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="mensaje"
          name="mensaje"
          placeholder="Escribe tu mensaje aquí..."
          className="min-h-[120px]"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />
      </div>
      <Button
        type="submit"
        className="bg-[#007aff] hover:bg-[#0056b3] w-full md:w-auto"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          "Enviando..."
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Enviar mensaje
          </>
        )}
      </Button>
    </form>
  )
}

