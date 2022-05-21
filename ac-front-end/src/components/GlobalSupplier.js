import { createContext, useState } from "react";

//Create recordings context
export const GlobalContext = createContext();

const GlobalSupplier = ({ children }) => {
  // State to keep last state in recordings
  const [showVideoCard, setShowVideoCard] = useState(true);

  return (
    <GlobalContext.Provider value={[showVideoCard, setShowVideoCard]}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalSupplier;
