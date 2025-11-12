export async function getToken() {
  try {
      const response = await fetch('https://dev-femrxru056inizc7.us.auth0.com/oauth/token', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          "client_id":"HESuGnJvolsKQ34LRqlHRy9IBM5cPPKX",
          "client_secret":"hvPnF3rvQTKt3P-HpXfxOcHCXwBcSWez5bTj9E3ZlKIWDG-E6GpS2r-gEjVTJx7o",
          "audience":"https://dev-femrxru056inizc7.us.auth0.com/api/v2/",
          "grant_type":"client_credentials"
        }),
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.error('Error fetching token:', error);
  }
};