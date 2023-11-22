
import { InputElemnetWrapper } from "../wrappers/InputElemnetWrapper"
import { useDispatch, useSelector } from "react-redux"
import { _get } from "../../../../helpers/lodash.wrappers";
import { onInputChange } from "../../../../global-state/slice/formSlices";


const InputBox = ({
    elementID="",
    labelText="",
    inputType="text",
    name="",
    value="",
    placeholder="",
    errorMessage="",
    inputBoxWrapperClassName="",
    labelWrapperClassName="",
    inputWrapperClassName="",
    erroWrapperClassName="",
    onChangeEvent=(name,value,event)=>{},
    onClickEvent=()=>{}
}) => {
    return(
        <InputElemnetWrapper
            elementID={elementID}
            labelText={labelText}
            errorMessage={errorMessage}
            inputBoxWrapperClassName={inputBoxWrapperClassName}
            labelWrapperClassName={labelWrapperClassName}
            erroWrapperClassName={erroWrapperClassName}
        >
            <input 
                type={inputType}
                id={elementID}
                className={`input ${inputWrapperClassName}`} 
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={(event)=>onChangeEvent(name,event.target.value,event)}
                onClick={()=>onClickEvent()}
            />
        </InputElemnetWrapper>
    )
}


const InputBoxWithState = ({
    elementID="",
    labelText="",
    inputType="text",
    name="",
    defaultValue="",
    formGroupKey="",
    placeholder="",
    inputBoxWrapperClassName="",
    labelWrapperClassName="",
    inputWrapperClassName="",
    erroWrapperClassName="",
    onChangeEvent=(name,value,event)=>{},
    onClickEvent=()=>{}
}) => {

    const formObject = useSelector((state) => state.form);
    const dispatch = useDispatch()

    const getErrorMessage = () => {
        const errorObject = _get(formObject,`${formGroupKey}._errors`,[]).find(item => item.property === name)||{};
        return errorObject.message || "";
    }

    return(
        <InputBox
            elementID={elementID}
            labelText={labelText}
            inputType={inputType}
            name={name}
            value={_get(formObject,`${formGroupKey}.${name}`,defaultValue)}
            placeholder={placeholder}
            errorMessage={getErrorMessage()}
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
            onClickEvent={onClickEvent}
        />
    );
}

export {
    InputBoxWithState,
    InputBox
}