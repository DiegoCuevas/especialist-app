import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ClienteRegistro() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container py-4">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-[#333e5d] hover:text-[#007aff]">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Volver al inicio
        </Link>
      </div>
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Registro de Cliente</CardTitle>
            <CardDescription className="text-center">Crea tu cuenta para encontrar especialistas confiables</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre completo</Label>
              <Input id="nombre" placeholder="Ingresa tu nombre completo" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" placeholder="tu@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="distrito">Distrito</Label>
              <Select>
                <SelectTrigger id="distrito">
                  <SelectValue placeholder="Selecciona tu distrito" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="miraflores">Miraflores</SelectItem>
                  <SelectItem value="sanisidro">San Isidro</SelectItem>
                  <SelectItem value="surco">Surco</SelectItem>
                  <SelectItem value="barranco">Barranco</SelectItem>
                  <SelectItem value="lamolina">La Molina</SelectItem>
                  <SelectItem value="sanboria">San Borja</SelectItem>
                  <SelectItem value="lince">Lince</SelectItem>
                  <SelectItem value="magdalena">Magdalena</SelectItem>
                  <SelectItem value="jesúsmaría">Jesús María</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" placeholder="Crea una contraseña segura" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
              <Input id="confirmPassword" type="password" placeholder="Confirma tu contraseña" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Link href="/cliente/dashboard" className="w-full">
              <Button className="w-full bg-[#007aff] hover:bg-[#0056b3]">Registrarse</Button>
            </Link>
            <div className="text-center text-sm text-gray-500">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/cliente/login" className="text-[#007aff] hover:underline">
                Iniciar sesión
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
