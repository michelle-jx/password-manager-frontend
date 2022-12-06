import React, {useState} from 'react';
import {Card} from '@mui/material'

function AccountCard({account}) {
  const [logininfo, setLogininfo] = useState([])

  return (
    <Card>
      <div>
        {account.websites}
      </div>
    </Card>
  )

}

export default AccountCard;

