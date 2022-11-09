export const getProperties = async () => {
  const response = await fetch('/property-data.json');
  return await response.json();
}
