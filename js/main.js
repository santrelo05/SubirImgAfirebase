window.onload = init;
var fichero;
var storageRef;
var downloadURL;


function init(){
    var firebaseConfig = {
        apiKey: "AIzaSyAeZlUvp031fr3LC2bL9jjdl-0JMWqjNX4",
        authDomain: "waska-256002.firebaseapp.com",
        databaseURL: "https://waska-256002.firebaseio.com",
        projectId: "waska-256002",
        storageBucket: "waska-256002.appspot.com",
        messagingSenderId: "83219536059",
        appId: "1:83219536059:web:715b3444d02e298909b19e"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

    fichero = document.getElementById('fichero');
    fichero.addEventListener("change" , subirAFire, false);
    
    storageRef = firebase.storage().ref();
    mostrarimg();
}

function mostrarimg(){

}

function subirAFire(){
    
    var imagenASubir = fichero.files[0];
    
    var uploadTask = storageRef.child('imagenes/'+ imagenASubir.name).put(imagenASubir);

    uploadTask.on('state_changed', function(snapshot){
        //se va mostrando el progreso de la subida de la imagen
    }, function(error ){
        //aqui gestiona el error
        alert("hubo un error");
    }, function() {
        // se ha subido exitosamente la imagen
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            console.log('File available at', downloadURL);
            document.getElementById('hola').src = downloadURL;
        });
    });
}
