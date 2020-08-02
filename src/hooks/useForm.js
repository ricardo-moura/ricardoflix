import { useState } from 'react';

function useForm(valoresIniciais, ) {
    //custom hook
    const [values, setValues] = useState(valoresIniciais);
    function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]: valor,
      });
    }
  
    function handleChange(infosDoEvento) {
      const newValue = infosDoEvento.target.value;
      const nameAttribute = infosDoEvento.target.getAttribute('name');
      setValue(nameAttribute,
        newValue);
    }
  
  
    function clearForm() {
      setValues(valoresIniciais);
    }
  
    return {
      values,
      handleChange,
      clearForm
    };
  
  }

  export default useForm;