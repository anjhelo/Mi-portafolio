const typed=new Typed(".typed", {
    strings:[' <i class="frase"> de mi vida.</i>',
            ' <i class="frase"> de ser quien soy.</i>',
            ' <i class="frase"> de tener salud.</i>',
            ' <i class="frase"> de estar vivo.</i>'],

        //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
        typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
        startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
        smartBackspace: false, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
        shuffle: false, // Alterar el orden en el que escribe las palabras.
        backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
        showCursor: true, // Mostrar cursor palpitanto
        cursorChar: '|', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato
});
const typedd=new Typed(".typedd",{
    strings:['me llamo Anjhelo y tengo 18 años nací en Perú me encanta el mundo de la programación y de la informática, amante de los animales tengo tres mascotas un perro llamado "Yonsi" una gata llamada "Kiara" y un conejo llamado "Bunny" si algún día tendría la oportunidad de estudiar una segunda carrera me gustaría estudiar Medicina Veterinaria. Aprendí HTML, CSS y JavaScript por mi cuenta en las horas libres de mi trabajo la verdad es que me tomo mucho tiempo en aprender CSS y comprenderlo en su totalidad, pero con mucha practica llegue a dominarlo y ahora hago algunos proyectos, pero no como un trabajo sino como un Hobby. Talvez algún día llegue a estudiar Desarrollo Web y tomarlo como una profesión. Estudio Ingeniera de Software con Inteligencia Artificial en el instituto de SENATI elegí esta carrera porque pienso que la inteligencia artificial tiene un futuro muy importante y causará un gran impacto en el mundo ya que la mayor parte de la tecnología se está automatizando el mundo será otro si es que la inteligencia artificial llega a su más alto nivel'],
    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 40, // Velocidad en mlisegundos para poner una letra,
    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
    //smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: false, // Repetir el array de strings
    loopCount: 1, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '.', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
})
