import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context_provider/AuthContext";
import { updateProfile } from "firebase/auth";
// import auth from "../../firebase/__config__";

const Register = () => {
    const { registerWithEmail, loginWithGoogle } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user)
                alert('User logged in successfully with Google')
            }).catch(err => {
                console.error(err);
                alert(err.message)
            })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name);
        registerWithEmail(email, password)
            .then(result => {
                console.log(result.user)
                updateProfile(result.user, {
                    displayName: name,
                })
                    .then(() => {
                        alert('User registration successful')
                    }).catch((error) => {
                        console.error(error);
                        alert(error.message + 'from update ')
                    })
            }).catch(err => {
                console.error(err);
                alert(err.message + 'from register')
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col w-full ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input type="text" name="name" className="input" placeholder="Name" />
                            <label className="fieldset-label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <button className="btn bg-amber-200 mt-4">Register</button>
                            <p>Already have an account? <Link to='/login' className="link hover:text-red-400 font-rancho text-[15px]">login here</Link></p>
                        </fieldset>
                    </form>
                    <button onClick={handleGoogleLogin} className="btn bg-amber-200 mt-4">Sign In With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;