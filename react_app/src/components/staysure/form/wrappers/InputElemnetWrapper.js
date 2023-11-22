
const InputElemnetWrapper = ({
    elementID="",
    labelText="",
    errorMessage="",
    inputBoxWrapperClassName="",
    labelWrapperClassName="",
    erroWrapperClassName="",
    children=null,
}) => {
    return(
        <div className={`text-field ${inputBoxWrapperClassName}`}>
            <label 
                htmlFor={elementID} 
                className={`label ${labelWrapperClassName}`}
            >
                {labelText}
            </label>
            { children }
            <p className={`errorText ${erroWrapperClassName}`}>
                {errorMessage}
            </p>
        </div>
    )
}

export {
    InputElemnetWrapper
}