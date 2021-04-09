import React, {
  useContext, SetStateAction, Dispatch, createContext, useState,
} from "react";

import CalculateRate, { typeCalculateRate } from '../utils/calculateRate';

interface contextProps{
  idOrigin?: string;
  setIdOrigin?: Dispatch<SetStateAction<string>>;
  idDest?: string;
  setIdDest?: Dispatch<SetStateAction<string>>;
  minutes?: number;
  setMinutes?: Dispatch<SetStateAction<number>>;
  hasPlan?: boolean;
  setHasPlan?: Dispatch<SetStateAction<boolean>>;
  planValue?: number;
  setPlanValue?: Dispatch<SetStateAction<number>>;
  price?: number;
  setPrice?: Dispatch<SetStateAction<number>>;
  hasMinutes?: boolean;
  setHasMinutes?: Dispatch<SetStateAction<boolean>>;
  hasChecked?:boolean[];
  setHasChecked?: Dispatch<SetStateAction<boolean[]>>;
  hasCheckPlanValue?: boolean[];
  setHasCheckPlanValue?: Dispatch<SetStateAction<boolean[]>>;
  priceConverter?: typeCalculateRate;
}

const DataProvider = createContext({} as contextProps);

const AppProvider = ({ children }: any) => {
  const [idOrigin, setIdOrigin] = useState<string>('');
  const [idDest, setIdDest] = useState<string>('');
  const [minutes, setMinutes] = useState<number>(0);
  const [hasPlan, setHasPlan] = useState<boolean>(false);
  const [planValue, setPlanValue] = useState<number>(0);
  const [price, setPrice] = useState<number>(-1);
  const [hasMinutes, setHasMinutes] = useState<boolean>(false);
  const [hasChecked, setHasChecked] = useState<boolean[]>([false, false]);
  const [hasCheckPlanValue, setHasCheckPlanValue] = useState<boolean[]>([false, false, false]);
  const priceConverter = new CalculateRate();
  return (
    <DataProvider.Provider value={{
      priceConverter,
      hasCheckPlanValue,
      hasChecked,
      hasMinutes,
      setHasCheckPlanValue,
      setHasChecked,
      setHasMinutes,
      hasPlan,
      idDest,
      idOrigin,
      minutes,
      planValue,
      price,
      setHasPlan,
      setIdDest,
      setIdOrigin,
      setMinutes,
      setPlanValue,
      setPrice,
    }}
    >
      {children}
    </DataProvider.Provider>
  );
};

function usePrice():contextProps {
  const priceContext = useContext(DataProvider);

  return priceContext;
}

export { usePrice };

export default AppProvider;
