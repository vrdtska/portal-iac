---
title: "Ejercicio Guiado 1: Clasificador de modelos de servicios Cloud con Inteligencia Artificial"
description: "Desarrollo de un clasificador de servicios Cloud (IaaS, PaaS, SaaS, FaaS) en Java utilizando reglas, Regex y procesamiento de lenguaje natural (NLP)."
pubDate: 2026-08-17
parcial: "parcial-1"
---
**Materia:** Integración de Aplicaciones Computacionales

**Nombre:** Santiago López Cervantes 

**Matrícula:** 612956 

**Grupo y Hora:** MyV, 4:00 p.m.

**Fecha:** 2026-08-17

## Introducción

La computación en la nube ofrece distintos modelos de servicio que distribuyen de manera diferente las responsabilidades entre el proveedor y el usuario. Identificar si un servicio corresponde a IaaS, PaaS, SaaS o FaaS es importante para comprender sus características y elegir la alternativa adecuada según las necesidades de una aplicación. En este ejercicio se desarrolla y evalúa un clasificador en Java capaz de reconocer estos modelos a partir de descripciones escritas en lenguaje natural. El trabajo muestra una evolución progresiva desde reglas y expresiones regulares hasta técnicas básicas de Procesamiento de Lenguaje Natural, además de su integración en interfaces gráfica y de línea de comandos.

## Objetivo
Desarrollar una aplicación capaz de analizar descripciones relacionadas con servicios de Cloud Computing y clasificarlas automáticamente como IaaS, PaaS, SaaS o FaaS. El desarrollo evoluciona desde un clasificador basado en reglas (Regex) hacia una solución básica de Procesamiento de Lenguaje Natural (NLP).

---

## Parte 1: Desarrollo inicial en Java

Se creó el proyecto denominado `cloud_models_classifier` en un entorno compatible con Java. La primera versión consistió en una aplicación de escritorio con interfaz gráfica (GUI) generada con apoyo de Inteligencia Artificial mediante el prompt establecido en las instrucciones.

* El programa solicita el nombre y apellido del usuario.
* Provee un campo de texto para escribir palabras o descripciones sobre servicios Cloud.
* Utiliza reglas sencillas y expresiones regulares para determinar la categoría correspondiente.
* Los resultados se muestran claramente en la interfaz.

<div class="my-8 not-prose flex justify-center">
  <a 
    href="https://github.com/vrdtska/cloud-models-classifier" 
    target="_blank" 
    rel="noopener noreferrer"
    class="inline-flex items-center gap-3 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 rounded-xl font-medium text-sm transition-all duration-200 shadow-lg shadow-black/20 hover:-translate-y-0.5 group w-fit no-underline">
    <svg class="w-5 h-5 fill-current text-slate-400 group-hover:text-white transition-colors" viewBox="0 0 24 24">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
    <span>Ver código fuente en GitHub</span>
    <svg class="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  </a>
</div>

<div class="my-8 not-prose flex justify-center">
  <a 
    href="https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/code/main.tar.gz" 
    download
    class="inline-flex items-center gap-3 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-emerald-500/50 rounded-xl font-medium text-sm transition-all duration-200 shadow-lg shadow-black/20 hover:-translate-y-0.5 group w-fit no-underline">
    <!-- Icono de archivo comprimido / descarga -->
    <svg class="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
    <span>Descargar código fuente</span>
    <span class="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">.tar.gz</span>
  </a>
</div>

---

## Parte 2: Ejecutar y analizar el prototipo

Se compiló y ejecutó la aplicación para verificar los siguientes puntos:
* Visualización correcta de la GUI.
* Introducción exitosa de nombre y apellido.
* Capacidad de análisis del texto introducido por el usuario.
* Distinción precisa entre IaaS, PaaS, SaaS y FaaS.

