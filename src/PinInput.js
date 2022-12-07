import React from 'react'

function PinInput({handleSubmit}) {

    return (
        <div>
            <form>
                <label>
                    Pin:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" onSubmit={handleSubmit}/>
            </form>
        </div>
    )
}

export default PinInput;