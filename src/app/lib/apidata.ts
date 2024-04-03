const apiKey = "hHoKANWKAqwQD0xbea554Htvvf0uLX7HRbaXfDok"

export async function fetchFotoDelDia() {

  try {

    const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`, {
      headers: {
        'Cache-Control': 'no-store',
        'Pragma': 'no-store'
      }});
    const dataJSON = data.json();
    return dataJSON;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}