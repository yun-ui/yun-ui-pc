const YUN_THEME_USER_CONFIG = 'YUN_THEME_USER_CONFIG';
export const loadFromLocal = (key) => {
  return new window.Promise((resolve) => {
    chrome.storage.local.get([key], (result) => {
      resolve(result[key]);
    });
  });
};
export const saveToLocal = (key, value) => {
  chrome.storage.local.set({[key]: value});
};

export const loadUserThemeFromLocal = () => {
  return loadFromLocal(YUN_THEME_USER_CONFIG);
};
export const saveUserThemeToLocal = (value) => {
  saveToLocal(YUN_THEME_USER_CONFIG, value);
};
