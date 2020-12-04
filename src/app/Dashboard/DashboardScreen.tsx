import React from 'react'
import IdentityInformationComponent from './panels/IdentityInformation'
import { Authentication } from 'did-resolver'
import Balance from './panels/Balance'
import { Token } from '../state/reducers/tokens'
import DataVaultSummary from './panels/DataVaultSummary'
import { screens } from '../Authenticated/components/Navigation'

interface DashboardScreenInterface {
  chainId?: number | null
  address: string | null
  owner?: string | null
  delegates?: Authentication[]
  tokens?: Token[]
  storage?: { available: number; used: number }
  changeOwner: (provider: any, newOwner: string) => any
  addDelegate: (provider: any, delegateAddr: string) => any
  addCustomToken: (provider: any, tokenAddr: string) => any
  changeScreen: (screen: string) => void
}

const DashboardScreen: React.FC<DashboardScreenInterface> = ({
  chainId, address, owner, delegates, tokens, changeOwner, addDelegate, addCustomToken, changeScreen, storage
}) => {
  return (
    <div className="content dashboard">
      <IdentityInformationComponent
        address={address}
        chainId={chainId}
        owner={owner}
        delegates={delegates}
        changeOwner={changeOwner}
        addDelegate={addDelegate}
      />
      <div className="container">
        <div className="column">
          <Balance tokens={tokens} addCustomToken={addCustomToken} />
        </div>
        <div className="column">
          <DataVaultSummary storage={storage} handleButton={() => changeScreen(screens.DATAVAULT)} />
        </div>
      </div>
    </div>
  )
}

export default DashboardScreen