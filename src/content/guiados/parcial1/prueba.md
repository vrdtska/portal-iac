---
title: "Ejercicio Guiado 1: Clasificador de Modelos Cloud"
description: "Desarrollo de un clasificador de servicios Cloud (IaaS, PaaS, SaaS, FaaS) en Java utilizando reglas, Regex y procesamiento de lenguaje natural (NLP)."
pubDate: 2026-09-01
parcial: "parcial-1"
---

# Ejercicio Guiado: Clasificador de Modelos de Inteligencia Artificial
**Materia:** Integración de Aplicaciones Computacionales
**Estudiante:** Santiago López Cervantes 
**Catedrático:** Dr. Raúl Morales Salcedo

## Objetivo
Desarrollar una aplicación capaz de analizar descripciones relacionadas con servicios de Cloud Computing y clasificarlas automáticamente como IaaS, PaaS, SaaS o FaaS. El desarrollo evoluciona desde un clasificador basado en reglas (Regex) hacia una solución básica de Procesamiento de Lenguaje Natural (NLP).

---

## Parte 1: Desarrollo inicial en Java

Se creó el proyecto denominado `cloud_models_classifier` en un entorno compatible con Java. La primera versión consistió en una aplicación de escritorio con interfaz gráfica (GUI) generada con apoyo de Inteligencia Artificial mediante el prompt establecido en las instrucciones.

* El programa solicita el nombre y apellido del usuario.
* Provee un campo de texto para escribir palabras o descripciones sobre servicios Cloud.
* Utiliza reglas sencillas y expresiones regulares para determinar la categoría correspondiente.
* Los resultados se muestran claramente en la interfaz.

<details>
<summary>Haz clic para expandir el código inicial generado por IA (MainGUI.java)</summary>

```java
// Reemplaza este bloque con tu código fuente inicial.
// Recuerda que el código debió organizarse utilizando funciones independientes para cada categoría.

public class MainGUI {
    public static void main(String[] args) {
        System.out.println("Prototipo inicial cargado.");
    }
}
```

</details>

---

## Parte 2: Ejecutar y analizar el prototipo

Se compiló y ejecutó la aplicación para verificar los siguientes puntos:
* Visualización correcta de la GUI.
* Introducción exitosa de nombre y apellido.
* Capacidad de análisis del texto introducido por el usuario.
* Distinción precisa entre IaaS, PaaS, SaaS y FaaS.

### Evidencia de funcionamiento
![Captura de pantalla de la GUI inicial funcionando y mostrando una clasificación](/images/placeholder-gui-inicial.png)

---

## Parte 3: Mejorar la arquitectura de la aplicación

El código inicial fue analizado y refactorizado para mejorar su estructura. Se incorporaron las siguientes mejoras:
* Validación de entradas del usuario.
* Separación estricta entre la Interfaz Gráfica (GUI) y la lógica de clasificación.
* Implementación de métodos independientes para identificar IaaS, PaaS, SaaS y FaaS.
* Manejo básico de errores y excepciones.
* Adición de comentarios explicativos sobre las decisiones relevantes.

<details>
<summary>Haz clic para expandir el código refactorizado (Lógica separada de la GUI)</summary>

```java
// Reemplaza este bloque con el código de tu clasificador refactorizado.
// Asegúrate de demostrar la separación de responsabilidades exigida.

public class CloudClassifierLogic {
    public String classifyService(String input) {
        // Lógica de validación y clasificación...
        return "IaaS";
    }
}
```

</details>

---

## Parte 4: Evaluar el clasificador

Se realizaron pruebas con distintas descripciones complejas, evitando usar explícitamente los términos IaaS, PaaS, SaaS o FaaS dentro del texto ingresado.

| Entrada | Clasificación esperada | Clasificación obtenida | ¿Fue correcta? |
| :--- | :--- | :--- | :--- |
| "Necesito máquinas virtuales, almacenamiento y redes configurables para instalar mi propio sistema operativo." | IaaS | *[Tu resultado]* | *[Sí/No]* |
| "Quiero desplegar mi aplicación web sin administrar directamente servidores ni sistemas operativos." | PaaS | *[Tu resultado]* | *[Sí/No]* |
| "Los empleados utilizan una aplicación de correo electrónico directamente desde el navegador y pagan una suscripción mensual." | SaaS | *[Tu resultado]* | *[Sí/No]* |
| "Necesito ejecutar una función automáticamente cada vez que un usuario suba una imagen al almacenamiento Cloud." | FaaS | *[Tu resultado]* | *[Sí/No]* |
| *[Agrega tu propia prueba número 5 aquí]* | *[Esperado]* | *[Tu resultado]* | *[Sí/No]* |

---

## Parte 5: Evolucionar de Regex hacia NLP

Para mejorar la precisión del clasificador, se sustituyeron las reglas estrictas por técnicas básicas de *Natural Language Processing* (NLP). El flujo implementado incluye:
* Conversión a minúsculas y limpieza de texto.
* Tokenización y eliminación de *stopwords*.
* Normalización, *stemming* o lematización.
* Asignación de puntuaciones (*scores*) ponderadas a cada categoría según los conceptos relevantes identificados.

<details>
<summary>Haz clic para expandir el código de NLP implementado</summary>

```java
// Reemplaza este bloque con tu implementación de procesamiento de lenguaje natural.
// Muestra cómo aplicaste tokenización, limpieza y asignación de scores.

public class NLPProcessor {
    public void processText(String rawText) {
        // Implementación de tokenización y limpieza...
    }
}
```

</details>

---

## Parte 6: Interfaz de línea de comandos en Java (CLI)

Finalmente, se desarrolló una interfaz de línea de comandos (CLI) que reutiliza exactamente la misma lógica de clasificación central (NLP + Scoring) utilizada por la GUI.

### Evidencia de ejecución CLI
Ejemplo de comando ejecutado:
`java CloudClassifier "máquinas virtuales almacenamiento redes"`

![Captura de pantalla de la terminal ejecutando el clasificador CLI](/images/placeholder-cli-execution.png)

<details>
<summary>Haz clic para expandir el código de la interfaz CLI</summary>

```java
// Reemplaza este bloque con el archivo principal que maneja los argumentos de la línea de comandos.

public class CLIMain {
    public static void main(String[] args) {
        // Procesamiento de args y llamado a CloudClassifierLogic...
    }
}
```

</details>