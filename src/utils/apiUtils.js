// THIS METHOD IS RESONSIBLE FOR HANDLING THE API RESPONSE
export async function handleResponse(response) {

  if (response.status === 200) return response.json();

  if (response.status === 400) {
    const error = await response.text();
    throw error;
  }

  throw new Error("Network response was not ok.");
}

// FOR ERRORS NOT CONTROLED
export function handleError(error) {
  return console.error("Not controlled error -> " + error);
}