# Casa Centenario — Propiedad única

Proyecto de Propietas Inmobiliaria. Hereda de `../CLAUDE.md`: datos de la firma, manual de marca y reglas generales. Acá solo lo específico.

## El proyecto
- **Qué es:** casa residencial mixta con local comercial independiente, a ~100 m del mar. Vivienda: living, comedor, 2 dormitorios, cocina con parrilla interior, 1 baño con jacuzzi. Exterior: amplio parque y galería semicubierta con parrilla. Local comercial con frente a la calle y acceso independiente (uso propio o renta). Estado de conservación: muy bueno.
- **Ubicación:** Centenario 437, Playa Unión, Rawson, Chubut (lat -43.3134282, lng -65.0413234 según la ficha). Servicios: agua, luz, gas natural, cloacas, alumbrado público.
- **Oferta:** **VENTA, USD 180.000** (confirmado por el corredor; la ficha web decía alquiler ARS 1.200.000, ignorar). Terreno: **297 m²** (9,90 × 30,00 m, parcela 10, manzana 12; consta en ambos planos municipales). Superficie total aprox. **150 m²** (dato del usuario; los planos dan cifras menores y distintas: 51,97 + 28,92 m² en el de 2000, ~81 m² aprobados en el de ampliación). Publicar como "aprox. 150 m²" **solo tras validarlo con el corredor**. Forma de pago: **contado; se evalúan otras opciones** (a validar con el corredor antes de publicar; no prometer financiación). Antigüedad: casa original aprobada en 1965 (según plano). Orientación: PENDIENTE.
- **Estado:** disponible (según ficha)
- **Contacto específico:** usa el WhatsApp de la firma (`https://wa.me/5492804503151`)
- **Fuente de datos:** https://www.ipropietas.com.ar/listing_details_05/4d0b2764-156f-4a4e-a1e7-cb13f6d4095a

## Identidad
- **Marca propia del desarrollo:** no — usa solo la identidad Propietas (azul `#2e3092` / celeste `#27aae1`, Montserrat)
- **Rol de Propietas:** comercializadora (logo en header/footer + pie legal)
- **Paleta / tipografía:** manual de marca; ver DESIGN.md cuando exista

## Técnico
- **Stack:** delegado → HTML/CSS estático + `main.js` mínimo, mobile-first. Archivos: `index.html`, `styles.css`, `main.js`. Preview local: `python3 -m http.server` en esta carpeta.
- **Dirección visual:** "plano de obra redibujado" (brief en `.impeccable/surfaces/index-html.md`): azul Propietas como fondo, líneas blancas y cotas celestes, hojas blancas para fotos. El esquema del terreno es ilustrativo y no a escala.
- **Esquema:** vivienda redibujada desde el relevamiento; galería y local existen de hecho y no figuran en el plano (línea punteada; ubicación del local indicativa: confirmar).
- **Planos:** `assets/planos/plano-01..07.jpeg` (fotos de planos municipales, uso interno). **Contienen nombres de propietarios anteriores y firmas: no publicarlos tal cual.** Si se muestran, redibujar o recortar solo la planta, sin carátula.
- **Assets:** `assets/logos/` (5 variantes copiadas) y `assets/img/foto-01..30.jpeg` (fotos del slider de la ficha, sin editar; falta revisar orden, descartar repetidas y escribir `alt`)
- **Deploy:** Vercel (propuesto) — publicar solo con confirmación del usuario

## Contexto de diseño
- `PRODUCT.md` (impeccable init) y `DESIGN.md` (cuando exista) son la fuente de verdad visual y de producto.

## Pendientes
- **Validar con el corredor:** superficie total aprox. 150 m² (vs. planos) y forma de pago (contado, se evalúan otras opciones)
- Orientación, impuestos si aplican
- Detalle de "otras opciones" (financiación, permuta): no inventar
- Confirmar que el local comercial está habilitado/habilitable (los planos aclaran que la aprobación no implica habilitación)
- Revisar y ordenar las 30 fotos; confirmar que se pueden usar
- Validar pie legal con el corredor
- Instagram/redes de la firma sin confirmar

## Estado (23/10/2026)
- Sitio construido y revisado en escritorio y celular. Pendiente: revisión final (finish review de impeccable), `DESIGN.md`, pulido de movimiento y prueba en celular real.
- Resuelto: el cartel de un comercio en el local no se muestra. `assets/img/web/v04.jpeg` es un recorte de `foto-04` que deja solo el frente de la casa; se descartó la foto del local (v01). El local comercial se describe solo con texto. Prioridad: la casa.
- Varias fotos muestran objetos personales (cochecito, ropa): revisar antes de publicar.
- La ficha de ipropietas.com.ar dice oficina en Gregorio Mayo 106; `_shared/inmobiliaria.md` dice 118. Se usó 118: confirmar.
- `og:image` necesita URL absoluta tras el deploy.
- "Superficie total aprox. 150 m² (a confirmar)" y forma de pago "contado, se evalúan otras opciones" están publicadas en el sitio: validar con el corredor.
