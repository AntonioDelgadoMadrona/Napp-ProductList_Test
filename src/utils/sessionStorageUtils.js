// SAVE ITEM
export function saveItemSessionStorage(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
  return value;
}

// GET ITEM
export function getItemSessionStorage(key, defaultValue) {
  const item = sessionStorage.getItem(key);
  if (item) return JSON.parse(item);
  else return defaultValue;
}

// REMOVE ITEM
export function removeItemSessiontorage(key, defaultValue) {
  const item = sessionStorage.getItem(key);
  if (item) sessionStorage.removeItem(key);
  return defaultValue;
}
