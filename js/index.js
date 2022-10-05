/*
Un poco de elementos básicos de un array
*/
/*array de strings*/
let array_lang = ['Js','Java','Python', 'C#'];

/*array de objetos >> es algo que solemos recibir de una peticion a una API, una lista o array de elementos que nosotros podemos modificar o trabar, también cuando hacemos manejo de la DOM, podemos recibir algo que se llama NODEList

Los NodeList son listas de los nodos de un HTML, por lo cual nos da la propiedad de manejar nuestra DOM de manera más eficiente
*/
let array_Obj = [
    {
        id: 1,
        title: "Beetlejuice",
        year: 1988,
        genres: [
            "Comedy",
            "Fantasy"
        ],
        director: "Tim Burton",
        plot: "A couple of recently deceased ghosts contract the services of a \"bio-exorcist\" in order to remove the obnoxious new owners of their house.",
        path: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"
    },
    {
        id: 2,
        title: "The Cotton Club",
        year: 1984,
        genres: [
            "Crime",
            "Drama",
            "Music"
        ],
        director: "Francis Ford Coppola",
        plot: "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
        path: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
    },
    {
        id: 3,
        title: "The Shawshank Redemption",
        year: 1994,
        genres: [
            "Crime",
            "Drama"
        ],
        director: "Frank Darabont",
        plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        path: "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg"
    },
    {
        id: 4,
        title: "Crocodile Dundee",
        year: 1986,
        genres: [
            "Adventure",
            "Comedy"
        ],
        director: "Peter Faiman",
        plot: "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
        path: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg"
    },
];


/*Metodos típicos de una array*/

// longitud
let resultado =`La longitud del primer array es de ${array_lang.length}`;
/*formas de appendear elementos a nuestro DOM*/
let parrafo = document.createElement('p');
/*quiero apuntar al elemento que quiero agregarle cosas que vaya a agregar*/
let result = document.getElementById('result');
/*quiero agregarle dato a mi parrafo */
let nodoTexto = document.createTextNode(resultado);
/*agrego el texto a mi elemento*/
parrafo.appendChild(nodoTexto);
/*agrego mi parrafo a mi elemento html*/
result.appendChild(parrafo);


/*voy a crear una funcion para crear una forma de injectar valores a un elemento*/
const injector = (elemento, texto)=>{
    let parrafo = document.createElement('p');
    let result = document.getElementById(elemento);
    let nodoTexto = document.createTextNode(texto);
    parrafo.appendChild(nodoTexto)    ;
    result.appendChild(parrafo);
}



injector('result', `La longitud del array de objetos es : ${array_Obj.length}`);



/*metodo pop() :: elimina el último del array*/

array_lang.pop();

injector('result', 'Usando POP method');
injector('result', `La longitud del primer array es de ${array_lang.length}`);


/*metodo push():: permite agregar elementos a la ultima parte de la lista del array*/

array_lang.push('Rust', 'GoLang','Scala');

injector('result', 'Usando PUSH method');
injector('result', `La longitud del primer array es de ${array_lang.length}`);

console.log(array_lang);

/*metodo shift() or unshift() te permite indexar data tanto en la primer parte del array*/

/*imaginemos que queremos ordenar el arreglo de manera descendente, podemos utilizar otro método de JS, metodo SORT()  lo que realiza también es que muta al objeto original, por lo cual se le declara un método de un array, por lo tanto no es una función pura.*/

array_lang.sort( );
array_lang.reverse();

injector('result', 'Metodos usados para la lista respectiva');

for (let e of array_lang){
    let index = array_lang.indexOf(e);
    injector('result', `Index ${index} : ${e}` );
}


/*ahora imaginemos que se quiere ordenar un array de objetos por un item en particular, va a depender de la funcion que le vayas a indexar, en el caso de esta lista de peliculas, los voy a hacer por orden alfabético*/

array_Obj.sort( (a,b)=> {
    let valorA = a.title.toLowerCase() 
    let valorB = b.title.toLowerCase() 
    return valorA > valorB?1:-1;
})


for(let e of array_Obj.reverse()){
    injector('result', `Pelicula : ${e.title}` );
    injector('result', `Summary : ${e.plot}` );
}



/*Web Storage >> en JS es la forma de como almacenar cosas dentro de navegador web, sin embargo tiene distintas formas:
lo manejan desde el lado del cliente(web browser)
LocalStorage : persiste hasta que el usuario lo borre de manera manual
SessionStorage : persiste hata que se salga del browser o tab 
Cookies : Es usado principalmente para almacenar data que vaya a persistir en el tiempo, esto es manejado por el usuario, borrandolas, pero que nos permite tener datos desde el lado del cliente servidor

Un ejemplo sencillo de persistencia:
Digamos que requiero tener una sesion abierta en toda mi páginaweb, entonces, puedo usar mi nombre y tenerlo en muchas ocasiones
*/


let user_name = localStorage.getItem('user_name');

if(user_name){
    injector('usuario', `${user_name}`)
}else{
    let nombre = prompt('Ingrese nombre del usuario');
    localStorage.setItem('user_name',nombre);
    injector('usuario', `${nombre}`);
}






