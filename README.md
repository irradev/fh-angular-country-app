# CountryApp

CountryApp es una aplicación web desarrollada en Angular cuyo objetivo principal es explorar y visualizar información de países de todo el mundo. El proyecto fue construido aplicando principios de arquitectura limpia y diseño modular (feature-first), con énfasis en la organización del código, separación de responsabilidades y uso de las últimas características del framework.

Más allá de la funcionalidad, este proyecto sirve como práctica sólida de arquitectura basada en componentes standalone, gestión de estado con la nueva reactividad y enrutamiento avanzado en Angular.

## 🧠 Arquitectura
La aplicación sigue una estructura modular separando claramente las responsabilidades dentro de dominios (`country`, `settings`, `shared`):

- **Pages / Layouts:** Contienen la estructura principal de las vistas, definiendo el contenedor de UI y la lógica de enrutamiento a nivel página.
- **Components:** Widgets y piezas de UI delgadas y reutilizables, que reciben datos y emiten eventos sin conocer el entorno general.
- **Services / API:** Implementaciones concretas de lógica de negocio, acceso a datos y comunicación con APIs REST externas.
- **Models / Types:** Definición estricta de interfaces que dictan las estructuras de datos dentro de la app.

Esta estructura permite:
- Mejor mantenibilidad y escalabilidad.
- Código altamente cohesivo y testeable.
- Facilidad para escalar o cambiar implementaciones de acceso a datos sin modificar la UI.

## 🔄 Gestión de estado
La reactividad se maneja aprovechando las primitivas nativas más recientes de Angular (Signals y la Interop de RxJS), lo que permite:
- Estado predecible, síncrono y altamente optimizado en la UI.
- Mejor control del ciclo de vida y rendimiento gracias a la detección de cambios granular, limitando la dependencia de `Zone.js`.
- Uso eficiente de `rxResource` para cargas asíncronas de datos (como búsquedas y detalles por código), proveyendo estados de carga, resoluciones y manejo de errores directamente en el template de forma limpia.

## 🧭 Navegación
El enrutamiento está implementado con el **Angular Router** estándar en su modalidad standalone, aprovechando un enfoque moderno para:
- Definir rutas modulares y lazy-loaded de forma clara.
- Pasar parámetros dinámicos a través de los paths (por ejemplo: códigos de países Alpha).
- Soportar navegación fluida estilo SPA (Single Page Application) y deep links.

## 🗄️ Persistencia y datos
- **HttpClient / fetch** nativo para consumo de la API REST externa de países (`REST Countries`).
- Tipado fuerte de las respuestas HTTP generándole robustez a la manipulación en los componentes.
- Integración de `rxResource` como puente natural entre el origen de datos observable y la reactividad por Signals.

## ✨ UI y experiencia visual
La interfaz utiliza modernas herramientas de estilización:
- **Tailwind CSS** (v4) como motor principal para layouts y diseño utilitario responsivo.
- **DaisyUI** como sistema de componentes base altamente personalizable, reduciendo el código necesario para vistas comunes (modales, cards, navbars, etc).

El enfoque principal fue lograr una UI funcional, limpia y rápida, manteniendo una excelente experiencia de usuario con simplicidad técnica.

## 🛠️ Tecnologías utilizadas
- Angular (v19+) y Standalone Components
- Signals & `rxResource`
- Tailwind CSS (v4)
- DaisyUI
- RxJS (para interacciones asíncronas de busquedas / forms y peticiones http)

## 🚀 Instalación y ejecución

Clona el repositorio:
```bash
git clone https://github.com/irradev/fh-angular-country-app.git
```

Instala las dependencias:
```bash
npm install
```

Ejecuta el servidor de desarrollo:
```bash
npm run start
# o alternativamente:
ng serve
```

Abre tu navegador en `http://localhost:4200/`.

## 📝 Notas finales
Este proyecto está enfocado en buenas prácticas de arquitectura moderna y uso de las últimas funcionalidades estructurales en Angular, más que en una app comercial final. Sirve como base metodológica sólida para aplicaciones Angular escalables y como demostración de adaptación técnica en el ecosistema actual de frontend.
