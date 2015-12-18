# Reloj con cuenta regresiva 
#####Reloj con cuenta regresiva, desarrollado con JavaScript y con mucho amor. 
=
Para poner en funcionamiento este contador regresivo, usted debe de colocar la siguiente línea de código en su documento HTML:

```
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="count.js"></script>
```
Además deberás poner el código en donde quieres que aparezca el contador.
Puede ser ```h1,h2,h3,h4,h5,h6,span,p ``` lo que quieras.
Ejemplo:
```
<h2 class="your-class" id="dias">00</h2>
<h2 class="your-class" id="horas">00</h2>
<h2 class="your-class" id="min">00</h2>
<h2 class="your-class" id="seg">00</h2>
```
Aquí lo más importante para que funcione independientemente de la etiqueta que coloques debes poner FORZOSAMENTE el atributo ```ID``` con su respectivo valor ```dias,horas,min,seg``` según corresponda como se muestra en el ejemplo anterior.

=

Ahora debemos configurar la fecha y hora que esperamos, para hacer el conteo regresivo. Para eso debemos abrir el archivo `count.js` y modificar la variable `fecha`que se encuentra en la línea `#4`
```
fecha = new Date("Dec 25 2015 00:00:00");
```

Además si tu quieres modificar como se vea cuando la fecha se cumpla, sólo debes modificar la línea `#14` de este mismo archivo, si lo dejas sin modificar se pondrá el contador en `00:00:00:00` :)

¡Genial! Esto es todo, espero te sea de gran utilidad este script. Te mando un saludo.

[Sitio web](http://www.andresdominguez.mx)
Sigueme en Twitter [@AndresDguez](http://twitter.com/AndresDguez)

####Puedes ver la demostación del proyecto en: [haciendo click aquí](http://andresprogra.github.io/contador-regresivo/)