/*Ahora, para que me sirve saber esto? es una forma fácil de almacenar datos de un archivo json, digamos por un momento que nosotros recibimos data desde una API, y cada vez que hacemos una peticion de "recursos" suelo gastar dinero cada vez que impacto, pues obtengo dato desde un servidor, entonces para ahorrar de estar constantemente peticionando ese requerimiento a la API, directamente consumo esos datos y lo despliego almaceno de una forma especial en mi local o session storage 

En el siguiente ejemplo vamos a hacer de una manera eficiente el consumo de una API, almacenarlo en nuestra session como un elemento string(pues es mejor guardarlo en string y despues parsear el JSON como corresponde y poder usarlo)

Sin embargo, que es un JSON??? Es una notacion especial que nos permite obtener data, siendo esta la forma más rápida de entregar datos desde un servidor a un cliente. Es muy similar a los objetos en JS, pues usa la misma sintaxis, sin embargo tiene como vital importancia el hecho de que NO es un objeto, si no solo texto.
*/

/*

El siguiente es un objeto del tipo JSON

{
    'res' : [
        '{"name":"John", "age":30, "car":true}',
        '{"name":"Sergei", "age":40, "car":true}',
        '{"name":"Charlie", "age":70, "car":false}'
    ]
}

No es nada más que algo en clave valor

Bien ahora si a los bifes:
*/

/*voy a crearme in injector especial para mostrar una card de mis usuarios*/

function injectorUsuarios(elemento, user){

    let to_append = document.getElementById(elemento);

    let div = document.createElement('div');
        div.classList = 'usuario';
    let img = document.createElement('img');
        img.src = `${user.image}`;
    let h3 = document.createElement('h3');
    let nombre = document.createTextNode(`${user.firstName} ${user.lastName} email: ${user.email}`)
        h3.appendChild(nombre);

    div.appendChild(img);
    div.appendChild(h3);

    to_append.appendChild(div);


}

function render(users){
    for (let usuario of datos){
        injectorUsuarios('json-web',usuario);
    }
}

/*Esta es una API, que me dan una lista aprox de usuarios*/
let api_url = 'https://dummyjson.com/users?limit=10'
let datos =[];

if( !sessionStorage.getItem('res') ){
    
    fetch(api_url)
    .then(res => res.json())
    .then(data => {
        sessionStorage.setItem('res', JSON.stringify(data.users) )
            res = sessionStorage.getItem('res');
            datos = JSON.parse(res);
            render(datos);
    })
      

} else{

    res = sessionStorage.getItem('res');
    datos = JSON.parse(res);
    render(datos);

}



//esto es un poco más avanzado, para los valientes lo tienen acá y pueden averiguar un poquito más sobre esto, se llama asincronía

// async function getRequest(url){
//     const res = await fetch(url);

//     if(res.ok){
//         return res.json();
//     } else{
//         return new Error('No se ha encontrado data');
//     }
// }


// async function getData(url){
//     try{
//         let data = await getRequest(url);
//         let returnedData = await data ;
//         // console.log(data);
//         data = JSON.stringify(returnedData);
//         localStorage.setItem('stored',data);
        
//     } catch(e){
//         console.log(e);
//     }
 
// };



/*DOM

Que es?? Con que se come? Que hace??

Basicamente es la representación de nuestra página web, de sus componentes, cada elemento es un nodo, o elemento que te permite ser manipulado, te permite cambiar, agregar, modificar, hacer animaciones dependiendo de ciertos atributos, te permite validar cosas que estás usando en un formulario, como ejemplo antes de enviarselo a una base de datos.

1) Bueno para este ejemplo final, vamos a hacer 3 casos, agregar cosas , que ya la hemos hecho con anterioridad.

2) Como selecionar una lista de nodos y agregarles titulos a todos mis encabezados

3) Validar un simple formluario

*/

/*Add EventListeners 

que pasa si quiero que mi usuario se desloguee???
bueno para eso debo darle una funcionalidad a algun boton, en este caso le puedo dar usando un event listener

se selecciona con el id el elemento a usar, y despues se le agrega el evento.

por lo general el evento maneja una funcion, por bueas practicas se le suele colocar como nombre handler, lo cual te da la noción de que estarías haciendo

*/


let btn = document.getElementById('btnLogout');
/*basicamente lo que hace es imprimir el lugar donde está haciendo click! esto ya empieza a tener gusto a JS y sus distintas funcionalidades dentro de la DOM*/
btn.addEventListener('click', (e) => console.log(e.target));

function handlerClearBtn(){
    localStorage.clear();
    sessionStorage.clear();
    location.reload();
}

btn.addEventListener('click',handlerClearBtn);


/*insertar titulos a mis divs importantes
genero un NodeList o array de los divs que no tienen class en este caso.
*/

divs = document.querySelectorAll('div:not([class])');

function divAppender(elements){
    for(let element of elements){
        let h1 = document.createElement('h1');  
        let texto = document.createTextNode(` TITULO DE SECTOR : ${element.id.toUpperCase()}`)
        h1.appendChild(texto);
        element.prepend(h1);
        element.style = 'text-align:center';
    }
    
}


divAppender(divs);



/*validar un form*/

const btnEnviar = document.getElementById('btn-enviar');

const validar = (e) => {
  
    e.preventDefault();

  const nombreDeUsuario = document.getElementById('usuario');
  const direcciónEmail = document.getElementById('email');

  if (usuario.value === "") {
    alert("Por favor, escribe tu nombre de usuario.");
    usuario.focus();
    return false;
  }
  
  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }
  
  return true;
}

btnSubmit = document.querySelector('[type="submit"]')

btnSubmit.addEventListener('click', validar);

