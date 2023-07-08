export const fetchCars = async () => {
  const headers = {
    "X-RapidAPI-Key": "49b4bdb7f6msh3a3c2669c8fb0dap1683fejsn322e12df93b0",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    { headers: headers }
  );

  const result = await response.json();

  return result;
};
