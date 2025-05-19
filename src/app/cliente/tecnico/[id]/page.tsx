import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Star, Shield, Clock, MapPin, Calendar, MessageSquare, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TecnicoDetalle({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-[#333e5d]">
            <span className="text-[#007aff]">Todito</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Usuario"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-medium hidden md:inline">María Rodríguez</span>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-gray-50">
        <div className="container py-6">
          <div className="mb-6">
            <Link
              href="/cliente/dashboard"
              className="inline-flex items-center text-sm font-medium text-[#333e5d] hover:text-[#007aff] mb-4"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Volver a resultados
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex flex-col items-center">
                      <div className="h-32 w-32 rounded-full bg-gray-200 overflow-hidden mb-3">
                        <Image
                          src="/placeholder.svg?height=200&width=200"
                          alt="especialista"
                          width={128}
                          height={128}
                          className="object-cover"
                        />
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-2">Disponible</Badge>
                      <div className="flex items-center mb-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < 4 ? "fill-[#007aff] text-[#007aff]" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">(28 reseñas)</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h1 className="text-2xl font-bold text-[#333e5d]">Carlos Mendoza</h1>
                        <Shield className="h-5 w-5 text-[#007aff]" title="Verificado" />
                      </div>
                      <p className="text-[#007aff] font-medium text-lg mb-4">Electricista</p>

                      <div className="grid gap-3 mb-6">
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2 text-gray-400" />
                          <span>Disponible de Lunes a Sábado, 8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                          <span>Miraflores, San Isidro, Surco</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                          <span>Experiencia: 8 años</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="bg-gray-50">
                          Instalaciones eléctricas
                        </Badge>
                        <Badge variant="outline" className="bg-gray-50">
                          Reparaciones
                        </Badge>
                        <Badge variant="outline" className="bg-gray-50">
                          Mantenimiento
                        </Badge>
                        <Badge variant="outline" className="bg-gray-50">
                          Emergencias 24/7
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                        <div>
                          <p className="text-sm text-gray-500">Tarifa por hora</p>
                          <p className="text-xl font-bold text-[#333e5d]">S/. 50.00</p>
                        </div>
                        <Link href="/cliente/pago">
                          <Button className="bg-[#007aff] hover:bg-[#0056b3]">Contratar ahora</Button>
                        </Link>
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
                    <p className="text-gray-600 mb-4">
                      Soy un electricista profesional con más de 8 años de experiencia en instalaciones eléctricas
                      residenciales y comerciales. Me especializo en solucionar problemas eléctricos, instalación de
                      sistemas de iluminación, cableado estructurado y mantenimiento preventivo.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Cuento con certificación del SENATI y constante capacitación en nuevas tecnologías y sistemas
                      eléctricos. Mi objetivo es brindar un servicio de calidad, seguro y confiable a todos mis
                      clientes.
                    </p>

                    <h3 className="font-bold text-lg mb-3 mt-6">Servicios</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Instalaciones eléctricas residenciales y comerciales</li>
                      <li>Reparación de cortocircuitos y fallas eléctricas</li>
                      <li>Instalación de luminarias y sistemas de iluminación</li>
                      <li>Mantenimiento preventivo de sistemas eléctricos</li>
                      <li>Instalación de tableros eléctricos</li>
                      <li>Atención de emergencias 24/7</li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="experiencia" className="p-6">
                    <h3 className="font-bold text-lg mb-3">Formación y Certificaciones</h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <Award className="h-5 w-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">especialista Electricista - SENATI</h4>
                          <p className="text-sm text-gray-500">2012 - 2015</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Award className="h-5 w-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Certificación en Instalaciones Eléctricas Residenciales</h4>
                          <p className="text-sm text-gray-500">2016</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Award className="h-5 w-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Especialización en Sistemas de Iluminación LED</h4>
                          <p className="text-sm text-gray-500">2018</p>
                        </div>
                      </div>
                    </div>

                    <h3 className="font-bold text-lg mb-3 mt-6">Experiencia Laboral</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Electricista Independiente</h4>
                        <p className="text-sm text-gray-500">2018 - Presente</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Servicios de instalación y mantenimiento eléctrico para clientes residenciales y pequeños
                          negocios en Lima Moderna.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">especialista Electricista - Electro Sistemas S.A.C</h4>
                        <p className="text-sm text-gray-500">2015 - 2018</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Instalaciones eléctricas en proyectos residenciales y comerciales. Mantenimiento preventivo y
                          correctivo.
                        </p>
                      </div>
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
                              className={`h-4 w-4 ${i < 4 ? "fill-[#007aff] text-[#007aff]" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-medium">4.0</span>
                        <span className="text-sm text-gray-500 ml-1">(28 reseñas)</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Reseña 1 */}
                      <div className="border-b pb-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=100&width=100"
                              alt="Cliente"
                              width={40}
                              height={40}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium">Laura Sánchez</h4>
                            <div className="flex items-center">
                              <div className="flex mr-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${i < 5 ? "fill-[#007aff] text-[#007aff]" : "text-gray-300"}`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500">Hace 2 semanas</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600">
                          Carlos hizo un excelente trabajo instalando nuevas luminarias en mi departamento. Fue puntual,
                          profesional y dejó todo limpio al terminar. Definitivamente lo recomendaría y volvería a
                          contratar.
                        </p>
                      </div>

                      {/* Reseña 2 */}
                      <div className="border-b pb-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=100&width=100"
                              alt="Cliente"
                              width={40}
                              height={40}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium">Miguel Torres</h4>
                            <div className="flex items-center">
                              <div className="flex mr-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${i < 4 ? "fill-[#007aff] text-[#007aff]" : "text-gray-300"}`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500">Hace 1 mes</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600">
                          Contraté a Carlos para solucionar un problema de cortocircuito en mi oficina. Identificó el
                          problema rápidamente y lo solucionó de manera eficiente. Buen servicio y precio justo.
                        </p>
                      </div>

                      {/* Reseña 3 */}
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=100&width=100"
                              alt="Cliente"
                              width={40}
                              height={40}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium">Patricia Flores</h4>
                            <div className="flex items-center">
                              <div className="flex mr-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${i < 3 ? "fill-[#007aff] text-[#007aff]" : "text-gray-300"}`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500">Hace 2 meses</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600">
                          El trabajo fue aceptable, pero llegó un poco tarde a la cita. La instalación quedó bien,
                          aunque tuve que pedirle que corrigiera algunos detalles. El precio fue razonable.
                        </p>
                      </div>
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
                    ¿Tienes alguna pregunta o necesitas más información? Envía un mensaje a Carlos y te responderá a la
                    brevedad.
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
                  <h3 className="font-bold text-lg mb-4">Especialistas similares</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="especialista"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Roberto Díaz</h4>
                        <p className="text-sm text-[#007aff]">Electricista</p>
                        <div className="flex items-center">
                          <div className="flex mr-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${i < 5 ? "fill-[#007aff] text-[#007aff]" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">(31)</span>
                        </div>
                      </div>
                      <Link href="/cliente/tecnico/5">
                        <Button variant="outline" size="sm">
                          Ver
                        </Button>
                      </Link>
                    </div>

                    <div className="flex gap-3">
                      <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="especialista"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Luis Vargas</h4>
                        <p className="text-sm text-[#007aff]">Electricista</p>
                        <div className="flex items-center">
                          <div className="flex mr-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${i < 4 ? "fill-[#007aff] text-[#007aff]" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">(19)</span>
                        </div>
                      </div>
                      <Link href="/cliente/tecnico/6">
                        <Button variant="outline" size="sm">
                          Ver
                        </Button>
                      </Link>
                    </div>

                    <div className="flex gap-3">
                      <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="especialista"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Javier Morales</h4>
                        <p className="text-sm text-[#007aff]">Electricista</p>
                        <div className="flex items-center">
                          <div className="flex mr-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${i < 4 ? "fill-[#007aff] text-[#007aff]" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">(23)</span>
                        </div>
                      </div>
                      <Link href="/cliente/tecnico/7">
                        <Button variant="outline" size="sm">
                          Ver
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
