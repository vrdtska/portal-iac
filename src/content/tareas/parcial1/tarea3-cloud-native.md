---
title: "Tarea 3: Miniensayo Cloud-Native vs. Cloud-Enabled"
description: "Análisis técnico de una aplicación real para determinar si es Cloud-Native, Cloud-Enabled o una combinación de ambos."
pubDate: 2026-08-08
parcial: "parcial-1"
---

**Materia:** Integración de Aplicaciones Computacionales

**Nombre:** Santiago López Cervantes

**Matrícula:** 612956

**Grupo y hora:** MyV, 4:00 p.m.

**Fecha:** 2026-08-17

## Introducción

La adopción de servicios Cloud no convierte automáticamente a una aplicación en Cloud-Native. Una aplicación Cloud-Enabled puede ejecutarse en la nube y aprovechar algunos servicios administrados, pero conservar una arquitectura diseñada originalmente para otro entorno. En cambio, una aplicación Cloud-Native se diseña alrededor de características como elasticidad, automatización, observabilidad, tolerancia a fallos y despliegues frecuentes. Este miniensayo propone analizar una aplicación real con esos criterios para distinguir ambos enfoques.

## Aplicación seleccionada

**Aplicación:** [Escribe aquí la aplicación, plataforma o sistema elegido]

**Clasificación propuesta:** [Cloud-Native / Cloud-Enabled / combinación]

## Análisis tecnológico

### Arquitectura

Describe si la aplicación utiliza un monolito, microservicios o una combinación, y explica cómo se comunican sus componentes mediante APIs.

### Infraestructura y despliegue

Explica el uso de contenedores, orquestación, infraestructura como código, DevOps y CI/CD. Indica si el sistema puede desplegarse y actualizarse sin depender de operaciones manuales.

### Datos y escalabilidad

Analiza el uso de bases de datos administradas, almacenamiento Cloud, escalabilidad horizontal y elasticidad. Señala cómo responde la aplicación ante cambios en la demanda.

### Disponibilidad y operación

Describe la alta disponibilidad, la tolerancia a fallos y la observabilidad mediante logs, métricas y trazas. Incluye el uso de servicios serverless o FaaS cuando sea relevante.

## Argumentación Cloud-Native o Cloud-Enabled

La clasificación debe sustentarse en evidencias técnicas y no únicamente en el proveedor Cloud utilizado. Una aplicación será principalmente Cloud-Native si sus componentes, procesos de despliegue y mecanismos de operación aprovechan de forma integral las capacidades de la nube. Será principalmente Cloud-Enabled si fue trasladada a la nube con pocos cambios y mantiene dependencias de una arquitectura tradicional. También puede considerarse una combinación cuando diferentes partes del sistema presentan niveles de modernización distintos.

## Conclusión

El análisis de una aplicación real permite distinguir entre hospedar un sistema en la nube y diseñarlo para aprovechar sus capacidades. La clasificación final debe considerar la arquitectura, el despliegue, la escalabilidad, la disponibilidad, la observabilidad y la automatización. Con base en estos criterios, la etiqueta Cloud-Native o Cloud-Enabled representa una conclusión técnica que debe acompañarse de evidencias y reconocer que una misma plataforma puede contener componentes con características diferentes.

## Evidencias

* Aplicación seleccionada: pendiente de documentar.
* Diagrama o imágenes relevantes: pendiente de agregar.
* Fuentes técnicas utilizadas: incluidas en la sección de referencias.

## Referencias consultadas

1. Cloud Native Computing Foundation. *Cloud Native Definition*. https://github.com/cncf/toc/blob/main/DEFINITION.md
2. National Institute of Standards and Technology. *The NIST Definition of Cloud Computing*. https://doi.org/10.6028/NIST.SP.800-145
3. Amazon Web Services. *What is Cloud Computing?*. https://aws.amazon.com/what-is-cloud-computing/
4. Microsoft Azure. *What is cloud-native?*. https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-native