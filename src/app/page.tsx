"use client"
import Link from "next/link"
import Image from "next/image"
import { Star, Shield, CreditCard, HeadphonesIcon, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SearchForm } from "@/components/search-form"
import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { tecnicos } from "@/lib/data"

export default function Home() {
  const [fecha, setFecha] = useState("")
  const tecnico = tecnicos.find((t) => t.id === 5)
  useEffect(() => {
    setFecha(new Date().getFullYear().toLocaleString())
  }, [])

  return (
    <div className="flex min-h-screen flex-col">     
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#333e5d] to-[#1a2036] text-white">
          <div className="container px-4 py-16 md:py-24 lg:py-32 mx-auto sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Encuentra especialistas confiables cerca de ti, disponibles 24/7
                </h1>
                <p className="text-lg text-gray-300 md:text-xl">
                  Conectamos a residentes de Lima Moderna con especialistas verificados para solucionar cualquier
                  problema en tu hogar.
                </p>
              </div>
              <div className="relative z-10 rounded-lg bg-white/10 backdrop-blur-sm p-6 shadow-lg">
                <SearchForm />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        </section>

        {/* Beneficios Section */}
        <section id="beneficios" className="bg-gray-50 py-16 scroll-mt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-[#333e5d] md:text-3xl mb-12">Beneficios clave</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-[#007aff]/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#007aff]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Geolocalización por zonas</h3>
                <p className="text-gray-600">Encuentra especialistas disponibles en tu distrito o zonas cercanas.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-[#007aff]/10 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-[#007aff]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Reseñas verificadas</h3>
                <p className="text-gray-600">Todas las reseñas son de clientes reales que contrataron el servicio.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-[#007aff]/10 flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-[#007aff]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Pagos digitales seguros</h3>
                <p className="text-gray-600">Realiza pagos seguros a través de nuestra plataforma con garantía.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-[#007aff]/10 flex items-center justify-center mb-4">
                  <HeadphonesIcon className="h-6 w-6 text-[#007aff]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Soporte 24/7</h3>
                <p className="text-gray-600">Atención al cliente disponible todos los días a cualquier hora.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona Section */}
        <section id="como-funciona" className="py-16 scroll-mt-16">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-[#333e5d] md:text-3xl mb-12">¿Cómo funciona?</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-[#007aff] flex items-center justify-center mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="font-bold text-lg mb-2">Buscar</h3>
                <p className="text-gray-600">
                  Selecciona el tipo de servicio que necesitas y tu ubicación para encontrar especialistas disponibles.
                </p>
              </div>
              <div className="relative flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-[#007aff] flex items-center justify-center mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="font-bold text-lg mb-2">Contactar</h3>
                <p className="text-gray-600">
                  Revisa perfiles, calificaciones y elige al especialista que mejor se adapte a tus necesidades.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-[#007aff] flex items-center justify-center mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="font-bold text-lg mb-2">Evaluar</h3>
                <p className="text-gray-600">
                  Después del servicio, califica al especialista y comparte tu experiencia con la comunidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios Section */}
        <section id="testimonios" className="bg-gray-50 py-16 scroll-mt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-[#333e5d] md:text-3xl mb-12">Testimonios</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Testimonio Cliente 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                    <Image
                      src="/sin-perfil.webp"
                      alt="Cliente"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">María Rodríguez</h3>
                    <p className="text-sm text-gray-500">Cliente - Miraflores</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#007aff] text-[#007aff]" />
                  ))}
                </div>
                <p className="text-gray-600">
                  &quot;Encontré un electricista excelente en menos de una hora. Solucionó el problema rápidamente y a un
                  precio justo. ¡Totalmente recomendado!&quot;
                </p>
              </div>

              {/* Testimonio Cliente 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                    <Image
                      src="/sin-perfil.webp"
                      alt="Cliente"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Carlos Mendoza</h3>
                    <p className="text-sm text-gray-500">Cliente - San Isidro</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-[#007aff] text-[#007aff]" : "text-gray-300"}`} />
                  ))}
                </div>
                <p className="text-gray-600">
                  &quot;La plataforma es muy fácil de usar. El gasfitero llegó puntual y resolvió una fuga que teníamos hace
                  semanas. El pago digital fue muy conveniente.&quot;
                </p>
              </div>

              {/* Testimonio especialista */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                    <Image
                      src={tecnico?.imagen || "/sin-perfil.webp"}
                      alt="especialista"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{tecnico?.nombre}</h3>
                    <p className="text-sm text-gray-500">Especialista {tecnico?.especialidadNombre}</p>
                  </div>
                </div>
                <div className="flex mb-3 items-center">
                  <Shield className="h-4 w-4 text-[#007aff] mr-1" />
                  <span className="text-sm text-[#007aff] font-medium">especialista Verificado</span>
                </div>
                <p className="text-gray-600">
                  &quot;Desde que me uní a la plataforma, mi agenda está siempre llena. Los clientes son respetuosos y el
                  sistema de pagos es muy eficiente. Ha mejorado mi negocio.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#333e5d] text-white py-16">
          <div className="container px-4 text-center mx-auto sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold md:text-3xl mb-4">¿Listo para encontrar al especialista perfecto?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Únete a miles de usuarios que ya confían en nosotros para solucionar los problemas de su hogar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cliente/registro">
                <Button size="lg" className="bg-[#007aff] hover:bg-[#0056b3] w-full sm:w-auto cursor-pointer">
                  Buscar un especialista
                </Button>
              </Link>
              <Link href="/tecnico/registro">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-black hover:bg-white/10 hover:text-white w-full sm:w-auto cursor-pointer"
                >
                  Ofrecer mis servicios
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#1a2036] text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
                <span className="text-[#007aff]">Todito</span>
              </Link>
              <p className="text-gray-400 text-sm">
                Conectamos a residentes de Lima Moderna con especialistas verificados.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Enlaces</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#como-funciona" className="hover:text-white">
                    ¿Cómo funciona?
                  </Link>
                </li>
                <li>
                  <Link href="#beneficios" className="hover:text-white">
                    Beneficios
                  </Link>
                </li>
                <li>
                  <Link href="#testimonios" className="hover:text-white">
                    Testimonios
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Términos y condiciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Política de cookies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>soporte@todito.pe</li>
                <li>+51 (01) 123-4567</li>
                <li>Av. Javier Prado 2456, San Isidro</li>
              </ul>
              <div className="flex gap-4 mt-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {fecha} Todito. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
