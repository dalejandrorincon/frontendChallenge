const apiUrl = process.env.REACT_APP_API_URL || "";

export const fetchItems = async (query: string) => {
  const response = await fetch(`${apiUrl}?q=${query}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchItemDetails = async (id: string) => {
  const response = await fetch(`${apiUrl}/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
