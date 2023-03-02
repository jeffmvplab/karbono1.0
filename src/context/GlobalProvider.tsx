import { Props } from "next/script";
import { FC } from "react";
import { GlobalContext } from "./GlobalContext";



export const GlobalProvider: FC<Props> = ({ children }) => {

    return (
        <GlobalContext.Provider value={{
          
        }}>{children}
        </GlobalContext.Provider>
    )
};