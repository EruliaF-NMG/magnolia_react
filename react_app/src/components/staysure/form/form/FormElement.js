import { initFormGroup, mergeFormObject, removeFormGroup, setPageLoad } from "../../../../global-state/slice/formSlices";
import { getData,_get } from "../../../../helpers/lodash.wrappers";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { EditableArea } from '@magnolia/react-editor';

const emptFN=(...para)=>{
    return undefined;
};

const FormElement=({
    formWrapperClassName="",
    formGroupKey="",
    setFormObject={},
    children=null,
    apiURL="",
    overrideFormObject=(...para)=>emptFN(...para),
})=>{

    const formObject = useSelector((state) => state.form);
    const dispatch = useDispatch()

    console.log("FormElement: formObject: ",formObject)

    const fetchDataANDSetFormObject = async () => {
        dispatch(setPageLoad({
            status:true,
            formGroupKey,
        }));
        const result = await getData(apiURL);
        const formData = overrideFormObject(result);

        dispatch(mergeFormObject({
            formObject:formData,
            formGroupKey,
        }));

        dispatch(setPageLoad({
            status:false,
            formGroupKey,
        }));
    }
    
    useEffect(() => { 
        if(apiURL!==""){
            dispatch(initFormGroup({
                formObject:{},
                formGroupKey,
            }));
            fetchDataANDSetFormObject();
        } else {
            dispatch(initFormGroup({
                formObject:setFormObject,
                formGroupKey,
            }));
        }

        return () => {
            dispatch(removeFormGroup(formGroupKey));
        }
    },[]);

    return(
        <>
            {
                _get(formObject,`${formGroupKey}._onLoad`,false)===false?(
                    <form className={`forms ${formWrapperClassName}`}>
                         {children}
                    </form>
                ):(
                    <div>
                        <center>
                            Loding....
                        </center>
                    </div>
                )
            }
        </>
    );
}

const FormEditableArea=({
    childElement={
        '@name' : "childElement",
        '@nodeType' : "mgnl:area",
        '@path':"/react-minimal/Quotation/body/0/childElement",
        '@nodes':[]
    }
})=>{
    console.log("FormEditableArea: childElement: ",childElement)
    return (
        <>
            {<EditableArea content={childElement} className="fullWidth" />}
        </>
    )
}

const EditableFormElement=({
    formWrapperClassName="",
    formGroupKey="",
    setFormObject={},
    apiURL="",
    overrideFormObject=(...para)=>emptFN(...para),
    childElement=null,
})=>{
    return(
        <FormElement
            formWrapperClassName={formWrapperClassName}
            formGroupKey={formGroupKey}
            setFormObject={{}}
            apiURL={apiURL}
            overrideFormObject={overrideFormObject}
        >
            {childElement && <EditableArea content={childElement} className="forms" />}
        </FormElement>
    )
}

export {
    FormElement,
    EditableFormElement,
    FormEditableArea
}