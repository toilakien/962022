import React, { createContext, ReactElement } from 'react'

 const JWTcontext = ({children}:{children:ReactElement}) => {
const JWTContext = createContext<any | null>(null);

    return (
        <JWTContext.Provider value={null}>
          {children}
        </JWTContext.Provider>
      );
}
export default JWTcontext;