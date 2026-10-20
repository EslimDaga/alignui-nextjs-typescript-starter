<p align="center">
  <a href="https://alignui.com">
    <img src="./public/images/logo.svg" height="96">
    <h3 align="center">AlignUI MCP</h3>
  </a>
  <p align="center">Los componentes oficiales de AlignUI, al alcance de tu IA</p>
</p>

Fork de [alignui-nextjs-typescript-starter](https://github.com/alignui/alignui-nextjs-typescript-starter) que publica los **54 componentes y 240 ejemplos oficiales de AlignUI** de tres formas, desde un solo deploy en **https://alignui-mcp.vercel.app**:

| Ruta | Qué es |
| --- | --- |
| `/` | Web hecha con AlignUI: guía, catálogo y vista en vivo de cada ejemplo |
| `/mcp` | **Servidor MCP** remoto (Streamable HTTP, solo lectura, sin API key) |
| `/r/{name}.json` | **Registry de shadcn** para instalar con `npx shadcn add @alignui/...` |

La propia web se construyó instalando los componentes desde este registry.

## Usar el MCP

```bash
claude mcp add --transport http alignui https://alignui-mcp.vercel.app/mcp
```

Configuración para Cursor, VS Code, Claude Desktop y otros clientes: [alignui-mcp.vercel.app/docs/mcp](https://alignui-mcp.vercel.app/docs/mcp).

| Herramienta | Para qué |
| --- | --- |
| `alignui_search` | Buscar componentes y ejemplos por lo que necesitas |
| `alignui_list_components` | Listar los 54 componentes (paginado) |
| `alignui_get_component` | Código, partes, dependencias, ejemplos y comando de instalación |
| `alignui_get_example` | Código de cualquiera de los 240 ejemplos oficiales |
| `alignui_get_design_tokens` | Colores, tipografía, sombras y radios con su clase de Tailwind |
| `alignui_get_setup_guide` | Pasos para configurar AlignUI en un proyecto Next.js o Vite |

## Instalar componentes con el CLI

Agrega el namespace al `components.json` del proyecto (si no tienes uno, copia el completo de la guía; recuerda que shadcn exige el campo `"style"`):

```json
{
  "registries": {
    "@alignui": "https://alignui-mcp.vercel.app/r/{name}.json"
  }
}
```

```bash
npx shadcn@latest add @alignui/base                    # tokens, utils, animaciones y cursor
npx shadcn@latest add @alignui/button @alignui/modal   # componentes
npx shadcn@latest add @alignui/select-demo             # ejemplos oficiales
```

Guía completa (`components.json`, fuente, dark mode, providers): [alignui-mcp.vercel.app/docs/cli](https://alignui-mcp.vercel.app/docs/cli).

> ¿Usas Vite? Pide a tu asistente que llame a `alignui_get_setup_guide` con `framework: "vite"`: cubre la ruta del CSS, la fuente Inter y el dark mode.

## Desarrollo local

```bash
pnpm i
pnpm dev   # genera el registry (predev) y levanta http://localhost:3000
```

- MCP local: `http://localhost:3000/mcp`. Para inspeccionarlo: `npx @modelcontextprotocol/inspector`.
- Si el puerto 3000 está ocupado: `REGISTRY_URL=http://localhost:3100 pnpm dev -p 3100`.
- `pnpm build` genera el registry y compila la web.
- `pnpm lint` excluye el código oficial de AlignUI, que se mantiene tal cual.

## Despliegue

Desplegado en Vercel (proyecto `alignui-mcp`) con la integración Git:

- Cada push a `master` publica en producción: https://alignui-mcp.vercel.app
- Cada push a otra rama o PR genera un preview.
- `REGISTRY_URL=https://alignui-mcp.vercel.app` está definida en Production y Preview, así las URLs del registry y del MCP siempre apuntan al dominio de producción.

Para desplegar tu propia copia: importa el repo en Vercel (Next.js, sin configuración extra) y define `REGISTRY_URL` con tu dominio.

## Cómo se arma el registry

| Ruta | Contenido |
| --- | --- |
| `registry/default/ui`, `hooks`, `utils`, `example` | Código oficial copiado **tal cual** de [alignui.com/docs/v1.2](https://www.alignui.com/docs/v1.2/introduction) |
| `registry/default/styles/alignui.css` | Tokens de Tailwind v4 generados por el CLI oficial `npx @alignui/cli tailwind` (Blue, Gray, OKLCH) |
| `registry/default/docs.json` | Títulos, descripciones y comandos de instalación de cada página de la documentación |
| `public/images`, `public/flags` | Imágenes que usan los ejemplos |

```bash
pnpm registry:sync    # vuelve a descargar el código oficial de alignui.com/docs
pnpm registry:build   # genera registry.json, public/r/*.json y el índice de ejemplos de la web
```

`registry:build` deduce las dependencias de los imports, respeta las versiones que fija la documentación (salvo `react-day-picker`, que sube a 8.10.2: misma API que la 8.10.1 de AlignUI y compatible con React 19) y publica copias con estos únicos cambios:

- **Tailwind v4**: comas en grids arbitrarios (`grid-cols-[auto,minmax(0,1fr)]` → `grid-cols-[auto_minmax(0,1fr)]`) y la escala de radios (`rounded-bl-sm` → `rounded-bl-xs`).
- **TypeScript de Vite** (`verbatimModuleSyntax` y `noUnusedLocals`): `import type` para los tipos y sin `import * as React` cuando no se usa.
- **Dark mode opcional**: el CSS publicado no incluye el bloque `prefers-color-scheme`, así que el tema oscuro solo se activa con la clase `dark`.
- **Fuente**: el `body` usa `var(--font-sans)` en lugar de `Inter` escrito a mano, para que funcione con `next/font` o `@fontsource`.

El build imprime cada cambio. El item `base` también instala `tw-animate-css`, el reemplazo para Tailwind v4 del plugin `tailwindcss-animate` del que dependen las animaciones de modal, drawer, popover, tooltip, dropdown, notification y select. `social-button` solo existe en el starter oficial y se toma de ahí.

## Evaluación del MCP

`evals/alignui-mcp.xml` contiene 10 preguntas verificadas que un modelo debe responder usando solo las herramientas del MCP.

## Créditos

Componentes, ejemplos y tokens de [AlignUI](https://alignui.com) (licencia MIT, ver `LICENSE`).
