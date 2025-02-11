'use client'

import { createContext, useState } from "react";
import Modal from "./components/UI/Modal"
import H3 from "./components/Typo/H3";
import H1 from "./components/Typo/H1";
import Paragraph from "./components/Typo/Paragraph";
import H2 from "./components/Typo/H2";
import { TbAlertTriangle, TbCircleCheckFilled } from "react-icons/tb";
import H4 from "./components/Typo/H4";
import MainButton from "./components/UI/MainButton";

export const Context = createContext({
  currentPage: '',
  valaszto: '',
  villanyszamla: '',
  villanyszamlaUzleti: '',
  villanyszamlanagy: '',
  telepitesihely: '',
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
  klima: '',
  futes: '',
  vezeteknev: '',
  keresztnev: '',
  cegnev: '',
  email: '',
  telefonszam: '',
  finanszirozas: '',
  adatkezeles: '',
  kampany: '',
  datum: '',
  setCurrentPage: () => {},
  addPage: () => {},
  removePage: () => {}, 
  setValaszto: () => {},
  setVillanyszamla: () => {},
  setVillanyszamlaUzleti: () => {},
  setVillanyszamlanagy: () => {},
  setTelepitesihely: () => {},
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
  setKlima: () => {},
  setFutes: () => {},
  setVezeteknev: () => {},
  setKeresztnev: () => {},
  setCegnev: () => {},
  setEmail: () => {},
  setTelefonszam: () => {},
  setAdatkezeles: () => {},
  setKampany: () => {},
  setDatum: () => {},

  openPopup: null,
  togglePopup: () => {},
  setOpenPopup: () => {},
  form: 'login',
  setForm: () => {},
});

