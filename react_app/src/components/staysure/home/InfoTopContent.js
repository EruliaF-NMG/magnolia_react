import { EditableArea } from '@magnolia/react-editor';

const InfoTopContent=({
    infoContent=null,
    imageList=null,
})=>{
    return(
        <>
            {infoContent && <EditableArea content={infoContent} className="info-container-2" />}
            <div className="accolades-container">
                {imageList && <EditableArea content={imageList} className="mini" />}
            </div>
        </>
    );
}

export {
    InfoTopContent
}