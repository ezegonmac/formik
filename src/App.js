import { Formik, Form, Field, ErrorMessage } from "formik"
import TextInput from "./components/TextInput.js"
import Checkbox from "./components/Checkbox.js"
import Select from "./components/Select.js"
import Radio from "./components/Radio.js"

const validate = (values) => {
  const errors = {}

  if(!values.name) {
    errors.name = "Requerido"
  } else if (values.name.length < 5) {
    errors.name = "El nombre es muy corto"
  }

  if(!values.lastname) {
    errors.lastname = "Requerido"
  } else if (values.lastname.length < 5) {
    errors.lastname = "El apellido es muy corto"
  }

  if(!values.radio) {
    errors.radio = "Requerido"
  }

  return errors
}

function App() {

  return (
    <Formik 
        initialValues={{name: "", lastname: "", email: "", radio: ""}}
        validate={validate}
        onSubmit={values => console.log(values)}>

        <Form>
            <TextInput name="name" label="Nombre"/>
            <br />
    
            <TextInput name="lastname" label="Apellido"/>
            <br />
    
            <TextInput name="email" label="Email"/>
            <br />

            <Select name="chancho" label="Tipo de chancho">
              <option value="">Seleccione chancho</option>
              <option value="felipe">Felipe</option>
              <option value="chanchitoFeliz">Chanchito feliz</option>
              <option value="chanchitoTriste">Chanchito triste</option>
            </Select>

            <Checkbox name="accept">
              Aceptar términos y condiciones
            </Checkbox>

            <Radio name="radio" value="chanchito1" label="chanchito1"/>
            <Radio name="radio" value="chanchito2" label="chanchito2"/>
            <Radio name="radio" value="chanchito3" label="chanchito3"/>
            <ErrorMessage name="radio" />

            <button type="submit">Enviar</button>
        </Form>

    </Formik>
  );
}

export default App;
