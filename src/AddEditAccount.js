import React from 'react'

function AddEditAccount({onSubmit}) {

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Websites:
                    <input type="text" name="websites" />
                    Username:
                    <input type="text" name="username" />
                    Password:
                    <input type="text" name="password" />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default AddEditAccount;