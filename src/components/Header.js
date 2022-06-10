import { LOCALES } from "../translations/locales";
import { FormattedMessage } from "react-intl";

const Header = ({currentLocale, setCurrentLocale}) => {

  const menu = [
    {
      id: 'about_project',
      path: "#",
    },
    {
      id: "contact_us",
      path: "#",
    },
  ];

  const locales = [
    {
      title: 'English',
      value: LOCALES.ENGLISH
    },
    {
      title: 'French',
      value: LOCALES.FRENCH
    },
    {
      title: 'German',
      value: LOCALES.GERMAN
    },
    {
      title: 'Japanese',
      value: LOCALES.JAPANESE
    }
  ]

  function handleLocaleChange(e) {
    let value = e.target.value
    setCurrentLocale(value)
    localStorage.setItem('locale', value)
  }

  return (
    <header>
      <div className="container header_content">
        <div className="brand">ReactIntl</div>
        <nav>
          <ul>
            {menu.map(({ id, path }) => (
              <li key={id}>
                <a href={path}><FormattedMessage id={id} /></a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="spacer"></div>
        <div className="switcher">
          <FormattedMessage id='languages' />:&nbsp;
          <select onChange={handleLocaleChange} value={currentLocale}>
            {locales.map(({ title, value }) => (
              <option key={value} value={value}>
                {title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
