//uso de promises (manera tradicional)

const obtenerDigimonAsyncAwait = async() => {
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');

        if (!response.ok) {
            throw new Error('Hubo un problema al obtener los datos del digimon');
        }

        const data = await response.jason();
        return data;
    }   catch(error){
        throw error;
    }
}


//ejemplo de uso
(async () => {
    try {
        const data = await obtenerDigimonAsyncAwait();
        console.log('Datos de digimon obtenidos con exito:', (data));
    }   catch (error) {
        console.error('Error al obtener datos de digimon:', error);
    }
})();

let div = 0
const cargarData = async() =>{
    
}