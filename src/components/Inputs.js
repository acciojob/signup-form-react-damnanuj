import React, { useState } from "react";

const Inputs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [welcomeMessage, setWelcomeMessage] = useState("");

    const handleForm = (e) => {
        e.preventDefault();

        // Validation
        if (!name || !email || !phoneNumber || !password) {
            setError("All fields are mandatory.");
            return;
        }

        if (!/^[a-zA-Z0-9\s]+$/.test(name)) {
            setError("Name is not alphanumeric.");
            return;
        }

        if (!email.includes("@")) {
            setError("Email must contain @.");
            return;
        }

        if (!["Male", "Female", "Other"].includes(gender)) {
            setError("Please identify as male, female, or other.");
            return;
        }

        if (!/^\d+$/.test(phoneNumber)) {
            setError("Phone Number must contain only numbers.");
            return;
        }

        if (password.length < 6) {
            setError("Password must contain at least 6 characters.");
            return;
        }

        //username from email
        const username = email.substring(0, email.indexOf("@"));

        // Reset error
        setError("");

        setWelcomeMessage(`Hello ${username}`);
    };

    return (
        <div>
            {
                !welcomeMessage && (
            
            <form onSubmit={handleForm}>
                {error && <p>{error}</p>}
                <input
                    data-testid = 'name'
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    data-testid = 'email'
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <select
                    data-testid = 'gender'
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <input
                    data-testid = 'phoneNumber'
                    type="text"
                    placeholder="Enter Your Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <input
                    data-testid = 'password'
                    type="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button data-testid = 'submit' type="submit">Submit</button>
            </form>
                )
            }
            {welcomeMessage && <h1>{welcomeMessage}</h1>}
        </div>
    );
};

export default Inputs;
