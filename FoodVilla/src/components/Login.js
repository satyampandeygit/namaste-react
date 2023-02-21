import { useFormik } from "formik";
import { Link } from "react-router-dom";

function validate(values){
    const errors = {};

    if(!values.email){
        errors.email = 'Required';
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email address';
    }

    return errors;
}

const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validate,
        onSubmit: (values) => {
            alert(values.email);
        }
    })

    return (
        <div className="login-container">
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                ></input>

                <button type="submit">
                    <Link to ="/">Submit</Link>
                </button>
            </form>


        </div>
    )
}

export default Login;