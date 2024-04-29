/* script ejemplo de promesas 2
function obtenerDigimonPromesas(){
    return new Promise(function(resolve,reject){
        fetch('https://digimon-api.vercel.app/api/digimon')
            .then(function(response){
                if(!response.ok){
                    throw new Error("error");
                }
                return response.json();
            })
            .then(function(data){
                resolve(data);
            })
            .then(function(error){
                reject(error);
            })
    });
}; */

//script ejemplo de promesas 1
const obtenerDigimonPromesas =() => {
    return new Promise((resolve,reject) => {
        fetch('https://digimon-api.vercel.app/api/digimon')
            .then((response) => {
                if(!response.ok){
                    throw new Error("Error");
                }
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .then((error) => {
                reject(error);
            })
    });
};


//ejemplo de uso
obtenerDigimonPromesas()
    .then((digimones) => {
        digimones.map((digimon) => {
            console.log(digimon);
        });
    }).catch((error) => {
        console.log(`El error es: ${error}`);
    });

