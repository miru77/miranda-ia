# Fase 1 — Landing pública (miranda-ia.net.ar)

> Este documento es el alcance de **esta sesión únicamente**. El plan completo del proyecto (auth, dashboards, Supabase, Google Calendar) vive en `PLAN.md` — no es necesario implementarlo ahora, solo sirve de contexto a futuro.

---

## 1. Alcance de esta etapa

Construir **solo la landing pública** de `https://miranda-ia.net.ar`, reemplazando la página placeholder ("próximamente") que está corriendo ahora.

**Incluye:**
- Proyecto Next.js (App Router), estructura básica del repo.
- Una sola página pública (`/`) con contenido real.
- Identidad visual propia (no template genérico).
- Deploy en la infraestructura ya existente.

**NO incluye (queda para una fase posterior):**
- Login / registro de usuarios.
- Supabase (auth, base de datos, RLS).
- Dashboards de admin o cliente.
- Integración con Google Calendar.

Si en el camino surge la tentación de adelantar algo de esto, no hacerlo — se planifica aparte cuando llegue el momento.

---

## 2. Stack para esta etapa

| Capa | Tecnología |
|---|---|
| Framework | Next.js (App Router) |
| Hosting | Docker Compose en el Ubuntu server existente (`/opt/web/`) |
| Exposición pública | Cloudflare Tunnel (`web-proxy`, ya activo) — reemplaza el placeholder actual |
| Contenido | CV (PDF/Word) + foto de perfil, subidos directo en esta conversación |

No hace falta Supabase, ni variables de entorno de auth, ni base de datos en esta etapa.

---

## 3. Contenido: CV y foto

1. Se suben el **CV** (PDF o Word) y la **foto de perfil** como archivos en esta conversación.
2. A partir del CV, extraer: bio, experiencia relevante, skills, y una selección de proyectos para mostrar.
3. La foto se copia a los assets del proyecto (`public/`) y se usa en el hero/sección "Sobre mí".
4. Por ahora este contenido queda **hardcodeado en el código** (no hay panel admin todavía) — eso se resuelve cuando se implemente Supabase en una fase posterior. Lo importante es que el texto sea real, no un placeholder.

---

## 4. Copy definitivo (usar tal cual o adaptar mínimamente)

- **Título (hero):** "Automatización, IA y tecnología aplicada"
- **Subtítulo (hero):** "Más de 10 años de experiencia en IT y operaciones, hoy enfocado en automatización, desarrollo moderno y ciberseguridad."
- **Bio corta:** "Experiencia en IT, operaciones y RPA, con foco actual en desarrollo, IA y ciberseguridad."
- **Dato académico** (en la sección "Sobre mí", no en el hero): egresado de la **UNT (Universidad Nacional de Tucumán)** — confirmar carrera/título exacto al leer el CV.
- El resto del contenido (experiencia detallada, proyectos a destacar) se completa con lo que se extraiga del CV.

---

## 5. Estructura sugerida de la página

```
Header   → nombre + nav simple (Sobre mí / Proyectos / Contacto) + botón "Iniciar sesión" (placeholder, sin funcionalidad aún)
Hero     → título, subtítulo, foto, botones "Reservar una consulta" / "Ver proyectos" (placeholders, sin funcionalidad aún)
Sobre mí → bio corta + dato UNT + experiencia relevante (del CV)
Proyectos → grid con 3+ proyectos (del CV)
Footer   → dominio + ubicación (San Miguel de Tucumán)
```

Los botones "Iniciar sesión", "Reservar una consulta" pueden existir visualmente pero no necesitan funcionar todavía — son ganchos visuales para cuando se implemente la fase de auth/dashboards.

---

## 6. Dirección de diseño visual

**Antes de escribir cualquier componente, usar el skill `frontend-design`** para definir una identidad visual propia — paleta, tipografía y un elemento distintivo — en vez de un layout genérico de "consultor de IA".

Brief de diseño:
- **Estilo:** minimalista, claro, profesional/corporativo. Nada de fondos oscuros tipo cyberpunk.
- **Sensación al entrar:** innovación en IA — debe sentirse como una herramienta moderna, no como un CV online ni una landing de agencia genérica.
- **Tensión a resolver:** más de 10 años de trayectoria seria (gobierno, infraestructura, ciberseguridad) convive con un posicionamiento a futuro en IA aplicada. El diseño debe transmitir ambas cosas sin que una le quite seriedad a la otra — evitar el cliché de hero con gradiente y "robot genérico".
- Evitar los defaults genéricos de diseño con IA (fondo crema + serif grueso; fondo negro + verde ácido; estilo "diario" con líneas finas) salvo que se justifique específicamente para esta marca.

---

## 7. Despliegue

1. Desarrollo en PC con VS Code + Claude Code.
2. `Dockerfile` para Next.js (build standalone) + nuevo servicio en el `docker-compose.yml` existente en `/opt/web/`.
3. nginx (ya corriendo) hace proxy al contenedor Next.js en vez de servir el placeholder estático.
4. Cloudflare Tunnel (`web-proxy`) ya apunta al server — no hay que tocar DNS.
5. Flujo: `git push` a `miru77` → `git pull` en el server → `docker compose up -d --build`.

---

## 8. Qué viene después (no ahora)

Una vez esta landing esté desplegada y funcionando, se retoma el `PLAN.md` completo para: Supabase + auth + roles, panel admin, panel cliente, e integración con Google Calendar.
