---
title: "Tarea 2: SOAP Fault y experiencia de usuario"
description: "Manejo consistente de errores SOAP entre el servicio Flask y las aplicaciones de escritorio."
pubDate: 2026-09-07
parcial: "parcial-1"
---

**Materia:** Integración de Aplicaciones Computacionales  
**Nombre:** Santiago López Cervantes  
**Matrícula:** 612956  
**Grupo y hora:** MyV, 4:00 p.m.  
**Fecha:** 2026-09-07

## Introducción

Los errores forman parte del contrato de integración. Un SOAP Fault bien definido permite que el cliente distinga una entrada inválida, un conflicto o una falla del servidor sin revelar detalles internos.

## Objetivo

Provocar y documentar Faults de clasificación duplicada, concepto inexistente, XML inválido y modelo Cloud no permitido, mostrando mensajes útiles en la GUI.

## Matriz de pruebas

| Caso | Fault esperado | Mensaje al usuario | Detalle en logs |
| :--- | :--- | :--- | :--- |
| Clasificación duplicada | Conflicto 409 | Clasificación ya registrada | Clave y contexto técnico |
| Concepto inexistente | Fault de cliente | Concepto no encontrado | Consulta identificada |
| XML inválido | Fault de cliente | Solicitud inválida | Error de parsing |
| Modelo inválido | Fault de validación | Modelo no permitido | Entrada rechazada |
| PostgreSQL fuera de servicio | Fault de servidor | Servicio temporalmente no disponible | Error técnico completo |

## Conclusión

El servicio debe comunicar una categoría clara de error y la GUI debe traducirla a un mensaje comprensible. Stack traces, contraseñas, rutas y SQL deben permanecer exclusivamente en logs protegidos.

## Referencias consultadas

1. W3C. *SOAP 1.2 Faults*. https://www.w3.org/TR/soap12-part1/#faultcodes
2. OWASP Foundation. *Error Handling Cheat Sheet*. https://cheatsheetseries.owasp.org/cheatsheets/Error_Handling_Cheat_Sheet.html