export default function ContextProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('1');
  const [valaszto, setValaszto] = useState()
  const [villanyszamla, setVillanyszamla] = useState()
  const [villanyszamlaUzleti, setVillanyszamlaUzleti] = useState()
  const [villanyszamlanagy, setVillanyszamlanagy] = useState()
  const [telepitesihely, setTelepitesihely] = useState()
  const [tetofajta, setTetofajta] = useState()
  const [tetofedoanyag, setTetofedoanyag] = useState()
  const [egtaj, setEgtaj] = useState('Dél')
  const [hajlasszog, setHajlaszszog] = useState(35)
  const [magassag, setMagassag] = useState(4)
  const [cim, setCim] = useState()
  const [googlemap, setGooglemap] = useState()
  const [akkumulator, setAkkumulator] = useState()
  const [tulpanelezes, setTulpanelezes] = useState()
  const [felhasznalas, setFelhasznalas] = useState()
  const [tervek, setTervek] = useState([])
  const [klima, setKlima] = useState()
  const [futes, setFutes] = useState()
  const [vezeteknev, setVezeteknev] = useState()
  const [keresztnev, setKeresztnev] = useState()
  const [cegnev, setCegnev] = useState()
  const [email, setEmail] = useState()
  const [telefonszam, setTelefonszam] = useState()
  const [finanszirozas, setFinanszirozas] = useState()
  const [adatkezeles, setAdatkezeles] = useState()
  const [kampany, setKampany] = useState('Profigreentech indikatív ajánlatkérő')
  const [datum, setDatum] = useState()

  const [openPopup, setOpenPopup] = useState(null);
  const [form, setForm] = useState('login');

  const addPage = (page) => {
    setCurrentPage((prev) => (prev.includes(page) ? prev : [...prev, page]));
  };

  const removePage = (page) => {
    setCurrentPage((prev) => prev.filter((p) => p !== page));
  };

  const togglePopup = (popupName) => {
    setOpenPopup((prevPopup) => (prevPopup === popupName ? null : popupName));
  };

  return (
    <Context.Provider value={{
      currentPage,
      valaszto,
      villanyszamla,
      villanyszamlaUzleti,
      villanyszamlanagy,
      telepitesihely,
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
      futes,
      klima,
      vezeteknev,
      keresztnev,
      cegnev,
      email,
      telefonszam,
      finanszirozas,
      adatkezeles,
      kampany,
      datum,
      setCurrentPage,
      addPage,
      removePage,
      setValaszto,
      setVillanyszamla,
      setVillanyszamlaUzleti,
      setVillanyszamlanagy,
      setTelepitesihely,
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
      setFutes,
      setKlima,
      setVezeteknev,
      setKeresztnev,
      setCegnev,
      setEmail,
      setTelefonszam,
      setFinanszirozas,
      setAdatkezeles,
      setKampany,
      setDatum,

      openPopup,
      togglePopup,
      setOpenPopup,
      form,
      setForm,
    }}>
      {children}
      <Modal
        openstate={openPopup}
        onClose={() => togglePopup(null)}
      >
        <>

        {form === "finanszirozas" && (
            <div className="flex flex-col gap-4 text-white">
              <TbAlertTriangle className="text-[--yellow] min-w-12 h-auto self-center"/>
              <div className="flex flex-row gap-2 items-start">
                <H2 classname={'text-yellow text-center pb-4'}> Csak egy fontos kérdés mielőtt továbblépsz</H2>
              </div>
              <H3 classname={'text-center pb-8'}>A <span className="text-[--green] font-bold">Vidéki Otthonfelújítási Programból</span> szeretnéd finanszírozni a napelem rendszert?</H3>
              <span className="font-light text-2xl pb-4 text-center"> Gyorsan fusd át a feltételeket, hogy megelelsz-e:</span>
              <div className="space-y-4 p-4 bg-[--black] rounded-2xl">
              <H4 classname={'flex flex-nowrap items-start gap-2'}><TbCircleCheckFilled className="text-[--green] min-w-8 h-auto"/>5000 főnél kevesebb lakosú településen lévő ingatlanban állandó lakcím.</H4>
              <H4 classname={'flex flex-nowrap items-start gap-2'}><TbCircleCheckFilled className="text-[--green] min-w-8 h-auto"/>Legalább egy 25 év alatti eltartott gyermek a háztartásban.</H4>
              <H4 classname={'flex flex-nowrap items-start gap-2'}><TbCircleCheckFilled className="text-[--green] min-w-8 h-auto"/>Az ingatlan tulajdonjoga a pályázónál vagy házastársánál.</H4>
              <H4 classname={'flex flex-nowrap items-start gap-2'}><TbCircleCheckFilled className="text-[--green] min-w-8 h-auto"/>Felújítási munkák: napelem, szigetelés, tetőfelújítás, nyílászárócsere stb.</H4>
              <H4 classname={'flex flex-nowrap items-start gap-2'}><TbCircleCheckFilled className="text-[--green] min-w-8 h-auto"/>Max. 3 millió Ft támogatás, az összköltség 50%-áig.</H4>
              <H4 classname={'flex flex-nowrap items-start gap-2'}><TbCircleCheckFilled className="text-[--green] min-w-8 h-auto"/>Nincs közüzemi vagy hiteltartozás.</H4>
              <H4 classname={'flex flex-nowrap items-start gap-2'}><TbCircleCheckFilled className="text-[--green] min-w-8 h-auto"/>Szükséges dokumentumok (TB-igazolás, számlák).</H4>
              </div>
              <div className="flex flex-col gap-2 pt-8">
                <MainButton
                  onclick={() => {setFinanszirozas('Pályázat - 50% Vidéki otthonfelújítási program'), togglePopup('finanszirozas')}}
                >
                  Igen, a VOP-ból szeretném finanszírozni
                </MainButton>
                <MainButton
                  onclick={() => {setFinanszirozas('Önerő'), togglePopup('finanszirozas')}}
                >
                  Nem, önerőből szeretném finanszírozni
                </MainButton>
                <MainButton
                  onclick={() => {setFinanszirozas('Nem tudom'), togglePopup('finanszirozas')}}
                  classname={'bg-transparent text-[--yellow]'}
                >
                  Nem tudom
                </MainButton>
              </div>
            </div>
          )}
        </>
      </Modal>
    </Context.Provider>
  );
}