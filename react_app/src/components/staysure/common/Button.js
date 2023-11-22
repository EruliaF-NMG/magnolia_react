import {Image} from './Image';


const Button = ({
    styleClass="",
    image={'@link':""},
    isUnderLine=false,
    name="",
    onClick=()=>{}
})=>{
    return (
        <button type='button' className={styleClass} onClick={()=>onClick()}>
            {
                image['@link'] && (<div className="union-wrapper"><Image styleClass='img' image={image} altText={'button-img'} /></div>)
            }
            {
                (isUnderLine)? (
                    <div className="label-container">
                        <div className="text-wrapper">{name}</div>
                        <div className="link-underline"></div>
                    </div>
                ):(
                    <div className="action">{name}</div>
                )
            }
        </button>
    )
}

export {
    Button
}