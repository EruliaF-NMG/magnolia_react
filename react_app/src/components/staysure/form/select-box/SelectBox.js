
import { InputElemnetWrapper } from "../wrappers/InputElemnetWrapper"
import { LoopItems } from '../../common/LoopItems';



const SelectBox=({
    elementID="",
    labelText="",
    name="",
    value="",
    placeholder="",
    errorMessage="",
    items=[],
    displayKey="",
    valueKey="",
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
            <select 
                className={` ${inputWrapperClassName}`} 
                value={value} 
                onChange={(event)=>onChangeEvent(name,event.target.value,event)}
                onClick={()=>onClickEvent()}
            >
            { (placeholder) && (<option key={0} value="">{placeholder}</option>) }
            <LoopItems
                items={items}
                renderElemnt={(item,index)=> {
                    return(
                        <option key={index} value={item[valueKey]}>{item[displayKey]}</option>
                    )
                
                }}
            />
            </select>
        </InputElemnetWrapper>
    )
}

export {
    SelectBox
}