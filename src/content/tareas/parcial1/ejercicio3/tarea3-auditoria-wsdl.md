---
title: "Tarea 3: Auditoría del contrato WSDL"
description: "Evaluación de los datos expuestos por el contrato SOAP y de los riesgos de seguridad y acoplamiento."
pubDate: 2026-08-31
parcial: "parcial-1"
---

**Materia:** Integración de Aplicaciones Computacionales  
**Nombre:** Santiago López Cervantes  
**Matrícula:** 612956  
**Grupo y hora:** MyV, 4:00 p.m.  
**Fecha:** 2026-08-31

## Introducción

El WSDL funciona como una superficie pública: define capacidades y datos necesarios, pero no debe revelar la estructura completa de PostgreSQL. Auditarlo ayuda a limitar exposición y acoplamiento.

## Objetivo

Analizar operación por operación qué datos se exponen, cuáles se transforman y cuáles se ocultan, justificando las decisiones.

## Auditoría

| Dato | Operación | Exposición | Justificación |
| :--- | :--- | :--- | :--- |
| ISBN, título y concepto | ObtenerConceptosPendientes | Sí | Identificar la clasificación |
| Categoría | ObtenerConceptosPendientes | Sí | Contextualizar el concepto |
| Modelo Cloud | RegistrarClasificacion | Sí | Dato de negocio validado |
| Credenciales de BD | Ninguna | No | Secreto interno |
| Claves internas de auditoría | Sólo si aplica | Transformada | Evitar acoplar el cliente |

## Riesgos y mitigaciones

* Exponer columnas internas puede facilitar enumeración; se usan tipos de respuesta específicos.
* Copiar nombres de tablas acopla cliente y base de datos; se exponen conceptos de negocio.
* Agregar campos obligatorios rompe clientes; se versiona el contrato o se agregan campos opcionales.

## Conclusión

Un contrato estricto mejora seguridad y mantenibilidad porque separa la interfaz pública del modelo interno. La auditoría debe repetirse ante cada nueva operación o cambio de datos.

## Referencias consultadas

1. W3C. *Web Services Description Language 1.1*. https://www.w3.org/TR/2001/NOTE-wsdl-20010315
2. OWASP Foundation. *API Security Top 10*. https://owasp.org/www-project-api-security/
