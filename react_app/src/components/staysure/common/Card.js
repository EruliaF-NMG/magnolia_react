import { EditableArea } from '@magnolia/react-editor';

const Card = ({ 
    styleClass="",
    children=null,
    title="",
}) => {
    return (
        <div className={`section ${styleClass}`}>
          <div className="section-header" data-semantic-colours-mode="inverse">
            <div className="text-wrapper-5">{title}</div>
          </div>
          <div className="section-content">
            { children }
          </div>
        </div>
    )
}

const EditableCard = ({ 
    styleClass="",
    title="",
    childElement=null,
}) => {
    return (
        <Card
            styleClass={styleClass}
            title={title}
        >
         {childElement && <EditableArea content={childElement} className="fullWidth" />}
        </Card>
    )
}

export {
    Card,
    EditableCard
}