---
title: "Tarea 5: Medición técnica y reflexión SOAP"
description: "Métricas del servicio SOAP para una comparación posterior con REST y reflexión sobre sus decisiones técnicas."
pubDate: 2026-09-07
parcial: "parcial-1"
---

**Materia:** Integración de Aplicaciones Computacionales  
**Nombre:** Santiago López Cervantes  
**Matrícula:** 612956  
**Grupo y hora:** MyV, 4:00 p.m.  
**Fecha:** 2026-09-07

## Introducción

Las métricas permiten comparar tecnologías con datos observables. En SOAP interesa medir esfuerzo, tamaño de mensajes y proporción de estructura XML frente a datos de negocio, conservando el mismo criterio para una comparación posterior con REST.

## Objetivo

Registrar tiempo de desarrollo, líneas de código, bytes de una solicitud y respuesta, y porcentaje aproximado de overhead XML.

## Registro de métricas

| Métrica | Valor |
| :--- | :--- |
| Tiempo de desarrollo | Pendiente de medir |
| Líneas del servicio | Pendiente de contar |
| Líneas del cliente | Pendiente de contar |
| Bytes de `RegistrarClasificacion` request | Pendiente de medir |
| Bytes de response | Pendiente de medir |
| Porcentaje de estructura XML | Pendiente de calcular |

## Reflexión

El Envelope, namespaces y elementos del contrato aportan estructura y validación, pero aumentan el tamaño del mensaje. SOAP se justifica cuando se necesitan contratos formales, Faults, políticas de seguridad o interoperabilidad empresarial; para intercambios ligeros y públicos puede convenir un formato más pequeño. Los cambios incompatibles en campos obligatorios requieren versionar el contrato o coordinar clientes.

## Conclusión

Medir antes de comparar evita conclusiones basadas únicamente en preferencias. Las métricas deben acompañarse del contexto de hardware, operación, tamaño de datos y herramienta utilizada.

## Referencias consultadas

1. W3C. *SOAP Version 1.2 Part 1*. https://www.w3.org/TR/soap12-part1/
2. W3C. *Web Services Description Language 1.1*. https://www.w3.org/TR/2001/NOTE-wsdl-20010315
