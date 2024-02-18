export const rare1Loader = async () => {
  return Object.fromEntries(
    Object.entries(HASHED).filter(([word, desc]) => word.indexOf("Q") >= 0)
  );
};
