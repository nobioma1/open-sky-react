const KEY = 'open-skys  ';

export const setLoggedIn = () => {
  try {
    localStorage.setItem(KEY, true);
  } catch {
    return undefined;
  }
};

export const checkUser = () => {
  try {
    const token = localStorage.getItem(KEY);
    if (token === null) {
      return undefined;
    }
    return JSON.parse(token);
  } catch {
    return undefined;
  }
};

export const clearLocalStorage = () => {
  localStorage.removeItem(KEY);
  window.location.href = '/';
};
