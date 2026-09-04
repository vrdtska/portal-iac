---
title: "Tarea 2d: Revisión de seguridad"
description: "Revisión de amenazas, controles aplicados y riesgos residuales de la aplicación monolítica de librería."
pubDate: 2026-08-31
parcial: "parcial-1"
---

**Materia:** Integración de Aplicaciones Computacionales  
**Nombre:** Santiago López Cervantes  
**Matrícula:** 612956  
**Grupo y hora:** MyV, 4:00 p.m.  
**Fecha:** 2026-08-31

## Introducción

La revisión de seguridad comprueba que la aplicación protege cuentas, datos, archivos y operaciones administrativas. Cada control debe asociarse con una amenaza y una prueba, no únicamente con una configuración.

## Objetivo

Identificar al menos ocho amenazas o errores posibles, documentar su mitigación y señalar el riesgo residual.

## Matriz de seguridad

| Amenaza | Control aplicado | Evidencia | Riesgo residual |
| :--- | :--- | :--- | :--- |
| Contraseñas expuestas | Hash seguro y política básica | Prueba de login | Ataques de credenciales reutilizadas |
| SQL Injection | Consultas parametrizadas con `pg` | Búsqueda con caracteres especiales | Errores futuros en consultas nuevas |
| Acceso administrativo indebido | Middleware de rol | Usuario regular recibe 403 | Fallo de una ruta no protegida |
| Robo de sesión | Cookies seguras, expiración y logout | Inspección de sesión | Riesgo en equipo comprometido |
| Upload peligroso | MIME, extensión, tamaño y nombre generado | Archivo rechazado | Vulnerabilidades de librerías de imágenes |
| Secretos publicados | Variables de entorno y `.env.example` | Revisión de repositorio | Mala configuración de despliegue |
| Errores internos expuestos | Mensajes controlados y logs privados | Prueba de error | Información en logs mal protegidos |
| Privilegios excesivos | Usuario PostgreSQL limitado | `GRANT` documentado | Daño dentro de permisos concedidos |
| Eliminación accidental | FK y confirmación de acciones | Prueba negativa | Error humano autorizado |

## Conclusión

La seguridad se construye en varias capas: identidad, autorización, datos, archivos, secretos, errores y permisos. Los controles reducen el riesgo, pero la revisión debe repetirse cuando se agreguen rutas, tablas, dependencias o cambios de infraestructura.

## Referencias consultadas

1. OWASP Foundation. *OWASP Top 10*. https://owasp.org/www-project-top-ten/
2. OWASP Foundation. *File Upload Cheat Sheet*. https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html
3. PostgreSQL Global Development Group. *Privileges*. https://www.postgresql.org/docs/current/ddl-priv.html
