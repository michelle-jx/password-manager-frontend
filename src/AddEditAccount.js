import React, {useState} from 'react'

function AddEditAccount({onSubmit}) {
    const [websites, setWebsites] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Websites:
                    <input type="text" name="websites" value={websites} onChange={() => setWebsites()}/>
                    Username:
                    <input type="text" name="username" value={username} onChange={() => setUsername()}/>
                    Password:
                    <input type="text" name="password" value={password} onChange={() => setPassword()}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default AddEditAccount;