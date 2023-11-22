
import { _get } from '../../helpers/lodash.wrappers';
import validate from '../../helpers/validator/index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {}



export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        initFormGroup: (state,action) => { 
            return {
                ...state,
                ...{
                    [action.payload.formGroupKey]:{
                        ...action.payload.formObject,
                        ['_updateStatus']: false,
                        ['_onLoad']:false,
                    }
                }
            };         
        },
        removeFormGroup: (state,action) => { 
            delete state[action.payload];
            return state;       
        },
        onInputChange: (state,action) => { 
            return {
                ...state,
                [action.payload.formGroupKey]:{
                    ...state[action.payload.formGroupKey],
                    [action.payload.inputName]:action.payload.inputValue,
                    _updateStatus:!state[action.payload.formGroupKey]["_updateStatus"]
                }
            };
        },
        setErrors: (state,action) => { 
            console.log(action.payload,"eeeee");
            return {
                ...state,
                [action.payload.formGroupKey]:{
                    ...state[action.payload.formGroupKey],
                    _errors:action.payload.error,
                    _updateStatus:!state[action.payload.formGroupKey]["_updateStatus"]
                }
            };
        },
        setPageLoad: (state,action) => { 
            return {
                ...state,
                [action.payload.formGroupKey]:{
                    ...state[action.payload.formGroupKey],
                    _onLoad:action.payload.status,
                    _updateStatus:!state[action.payload.formGroupKey]["_updateStatus"]
                }
            };
        },
        mergeFormObject: (state,action) => { 
            return {
                ...state,
                [action.payload.formGroupKey]:{
                    ...state[action.payload.formGroupKey],
                    ...action.payload.formObject,
                    _updateStatus:!state[action.payload.formGroupKey]["_updateStatus"],
                    
                }
            };   
        },
        
    }
});

export const submitData = createAsyncThunk( "FORM/SUBMIT_DATA", async ({
    formGroupKey,
    validationSchema,
    body,
    apiURL,
    apiMethod,
    cb
 },{dispatch})=>{
    dispatch({
        type:"form/setPageLoad",
        payload:{
            formGroupKey,
            status:true
        }
    });

    Object.keys(body).forEach((key) => {
        if (/^_/.test(key)) {
          delete body[key];
        }
    });

    if(_get(validationSchema,'rules',null) !== null) {
        validate(body)
        .setFileds(_get(validationSchema,'fields',{}))
        .setRules(_get(validationSchema,'rules',{}))
        .setMessage(_get(validationSchema,'message',{}))
        .run( async (error) => {
            if (error) {
                dispatch({
                    type:"form/setErrors",
                    payload:{
                        formGroupKey:formGroupKey,
                        error:error
                    }
                });
                dispatch({
                    type:"form/setPageLoad",
                    payload:{
                        formGroupKey,
                        status:false
                    }
                });
                cb(error, null);
            } else {
                dispatch({
                    type:"form/setErrors",
                    payload:{
                        formGroupKey:formGroupKey,
                        error:[]
                    }
                });
                let response = await fetch(apiURL, {
                    method: apiMethod,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                });
                response = await response.json();
                dispatch({
                    type:"form/setPageLoad",
                    payload:{
                        formGroupKey,
                        status:false
                    }
                });
                cb(null, response);
            }
        });
    } else {
        dispatch({
            type:"form/setErrors",
            payload:{
                formGroupKey:formGroupKey,
                error:[]
            }
        });
        let response = await fetch(apiURL, {
            method: apiMethod,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        response = await response.json();
        dispatch({
            type:"form/setPageLoad",
            payload:{
                formGroupKey,
                status:false
            }
        });
        cb(null, response);
    }
});

export const { initFormGroup, removeFormGroup, onInputChange,setErrors,mergeFormObject,setPageLoad } = formSlice.actions;

export default formSlice.reducer;