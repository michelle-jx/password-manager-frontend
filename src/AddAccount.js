import React, { useState } from 'react'

function AddAccount({ handleAddAccount, accounts }) {
    const [website, setWebsite] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    // POST REQUEST
    function handleSubmit(e) {
        e.preventDefault();
        console.log("woop woop ")
        fetch('http://localhost:9292/accounts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                website: website,
                username: username,
                password: password,
            }),
        })
            .then(r => r.json())
            .then(Data => {
                console.log("submitted")
                const accountPlusOne = [...accounts, Data]
                handleAddAccount(accountPlusOne)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Website:
                    <input type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
                    Username:
                    <input type="text" name="username" value={username} onChange={(e) => setUserName(e.target.value)} />
                    Password:
                    <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddAccount;