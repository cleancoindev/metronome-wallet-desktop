'use strict'

const MetronomeContracts = require('metronome-contracts')
const contracts = MetronomeContracts['mordor']

const indexerUrl = process.env.MORDOR_INDEXER_URL || 'http://localhost:3015'
const wsApiUrl = process.env.MORDOR_NODE_URL || 'ws://localhost:8556'

module.exports = {
  displayName: 'Mordor',
  chainType: 'ethereum',
  blockTime: 15,
  decimals: 18,
  chainId: 63,
  symbol: 'ETC',

  // connections status mappings
  connections: {
    indexer: 'Indexer connection',
    web3: 'Web3 connection'
  },

  // contracts addresses
  tokenPorterAddress: contracts.TokenPorter.address,
  converterAddress: contracts.AutonomousConverter.address,
  validatorAddress: contracts.Validator.address,
  metTokenAddress: contracts.METToken.address,
  auctionAddress: contracts.Auctions.address,

  // urls
  explorerUrl: 'https://mordorexplorer.ethernode.io/tx/{{hash}}',
  indexerUrl,
  wsApiUrl,

  // defaults
  coinDefaultGasLimit: '21000',
  metDefaultGasLimit: '250000',
  defaultGasPrice: '1000000000',
  maxGasPrice: '20000000000000000'
}
