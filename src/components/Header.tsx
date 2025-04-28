import LangSwitch from "./LangSwitch";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>من نحن</li>
          <li>العروض</li>
          <li>تواصل معنا </li>
          <li>تطبيقتنا</li>
        </ul>
      </nav>
      <LangSwitch/>
      <img src="/images/logo.svg" alt="" />
    </header>
  );
};

export default Header;
