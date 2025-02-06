import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";


const Loginpage = () => {
    const navigate = useNavigate(); 
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Login Details: ", { username, email, password });

       
        navigate('/'); 
    };

    return (
        <div>
            
                <h1 style={{ display: 'flex', justifyContent: 'center', fontFamily: 'sans-serif', textDecoration:'underline'}}>GREBE LOGIN</h1>
            
            <div className="tablelg">
                <form onSubmit={handleSubmit}>
                    <table className="logintab" style={{ border: '4px solid turquoise' }}>
                        <tbody>
                        <tr className="icon">
                            <td>
                                <i className="fa-regular fa-user"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    UserName:
                                    <input
                                        type="text"
                                        name="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Email:
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Password:
                                    <input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Save password:
                                    <input type="checkbox" name="savepswd" />
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit" className="loginbtn">LOGIN</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
};
console.log("Loginpage rendered");
export default Loginpage;
