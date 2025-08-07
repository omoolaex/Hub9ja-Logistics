// utils/sheetdb.js
export const sendToSheetDB = async (data, sheetName) => {
  const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/abcd1234xyz'; // Replace with your URL

  try {
    const res = await fetch(`${SHEETDB_API_URL}?sheet=${sheetName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });

    if (!res.ok) throw new Error('Failed to send data to SheetDB');
    return await res.json();
  } catch (error) {
    console.error('SheetDB Error:', error);
    throw error;
  }
};
