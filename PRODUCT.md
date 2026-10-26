# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Delegated (el usuario dejó la decisión): HTML/CSS estático, mobile-first, sin build. Deploy propuesto en Vercel, solo con confirmación explícita.

## Users
Compradores e inversores locales y de la región (Rawson, Trelew, Playa Unión) que llegan por WhatsApp o redes, mayormente desde el celular. Quieren saber rápido qué es, dónde está, cuánto cuesta y cómo consultar. El brochure habla a tres perfiles sin priorizar ninguno (confirmado): quien busca vivienda y negocio en el mismo lote, quien invierte por el local, y la familia que quiere casa en Playa Unión.

## Product Purpose
Brochure web de una propiedad única en venta de Propietas Inmobiliaria. Éxito = consultas calificadas por WhatsApp (`https://wa.me/5492804503151`) para coordinar visita.

## Positioning
Casa con local comercial independiente sobre la avenida Centenario, a unos 100 m del mar en Playa Unión, con parque y dos parrillas. La combinación vivienda + local con acceso propio a calle + cercanía a la costa es lo que ninguna casa común del barrio ofrece.

## Operating Context
Operación de venta cerrada por la firma: Propietas Inmobiliaria, corredor Lisandro E. Prada Toledo, M.P. Nº 117 COCICH. Datos de contacto y pie legal salen de `../_shared/inmobiliaria.md` (copiados al proyecto, no referenciados).

## Capabilities and Constraints
- **Precio:** USD 140.000, venta (confirmado por el corredor; la ficha web decía alquiler, ignorar).
- **Ubicación:** Centenario 437, Playa Unión, Rawson, Chubut. A ~100 m de la costa.
- **Terreno:** 297 m² (9,90 × 30,00 m), consta en los planos municipales.
- **Superficie total:** aprox. 150 m² (dato del usuario, **a validar con el corredor**; los planos muestran cifras menores y distintas).
- **Forma de pago:** contado; se evalúan otras opciones (**a validar con el corredor**). No prometer financiación ni permuta.
- **Vivienda:** living, comedor, 2 dormitorios, cocina con parrilla interior, 1 baño con jacuzzi. Exterior: parque, galería semicubierta con parrilla. Estado muy bueno según ficha.
- **Local comercial:** solo se puede decir que existe y tiene acceso independiente a la calle. No afirmar habilitación, rubro, alquiler ni renta (confirmado).
- **Servicios:** agua corriente, energía eléctrica, gas natural, red cloacal, alumbrado público.
- **Indefinido (no inventar):** antigüedad exacta (casa original aprobada en 1965 según plano), orientación, impuestos, detalle de "otras opciones" de pago, condiciones de escritura.
- Sin promesas de rentabilidad, plazos ni financiación.

## Brand Commitments
Solo identidad Propietas (sin marca propia del inmueble): azul `#2e3092`, celeste `#27aae1`, Montserrat, logo según `brand-manual.md`, voseo rioplatense cercano y concreto, sin superlativos vacíos. Textos en español rioplatense.

## Evidence on Hand
- 30 fotos en `assets/img/foto-01..30.jpeg` (slider de la ficha de ipropietas.com.ar; el usuario confirmó usar esas 30; falta seleccionar, ordenar y escribir `alt`).
- 7 fotos de planos municipales en `assets/planos/` (uso interno): llevan nombres de propietarios anteriores y firmas, no publicarlas tal cual; si se muestra una planta, redibujarla o recortarla sin carátula.
- 5 logos de Propietas en `assets/logos/`.
- Sin testimonios, métricas ni prueba social: no inventar.

## Product Principles
- Decir solo lo confirmado; lo que falta queda como PENDIENTE o se omite.
- El celular manda: precio, ubicación y botón de WhatsApp visibles sin scrollear de más.
- Las fotos de la casa y la cercanía al mar son la prueba; el texto acompaña.
- Un solo camino de contacto: WhatsApp.

## Accessibility & Inclusion
Contraste AA en texto (el celeste no alcanza sobre blanco en texto chico); `alt` en todas las imágenes; respetar `prefers-reduced-motion`; Ñ y acentos soportados.
