---
title: "Tarea 2c: Evaluación arquitectónica"
description: "Análisis de los trade-offs del monolito server-side frente a componentes desacoplados y microservicios."
pubDate: 2026-08-31
parcial: "parcial-1"
---

**Materia:** Integración de Aplicaciones Computacionales  
**Nombre:** Santiago López Cervantes  
**Matrícula:** 612956  
**Grupo y hora:** MyV, 4:00 p.m.  
**Fecha:** 2026-08-31

## Introducción

La arquitectura monolítica server-side concentra la presentación, la lógica y el acceso a datos en una unidad desplegable. En este escenario debe evaluarse por su adecuación al alcance, tamaño del equipo y necesidades reales, sin sustituir la arquitectura solicitada.

## Análisis

Node.js, Express y EJS permiten construir un flujo directo entre formularios, rutas, servicios y PostgreSQL. Para un equipo pequeño, esta opción reduce la cantidad de procesos operativos, facilita el despliegue y permite depurar el sistema completo desde un solo proyecto. La separación interna por módulos conserva mantenibilidad sin introducir llamadas de red entre componentes.

Su principal limitación es que todo el sistema comparte ciclo de despliegue y recursos. Un cambio en administración puede requerir publicar también el catálogo, y el escalamiento no puede ajustarse de forma independiente por dominio. Un diseño desacoplado permitiría desplegar componentes por separado, pero exigiría contratos, observabilidad distribuida, autenticación entre servicios y mayor disciplina operativa. Los microservicios incrementarían todavía más la complejidad, por lo que no son proporcionales al tamaño de este ejercicio.

## Conclusión

El monolito server-side es adecuado para un prototipo académico y un equipo pequeño porque reduce complejidad, costo y tiempo de operación. La migración a componentes desacoplados solo se justificaría por crecimiento independiente de módulos, equipos separados, requisitos de disponibilidad diferenciados o necesidad de escalar partes concretas. La organización modular actual permite evolucionar gradualmente sin asumir desde el inicio el costo de microservicios.

## Referencias consultadas

1. Fowler, M. *MonolithFirst*. https://martinfowler.com/bliki/MonolithFirst.html
2. Node.js. *Documentation*. https://nodejs.org/docs/latest/api/
3. Express.js. *Express web framework*. https://expressjs.com/
