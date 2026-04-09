# AGENTS.md — Restaurante Las Olivillas

> **INSTRUCCIONES PARA AGENTES IA (Antigravity, Cursor, Copilot, etc.)**
> Este documento es la fuente única de verdad para cualquier agente que trabaje en este repositorio.
> Lee este archivo completo antes de hacer cualquier cambio.

---

## ⚠️ REGLA Nº 1 — IDENTIDAD EXCLUSIVA

Este repositorio es **Únicamente** para **Restaurante Las Olivillas**.

- **PROHIBIDO** usar los términos: `Encapaco`, `ENCAPACO`, `En Que Paco`, `en-que-paco`, `Paco`, `PACO`, `paco`, `encapaco`
- Si encuentras alguno de estos términos → **reemplaza inmediatamente** por el equivalente de Las Olivillas
- **PROHIBIDO** referencias a carpetas `/assets/bar_tapas/`, `/assets/comida/`, `/assets/nosotros/` (eliminadas)
- El número WhatsApp correcto es **653 999 909** (`https://wa.me/34653999909`)
- **OBLIGATORIO** actualizar `.ai-channel/FROM_ANTIGRAVITY.md` al finalizar cualquier sesión

---

## 🏪 Identidad del Cliente

| Campo | Valor |
|---|---|
| **Nombre** | Restaurante Las Olivillas |
| **Propietarios** | Jose Castillo Medina y María García Castillo |
| **Dirección** | Paseo Mirasierra nº7, 18160 Güéjar Sierra, Granada |
| **Tel. Móvil / WhatsApp** | 653 999 909 |
| **Tel. Fijo** | 958 484 050 |
| **Email** | restaurantelasolivillas@hotmail.es |
| **Horario** | Miércoles a Lunes 12:00–16:00 / 20:00–00:00 |
| **Día cerrado** | Martes |
| **Instagram** | @restaurantelasolivillas |
| **Facebook** | /lasolivillasrestaurante |
| **Dominio objetivo** | lasolivillas.es |
| **Tipo de cocina** | Tradicional española / Mediterránea |
| **Descripción** | Restaurante con vistas al Valle del Genil y Sierra Nevada |

---

## 🎨 Paleta de Colores

| Token Tailwind | Hex | Uso |
|---|---|---|
| `sierra-gold` | `#C8A96E` | Acento dorado principal |
| `terracotta-mid` | `#C05A2F` | Acento cálido / CTA |
| `neutral-dark` | `#1A1A1A` | Texto principal |
| `pearl-white` | `#FFFFFF` | Fondo blanco |
| `oliva-deep` | `#3D5A3E` | ✅ Añadido por Antigravity — verde oliva premium |

---

## 📁 Estado del Repositorio — Auditado 2026-04-09

```
las-olivillas-site/
├── .ai-channel/
│   ├── FROM_PERPLEXITY.md      ✓ Instrucciones para Antigravity
│   ├── FROM_ANTIGRAVITY.md     ✓ Reporte de Antigravity (auditado por Perplexity)
│   └── README.md               ✓ Descripción del canal
├── public/
│   └── favicon.svg             ⚠️ PENDIENTE: logo Las Olivillas
├── src/
│   ├── App.jsx                 ✓ Saneado
│   ├── assets/                 ✓ Solo assets neutros (hero.png, chef-dish.png, etc.)
│   │                           ❌ Eliminadas: bar_tapas/, comida/, nosotros/, paco/
│   ├── components/
│   │   ├── home/
│   │   │   ├── Hero.jsx            ✓ Saneado — Unsplash
│   │   │   ├── BookingAgent.jsx    ✓ WA:653999909, Martes cerrado
│   │   │   ├── InteractiveMenu.jsx ✓ Platos Las Olivillas, Unsplash
│   │   │   ├── ServicesSection.jsx ✓ Sin jazz/Paco, Unsplash
│   │   │   ├── DigitalMenu.jsx     ✓ Saneado por Antigravity
│   │   │   └── EventCard.jsx       ⚠️ REVISAR en próxima sesión
│   │   └── layout/
│   │       ├── Navbar.jsx          ✓ Logo textual Las Olivillas
│   │       └── Footer.jsx          ✓ Datos reales
│   └── pages/
│       ├── Home.jsx            ✓ Saneado por Antigravity
│       ├── Menu.jsx            ✓ Carta real, WA correcto
│       ├── Nosotros.jsx        ✓ Saneado
│       └── Llegar.jsx          ✓ Dirección real, Maps correcto
├── tailwind.config.js          ✓ oliva-deep añadido
└── AGENTS.md                   ✓ Este archivo
```

---

## 🔧 Infraestructura

| Elemento | Estado | Acción requerida |
|---|---|---|
| **Repo GitHub** | `klarx94-Architect/las-olivillas-site` | ✓ Correcto |
| **Rama activa** | `master` | ✓ Correcto |
| **Proyecto Vercel ID** | `prj_ocWGKejug5qPErX7BmzJZRUpHozq` | ✓ Conectado |
| **Nombre Vercel** | `en-que-paco-site` | ⚠️ **Acción manual Kleiver** |
| **URL actual** | `en-que-paco-site.vercel.app` | ⚠️ Cambiar tras renombrar |
| **Dominio final** | `lasolivillas.es` | ⏳ Pendiente conexión |
| **Supabase** | No conectado | ⏳ Fase posterior |

### Cómo renombrar el proyecto en Vercel (Kleiver):
1. Ir a: https://vercel.com/architect-sys-projects/en-que-paco-site/settings
2. General → Project Name → cambiar a `las-olivillas-site`
3. Save → La URL nueva será `las-olivillas-site.vercel.app`

---

## 📋 Próximas Tareas (esperando briefing de rediseño)

### PRIORIDAD ALTA
1. Revisar `EventCard.jsx` — puede tener contenido de jazz/conciertos de Encapaco
2. Renombrar proyecto en Vercel (acción manual Kleiver)
3. Crear favicon con logo Las Olivillas

### PRIORIDAD MEDIA (Rediseño Visual — esperar briefing de Perplexity)
4. Rediseñar Hero con fotos reales (el cliente debe enviarlas)
5. Actualizar paleta visual completa a identidad Las Olivillas
6. Integrar color `oliva-deep` en secciones clave

### PRIORIDAD BAJA (Funcionalidad)
7. Conectar Supabase — tabla `reservas`
8. Panel admin `/admin-olivillas`
9. Notificación WhatsApp al dueño en nueva reserva

---

## 🛡️ Variables de Entorno (Vercel)

```env
VITE_SUPABASE_URL=        # Pendiente
VITE_SUPABASE_ANON_KEY=   # Pendiente
VITE_WA_NUMBER=34653999909
```

---

## 📡 Canal AI-to-AI

Ver carpeta `.ai-channel/` para comunicación entre Perplexity y Antigravity.
- Perplexity escribe en: `.ai-channel/FROM_PERPLEXITY.md`
- Antigravity escribe en: `.ai-channel/FROM_ANTIGRAVITY.md` **(OBLIGATORIO al finalizar cada sesión)**
