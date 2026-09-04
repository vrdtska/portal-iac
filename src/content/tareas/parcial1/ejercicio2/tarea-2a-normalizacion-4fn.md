---
title: "Tarea 2a: Reporte de normalización 4FN"
description: "Evolución del modelo de datos de la librería desde una estructura no normalizada hasta la cuarta forma normal."
pubDate: 2026-08-31
parcial: "parcial-1"
---

**Materia:** Integración de Aplicaciones Computacionales  
**Nombre:** Santiago López Cervantes  
**Matrícula:** 612956  
**Grupo y hora:** MyV, 4:00 p.m.  
**Fecha:** 2026-08-31

## Introducción

La normalización permite organizar los datos de la librería, reducir redundancia y proteger la integridad de las relaciones. Este reporte documenta la transformación desde una estructura con listas repetidas hasta un modelo que cumple 1FN, 2FN, 3FN/BCNF y 4FN.

## Objetivo

Identificar dependencias funcionales y multivaluadas, justificar las tablas puente y publicar el modelo final junto con el archivo de normalización y el diagrama ER.

## Desarrollo

La estructura inicial mezclaba libro, autores, géneros, conceptos e imágenes en un mismo registro. En 1FN se eliminan listas y grupos repetitivos. En 2FN se separan atributos que no dependen de toda una clave compuesta. En 3FN/BCNF se eliminan dependencias transitivas. En 4FN se separan las dependencias multivaluadas independientes mediante `book_authors`, `book_genres`, `book_concepts` y `book_images`.

| Producto | Contenido | Evidencia |
| :--- | :--- | :--- |
| Normalización | Etapas 1FN a 4FN | `docs/NORMALIZATION_4FN.xlsx` |
| Diagrama ER | Entidades, PK y FK | `docs/DB_DESIGN_ER_4FN.png` |
| Esquema | Restricciones e índices | `db/01_schema.sql` |
| Datos | Registros sintéticos | `db/02_seed_30_per_table.sql` |

## Conclusión

La separación de las relaciones multivaluadas evita duplicación y anomalías de inserción, actualización y eliminación. El modelo en 4FN representa cada hecho independiente una sola vez y permite ampliar el catálogo sin convertir `books` en una tabla difícil de mantener.

## Referencias consultadas

1. Elmasri, R. y Navathe, S. *Fundamentals of Database Systems*.
2. PostgreSQL Global Development Group. *PostgreSQL Documentation*. https://www.postgresql.org/docs/
3. Material de clase de Bases de Datos Avanzadas.