### Evidencia de funcionamiento
**Prueba para detección FaaS**
![Captura de pantalla de la GUI inicial funcionando y mostrando prueba FaaS](https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/prueba1/faas.png)
**Prueba para detección IaaS**
![Captura de pantalla de la GUI inicial funcionando y mostrando una IaaS](https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/prueba1/iaas.png)
**Prueba para detección Paas**
![Captura de pantalla de la GUI inicial funcionando y mostrando una PaaS](https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/prueba1/paas.png)
**Prueba para detección SaaS**
![Captura de pantalla de la GUI inicial funcionando y mostrando una SaaS](https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/prueba1/saas.png)
**Prueba para detección de texto ambiguo**
![Captura de pantalla de la GUI inicial funcionando y mostrando un texto ambiguo.](https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/prueba1/na.png)

---

## Parte 3: Mejorar la arquitectura de la aplicación

El código inicial fue analizado y refactorizado para mejorar su estructura. Se incorporaron las siguientes mejoras:
* Validación de entradas del usuario.
* Separación estricta entre la Interfaz Gráfica (GUI) y la lógica de clasificación.
* Implementación de métodos independientes para identificar IaaS, PaaS, SaaS y FaaS.
* Manejo básico de errores y excepciones.
* Adición de comentarios explicativos sobre las decisiones relevantes.

<div class="my-8 not-prose flex justify-center">
  <a 
    href="https://github.com/vrdtska/cloud-models-classifier/tree/refactorizado" 
    target="_blank" 
    rel="noopener noreferrer"
    class="inline-flex items-center gap-3 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 rounded-xl font-medium text-sm transition-all duration-200 shadow-lg shadow-black/20 hover:-translate-y-0.5 group w-fit no-underline">
    <svg class="w-5 h-5 fill-current text-slate-400 group-hover:text-white transition-colors" viewBox="0 0 24 24">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
    <span>Ver código fuente en GitHub</span>
    <svg class="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  </a>
</div>


<div class="my-8 not-prose flex justify-center">
  <a 
    href="https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/code/refactorizado.tar.gz" 
    download
    class="inline-flex items-center gap-3 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-emerald-500/50 rounded-xl font-medium text-sm transition-all duration-200 shadow-lg shadow-black/20 hover:-translate-y-0.5 group w-fit no-underline">
    <svg class="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
    <span>Descargar código fuente</span>
    <span class="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">.tar.gz</span>
  </a>
</div>


Se realizaron pruebas con distintas descripciones complejas, evitando usar explícitamente los términos IaaS, PaaS, SaaS o FaaS dentro del texto ingresado.

| Entrada | Clasificación esperada | Clasificación obtenida | ¿Fue correcta? |
| :--- | :--- | :--- | :--- |
| "Necesito máquinas virtuales, almacenamiento y redes configurables para instalar mi propio sistema operativo." | IaaS | **IaaS** | **Sí** |
| "Quiero desplegar mi aplicación web sin administrar directamente servidores ni sistemas operativos." | PaaS | **PaaS** | **Sí** |
| "Los empleados utilizan una aplicación de correo electrónico directamente desde el navegador y pagan una suscripción mensual." | SaaS | **SaaS** | **Sí** |
| "Necesito ejecutar una función automáticamente cada vez que un usuario suba una imagen al almacenamiento Cloud." | FaaS | **FaaS** | **Sí** |
| "Hola computadora dame una manzana y hazma la tarea. | Indeterminado" | **Indeterminado** | **Sí** |

### Evidencia de funcionamiento

**Prueba para detección FaaS**
![Captura de pantalla de la GUI inicial funcionando y mostrando prueba FaaS](https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/prueba2/faas.png)
**Prueba para detección IaaS**
![Captura de pantalla de la GUI inicial funcionando y mostrando una IaaS](https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/prueba2/iaas.png)
**Prueba para detección Paas**
![Captura de pantalla de la GUI inicial funcionando y mostrando una PaaS](https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/prueba2/paas.png)
**Prueba para detección SaaS**
![Captura de pantalla de la GUI inicial funcionando y mostrando una SaaS](https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/prueba2/saas.png)
**Prueba para detección de texto ambiguo**
![Captura de pantalla de la GUI inicial funcionando y mostrando un texto ambiguo.](https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/prueba2/na.png)

