const apiKey = 'hHoKANWKAqwQD0xbea554Htvvf0uLX7HRbaXfDok';
import axios from "axios";

export async function traducirTexto(texto:string, idioma:string){
  try{
    
    if (idioma === 'es') {
      const response = await axios.post('/api/traductorEspanhol', {
        texto: texto
      });
      return(response.data.traduccion);
    }else if(idioma === 'en'){
      const response = await axios.post('/api/traductorIngles', {
        texto: texto
      });
      return(response.data.traduccion);
    }else{
      console.error('Idioma no permitido');
    }
    
  }catch (error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
  
}


export async function fetchFotoDelDia() {

  try {

    const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`, {
      next: {
        revalidate: 3600,
      },
    });

    if (data.status === 200) {
      const dataJSON = await data.json();
      return dataJSON;
    }

  } catch (error) {

    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');

  }
}

export async function fetchBuscadorNasa(){

  try {
    
    const data = await fetch(`https://images-api.nasa.gov/search?media_type=video&media_type=image`, {} );
    const dataJSON = data.json();
    return dataJSON;

  } catch (error) {

    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchBuscadorNasaId(nasaId:string){
  try {
    
    const data = await fetch(`https://images-api.nasa.gov/search?nasa_id=${nasaId}`, {} );
    const dataJSON = data.json();
    return dataJSON;

  } catch (error) {

    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchBuscadorNasaPorPalabra(palabra:string, tipoContenido:string){
  try {
    
    const data = await fetch(`https://images-api.nasa.gov/search?${tipoContenido !== 'todos' ? 'media_type=' + tipoContenido + '&' : ''}q=${palabra}`, {} );
    const dataJSON = data.json();
    return dataJSON;

  } catch (error) {

    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchFotosMarteFecha(fechaTerrestre:string, roverNombre:string){
  try{

    const data = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverNombre}/photos?earth_date=${fechaTerrestre ? fechaTerrestre : '2024-01-08'}&page=1&api_key=${apiKey}`);
    const dataJSON = data.json();
    return dataJSON;

  }catch (error) {

    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchFotosMarteSol(sol:string, roverNombre:string){
  try{

    const data = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverNombre}/photos?sol=${sol}&page=1&api_key=${apiKey}`);
    const dataJSON = data.json();
    return dataJSON;

  }catch (error) {

    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchInformacionRover(roverNombre:string){
  try{
    const data = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverNombre}/?api_key=${apiKey}`);
    const dataJSON = data.json();
    return dataJSON;

  }catch (error) {

    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchRovers(){
  try{
    const data = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=${apiKey}`);
    const dataJSON = data.json();
    return dataJSON;

  }catch (error) {

    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

