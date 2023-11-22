import { ChangeEvent, useEffect, useState } from "react"
import { SelectBox } from "./SelectBox";
import { useDispatch, useSelector } from "react-redux"
import { onInputChange } from "../../../../global-state/slice/formSlices";
import { _get,getData } from "../../../../helpers/lodash.wrappers";


const SelectBoxWithFetch = ({
    elementID="",
    labelText="",
    name="",
    value="",
    placeholder="",
    errorMessage="",
    displayKey="",
    valueKey="",
    apiURL="",
    inputBoxWrapperClassName="",
    labelWrapperClassName="",
    inputWrapperClassName="",
    erroWrapperClassName="",
    onChangeEvent=(name,value,event)=>{},
    onClickEvent=()=>{}
}) => {

    const [items,setItem] = useState([]);

    useEffect(()=>{
        getData(apiURL).then((data)=>{
            setItem(data);
        }).catch((error)=>{
            setItem([]);
        });
    },[])


    return(
        <SelectBox
            elementID={elementID}
            labelText={labelText}
            name={name}
            value={value}
            placeholder={placeholder}
            errorMessage={errorMessage}
            displayKey={displayKey}
            valueKey={valueKey}
            items={items}
            inputBoxWrapperClassName={inputBoxWrapperClassName}
            labelWrapperClassName={labelWrapperClassName}
            inputWrapperClassName={inputWrapperClassName}
            erroWrapperClassName={erroWrapperClassName}
            onChangeEvent={(name,value,event)=>onChangeEvent(name,value,event)}
            onClickEvent={()=>onClickEvent()}
        />
    )
}


const SelectBoxWithState = ({
    elementID="",
    labelText="",
    name="",
    placeholder="",
    displayKey="",
    valueKey="",
    defaultValue="",
    formGroupKey="",
    apiURL="",
    inputBoxWrapperClassName="",
    labelWrapperClassName="",
    inputWrapperClassName="",
    erroWrapperClassName="",
    onChangeEvent=(name,value,event)=>{},
    onClickEvent=()=>{}
}) => {
    const formObject = useSelector((state) => state.form);
    const dispatch = useDispatch();

    const getErrorMessage = () => {
        const errorObject = _get(formObject,`${formGroupKey}._errors`,[]).find(item => item.property === name)||{};
        return errorObject.message || "";
    }

    return(
        <SelectBoxWithFetch
            elementID={elementID}
            labelText={labelText}
            name={name}
            value={_get(formObject,`${formGroupKey}.${name}`,defaultValue)}
            placeholder={placeholder}
            errorMessage={getErrorMessage()}
            displayKey={displayKey}
            valueKey={valueKey}
            apiURL={apiURL}
            inputBoxWrapperClassName={inputBoxWrapperClassName}
            labelWrapperClassName={labelWrapperClassName}
            inputWrapperClassName={inputWrapperClassName}
            erroWrapperClassName={erroWrapperClassName}
            onChangeEvent={(name,value,event)=>{
                dispatch(onInputChange({
                    formGroupKey: formGroupKey,
                    inputValue: value,
                    inputName: name
                }));
                onChangeEvent(name,value,event);
            }}
            onClickEvent={()=>onClickEvent()}
        />
    )
}

export {
    SelectBoxWithFetch,
    SelectBoxWithState
}


