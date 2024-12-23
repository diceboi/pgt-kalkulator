'use client'

import { createContext, useState } from "react";

export const Context = createContext({
  currentPage: '',
  valaszto: '',
  villanyszamla: '',
  villanyszamlaUzleti: '',
  villanyszamlanagy: '',
  tetofajta: '',
  tetofedoanyag: '',
  egtaj: '',
  hajlasszog: '',
  magassag: '',
  cim: '',
  googlemap: '',
  akkumulator: '',
  tulpanelezes: '',
  felhasznalas: '',
  tervek: '',
  vezeteknev: '',
  keresztnev: '',
  cegnev: '',
  email: '',
  telefonszam: '',
  finanszirozas: '',
  adatkezeles: '',
  kampany: '',
  setCurrentPage: () => {},
  addPage: () => {},
  removePage: () => {}, 
  setValaszto: () => {},
  setVillanyszamla: () => {},
  setVillanyszamlaUzleti: () => {},
  setVillanyszamlanagy: () => {},
  setTetofajta: () => {},
  setTetofedoanyag: () => {},
  setEgtaj: () => {},
  setHajlaszszog: () => {},
  setMagassag: () => {},
  setCim: () => {},
  setGooglemap: () => {},
  setAkkumulator: () => {},
  setTulpanelezes: () => {},
  setFelhasznalas: () => {},
  setTervek: () => {},
  setVezeteknev: () => {},
  setKeresztnev: () => {},
  setCegnev: () => {},
  setEmail: () => {},
  setTelefonszam: () => {},
  setAdatkezeles: () => {},
  setKampany: () => {},
});

export default function ContextProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('1');
  const [valaszto, setValaszto] = useState()
  const [villanyszamla, setVillanyszamla] = useState()
  const [villanyszamlaUzleti, setVillanyszamlaUzleti] = useState()
  const [villanyszamlanagy, setVillanyszamlanagy] = useState('13000')
  const [tetofajta, setTetofajta] = useState()
  const [tetofedoanyag, setTetofedoanyag] = useState()
  const [egtaj, setEgtaj] = useState(4)
  const [hajlasszog, setHajlaszszog] = useState(4)
  const [magassag, setMagassag] = useState(4)
  const [cim, setCim] = useState()
  const [googlemap, setGooglemap] = useState()
  const [akkumulator, setAkkumulator] = useState()
  const [tulpanelezes, setTulpanelezes] = useState()
  const [felhasznalas, setFelhasznalas] = useState()
  const [tervek, setTervek] = useState([])
  const [vezeteknev, setVezeteknev] = useState()
  const [keresztnev, setKeresztnev] = useState()
  const [cegnev, setCegnev] = useState()
  const [email, setEmail] = useState()
  const [telefonszam, setTelefonszam] = useState()
  const [finanszirozas, setFinanszirozas] = useState()
  const [adatkezeles, setAdatkezeles] = useState()
  const [kampany, setKampany] = useState()

  const addPage = (page) => {
    setCurrentPage((prev) => (prev.includes(page) ? prev : [...prev, page]));
  };

  const removePage = (page) => {
    setCurrentPage((prev) => prev.filter((p) => p !== page));
  };

  return (
    <Context.Provider value={{
      currentPage,
      valaszto,
      villanyszamla,
      villanyszamlaUzleti,
      villanyszamlanagy,
      tetofajta,
      tetofedoanyag,
      egtaj,
      hajlasszog,
      magassag,
      cim,
      googlemap,
      akkumulator,
      tulpanelezes,
      felhasznalas,
      tervek,
      vezeteknev,
      keresztnev,
      cegnev,
      email,
      telefonszam,
      finanszirozas,
      adatkezeles,
      kampany,
      setCurrentPage,
      addPage,
      removePage,
      setValaszto,
      setVillanyszamla,
      setVillanyszamlaUzleti,
      setVillanyszamlanagy,
      setTetofajta,
      setTetofedoanyag,
      setEgtaj,
      setHajlaszszog,
      setMagassag,
      setCim,
      setGooglemap,
      setAkkumulator,
      setTulpanelezes,
      setFelhasznalas,
      setTervek,
      setVezeteknev,
      setKeresztnev,
      setCegnev,
      setEmail,
      setTelefonszam,
      setFinanszirozas,
      setAdatkezeles,
      setKampany
    }}>
      {children}
    </Context.Provider>
  );
}