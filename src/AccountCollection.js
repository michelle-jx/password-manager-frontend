import React from 'react'
import AccountCard from './AccountCard'

function AccountCollection({accounts, onPatchAccount, onDeleteAccount}) {
    const accountList = accounts.map((account) => {
        return <AccountCard key={account.id} account={account} onPatchAccount={onPatchAccount} onDeleteAccount={onDeleteAccount}/>
    })

    return (
        <div>
            <h1>{accountList}</h1>
        </div>
    )
}

export default AccountCollection;