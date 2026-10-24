<div align="center">

# 💘 MorrysMatch

Frontend de una app de citas: descubrir perfiles, matches, mensajes, galería de fotos y perfil de usuario, con tema claro y oscuro.

![React](https://img.shields.io/badge/React_18-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/licencia-MIT-green?style=flat-square)

</div>

## ✨ Funcionalidades

- **Autenticación** con modales de login y registro, y rutas protegidas.
- **Descubrir y matches**: exploración de perfiles y lista de coincidencias.
- **Mensajes**, **fotos** y **perfil** del usuario.
- **Temas** claro/oscuro con selector y preferencias guardadas.
- **Capa de servicios híbrida**: el mismo servicio puede hablar con un backend **REST** o **SOAP**, con reintentos y fallback configurable.

## 📁 Estructura

```
src/
├── components/      # UI reutilizable (layout, menús, modales, alertas)
├── config/          # URLs y endpoints de la API
├── context/         # AuthContext y LoadingContext
├── pages/           # Pantallas (Home y sección /usuario)
├── services/        # Clientes REST/SOAP y adaptador híbrido
├── themes/          # Sistema de temas
└── types/           # Tipos compartidos
docs/                # Notas de arquitectura, temas y alias
```

## 🧭 Rutas

| Ruta | Pantalla |
|---|---|
| `/` | Inicio |
| `/usuario/home` | Panel del usuario |
| `/usuario/descubrir` | Descubrir perfiles |
| `/usuario/matches` | Matches |
| `/usuario/mensajes` | Mensajes |
| `/usuario/fotos` | Galería |
| `/usuario/perfil` | Perfil |

## 🚀 Instalación

**Requisitos:** Node.js 18 o superior.

```bash
git clone https://github.com/urieldomingezm/citasv1.git
cd citasv1
npm install
cp .env.example .env    # URL de tu backend
npm run dev             # http://localhost:3000
```

| Script | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Revisión de tipos + build de producción |
| `npm run preview` | Sirve el build localmente |

## 🔐 Variables de entorno

| Variable | Descripción |
|---|---|
| `VITE_API_URL` | URL base de la API REST |
| `VITE_SOAP_URL` | URL base del servicio SOAP |

## 📚 Documentación

- [Arquitectura de servicios REST/SOAP](docs/arquitectura-servicios.md)
- [Sistema de temas](docs/temas.md)
- [Alias de rutas absolutas](docs/rutas-absolutas.md)

## 👤 Autor

**Angel Uriel Domínguez Medina** · [GitHub](https://github.com/urieldomingezm) · [Portafolio](https://cv-uriel-nine.vercel.app/)

## 📄 Licencia

Distribuido bajo la licencia MIT. Consulta [LICENSE](LICENSE).
