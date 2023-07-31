import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'steamProject';
  componentes = [
    { tipo: 'ComponenteA', titulo: 'Únete a la comunidad' , texto: '¡Conoce nuevas personas, únete a grupos, forma clanes, chatea mientras juegas y mucho más! Con más de 100 millones de posibles amigos (o enemigos), la diversión nunca termina.', imagen: '../assets/img/join.png' },
    { tipo: 'ComponenteB', titulo: 'Descubre el hardware de Steam' ,  texto: 'Creamos Steam Deck y el visor de Valve Index para que jugar en PC sea aún mejor.', imagen: '../assets/img/experience.png' },
    { tipo: 'ComponenteA', titulo: 'Lanza tu juego' ,  texto: 'Steamworks es un conjunto de herramientas y servicios que ayuda a desarrolladores y editores a sacar el máximo partido a la distribución de juegos en Steam.', imagen: '../assets/img/release.png' },
    // Agregar más componentes según sea necesario
  ];

  features = [
    { titulo: 'Chat de Steam' , texto: 'Habla con amigos o grupos por mensajes de texto o voz sin salir de Steam. Soporta videos, tuits, GIF y mucho más. Úsalo con cabeza. ', imagen: 'https://cdn.akamai.steamstatic.com/store/about/icon-steamchat.svg' },
    { titulo: 'Puntos de encuentro' , texto: 'Todo sobre tu juego en un solo lugar. únete a conversaciones, sube contenido y sé el primero en informarte de nuevas actualizaciones.', imagen: 'https://cdn.akamai.steamstatic.com/store/about/icon-gamehubs.svg' },
    { titulo: 'Retransmisión de Steam' , texto: 'Retransmite tu partida en directo con solo hacer clic en un botón y compártela con amigos o con el resto de la comunidad.', imagen: 'https://cdn.akamai.steamstatic.com/store/about/icon-broadcasts.svg' },
    { titulo: 'Steam Workshop' , texto: 'Crea, descubre y descarga mods y objetos cosméticos generados por la comunidad para más de 1000 juegos.', imagen: 'https://cdn.akamai.steamstatic.com/store/about/icon-steamworkshop.svg' },
    { titulo: 'Disponible para dispositivos móviles' , texto: 'Accede a Steam en cualquier lugar desde tu dispositivo iOS o Android con la aplicación Steam Mobile.', imagen: 'https://cdn.akamai.steamstatic.com/store/about/icon-steammobile.svg' },
    { titulo: 'Acceso anticipado a juegos' , texto: 'Descubre, juega e involúcrate con juegos mientras progresan. Sé el primero en obtener información sobre las próximas novedades y en formar parte del proceso.', imagen: 'https://cdn.akamai.steamstatic.com/store/about/icon-earlyaccess.svg' },
    { titulo: 'Plurilingüe' , texto: 'Crear una comunidad global es importante para nosotros, por eso nuestro cliente admite 28 idiomas y seguimos sumando.', imagen: 'https://cdn.akamai.steamstatic.com/store/about/icon-languages.svg' },
    { titulo: 'Compras simplificadas' , texto: 'Nuestra tienda admite más de 100 métodos de pago en más de 35 monedas, lo que te da la flexibilidad de pagar como tú quieras.', imagen: 'https://cdn.akamai.steamstatic.com/store/about/icon-payment.svg' },
    { titulo: 'Compatibilidad con mandos' , texto: 'Steam alienta a los desarrolladores a que incluyan soporte para mandos en sus juegos, incluidos los mandos de PlayStation, Xbox y Nintendo.', imagen: 'https://cdn.akamai.steamstatic.com/store/about/icon-controllers.svg' },

  ]; 
}