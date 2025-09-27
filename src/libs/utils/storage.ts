export const saveToLocalStorage = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error('Error saving to localStorage', err);
  }
};

export const getFromLocalStorage = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.error('Error reading from localStorage', err);
    return null;
  }
};

export const removeFromLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error('Error removing from localStorage', err);
  }
};
