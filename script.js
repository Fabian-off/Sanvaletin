                            

let contadorNo = 0; 

document.getElementById("botonno").addEventListener("mouseover", function() {
    contadorNo++; 

    if (contadorNo >= 5) {
        window.location.href = "https://www.youtube.com/watch?v=PAe0gyrDSyg"; 
    } else {
        let maxX = window.innerWidth - this.clientWidth - 20;
        let maxY = window.innerHeight - this.clientHeight - 20;

        let x = Math.random() * maxX;
        let y = Math.random() * maxY;

        this.style.position = "absolute";
        this.style.left = `${x}px`;
        this.style.top = `${y}px`;
    }
});

document.getElementById("botonsi").addEventListener("click", function() {
    

    // Crear la animación de los corazones
    for (let i = 0; i < 20; i++) {
        let corazon = document.createElement("div");
        corazon.classList.add("corazon");
        document.body.appendChild(corazon);

        // Posicionar el corazón en un lugar aleatorio
        corazon.style.left = `${Math.random() * window.innerWidth}px`;
        corazon.style.top = `${Math.random() * window.innerHeight}px`;

        // Eliminar el corazón después de la animación
        setTimeout(() => {
            corazon.remove();
        }, 2000); // El corazón se elimina después de 2 segundos
    }
});