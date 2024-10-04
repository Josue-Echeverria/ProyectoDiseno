# Proyecto: TVet Marca: TPet
El proyecto va dirigido a todos aquellos dueños de perros que no tienen el tiempo o la capacidad de trasladar a su mascota a una veterinaria en caso de enfermedad o preocupación. Nuestro proyecto busca facilitar la asistencia médica y cuidado de las mascotas.

**Lista de requerimientos**
Prioridad 1
- Planes de subscripción
- Perfiles
- Historial médico
- Recordatorios de citas
- Consultas virtuales con cita previa
- Servicio express de farmacia
- Trasncripción inteligente

Prioridad 2
- Reseñas de veterinarias
- Descuentos de las veterinarias

Prioridad 3
- Reseñas de usuarios (clientes)
- Teleseguimiento y tratamientos
- Orientación y nutrición<

## Diagrama de arquitectura
![diseño de arquitectura drawio (5)](https://github.com/user-attachments/assets/05f3f1a2-640c-414a-8819-ae351bb61aa9)

## Problem Statement y Storyboard
Convencer al dueño de la mascota de agendar una cita veterinaria virtual.

![WhatsApp Image 2024-09-28 at 9 22 30 PM](https://github.com/user-attachments/assets/9eb62c6c-f0aa-4df2-9211-9db48f364c5a)

![WhatsApp Image 2024-09-28 at 9 22 30 PM (1)](https://github.com/user-attachments/assets/16c8c1a0-9971-447e-98ba-34ace57c117e)

![WhatsApp Image 2024-09-28 at 9 22 30 PM (2)](https://github.com/user-attachments/assets/3fed88c3-5a11-4806-8f3b-48e5568de746)

## Requerimientos no funcionales

### Performance

### Scalability

### Reliability
**6. ¿Cuál es el tiempo de inactividad aceptable para el sistema?**
El sistema debe de estar disponible el 99.9% del tiempo. Es decir, la aplicación solo puede tener un tiempo de inactividad de 43 minutos por mes como máximo. Esto se puede garantizar por medio de ‘Azure containers’, ‘Azure SQL’ y ‘Azure Queue Storage’ ya que proporcionan alta disponibilidad.

**7. ¿Cómo debe manejar el sistema los fallos y asegurar la integridad de los datos?**
Para que el sistema maneje los fallos y asegure la integridad de los datos, se utilizará ‘Azure SQL’ que garantiza las transacciones ACID y proporciona alta disponibilidad con replicación automática. Así mismo, para asegurar que no se pierda la cola de los mensajes y los mensajes durante los fallos, se utilizará ‘Azure Queue Storage’. Finalmente, en caso de fallo los datos críticos deben de estar asegurados, por lo que se utiliza ‘Firebase’ para garantizar la redundancia y el acceso a dichos datos.

**8.  ¿Cuáles son los procedimientos de respaldo y recuperación?**
La base de datos en ‘Azure SQL’ será respaldada automáticamente de manera diaria. Los logs y archivos importantes serán almacenados en ‘Azure Queue Storage’ con una retención de 30 días para asegurar la recuperación en caso de fallos. Para la base de datos y las colas, el tiempo de recuperación debe de ser de 2 horas y el punto de recuperación de 15 minutos.

### Availability

### Security

### Usability
**14. ¿Cuáles son los estándares de usabilidad para la interfaz de usuario?**
La interfaz de usuario (que será hecha en ‘React’) debe ofrecer una experiencia intuitiva y responsive, al igual que responder a las interacciones del usuario en menos de 1 segundo. En este caso, se utilizará ‘Express.js’ en el backend para procesar solicitudes y ‘Firebase' para almacenar perfiles y datos de usuario.

**15. ¿Cómo debe el sistema acomodar a los usuarios con discapacidades?**
El sistema debe de incluir soporte para lectores de pantalla, compatibilidad con la navegación por teclado y la interfaz debe de tener un contraste de diseño adecuado. Además, las videollamadas a través de ‘Zoom’ deben ofrecer opciones de subtítulos automáticos en caso que el usuario tenga discapacidades auditivas. Estos serán generados por ‘Notta’.

**16. ¿Existen requisitos específicos para la capacitación de usuarios y documentación?**
Como requerimientos para la documentación y la capacitación de usuarios, se tiene que, dentro de la aplicación se tendrá un video tutorial acompañado por guías escritas. Esto debido a que los videos se consideran mucho más amigables y fáciles de seguir que un documento escrito, pero en caso que el usuario lo prefiera también tendrá a disponibilidad las guías escritas. En el caso de los administradores, se dará una documentación técnica por medio de ‘Azure API Management’ ya que esto facilitará la supervisión y gestión de la plataforma.

### Maintainability

### Interoperability

### Compliance
**22. ¿Con qué requisitos legales y regulatorios debe cumplir el sistema?**
El sistema debe cumplir con la ‘Ley de Protección de Datos’ perteneciente a Costa Rica. Teniendo en cuenta que en un futuro se podrá expandir el dominio de la aplicación, el sistema deberá cumplir de igual manera con las leyes de protección de datos de los países de centroamérica y Estados Unidos. Las comunicaciones y datos médicos deben ser cifrados de extremo a extremo, especialmente en servicios como ‘Zoom’ y el historial médico almacenado en ‘Azure SQL’ y ‘Firebase’.

**23. ¿Existen estándares específicos de la industria que se deban seguir?**
El sistema debe seguir los estándares de protección de datos médicos y asegurar que las videollamadas y transacciones de información médica cumplan con las regulaciones para proteger la privacidad del paciente. ‘Azure SQL’ y ‘Firebase’ son plataformas que ya cumplen con estos estándares.

### Extensibility

### Localization

### Documentation
**28. ¿Qué documentación se requiere para usuarios, administradores y desarrolladores?**
El sistema requiere de la siguiente documentación:
- Usuarios: Guías de usuario accesibles desde la aplicación, explicando cómo agendar citas, consultar historial médico, consultar el perfil, acceder a las citas virtuales, utilizar la IA (‘Notta’) y realizar pagos.
- Administradores: Documentación técnica en ‘Azure API Management’ para manejar la plataforma, incluyendo el monitoreo de las APIs y el mantenimiento de la infraestructura en ‘Azure Containers'.
- Desarrolladores: Manuales que detallen el uso de ‘Express.js’, ‘Firebase’, y las interacciones con ‘Azure Functions’ para las notificaciones.

**29. ¿Cómo debe mantenerse y actualizarse la documentación?**
La documentación debe estar almacenada en un repositorio de ‘GitHub’ y actualizada automáticamente cada vez que se realicen cambios importantes en la arquitectura del sistema. Además se debe realizar una revisión de la documentación cada 6 meses.


