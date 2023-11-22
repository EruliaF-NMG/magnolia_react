import { EditableArea } from '@magnolia/react-editor';

const InfoArticles=({
    articleImage=null,
    articleElementList=null,
})=>{
    return(
        <div className="div-2">
            {articleImage && <EditableArea content={articleImage} className="image-ratio-2" />}
            <div className="info-container-3">
                {articleElementList && <EditableArea content={articleElementList} className="text-container-3" />}
            </div>
        </div>
    );
}

export {
    InfoArticles
}