# Tripleten web_project_around

En este proyecto del sprint 7
Denominado Al Rededor de Baja California (Alrededor de los E.U.)

se comenzó a crear una pagina Web con las tecnologias HTML CSS y JS

Se esta diseñando una Red Social en donde los usuarios podrán registrarse, escribir acerca de ellos y compartir imagenes de lugares acerca de sus viajes, se iran agregando mas eventos para que los usuarios puedan interactuar más con la página y con otros usuarios.

se implemento un formulario con 2 campos de entrada de datos que capturan el nombre del usuario e información acerca de el, y un boton submit para desplegar en la página la informacion ingresada por el usuario

El formulario se escribio en HTML se le dio Estilos con CSS y se conectaron los campos necesarios atraves de JavaScript

El proyecto contiene:

- una estructura de archivos BEM
- Metodolgia BEM para la implementacion de clases
- FlexBox Para la ubicacion de los elementos de acuerdo al Diseño Figma
- contiene las fuentes indicadas en el diseño

link: https://eduardocrco.github.io/web_project_around/

> > > > > > > 511b415400d7e220e5b4531f33095517a213af15

------------------------ sprint 8 --------------------
se ha mejorado el proyecto agregando interactividad y de acuerdo al diseño de Figma

- se habilito el formulario que permite agregar nuevos lugares
- se habilitaron los botones de las tarjetas: boton like y boton de sesto de basura
- se habilitaron las imagenes de las tarjetas para que al hacer click se expandan las imagenes

- se agrego el marcado html para los popups y el template
- se ha utilizado javaScript para implementar el codigo mediante funciones, metodos, eventos, la declaracion de variables necesarias para hacer conectar las partes y que la pagina funcione de manera eficiente

------------------------ sprint 9 --------------------
nuevas caracteristicas se han implementado en el proyecto: web_project_around

- los campos de entrada de los formularios se validan mediante javaScript utilizando el objeto validityState que comprueba si los datos cumplen los requisitos que marca el HTML, y llama a la funsion que muestra los mensajes de error si no son validos, y si son validos llama a la funcion que oculta los mensajes de error.

- mediante la funcion hasInvalidInput() itera la lista de los campos de entrada de los formularios y localiza si alguno es invalido y lo devuelve.

- para que mediante la funcion toggleButtonState() si almenos un input de los formularios no esta validado el boton de enviar continue desactivado, o si todos los input pasaron las validaciones se active el boton sumbit

- con la funcion setEventListeners() obtenemos un array con todos los input y, a cada input le activamos el evento input y llamamos a la funcion checkInputValidity para que revise si se cumplen las validaciones.

- a la funcion enableValidation() le pasamos como argumento el objeto configForm que contiene las configuraciones de los selectores de clase y los nombres de clase, para hacer mas dinámico el código.

---------------------- sprint 10 ------------------------

se aplicó refactorización al codigo javaScript del proyecto Web_project_around utilizando el paradigma de POO (programacion orientada a objetos)

siguiendo los lineamientos del brief:

- creacion de las clases Card y FormValidator
  que contienen los datos y los metodos nesesarios para que sean totalmente funcionales

- utils.js contiene los controladores de eventos y las funciónes que abren y cierra los popups.

link: https://eduardocrco.github.io/web_project_around/

---------------------------sprint 11------------------------------

De acuerdo al brief del sprint 11 el proyecto cuenta todas las implementaciones

Se crearonn las clases correspondientes con sus respectivos componentes

- clase Section: obtiene los elementos, los renderiza y los coloca en su contenedor correspondiente

- clase Popup:
  contiene el metodo EscapeHandler para cerrar los popup con la tecla Escape
  contiene el metodo \_setEventListeners que agrega los detectores de click en el boton de cerrar y en el Overlay de cada ventana modal

- clase PopupWithImage:
  modifica el metodo padre open(), para que pueda añadir una image y un titulo al popup de Imagen.

- clase PopupWithForm:
  obtiene los datos de los inputs con el metodo \_getInputValues().
  modifica al metodo padre \_setEventListeners para agragar el evento submit al formulario y previene la recarga por defecto.

- clase UserInfo:
  obtiene el nombre y el about del usuario con el metodo getUserInfo()
  el metodo setUserInfo toma esosm datos y los agrega a la pagina.

---------------------------sprint 12------------------------------

En el proyecto del sprint 12 se implemento la conexión con el servidor, para hacer las solicitudes correspondientes al brief

- Cargar la información del usuario desde el servidor.
- Cargar las tarjetas desde el servidor.
- Editar datos del perfil de usuario y que los datos se guarden en el servidor.
- Agregar una nueva tarjeta.
- Eliminar una tarjeta.
- Añadir y eliminar likes, como alternar el estado del boton.
- Actualizar la foto del perfil (avatar).
- Se mejoró la UX para notificar al usuario que sus acciones estan en proceso mostrando el texto "Guardando..." cuando preciona el boton submit(guardar, crear) en cada formulario.

- todos los metodos para las solicitudes esta implemetados dentro de la clase Api en el archivo Api.js y son llamados en index.js para manejar la logica de la aplicacion y interaccion del usuario.

- api.getAppInfo() se llama para obtener la información del usuario y las tarjetas.
- api.updateUser(name, about) se llama al editar el perfil.
- api.addCard(name, link) se llama al agregar una tarjeta.
- api.deleteCard(cardId) se llama al eliminar una tarjeta.
- api.likeCard(cardId) y api.deleteLikeCard(cardId) se llaman para dar y quitar likes.
- api.updateAvatar(link) se llama para actualizar el avatar.

tambien se agrego

- popup para actualizar la foto del perfil.
- popup de confirmacion para eliminar una tarjeta.
