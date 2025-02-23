import { useContext } from "react";
import { AuthContext } from "../../context_provider/AuthContext";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const { loginWithEmail, loginWithGoogle } = useContext(AuthContext)

    function successAlert() {
        Swal.fire({
            title: "Successfull!",
            text: "You are logged in successfully",
            icon: "success",
            confirmButtonColor: "#01f702",
            confirmButtonText: "Ok"
        }).then((result) => {
            if (result.isConfirmed) {
                navigate(location?.state || '/')
            }
        });
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user)
                successAlert()
            }).catch(err => {
                console.error(err);
                alert(err.message)
            })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginWithEmail(email, password)
            .then(result => {
                console.log(result.user)

                //alert here 


            }).catch(err => {
                console.error(err);
                alert(err.message)
            })
    }
    return (
        <>
            <Outlet></Outlet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col w-full ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn bg-amber-200 mt-4">Login</button>
                                <p>New here? <Link to='/register' className="link hover:text-red-400 font-rancho text-[15px]">create new account</Link></p>
                            </fieldset>
                        </form>
                        <button onClick={handleGoogleLogin} className="btn bg-amber-200 mt-4">Sign In With Google</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;