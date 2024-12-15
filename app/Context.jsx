'use client'

import { createContext, useState } from "react";

export const Context = createContext({
  currentPage: '',
  valaszto: '',
  villanyszamla: '',
  villanyszamlanagy: '',
  tetofajta: '',
  tetofedoanyag: '',
  egtaj: '',
  hajlasszog: '',
  magassag: '',
  cim: '',
  akkumulator: '',
  tulpanelezes: '',
  felhasznalas: '',
  setCurrentPage: () => {},
  setCurrentPage: () => {},
  setValaszto: () => {},
  setVillanyszamla: () => {},
  setVillanyszamlanagy: () => {},
  setTetofajta: () => {},
  setTetofedoanyag: () => {},
  setEgtaj: () => {},
  setHajlaszszog: () => {},
  setMagassag: () => {},
  setCim: () => {},
  setAkkumulator: () => {},
  setTulpanelezes: () => {},
  setFelhasznalas: () => {}
});

export default function ContextProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('1');
  const [valaszto, setValaszto] = useState()
  const [villanyszamla, setVillanyszamla] = useState()
  const [villanyszamlanagy, setVillanyszamlanagy] = useState('13000')
  const [tetofajta, setTetofajta] = useState()
  const [tetofedoanyag, setTetofedoanyag] = useState()
  const [egtaj, setEgtaj] = useState(4)
  const [hajlasszog, setHajlaszszog] = useState()
  const [magassag, setMagassag] = useState('4')
  const [cim, setCim] = useState()
  const [akkumulator, setAkkumulator] = useState()
  const [tulpanelezes, setTulpanelezes] = useState()
  const [felhasznalas, setFelhasznalas] = useState()

  return (
    <Context.Provider value={{
      currentPage,
      valaszto,
      villanyszamla,
      villanyszamlanagy,
      tetofajta,
      tetofedoanyag,
      egtaj,
      hajlasszog,
      magassag,
      cim,
      akkumulator,
      tulpanelezes,
      felhasznalas,
      setCurrentPage,
      setValaszto,
      setVillanyszamla,
      setVillanyszamlanagy,
      setTetofajta,
      setTetofedoanyag,
      setEgtaj,
      setHajlaszszog,
      setMagassag,
      setCim,
      setAkkumulator,
      setTulpanelezes,
      setFelhasznalas
    }}>
      {children}
    </Context.Provider>
  );
}