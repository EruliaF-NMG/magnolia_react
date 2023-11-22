import { useEffect } from 'react';
import {Image} from './Image';
import { EditableArea } from '@magnolia/react-editor';
import { useState } from 'react';
import { getAPIBase,getLanguages,events } from '../../../helpers/AppHelpers';
import {_get} from '../../../helpers/lodash.wrappers';
import { EditorContextHelper } from '@magnolia/react-editor';

const imgURL = {'@link':"/magnoliaAuthor/dam/jcr:a2127c1c-81fa-406a-a172-5f857aaa90ad/union-15.svg"};

const TopBar = ({
    imageComponent=null,
    paraComponent=null,
}) => {
    return (
        <div className='information-banner'>
          
          {/* <div className="union-wrapper"> */}
            {/* <img className="union" src="img/union-15.svg" alt='f' /> */}
            {imageComponent && <EditableArea content={imageComponent} className="union-wrapper" />}
          {/* </div> */}
            {/* <p className="info-message">Affected by air traffic control failures? See how we can help</p> */}
            {paraComponent && <EditableArea content={paraComponent}  className="info-message" />}
        </div>
    )
}

const HeaderInfoTile=({
  title="",
  number="",
  linkText="",
  linkImageAltText="",
  image={'@link':""},
})=>{
  return (
    <>
      <div className="div">
        <div className="text-wrapper">{title}</div>
        <div className="text-wrapper-2">{number}</div>
        <button className="button info-header-btn">
          <div className="union-wrapper">
          <Image styleClass='img' image={image} altText={linkImageAltText} />
          </div>
          <div className="label-container">
            <div className="text-wrapper-3">{linkText}</div>
            <div className="link-underline"></div>
          </div>
        </button>
      </div>
      <div className="divider"><div className="divider-2"></div></div>
    </>
  )

}

const HeaderInfoBar=({
  imageComponent=null,
  infoTileComponentList=null,
  linkHeadingComponent=null,
  linkBtnComponentList=null,
})=>{
  return (
    <>
        {imageComponent && <EditableArea content={imageComponent} className="logo" />}
        <div className="info-container">
          {infoTileComponentList && <EditableArea content={infoTileComponentList} className="number-group" />}
          <div className="CT-as">
              { linkHeadingComponent && <EditableArea content={linkHeadingComponent} className="text-wrapper" /> } 
              { linkBtnComponentList && <EditableArea content={linkBtnComponentList} className="" /> }  
          </div>
        </div>
    </>
  )
}

const Navigation = ()=>{
  const [getMenu, setMenu] = useState({});   
  const context =  EditorContextHelper.getMagnoliaContext(window.location.href, process.env.REACT_APP_MGNL_APP_BASE, getLanguages());
  let currentLanguage = context.currentLanguage;
  const BASENAME = currentLanguage === getLanguages()[0] ? "" : "/" + currentLanguage;
  

  const getData=async ()=>{
    const pageNavRes = await fetch(getAPIBase() + process.env.REACT_APP_MGNL_API_NAV + process.env.REACT_APP_MGNL_APP_BASE);
    const data = await pageNavRes.json();
    setMenu(data);
  }

  useEffect(()=>{
    getData();
  },[]);


  const handleClick = (url) => {
    window.history.pushState({}, '', url);
    events.emit('popstate');
  }

  return(
    <div className="menu">
        <div 
          key='12334'
          className="menu-item-button" 
          onClick={()=>handleClick(BASENAME + '/')}>
          <div className="category">
            Home
          </div>
        </div>
        {
          _get(getMenu, '@nodes', []).map((item, index)=>{
            return(
              <div 
                key={_get(getMenu,`${item}.@id`)} 
                className="menu-item-button" 
                onClick={()=>handleClick(BASENAME + _get(getMenu,`${item}.@path`))}>
                <div className="category">
                  {_get(getMenu,`${item}.@name`)}
                </div>
              </div>
            )
          })
        }
    </div>
  )
}

const Header = ({
    topBarComponent=null,
    infoBarComponent=null
}) => {
    return (
        <>
          {topBarComponent && <EditableArea content={topBarComponent} className="information-banner" />}
          {infoBarComponent && <EditableArea content={infoBarComponent} className="info" />}

          <div className="divider-wrapper"><div className="divider-3"></div></div>

          <Navigation/>
      </>
    )
}

export {
    TopBar,
    Header,
    HeaderInfoTile,
    HeaderInfoBar
}