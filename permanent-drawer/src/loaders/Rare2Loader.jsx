export const rare2Loader = async () => {
  return Object.fromEntries(
    Object.entries(HASHED).filter(([word, desc]) => word.indexOf("Z") >= 0)
  );
};
