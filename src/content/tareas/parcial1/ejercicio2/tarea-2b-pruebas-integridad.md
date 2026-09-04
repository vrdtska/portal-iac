---
title: "Tarea 2b: Matriz de pruebas e integridad"
description: "Plan de pruebas positivas y negativas para validar la aplicación de librería y sus restricciones de PostgreSQL."
pubDate: 2026-08-31
parcial: "parcial-1"
---

**Materia:** Integración de Aplicaciones Computacionales  
**Nombre:** Santiago López Cervantes  
**Matrícula:** 612956  
**Grupo y hora:** MyV, 4:00 p.m.  
**Fecha:** 2026-08-31

## Introducción

Las pruebas deben demostrar que la aplicación funciona y que rechaza entradas o acciones peligrosas. Esta matriz relaciona cada caso con un requisito, su resultado esperado, el resultado observado y la evidencia correspondiente.

## Objetivo

Diseñar al menos quince pruebas funcionales, de autorización, integridad, validación, relaciones y despliegue.

## Matriz de pruebas

| ID | Requisito | Prueba | Resultado esperado | Observado | Estado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| P01 | RF-01 | Registro válido | Usuario creado | Pendiente | Pendiente |
| P02 | RF-01 | Login válido | Sesión iniciada | Pendiente | Pendiente |
| P03 | RF-01 | Logout | Sesión cerrada | Pendiente | Pendiente |
| P04 | RF-02 | Catálogo autenticado | Libros visibles | Pendiente | Pendiente |
| P05 | RF-02 | Búsqueda por ISBN | Coincidencia correcta | Pendiente | Pendiente |
| P06 | RF-03 | Crear libro | Registro creado | Pendiente | Pendiente |
| P07 | RF-03 | Editar autor | Cambio guardado | Pendiente | Pendiente |
| P08 | RF-03 | Eliminar género relacionado | Operación controlada | Pendiente | Pendiente |
| P09 | RF-04 | Asociar varios autores | Relaciones guardadas | Pendiente | Pendiente |
| P10 | RF-05 | Subir JPG válido | Archivo aceptado | Pendiente | Pendiente |
| N01 | RNF-02 | ISBN duplicado | Error `UNIQUE` | Pendiente | Pendiente |
| N02 | RNF-02 | Stock negativo | Error `CHECK` | Pendiente | Pendiente |
| N03 | RNF-02 | Precio inválido | Error `CHECK` | Pendiente | Pendiente |
| N04 | RNF-03 | Segundo Administrador | Operación rechazada | Pendiente | Pendiente |
| N05 | RNF-01 | Usuario regular en CRUD | Acceso denegado | Pendiente | Pendiente |
| N06 | RNF-04 | Consulta con caracteres especiales | Sin SQL Injection | Pendiente | Pendiente |

## Evidencias

Conserva pasos, entrada, salida, captura y conclusión de cada prueba en `docs/TEST_PLAN.md` o `docs/TEST_PLAN.xlsx`.

## Conclusión

Una matriz de pruebas relaciona los requisitos con resultados verificables y hace visibles los riesgos que todavía requieren corrección. Las pruebas negativas son especialmente importantes para demostrar la defensa de la base de datos y la autorización por roles.

## Referencias consultadas

1. OWASP Foundation. *OWASP Top 10*. https://owasp.org/www-project-top-ten/
2. PostgreSQL Global Development Group. *Constraints*. https://www.postgresql.org/docs/current/ddl-constraints.html
