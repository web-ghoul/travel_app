const LangSwitch = () => {
  return (
    <div className="lang_switch">
      <div className="select">
        <label htmlFor="code">.</label>
        <select name="code" id="code">
          <option value="EGP">EGP</option>
          <option value="USA">USA</option>
        </select>
      </div>

      <div className="select">
        <label htmlFor="lang">.</label>
        <select name="lang" id="lang">
          <option value="عربى">عربى</option>
          <option value="English">English</option>
        </select>
      </div>

      <div className="select">
        <label htmlFor="flag">.</label>
        <select name="flag" id="flag">
          <option value="egypt">Egypt</option>
          <option value="usa">United States</option>
        </select>
      </div>
    </div>
  );
};

export default LangSwitch;
