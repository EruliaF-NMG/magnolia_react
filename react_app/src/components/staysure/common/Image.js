
const Image=({
    styleClass="",
    image={'@link':""},
    altText="",
})=>{
    return(
        <img className={styleClass} src={process.env.REACT_APP_MGNL_DAM_RAW + image['@link']} alt={altText} />
    )
}

const BackgroundImage=({
    styleClass="",
    image={'@link':""},
})=>{
    return(
        <div className={styleClass} style={{backgroundImage:`url(${process.env.REACT_APP_MGNL_DAM_RAW+image['@link']})`}}></div>
    )
}


export {
    Image,
    BackgroundImage
}