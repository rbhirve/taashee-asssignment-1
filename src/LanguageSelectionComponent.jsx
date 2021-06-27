import React, { useState, useEffect } from "react";
import Dropdown from "./Droupdown";
import * as moment from "moment";

const LanguageSelectionComponent = (props) => {
  const [language, setLanguage] = useState(props.items[0]);

  useEffect(() => {
    const dateTime = new Intl.DateTimeFormat(language, {
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "UTC",
    })
      .format(new Date().getTimezoneOffset())
      .toString();

    console.log(dateTime);
  }, [language]);

  return (
    <div
      style={{
        lineHeight: "200px",
        padding: "100px",
        marginTop: "100px",
      }}
      className="ui container segment "
    >
      <div className="ui column very relaxed stackable grid">
        <div className="column">
          <Dropdown
            label="Select Language"
            options={props.items}
            selected={language}
            onSelectedChange={setLanguage}
          />
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectionComponent;
