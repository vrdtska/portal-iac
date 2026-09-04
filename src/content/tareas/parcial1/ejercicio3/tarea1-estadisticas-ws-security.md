---
title: "Tarea 1: Estadísticas por modelo y WS-Security"
description: "Extensión compatible del servicio SOAP para obtener estadísticas Cloud y proteger una operación sensible."
pubDate: 2026-08-31
parcial: "parcial-1"
---

**Materia:** Integración de Aplicaciones Computacionales  
**Nombre:** Santiago López Cervantes  
**Matrícula:** 612956  
**Grupo y hora:** MyV, 4:00 p.m.  
**Fecha:** 2026-08-31

## Introducción

Un contrato SOAP puede evolucionar sin romper a sus clientes si las nuevas operaciones se agregan de forma compatible. Esta tarea incorpora estadísticas por modelo y protege la operación sensible mediante autenticación basada en WS-Security.

## Objetivo

Agregar `ObtenerEstadisticasPorModelo`, actualizar WSDL/XSD y validar solicitudes autenticadas y rechazadas.

## Desarrollo

La operación devuelve el conteo de clasificaciones para IaaS, PaaS, SaaS y FaaS. El WSDL conserva las operaciones anteriores y define el nuevo mensaje, respuesta y tipos XSD. El encabezado de seguridad valida usuario y contraseña sin almacenar credenciales en texto plano ni mostrarlas en evidencias.

## Evidencias

* WSDL y XSD actualizados.
* Solicitud autenticada y respuesta.
* Prueba con credenciales incorrectas.
* Explicación de la decisión de seguridad.

## Conclusión

La compatibilidad del contrato protege a los clientes existentes, mientras que WS-Security permite controlar operaciones sensibles a nivel de mensaje. La autenticación debe probarse con credenciales válidas e inválidas y mantenerse fuera de los archivos públicos.

## Referencias consultadas

1. OASIS. *Web Services Security UsernameToken Profile*. https://docs.oasis-open.org/wss-m/wss/v1.1.1/
2. W3C. *SOAP Version 1.2*. https://www.w3.org/TR/soap12-part1/
