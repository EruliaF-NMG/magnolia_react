import { EditableArea } from '@magnolia/react-editor';

const Quotation = ({
    childElement=null
}) => {
    return(
        <div className="quote">
            <div className="content">
                    {childElement && <EditableArea content={childElement} className="" />}
            </div>
        </div>
    );
}

export {
    Quotation
}