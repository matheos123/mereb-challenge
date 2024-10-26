export const fetchTabText = async (tabIndex, cacheText) => {
  try {
      const response = await fetch('/api');
      const text = await response.text();
      cacheText(tabIndex, text); 
      return text;
  } catch (error) {
      console.error("Error fetching text:", error);
      return "Error loading text.";
  }
};
