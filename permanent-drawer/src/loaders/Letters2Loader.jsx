export const letters2Loader = async () => {
  return Object.fromEntries(
    Object.entries(HASHED).filter(([word, desc]) => word.length == 2)
  );
};
