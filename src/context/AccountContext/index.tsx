import { createContext, useContext, useEffect, useState } from "react";
import { IAccountContext } from "./account.types";

const AccountContext = createContext<IAccountContext>({
  // {} as any
  point: 0,
  setPoint: (p: number) => {},
});

export const useAccountContext = () => useContext(AccountContext);

export const AccountContextProvider = ({ ...props }) => {
  const { children } = props;
  const [point, setPoint] = useState(0);
  return (
    <AccountContext.Provider
      value={{
        point,
        setPoint,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
