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
<summary>Haga clic para expandir el código inicial generado por IA (CloudClassifierApp.java)</summary>

```java
import javax.swing.*;
import javax.swing.border.EmptyBorder;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class CloudClassifierApp extends JFrame {

    // Componentes visuales
    private JTextField txtNombre;
    private JTextField txtApellido;
    private JTextArea txtDescripcion;
    private JLabel lblResultado;
    private JLabel lblDetalles;

    public CloudClassifierApp() {
        // Configuración básica de la ventana
        setTitle("Clasificador de Servicios Cloud (IaaS, PaaS, SaaS, FaaS)");
        setSize(650, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout(10, 10));

        // Panel principal con margen interno
        JPanel mainPanel = new JPanel();
        mainPanel.setLayout(new BoxLayout(mainPanel, BoxLayout.Y_AXIS));
        mainPanel.setBorder(new EmptyBorder(15, 15, 15, 15));

        // --- SECCIÓN 1: Datos del usuario ---
        JPanel pnlUsuario = new JPanel(new GridLayout(2, 2, 10, 8));
        pnlUsuario.setBorder(BorderFactory.createTitledBorder("Información del Usuario"));
        pnlUsuario.add(new JLabel("Nombre:"));
        txtNombre = new JTextField();
        pnlUsuario.add(txtNombre);
        pnlUsuario.add(new JLabel("Apellido:"));
        txtApellido = new JTextField();
        pnlUsuario.add(txtApellido);
        mainPanel.add(pnlUsuario);

        mainPanel.add(Box.createVerticalStrut(10));

        // --- SECCIÓN 2: Entrada del texto a clasificar ---
        JPanel pnlTexto = new JPanel(new BorderLayout(5, 5));
        pnlTexto.setBorder(BorderFactory.createTitledBorder("Descripción o palabras clave del servicio Cloud"));
        txtDescripcion = new JTextArea(6, 40);
        txtDescripcion.setLineWrap(true);
        txtDescripcion.setWrapStyleWord(true);
        JScrollPane scroll = new JScrollPane(txtDescripcion);
        pnlTexto.add(scroll, BorderLayout.CENTER);
        mainPanel.add(pnlTexto);

        mainPanel.add(Box.createVerticalStrut(10));

        // --- SECCIÓN 3: Botón de análisis ---
        JButton btnAnalizar = new JButton("Analizar y Clasificar Modelo");
        btnAnalizar.setAlignmentX(Component.CENTER_ALIGNMENT);
        btnAnalizar.setFont(new Font("SansSerif", Font.BOLD, 13));
        mainPanel.add(btnAnalizar);

        mainPanel.add(Box.createVerticalStrut(10));

        // --- SECCIÓN 4: Visualización del resultado ---
        JPanel pnlResultado = new JPanel(new GridLayout(2, 1, 5, 5));
        pnlResultado.setBorder(BorderFactory.createTitledBorder("Resultado del Análisis"));
        
        lblResultado = new JLabel("Ingresa los datos y presiona 'Analizar'", SwingConstants.CENTER);
        lblResultado.setFont(new Font("SansSerif", Font.BOLD, 15));
        lblResultado.setForeground(new Color(30, 80, 160));
        
        lblDetalles = new JLabel("", SwingConstants.CENTER);
        lblDetalles.setFont(new Font("SansSerif", Font.PLAIN, 12));

        pnlResultado.add(lblResultado);
        pnlResultado.add(lblDetalles);
        mainPanel.add(pnlResultado);

        add(mainPanel, BorderLayout.CENTER);

        // Evento del botón
        btnAnalizar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                procesarClasificacion();
            }
        });
    }

    /**
     * Valida entradas, ejecuta las reglas de conteo por modelo y determina el resultado.
     */
    private void procesarClasificacion() {
        String nombre = txtNombre.getText().trim();
        String apellido = txtApellido.getText().trim();
        String texto = txtDescripcion.getText().trim();

        if (nombre.isEmpty() || apellido.isEmpty()) {
            JOptionPane.showMessageDialog(this, "Por favor, ingresa tu nombre y apellido.", "Datos incompletos", JOptionPane.WARNING_MESSAGE);
            return;
        }

        if (texto.isEmpty()) {
            JOptionPane.showMessageDialog(this, "Por favor, escribe una descripción o palabras clave para clasificar.", "Texto vacío", JOptionPane.WARNING_MESSAGE);
            return;
        }

        // Evaluar puntuaciones mediante métodos específicos para cada categoría
        int scoreIaaS = evaluarIaaS(texto);
        int scorePaaS = evaluarPaaS(texto);
        int scoreSaaS = evaluarSaaS(texto);
        int scoreFaaS = evaluarFaaS(texto);

        // Determinar el modelo con mayor coincidencia
        int maxScore = Math.max(scoreIaaS, Math.max(scorePaaS, Math.max(scoreSaaS, scoreFaaS)));

        if (maxScore == 0) {
            lblResultado.setText("Resultado: Indeterminado / No clasificado");
            lblResultado.setForeground(Color.DARK_GRAY);
            lblDetalles.setText("Usuario: " + nombre + " " + apellido + " | No se detectaron suficientes patrones clave.");
        } else {
            String categoria = "";
            if (maxScore == scoreIaaS) categoria = "IaaS (Infrastructure as a Service)";
            else if (maxScore == scorePaaS) categoria = "PaaS (Platform as a Service)";
            else if (maxScore == scoreSaaS) categoria = "SaaS (Software as a Service)";
            else if (maxScore == scoreFaaS) categoria = "FaaS (Function as a Service / Serverless)";

            lblResultado.setText("Modelo Detectado: " + categoria);
            lblResultado.setForeground(new Color(0, 128, 0));
            lblDetalles.setText(String.format("Usuario: %s %s | Puntos -> IaaS: %d, PaaS: %d, SaaS: %d, FaaS: %d",
                    nombre, apellido, scoreIaaS, scorePaaS, scoreSaaS, scoreFaaS));
        }
    }

    /**
     * Evalúa términos relacionados con Infraestructura como Servicio (IaaS)
     */
    private int evaluarIaaS(String texto) {
        String regex = "\\b(iaas|m[aá]quina\\s+virtual|virtual\\s+machine|vm|servidor\\s+dedicado|almacenamiento\\s+en\\s+bloque|ebs|s3|ec2|vpc|red\\s+virtual|firewall|compute\\s+engine|azure\\s+vm|hardware|hipervisor|storage)\\b";
        return contarCoincidenciasRegex(texto, regex);
    }

    /**
     * Evalúa términos relacionados con Plataforma como Servicio (PaaS)
     */
    private int evaluarPaaS(String texto) {
        String regex = "\\b(paas|despliegue\\s+de\\s+c[oó]digo|entorno\\s+de\\s+ejecuci[oó]n|heroku|app\\s+engine|elastic\\s+beanstalk|base\\s+de\\s+datos\\s+administrada|managed\\s+db|runtime|middleware|sdk|framework|render|fly\\.io)\\b";
        return contarCoincidenciasRegex(texto, regex);
    }

    /**
     * Evalúa términos relacionados con Software como Servicio (SaaS)
     */
    private int evaluarSaaS(String texto) {
        String regex = "\\b(saas|aplicaci[oó]n\\s+final|usuario\\s+final|google\\s+workspace|office\\s*365|salesforce|dropbox|gmail|zoom|slack|software\\s+listo|correo\\s+electr[oó]nico|crm|erp)\\b";
        return contarCoincidenciasRegex(texto, regex);
    }

    /**
     * Evalúa términos relacionados con Funciones como Servicio (FaaS / Serverless)
     */
    private int evaluarFaaS(String texto) {
        String regex = "\\b(faas|serverless|sin\\s+servidor|aws\\s+lambda|cloud\\s+functions|azure\\s+functions|ejecuci[oó]n\\s+por\\s+eventos|event-driven|microfunci[oó]n|pago\\s+por\\s+ejecuci[oó]n|invocaci[oó]n|trigger)\\b";
        return contarCoincidenciasRegex(texto, regex);
    }

    /**
     * Cuenta cuántas veces se repiten los patrones regex dentro del texto (insensible a mayúsculas/minúsculas).
     */
    private int contarCoincidenciasRegex(String texto, String regex) {
        Pattern pattern = Pattern.compile(regex, Pattern.CASE_INSENSITIVE | Pattern.UNICODE_CASE);
        Matcher matcher = pattern.matcher(texto);
        int coincidencias = 0;
        while (matcher.find()) {
            coincidencias++;
        }
        return coincidencias;
    }

    public static void main(String[] args) {
        // Ajuste de Look and Feel del sistema para una apariencia nativa en Linux
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (Exception ignored) {}

        SwingUtilities.invokeLater(() -> {
            new CloudClassifierApp().setVisible(true);
        });
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
    href="https://ubiquitous.udem.edu/~iac-612956/assets/entregas/parcial1/eg/1/refactorizado.tar.gz" 
    download
    class="inline-flex items-center gap-3 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-emerald-500/50 rounded-xl font-medium text-sm transition-all duration-200 shadow-lg shadow-black/20 hover:-translate-y-0.5 group w-fit no-underline">
    <svg class="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
    <span>Descargar Código Fuente</span>
    <span class="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">.tar.gz</span>
  </a>
</div>

--- 

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