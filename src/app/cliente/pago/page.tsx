"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft, CreditCard, CheckCircle, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { tecnicos } from "@/lib/data"

export default function PaginaPago() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const tecnicoId = Number(searchParams.get("tecnicoId") || "0")
  const nombreCliente = searchParams.get("nombre") || ""
  const horasEstimadas = Number(searchParams.get("horas") || "2")

  const [procesando, setProcesando] = useState(false)
  const [metodoPago, setMetodoPago] = useState("tarjeta")
  const [formData, setFormData] = useState({
    titular: "",
    numero: "",
    expiracion: "",
    cvv: "",
  })

  // Obtener datos del técnico
  const tecnico = tecnicos.find((t) => t.id === tecnicoId)

  // Si no hay técnico o parámetros válidos, redirigir al dashboard
  useEffect(() => {
    if (!tecnico || !nombreCliente) {
      router.push("/cliente/dashboard")
    }
  }, [tecnico, nombreCliente, router])

  if (!tecnico) return null

  // Calcular costos
  const subtotal = tecnico.tarifaHora * horasEstimadas
  const comision = subtotal * 0.1 // 10% de comisión
  const total = subtotal + comision

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleMetodoPagoChange = (value: string) => {
    setMetodoPago(value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setProcesando(true)

    // Simulamos el procesamiento del pago
    setTimeout(() => {
      setProcesando(false)

      // Redirigimos a la página de éxito con los parámetros
      const params = new URLSearchParams({
        tecnicoId: tecnicoId.toString(),
        total: total.toString(),
        horas: horasEstimadas.toString(),
      }).toString()

      router.push(`/cliente/exito?${params}`)
    }, 2000)
  }

  const handleConfirmarYape = () => {
    setProcesando(true)

    // Simulamos el procesamiento del pago con Yape
    setTimeout(() => {
      setProcesando(false)

      // Redirigimos a la página de éxito con los parámetros
      const params = new URLSearchParams({
        tecnicoId: tecnicoId.toString(),
        total: total.toString(),
        horas: horasEstimadas.toString(),
        metodoPago: "yape",
      }).toString()

      router.push(`/cliente/exito?${params}`)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container py-4">
        <Link
          href="/cliente/dashboard"
          className="inline-flex items-center text-sm font-medium text-[#333e5d] hover:text-[#007aff]"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Volver al dashboard
        </Link>
      </div>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <h1 className="text-2xl font-bold text-[#333e5d] mb-6 text-center">Confirmar contratación</h1>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Detalles del servicio</CardTitle>
                <CardDescription>Información del técnico y servicio a contratar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 pb-4 border-b">
                  <div className="h-16 w-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <Image
                      src={tecnico.imagen || "/placeholder.svg"}
                      alt={tecnico.nombre}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{tecnico.nombre}</h3>
                    <p className="text-[#007aff]">{tecnico.especialidadNombre}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{tecnico.distritosNombre.join(", ")}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cliente:</span>
                    <span className="font-medium">{nombreCliente}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tarifa por hora:</span>
                    <span className="font-medium">S/. {tecnico.tarifaHora.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Horas estimadas:</span>
                    <span className="font-medium">{horasEstimadas}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">S/. {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Comisión de servicio (10%):</span>
                    <span className="font-medium">S/. {comision.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t">
                    <span className="font-bold">Total a pagar:</span>
                    <span className="font-bold text-[#333e5d]">S/. {total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-md text-sm text-blue-800">
                  <p className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-blue-600" />
                    <span>
                      El pago se realizará de forma segura a través de nuestra plataforma. El técnico recibirá el pago
                      una vez que confirmes que el servicio ha sido completado satisfactoriamente.
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Información de pago</CardTitle>
                <CardDescription>Selecciona tu método de pago preferido</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  defaultValue="tarjeta"
                  value={metodoPago}
                  onValueChange={handleMetodoPagoChange}
                  className="mb-6"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="tarjeta" id="tarjeta" />
                    <Label htmlFor="tarjeta" className="flex items-center">
                      <CreditCard className="h-4 w-4 mr-2 text-gray-500" />
                      Tarjeta de crédito o débito
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yape" id="yape" />
                    <Label htmlFor="yape" className="flex items-center">
                      <Smartphone className="h-4 w-4 mr-2 text-gray-500" />
                      Yape
                    </Label>
                  </div>
                </RadioGroup>

                {metodoPago === "tarjeta" ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="titular">Nombre del titular</Label>
                      <Input
                        id="titular"
                        name="titular"
                        value={formData.titular}
                        onChange={handleChange}
                        placeholder="Como aparece en la tarjeta"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="numero">Número de tarjeta</Label>
                      <Input
                        id="numero"
                        name="numero"
                        value={formData.numero}
                        onChange={handleChange}
                        placeholder="0000 0000 0000 0000"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiracion">Fecha de expiración</Label>
                        <Input
                          id="expiracion"
                          name="expiracion"
                          value={formData.expiracion}
                          onChange={handleChange}
                          placeholder="MM/AA"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">Código de seguridad (CVV)</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>

                    <CardFooter className="flex flex-col gap-4 px-0 pt-4">
                      <Button type="submit" className="w-full bg-[#007aff] hover:bg-[#0056b3]" disabled={procesando}>
                        {procesando ? "Procesando pago..." : `Pagar S/. ${total.toFixed(2)}`}
                      </Button>
                      <p className="text-xs text-gray-500 text-center">
                        Al hacer clic en &quot;Confirmar pago&quot;, aceptas nuestros{" "}
                        <Link href="#" className="text-[#007aff] hover:underline">
                          términos y condiciones
                        </Link>{" "}
                        y{" "}
                        <Link href="#" className="text-[#007aff] hover:underline">
                          política de privacidad
                        </Link>
                        .
                      </p>
                    </CardFooter>
                  </form>
                ) : (
                  <div className="space-y-6">
                    <div className="bg-purple-50 p-4 rounded-md">
                      <div className="text-center mb-4">
                        <h3 className="font-medium text-purple-800">Paga con Yape</h3>
                        <p className="text-sm text-purple-700">Escanea el código QR con la app de Yape</p>
                      </div>

                      <div className="flex justify-center mb-4">
                        <div className="bg-white p-2 rounded-md border border-purple-200">
                          <Image
                            src="/codigo-qr.jpeg"
                            alt="Código QR Yape"
                            width={200}
                            height={200}
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <div className="text-center text-sm text-purple-700 mb-4">
                        <p className="font-medium">Monto a pagar: S/. {total.toFixed(2)}</p>
                        <p>Envía el pago a nombre de &quot;Todito&quot;</p>
                      </div>

                      <Button
                        onClick={handleConfirmarYape}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                        disabled={procesando}
                      >
                        {procesando ? "Verificando pago..." : "He realizado el pago"}
                      </Button>
                    </div>

                    <div className="text-center text-sm text-gray-500">
                      <p>Una vez realizado el pago, haz clic en &quot;He realizado el pago&quot; para confirmar tu reserva.</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
