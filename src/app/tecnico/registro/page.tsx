import Link from "next/link"
import { ArrowLeft, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function TecnicoRegistro() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container py-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-[#333e5d] hover:text-[#007aff]">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Volver al inicio
        </Link>
      </div>
      <main className="flex-1 flex items-center justify-center p-4 py-8">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Registro de especialista</CardTitle>
            <CardDescription className="text-center">
              Completa el formulario para ofrecer tus servicios en nuestra plataforma
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-medium">Información personal</h3>
              <p className="text-sm text-gray-500">Ingresa tus datos personales</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre completo</Label>
                <Input id="nombre" placeholder="Ingresa tu nombre completo" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono</Label>
                <Input id="telefono" placeholder="+51 999 999 999" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dni">DNI</Label>
                <Input id="dni" placeholder="12345678" />
              </div>
            </div>

            <div className="space-y-1 pt-4">
              <h3 className="text-lg font-medium">Información profesional</h3>
              <p className="text-sm text-gray-500">Cuéntanos sobre tu experiencia y servicios</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="especialidad">Especialidad principal</Label>
                <Select>
                  <SelectTrigger id="especialidad">
                    <SelectValue placeholder="Selecciona tu especialidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="plomeria">Gasfitería</SelectItem>
                    <SelectItem value="electricidad">Electricidad</SelectItem>
                    <SelectItem value="pintura">Pintura</SelectItem>
                    <SelectItem value="carpinteria">Carpintería</SelectItem>
                    <SelectItem value="cerrajeria">Cerrajería</SelectItem>
                    <SelectItem value="albañileria">Albañilería</SelectItem>
                    <SelectItem value="jardineria">Jardinería</SelectItem>
                    <SelectItem value="limpieza">Limpieza</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="experiencia">Años de experiencia</Label>
                <Select>
                  <SelectTrigger id="experiencia">
                    <SelectValue placeholder="Selecciona tus años de experiencia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Menos de 1 año</SelectItem>
                    <SelectItem value="1-3">1 a 3 años</SelectItem>
                    <SelectItem value="3-5">3 a 5 años</SelectItem>
                    <SelectItem value="5-10">5 a 10 años</SelectItem>
                    <SelectItem value="10+">Más de 10 años</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="distritos">Distritos donde ofreces servicios</Label>
                <Select>
                  <SelectTrigger id="distritos">
                    <SelectValue placeholder="Selecciona los distritos" />
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
                <p className="text-xs text-gray-500">Puedes seleccionar múltiples distritos</p>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="tarifa">Tarifa por hora (S/.)</Label>
                <Input id="tarifa" type="number" placeholder="Ej: 50" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="descripcion">Descripción de tus servicios</Label>
                <Textarea
                  id="descripcion"
                  placeholder="Describe tu experiencia, habilidades y los servicios que ofreces..."
                  className="min-h-[120px]"
                />
              </div>
            </div>

            <div className="space-y-1 pt-4">
              <h3 className="text-lg font-medium">Documentos</h3>
              <p className="text-sm text-gray-500">
                Sube los documentos requeridos para verificar tu identidad y experiencia
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="dni-doc">Copia de DNI (ambos lados)</Label>
                <div className="border-2 border-dashed rounded-md p-4 text-center cursor-pointer hover:bg-gray-50">
                  <Upload className="h-6 w-6 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Haz clic para subir o arrastra y suelta</p>
                  <p className="text-xs text-gray-400 mt-1">PDF, JPG o PNG (Max. 5MB)</p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="foto">Foto de perfil</Label>
                <div className="border-2 border-dashed rounded-md p-4 text-center cursor-pointer hover:bg-gray-50">
                  <Upload className="h-6 w-6 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Haz clic para subir o arrastra y suelta</p>
                  <p className="text-xs text-gray-400 mt-1">JPG o PNG (Max. 2MB)</p>
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="certificados">Certificados o diplomas (opcional)</Label>
                <div className="border-2 border-dashed rounded-md p-4 text-center cursor-pointer hover:bg-gray-50">
                  <Upload className="h-6 w-6 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Haz clic para subir o arrastra y suelta</p>
                  <p className="text-xs text-gray-400 mt-1">PDF, JPG o PNG (Max. 10MB)</p>
                </div>
              </div>
            </div>

            <div className="space-y-1 pt-4">
              <h3 className="text-lg font-medium">Seguridad</h3>
              <p className="text-sm text-gray-500">Crea una contraseña segura para tu cuenta</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input id="password" type="password" placeholder="Crea una contraseña segura" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                <Input id="confirmPassword" type="password" placeholder="Confirma tu contraseña" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Link href="/tecnico/gracias" className="w-full">
              <Button className="w-full bg-[#007aff] hover:bg-[#0056b3]">Enviar solicitud</Button>
            </Link>
            <p className="text-xs text-gray-500 text-center">
              Al hacer clic en &quot;Enviar solicitud&quot;, aceptas nuestros{" "}
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
      </main>
    </div>
  )
}
