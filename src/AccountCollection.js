import React from 'react'
import {Card} from '@mui/material'
import AccountCard from './AccountCard'
import AddButton from './AddButton'

function AccountCollection({accounts}) {
    const accountList = accounts.map((account) => {
        return <AccountCard key={account.id} account={account} />
    })

    // const userList = users.map((user) => {
    //     return <p user={user.name}/>
    // })

    return (
        <div>
            <h1>{accountList}</h1>
            <AddButton />
        </div>
    )
}

export default AccountCollection;