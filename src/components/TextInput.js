import { useField } from "formik"

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    console.log(meta)
    return(
        <div>
            <label>{label}</label>
            <input {...field} {...props}></input>
            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
        </div>
    )
}

export default TextInput