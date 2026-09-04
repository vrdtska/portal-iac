---
title: "Tarea 2: Mapa conceptual comparativo de modelos Cloud"
description: "Comparación de IaaS, PaaS, SaaS y FaaS mediante sus responsabilidades, características, ventajas y ejemplos reales."
pubDate: 2026-08-08
parcial: "parcial-1"
---

**Materia:** Integración de Aplicaciones Computacionales

**Nombre:** Santiago López Cervantes

**Matrícula:** 612956

**Grupo y hora:** MyV, 4:00 p.m.

**Fecha:** 2026-08-08

## Introducción

Los modelos de servicio Cloud definen cuánto administra el proveedor y cuánto control conserva el cliente. Compararlos permite relacionar el nivel de control, la abstracción, la escalabilidad y la responsabilidad operativa con necesidades concretas de una organización. Este trabajo presenta un mapa conceptual que organiza las diferencias entre IaaS, PaaS, SaaS y FaaS, y las vincula con servicios reales de proveedores Cloud.

## Objetivo

Comprender y representar visualmente las diferencias entre IaaS, PaaS, SaaS y FaaS, relacionándolas con servicios reales y justificando la ubicación de FaaS o Serverless dentro del continuo de abstracción.

## Desarrollo

### Relación general

```text
Mayor control del usuario -> IaaS -> PaaS -> FaaS/Serverless -> SaaS -> Mayor abstracción
```

### Comparación de modelos

| Modelo | Definición | Administra principalmente el proveedor | Administra principalmente el cliente | Ejemplo real |
| :--- | :--- | :--- | :--- | :--- |
| IaaS | Infraestructura virtualizada bajo demanda | Hardware, red física y virtualización | Sistema operativo, aplicaciones y datos | Amazon EC2 |
| PaaS | Plataforma administrada para desarrollar y desplegar aplicaciones | Infraestructura, sistema operativo y runtime | Código, configuración y datos | Google App Engine |
| SaaS | Aplicación lista para utilizarse | Infraestructura, plataforma, aplicación y actualizaciones | Uso, configuración y contenido | Microsoft 365 |
| FaaS | Ejecución de funciones bajo demanda y orientada a eventos | Servidores, runtime, escalado y disponibilidad de la plataforma | Código de la función y configuración | AWS Lambda |

IaaS ofrece el mayor control y también exige más administración al cliente. PaaS reduce la gestión de infraestructura para concentrarse en el desarrollo. SaaS proporciona la mayor abstracción y permite consumir una aplicación terminada. FaaS se ubica cerca del extremo de mayor abstracción porque oculta los servidores y escala la ejecución según los eventos, aunque el cliente todavía administra el código de sus funciones.

### Mapa conceptual

Inserta aquí la imagen en alta resolución o la versión embebida del mapa conceptual.

### Evidencia

* Enlace al mapa original: pendiente de agregar.
* Imagen exportada del mapa: pendiente de agregar.
* Explicación de las relaciones: incluida en la comparación anterior.

## Conclusión

La comparación muestra que los modelos Cloud no son categorías aisladas, sino puntos dentro de un continuo que va del control directo de la infraestructura a la utilización de software terminado. IaaS permite personalizar más componentes, mientras que PaaS, FaaS y SaaS delegan progresivamente la administración al proveedor. FaaS combina el enfoque orientado a eventos con la reducción de tareas operativas, por lo que resulta útil para procesos breves y escalables. La elección correcta depende del control requerido, las capacidades del equipo, el nivel de abstracción deseado y las responsabilidades que la organización está preparada para asumir.

## Referencias consultadas

1. National Institute of Standards and Technology. *The NIST Definition of Cloud Computing*. https://doi.org/10.6028/NIST.SP.800-145
2. Amazon Web Services. *Types of Cloud Computing*. https://aws.amazon.com/types-of-cloud-computing/
3. Microsoft Azure. *What is PaaS?*. https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-paas
4. Google Cloud. *What is Serverless?*. https://cloud.google.com/discover/what-is-serverless