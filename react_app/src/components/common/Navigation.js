import React from "react";
import { events, getLanguages } from '../../helpers/AppHelpers';


let BASENAME = "";

function handleClick(e) {
  e.preventDefault();
  window.history.pushState({}, '', e.currentTarget.href);
  events.emit('popstate');
}

function renderLink(item, nodeName) {
  return (
    <React.Fragment key={item["@id"]}>
      <a  style={{marginLeft:30}}  href={BASENAME + item["@path"].replace(nodeName, "") || "/"}
         onClick={handleClick}
      >{item.navigationTitle || item.title || item['@name']}</a>
      {item["@nodes"].length > 0 && item["@nodes"].map((nodeName) => renderLink(item[nodeName]))}
    </React.Fragment>
  );
}

const Navigation = props => {
  const {nodeName, content, currentLanguage} = props;

  const pathname = window.location.pathname;
  BASENAME = currentLanguage === getLanguages()[0] ? "" : "/" + currentLanguage;


  return (
    <nav>
      <p>[Navigation]</p>
      {renderLink(content, nodeName)}
      <hr/>
      <div className='languages'>
        {getLanguages().map((language, i) => (
          <a style={{marginLeft:30}} key={language} data-active={currentLanguage === language}
             href={(i === 0 ? "" : "/" + language) + pathname.replace("/" + getLanguages()[1], "")}
             onClick={handleClick}>
            {language}
          </a>
        ))}
      </div>
      <hr/>
    </nav>
  );
}

export default Navigation;
