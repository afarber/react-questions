export const letters3Loader = async () => {
  return Object.fromEntries(
    Object.entries(HASHED).filter(([word, desc]) => word.length == 3)
  );
};
