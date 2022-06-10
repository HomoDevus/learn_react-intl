import {useState} from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import {IntlProvider} from "react-intl";
import { LOCALES } from "../translations/locales";
import { messages } from "../translations/messsages";

const App = () => {
  const [currentLocale, setCurrentLocale] = useState(initCurrentLocale())

  function initCurrentLocale() {
    return localStorage.getItem('locale') || LOCALES.ENGLISH
  }

  return (
    <IntlProvider messages={messages[currentLocale]} locale={currentLocale} defaultLocale={LOCALES.ENGLISH}>
      <Header currentLocale={currentLocale} setCurrentLocale={setCurrentLocale} />
      <Content />
      <Footer />
    </IntlProvider>
  );
};

export default App;
