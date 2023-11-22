import { submitData } from "../../../../global-state/slice/formSlices";
import { _get } from "../../../../helpers/lodash.wrappers";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../common/Button";

const emptFN=(...para)=>{
  return undefined;
};
const ButtonWithState = ({
  styleClass="",
  image={'@link':""},
  isUnderLine=false,
  name="",
  formGroupKey="",
  apiUrl="",
  apiMethod="POST",
  validationSchema={},
  onClickEvent=(error,result)=>emptFN(error,result),
  onOverrideFormObject=(formObject)=>emptFN(formObject)
}) => {

  const formObject = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const onBtnClick = () => {
    const object = onOverrideFormObject(_get(formObject,`${formGroupKey}`,{})) ?? _get(formObject,`${formGroupKey}`,{});
    dispatch(submitData({
      apiURL:apiUrl,
      apiMethod:apiMethod,
      formGroupKey:formGroupKey,
      body:{...object},
      validationSchema: validationSchema,
      cb:(error,result)=>onClickEvent(error,result)
    }));
  };

    return(
      <Button
        styleClass={styleClass}
        image={image}
        isUnderLine={isUnderLine}
        name={name}
        onClick={()=>onBtnClick()}
      />
    )
}


export {
  ButtonWithState
}