---

## Parte 5: Evolucionar de Regex hacia NLP

Para mejorar la precisión del clasificador, se sustituyeron las reglas estrictas por técnicas básicas de *Natural Language Processing* (NLP). El flujo implementado incluye:
* Conversión a minúsculas y limpieza de texto.
* Tokenización y eliminación de *stopwords*.
* Normalización, *stemming* o lematización.
* Asignación de puntuaciones (*scores*) ponderadas a cada categoría según los conceptos relevantes identificados.

<div class="my-8 not-prose flex justify-center">
  <a 
    href="https://github.com/vrdtska/cloud-models-classifier/tree/version_nlp" 
    target="_blank" 
    rel="noopener noreferrer"
    class="inline-flex items-center gap-3 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 rounded-xl font-medium text-sm transition-all duration-200 shadow-lg shadow-black/20 hover:-translate-y-0.5 group w-fit no-underline">
    <svg class="w-5 h-5 fill-current text-slate-400 group-hover:text-white transition-colors" viewBox="0 0 24 24">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
    <span>Ver código fuente en GitHub</span>
    <svg class="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  </a>
</div>

<div class="my-8 not-prose flex justify-center">
  <a 
    href="https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/code/version_nlp.tar.gz" 
    download
    class="inline-flex items-center gap-3 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-emerald-500/50 rounded-xl font-medium text-sm transition-all duration-200 shadow-lg shadow-black/20 hover:-translate-y-0.5 group w-fit no-underline">
    <!-- Icono de archivo comprimido / descarga -->
    <svg class="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
    <span>Descargar código fuente</span>
    <span class="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">.tar.gz</span>
  </a>
</div>

Se realizaron pruebas con distintas descripciones complejas, evitando usar explícitamente los términos IaaS, PaaS, SaaS o FaaS dentro del texto ingresado, las pruebas son las mismas que se utilizaron para el código refactorizado.

| Entrada | Clasificación esperada | Clasificación obtenida | ¿Fue correcta? |
| :--- | :--- | :--- | :--- |
| "Necesito máquinas virtuales, almacenamiento y redes configurables para instalar mi propio sistema operativo." | IaaS | **IaaS** | **Sí** |
| "Quiero desplegar mi aplicación web sin administrar directamente servidores ni sistemas operativos." | PaaS | **PaaS** | **Sí** |
| "Los empleados utilizan una aplicación de correo electrónico directamente desde el navegador y pagan una suscripción mensual." | SaaS | **SaaS** | **Sí** |
| "Necesito ejecutar una función automáticamente cada vez que un usuario suba una imagen al almacenamiento Cloud." | FaaS | **FaaS** | **Sí** |
| "Hola computadora dame una manzana y hazma la tarea. | Indeterminado" | **Indeterminado** | **Sí** |


**Prueba para detección FaaS**
![Captura de pantalla de la GUI inicial funcionando y mostrando prueba FaaS](https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/prueba3/FaaS.png)
**Prueba para detección IaaS**
![Captura de pantalla de la GUI inicial funcionando y mostrando una IaaS](https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/prueba3/IaaS.png)
**Prueba para detección Paas**
![Captura de pantalla de la GUI inicial funcionando y mostrando una PaaS](https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/prueba3/PaaS.png)
**Prueba para detección SaaS**
![Captura de pantalla de la GUI inicial funcionando y mostrando una SaaS](https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/prueba3/SaaS.png)
**Prueba para detección de texto ambiguo**
![Captura de pantalla de la GUI inicial funcionando y mostrando un texto ambiguo.](https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/prueba3/na.png)


