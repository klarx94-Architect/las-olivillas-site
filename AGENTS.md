# AGENTS.md — Restaurante Las Olivillas

## Identidad del Proyecto
- **Cliente:** Restaurante Las Olivillas
- **Propietarios:** Jose Castillo Medina y María García Castillo
- **Dirección:** Paseo Mirasierra nº7, Güéjar Sierra, Granada
- **Teléfono reservas:** 653 999 909
- **Teléfono fijo:** 958 484 050
- **Email:** restaurantelasolivillas@hotmail.es
- **Horario:** Miércoles a Lunes 12:00-16:00 / 20:00-00:00 · Martes cerrado
- **Dominio:** lasolivillas.es
- **Repo GitHub:** klarx94-Architect/en-que-paco (conectado a Vercel proyecto en-que-paco-site)
- **Framework:** Vite + React + Tailwind CSS

## Paleta de Colores — Las Olivillas
- Verde oliva oscuro: `#3D5A3E`
- Crema cálida: `#F5F0E8`
- Dorado suave: `#C8A96E`
- Negro texto: `#1A1A1A`
- Blanco puro: `#FFFFFF`

## Instrucciones para Agentes IA
- Este proyecto es EXCLUSIVO para Restaurante Las Olivillas. No mezclar con encapaco ni otros proyectos.
- Toda referencia a "Encapaco", "ENCAPACO", "En Que Paco" debe eliminarse y reemplazarse por "Las Olivillas".
- El WhatsApp de reservas es: `653 999 909` → formato wa.me: `https://wa.me/34653999909`
- El sistema de reservas NO es un chatbot conversacional. Es un formulario inteligente que notifica al dueño por WhatsApp.
- La sección `/admin-olivillas` es el panel de gestión privado conectado a Supabase.
- El dominio de producción es `lasolivillas.es` — apunta al proyecto Vercel `en-que-paco-site`.

## Estructura del Proyecto
```
src/
  App.jsx                          # Router principal
  components/
    home/
      Hero.jsx                     # Sección hero principal
      BookingAgent.jsx             # Agente de reservas (formulario inteligente)
      InteractiveMenu.jsx          # Carta interactiva por categorías
      DigitalMenu.jsx              # Menú digital
      ServicesSection.jsx          # Sección servicios
      EventCard.jsx                # Tarjeta eventos
    layout/                        # Navbar, Footer
  pages/                           # Páginas de rutas
  lib/                             # Utilidades y config Supabase
```

## Variables de Entorno Requeridas
```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_WA_NUMBER=34653999909
```

<!-- VERCEL BEST PRACTICES START -->
## Best practices for developing on Vercel

- Treat Vercel Functions as stateless + ephemeral
- Store secrets in Vercel Env Variables; not in git
- Use `vercel env pull` for local parity
- Use Vercel Blob for uploads/media
- Enable Web Analytics + Speed Insights early
<!-- VERCEL BEST PRACTICES END -->
