---
title: "Tarea 4: Interoperabilidad SOAP"
description: "Consumo del mismo servicio SOAP desde un cliente generado en un lenguaje diferente al servidor."
pubDate: 2026-09-07
parcial: "parcial-1"
---

**Materia:** Integración de Aplicaciones Computacionales  
**Nombre:** Santiago López Cervantes  
**Matrícula:** 612956  
**Grupo y hora:** MyV, 4:00 p.m.  
**Fecha:** 2026-09-07

## Introducción

La interoperabilidad es una ventaja de los contratos SOAP: distintos lenguajes pueden consumir el servicio si respetan el WSDL y los tipos XSD. Esta tarea compara un cliente manual con otro generado a partir del contrato.

## Objetivo

Crear un cliente en una tecnología diferente a Flask, consumir `ObtenerConceptosPendientes` y `RegistrarClasificacion`, y documentar el proceso.

## Desarrollo

**Servidor:** Flask/Python.  
**Cliente generado:** [Java con `wsimport`, .NET con `dotnet-svcutil` o Python con `zeep`].  
**Endpoint:** pendiente de agregar.

El cliente debe generarse usando el WSDL publicado, enviar una solicitud válida, procesar la respuesta y demostrar que no necesita conocer las tablas ni la implementación interna.

## Comparación

| Aspecto | Cliente manual | Cliente generado |
| :--- | :--- | :--- |
| Construcción XML | Explícita | Automatizada desde WSDL |
| Control del Envelope | Alto | Delegado a la herramienta |
| Dependencia principal | Parser XML | Código generado y contrato |
| Objetivo de la prueba | Comprender SOAP | Demostrar interoperabilidad |

## Evidencias

Agrega herramienta, lenguaje, comando de generación, código relevante, capturas y resultados de ambas operaciones.

## Conclusión

El WSDL permite separar el contrato de la implementación y facilita integrar clientes heterogéneos. El cliente manual ayuda a comprender el protocolo, mientras que el generado reduce código repetitivo; ambos deben validarse contra el mismo contrato.

## Referencias consultadas

1. W3C. *Web Services Description Language 1.1*. https://www.w3.org/TR/2001/NOTE-wsdl-20010315
2. Python Zeep Documentation. https://docs.python-zeep.org/
3. Oracle. *wsimport tool*. https://docs.oracle.com/javase/8/docs/technotes/tools/windows/wsimport.html
