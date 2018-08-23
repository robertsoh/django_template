Instalación
===========
- Activar el entorno virtual `source ./bin/activate`
- Instalar los requerimientos `pip install -r requirements/dev.txt`
- Configuración de variables de entorno para el sistema:

    * `ALLOWED_HOSTS` Lista de dominios permitidos para acceder a la aplicación
    * `DB_NAME` nombre de la base de datos
    * `DB_USER` usuario de la base de datos
    * `DB_HOST` servidor de base de datos
    * `DB_PORT` puerto de la base de datos
    * `SECRET_KEY` Secret Key de Django
    * `APP_IDENTIFIER` Identificador de la aplicación, por defecto `{{ cookiecutter.app_identifier }}`
    * `LOGIN_DOMAIN` Dominio de validación de login
    * `LOGIN_HOST_URL` URL del servidor de login
    * `MPI_API_HOST` HOST de servicios de MPI
    * `MPI_API_TOKEN` Token de conexión para consumir servicios de MPI

---
