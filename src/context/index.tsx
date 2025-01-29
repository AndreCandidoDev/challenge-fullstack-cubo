"use client"

import { DefaultData } from '@/types/defaultData';
import { ReactNode, createContext, useState } from 'react';

type Props = {
  children: ReactNode;
};

interface dataContextType {
  data: DefaultData[]
  setData: React.Dispatch<React.SetStateAction<DefaultData[]>>
}

const defaultProvider: dataContextType = {
  data: [],
  setData: () => {},
};

const DataContext = createContext<dataContextType>(defaultProvider);

const DataProvider = ({ children }: Props) =>
{
  const [data, setData] = useState<DefaultData[]>(defaultProvider.data);

  const values = {
    data,
    setData,
  }

  return (<DataContext.Provider value={values}>{children}</DataContext.Provider>)
}

export { DataContext, DataProvider };
