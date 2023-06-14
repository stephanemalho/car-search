
export async function fetchCars() {
  const headers = {
      "X-RapidAPI-Key": "b58bccb5eamsh0a181b689468d40p122892jsn3283bea53d74",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

	const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
		headers: headers,
	});

	const result = await response.json();

	return result; // 1min23 
}
