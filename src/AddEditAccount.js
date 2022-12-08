import React from 'react'

function AddEditAccount({onSubmit}) {

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
                <input type="submit" value="Submit" onSubmit={onSubmit}/>
            </form>
        </div>
    )
}

export default AddEditAccount;