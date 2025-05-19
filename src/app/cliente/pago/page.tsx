import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CreditCard, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function PaginaPago() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container py-4">
        <Link
          href="/cliente/tecnico/1"
          className="inline-flex items-center text-sm font-medium text-[#333e5d] hover:text-[#007aff]"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Volver al perfil del especialista
        </Link>
      </div>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <h1 className="text-2xl font-bold text-[#333e5d] mb-6 text-center">Confirmar contratación</h1>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Detalles del servicio</CardTitle>
                <CardDescription>Información del especialista y servicio a contratar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 pb-4 border-b">
                  <div className="h-16 w-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="especialista"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Carlos Mendoza</h3>
                    <p className="text-[#007aff]">Electricista</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>Miraflores, San Isidro</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tarifa por hora:</span>
                    <span className="font-medium">S/. 50.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Horas estimadas:</span>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">S/. 100.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Comisión de servicio:</span>
                    <span className="font-medium">S/. 10.00</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t">
                    <span className="font-bold">Total a pagar:</span>
                    <span className="font-bold text-[#333e5d]">S/. 110.00</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-md text-sm text-blue-800">
                  <p className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-blue-600" />
                    <span>
                      El pago se realizará de forma segura a través de nuestra plataforma. El especialista recibirá el pago
                      una vez que confirmes que el servicio ha sido completado satisfactoriamente.
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Información de pago</CardTitle>
                <CardDescription>Ingresa los datos de tu tarjeta para procesar el pago</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup defaultValue="tarjeta" className="mb-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="tarjeta" id="tarjeta" />
                    <Label htmlFor="tarjeta" className="flex items-center">
                      <CreditCard className="h-4 w-4 mr-2 text-gray-500" />
                      Tarjeta de crédito o débito
                    </Label>
                  </div>
                </RadioGroup>

                <div className="space-y-2">
                  <Label htmlFor="titular">Nombre del titular</Label>
                  <Input id="titular" placeholder="Como aparece en la tarjeta" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="numero">Número de tarjeta</Label>
                  <Input id="numero" placeholder="0000 0000 0000 0000" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiracion">Fecha de expiración</Label>
                    <Input id="expiracion" placeholder="MM/AA" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">Código de seguridad (CVV)</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Link href="/cliente/exito" className="w-full">
                  <Button className="w-full bg-[#007aff] hover:bg-[#0056b3]">Confirmar pago</Button>
                </Link>
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
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
