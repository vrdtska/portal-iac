---
title: "Tarea 1: Implementación del clasificador Cloud en Python"
description: "Reimplementación del clasificador Cloud en Python con GUI, CLI, NLP básico y separación de responsabilidades."
pubDate: 2026-08-08
parcial: "parcial-1"
---

**Materia:** Integración de Aplicaciones Computacionales

**Nombre:** Santiago López Cervantes

**Matrícula:** 612956

**Grupo y hora:** MyV, 4:00 p.m.

**Fecha:** 2026-08-08

## Introducción

Los modelos IaaS, PaaS, SaaS y FaaS representan diferentes niveles de abstracción en los servicios de computación en la nube. En esta tarea se retoma el clasificador desarrollado en Java y se implementa una versión equivalente en Python, conservando la separación entre la interfaz y la lógica de clasificación. La solución incorpora una interfaz gráfica, una interfaz de línea de comandos y técnicas básicas de Procesamiento de Lenguaje Natural para analizar descripciones de servicios Cloud.

## Objetivo

Reimplementar y mejorar en Python el clasificador desarrollado en Java, aplicando separación de responsabilidades, validación de datos, manejo de errores, NLP básico y reutilización de componentes entre la GUI y la CLI.

## Desarrollo de la solución

### Arquitectura

La aplicación se organiza en componentes independientes:

* **Clasificador:** procesa el texto, identifica conceptos relevantes y asigna puntuaciones a IaaS, PaaS, SaaS y FaaS.
* **Interfaz gráfica:** captura el nombre, apellido y descripción del usuario, y presenta el resultado.
* **Interfaz CLI:** recibe la descripción mediante `argparse` y reutiliza el mismo clasificador.
* **Procesamiento de texto:** convierte a minúsculas, limpia la entrada, tokeniza y normaliza los términos antes de clasificarlos.

### Interfaz gráfica

La GUI debe permitir capturar el nombre y apellido del usuario, introducir una descripción relacionada con un servicio Cloud y mostrar claramente el modelo identificado. También debe validar campos vacíos y comunicar los errores de entrada sin cerrar inesperadamente la aplicación.

### Interfaz de línea de comandos

La CLI se ejecuta mediante `argparse` y comparte la lógica central con la GUI:

```bash
python classifier.py --text "ejecutar una función cuando se suba una imagen"
```

Resultado esperado:

```text
Modelo identificado: FaaS
```

### Pruebas

| Entrada | Resultado esperado | Resultado obtenido | ¿Fue correcta? |
| :--- | :--- | :--- | :--- |
| "Necesito máquinas virtuales, almacenamiento y redes configurables para instalar mi propio sistema operativo." | IaaS | Pendiente de registrar | Pendiente |
| "Quiero desplegar mi aplicación web sin administrar directamente servidores ni sistemas operativos." | PaaS | Pendiente de registrar | Pendiente |
| "Los empleados utilizan una aplicación de correo electrónico directamente desde el navegador y pagan una suscripción mensual." | SaaS | Pendiente de registrar | Pendiente |
| "Necesito ejecutar una función automáticamente cada vez que un usuario suba una imagen al almacenamiento Cloud." | FaaS | Pendiente de registrar | Pendiente |
| "Hola computadora dame una manzana y hazme la tarea." | Indeterminado | Pendiente de registrar | Pendiente |

### Evidencias

Agrega aquí las capturas de la GUI y la CLI, así como el enlace al repositorio y al código comprimido.

## Conclusión

La implementación en Python permite trasladar el clasificador Cloud a un lenguaje distinto sin perder la organización de la solución original. La reutilización del mismo componente de clasificación en la GUI y la CLI evita duplicar reglas y facilita las pruebas. Además, el preprocesamiento del texto y la asignación de puntuaciones ofrecen una base más flexible que la búsqueda directa de palabras clave. La validación final debe confirmar los cinco casos de prueba y demostrar que las entradas ambiguas se reportan como indeterminadas.

## Referencias consultadas

1. National Institute of Standards and Technology. *The NIST Definition of Cloud Computing*. https://doi.org/10.6028/NIST.SP.800-145
2. Python Software Foundation. *argparse — Parser for Command-Line Options, Arguments and Sub-commands*. https://docs.python.org/3/library/argparse.html
3. Python Software Foundation. *tkinter — Python interface to Tcl/Tk*. https://docs.python.org/3/library/tkinter.html
4. Stanford University. *The Stanford Natural Language Processing Group*. https://nlp.stanford.edu/
5. Proyecto de implementación del clasificador Cloud en GitHub. https://github.com/vrdtska/cloud-models-classifier

Aquí puedes escribir texto en **Markdown**, agregar listas y enlaces a [GitHub](https://github.com).

### Capturas de pantalla
Coloca tus imágenes en la carpeta `public/images/` y referéncialas así:
![Resultado del ejercicio](/images/captura1.png)

### Código
```c
#include <stdio.h>
int main() {
    printf("Hello, World!\n");
    return 0;
}