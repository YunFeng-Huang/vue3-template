export default (actionName: string) => {
  return import.meta.env.VITE_BASE_URL_SERVICE + actionName;
};
