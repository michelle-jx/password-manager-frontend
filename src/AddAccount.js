import React from 'react'

function AddAccount({handleSubmit}) {

    return (
        <div>
            <form>
                <label>
                    Website:
                    <input type="text" name="name" />
                    Username:
                    <input type="text" name="name" />
                    Password:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" onSubmit={handleSubmit}/>
            </form>
        </div>
    )
}

export default AddAccount;