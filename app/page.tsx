import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, Calendar, CheckCircle, Globe, MessageSquare, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Smarter</span>
            <span>Prop.cl</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Funcionalidades
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Precios
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact">
              <Button variant="outline" size="sm" className="hidden md:flex">
                Contacto
              </Button>
            </Link>
            <Link href="#signup">
              <Button size="sm">Comenzar Gratis</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    La nueva forma inteligente de vender propiedades en Chile
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Sin necesidad de portales costosos ni sistemas anticuados. Una plataforma todo-en-uno para agentes
                    inmobiliarios.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#signup">
                    <Button size="lg" className="gap-1">
                      Prueba Gratis
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#demo">
                    <Button size="lg" variant="outline">
                      Ver Demo
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Gratis hasta 3 propiedades</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px]">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Dashboard de SmarterProp"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Funcionalidades
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Convierte propiedades en productos de e-commerce
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Con automatización y métricas de conversión para maximizar tus ventas
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <ShoppingCart className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Catálogo Dinámico + Shopify Sync</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Cada propiedad se publica como un producto Shopify con fotos, precio, descripción, tour virtual y
                    botón de agendamiento. Integración automática vía n8n desde planilla, CRM o formulario.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <MessageSquare className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>SmartLeads con WhatsApp + Correo</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Captura el lead desde la ficha de propiedad y dispara una secuencia de WhatsApp, mail y notificación
                    en tiempo real al vendedor. Incluye bot con IA para responder preguntas frecuentes.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Calendar className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Agenda Automatizada de Visitas</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Calendario compartido (Google/Outlook/iCal) donde clientes pueden agendar visitas en línea
                    (virtuales o físicas). n8n automatiza recordatorios y seguimiento post-visita.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <BarChart3 className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Módulo de Análisis de Interés</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Dashboard para cada vendedor o agencia que mide: clics, formularios, visitas agendadas, conversión
                    por propiedad y por canal (Instagram, sitio, QR, etc.). Estilo Google Analytics + CRM.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Precios
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Planes simples y transparentes</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Paga solo por las propiedades activas que necesites
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Gratis</CardTitle>
                  <div className="text-3xl font-bold">$0</div>
                  <CardDescription>Ideal para comenzar</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 flex-1">
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Hasta 3 propiedades</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Catálogo básico</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Captura de leads</span>
                    </li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Link href="#signup">
                    <Button className="w-full">Comenzar Gratis</Button>
                  </Link>
                </div>
              </Card>
              <Card className="flex flex-col border-primary">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <div className="text-3xl font-bold">
                    $19.990 <span className="text-sm font-normal">/ mes</span>
                  </div>
                  <CardDescription>Para corredores independientes</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 flex-1">
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Hasta 5 propiedades</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Integración con Shopify</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>SmartLeads con WhatsApp</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Agenda automatizada</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Análisis básico</span>
                    </li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Link href="#signup">
                    <Button className="w-full">Elegir Plan</Button>
                  </Link>
                </div>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Growth</CardTitle>
                  <div className="text-3xl font-bold">
                    $49.990 <span className="text-sm font-normal">/ mes</span>
                  </div>
                  <CardDescription>Para equipos inmobiliarios</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 flex-1">
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Hasta 20 propiedades</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Todo lo del plan Starter</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Bot con IA para preguntas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Análisis avanzado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Soporte prioritario</span>
                    </li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Link href="#signup">
                    <Button className="w-full">Elegir Plan</Button>
                  </Link>
                </div>
              </Card>
            </div>
            <div className="text-center">
              <p className="text-muted-foreground">
                ¿Necesitas más propiedades? Contáctanos para conocer nuestro plan Enterprise con propiedades ilimitadas,
                branding personalizado y API.
              </p>
            </div>
          </div>
        </section>

        <section id="signup" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Comienza a vender propiedades de forma inteligente
                </h2>
                <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                  Regístrate hoy y obtén acceso gratuito para publicar tus primeras 3 propiedades
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <input
                    className="flex h-10 w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2 text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/20"
                    placeholder="Nombre"
                    type="text"
                  />
                  <input
                    className="flex h-10 w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2 text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/20"
                    placeholder="Email"
                    type="email"
                  />
                  <input
                    className="flex h-10 w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2 text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/20"
                    placeholder="Teléfono"
                    type="tel"
                  />
                  <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                    Crear Cuenta Gratis
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Preguntas Frecuentes</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Respuestas a las dudas más comunes sobre SmarterProp
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>¿Necesito conocimientos técnicos?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    No, SmarterProp está diseñado para ser fácil de usar. No necesitas conocimientos técnicos para
                    publicar propiedades, gestionar leads o ver estadísticas.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>¿Puedo integrar con mi sitio web actual?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Sí, ofrecemos widgets y APIs para integrar SmarterProp con tu sitio web existente, o puedes usar
                    nuestro catálogo como tu sitio principal de propiedades.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>¿Cómo funciona la integración con Shopify?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Cada propiedad se sincroniza como un producto en Shopify, permitiéndote aprovechar todas las
                    herramientas de e-commerce para tus propiedades inmobiliarias.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>¿Puedo cambiar de plan en cualquier momento?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Sí, puedes actualizar o cambiar tu plan en cualquier momento según tus necesidades, pagando solo por
                    las propiedades activas que necesites.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <span className="text-primary">Smarter</span>
                <span>Prop.cl</span>
              </div>
              <p className="text-sm text-muted-foreground">La nueva forma inteligente de vender propiedades en Chile</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Producto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#features" className="hover:text-foreground">
                    Funcionalidades
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-foreground">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#demo" className="hover:text-foreground">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#about" className="hover:text-foreground">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-foreground">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#terms" className="hover:text-foreground">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="#privacy" className="hover:text-foreground">
                    Privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 md:h-24 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © 2024 SmarterProp.cl. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Sitio Web</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