---

## Parte 6: Interfaz de línea de comandos en Java (CLI)

Finalmente, se desarrolló una interfaz de línea de comandos (CLI) que reutiliza exactamente la misma lógica de clasificación central (NLP + Scoring) utilizada por la GUI.

Se realizaron pruebas con distintas descripciones complejas, evitando usar explícitamente los términos IaaS, PaaS, SaaS o FaaS dentro del texto ingresado, las pruebas son las mismas que se utilizaron para el código refactorizado y el código NLP.


| Entrada | Clasificación esperada | Clasificación obtenida | ¿Fue correcta? |
| :--- | :--- | :--- | :--- |
| "Necesito máquinas virtuales, almacenamiento y redes configurables para instalar mi propio sistema operativo." | IaaS | **IaaS** | **Sí** |
| "Quiero desplegar mi aplicación web sin administrar directamente servidores ni sistemas operativos." | PaaS | **PaaS** | **Sí** |
| "Los empleados utilizan una aplicación de correo electrónico directamente desde el navegador y pagan una suscripción mensual." | SaaS | **SaaS** | **Sí** |
| "Necesito ejecutar una función automáticamente cada vez que un usuario suba una imagen al almacenamiento Cloud." | FaaS | **FaaS** | **Sí** |
| "Hola computadora dame una manzana y hazma la tarea. | Indeterminado" | **Indeterminado** | **Sí** |


### Evidencia de ejecución 
**Prueba para detección FaaS**
![Captura de pantalla de la GUI inicial funcionando y mostrando prueba FaaS](https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/prueba4/FaaS.png)
**Prueba para detección IaaS**
![Captura de pantalla de la GUI inicial funcionando y mostrando una IaaS](https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/prueba4/IaaS.png)
**Prueba para detección Paas**
![Captura de pantalla de la GUI inicial funcionando y mostrando una PaaS](https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/prueba4/PaaS.png)
**Prueba para detección SaaS**
![Captura de pantalla de la GUI inicial funcionando y mostrando una SaaS](https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/prueba4/SaaS.png)
**Prueba para detección de texto ambiguo**
![Captura de pantalla de la GUI inicial funcionando y mostrando un texto ambiguo.](https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/prueba4/na.png)
**Prueba version CLI**
![Captura de pantalla de la GUI inicial funcionando y mostrando un texto ambiguo.](https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/prueba4/cli.png)




*Doy mi palabra que he realizado esta actividad con integridad académica.*

</details>

## Conclusión

El ejercicio permitió construir un clasificador funcional de modelos de servicios Cloud y observar su evolución en varias etapas. La versión inicial basada en reglas permitió resolver casos sencillos, mientras que la refactorización mejoró la organización del código, la validación de entradas y la separación entre la interfaz y la lógica de negocio. Posteriormente, el uso de técnicas básicas de NLP y puntuaciones ponderadas permitió analizar descripciones más naturales sin depender de que el usuario escribiera directamente el nombre de la categoría. Finalmente, la reutilización de la lógica central en la GUI y en la CLI demostró la importancia de diseñar componentes independientes y reutilizables. Las pruebas realizadas obtuvieron las clasificaciones esperadas para los ejemplos de IaaS, PaaS, SaaS, FaaS y textos indeterminados.

## Referencias consultadas

1. National Institute of Standards and Technology. *The NIST Definition of Cloud Computing*. https://doi.org/10.6028/NIST.SP.800-145
2. Oracle. *What is Cloud Computing?* https://www.oracle.com/cloud/what-is-cloud-computing/
3. Stanford University. *The Stanford Natural Language Processing Group*. https://nlp.stanford.edu/
4. Oracle. *Java Platform, Standard Edition Documentation*. https://docs.oracle.com/en/java/javase/
5. Proyecto de implementación del clasificador Cloud en GitHub. https://github.com/vrdtska/cloud-models-classifier