import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { IntlProvider } from "react-intl";
import { messages } from "../i18n/messages";
import { LOCALES } from "../i18n/locales";
import { useState } from "react";

const App = () => {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocale())

  function getInitialLocale() {
    const savedLocale = localStorage.getItem('locale')
    return savedLocale || LOCALES.ENGLISH
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
