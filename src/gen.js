const bip39 = require('bip39')
const eth = require('ethereumjs-wallet')

var genAddress = async (mnemonic) => {
    var path = `m/44'/0'/0'/0/0`;
    var seed = bip39.mnemonicToSeedSync(mnemonic);
    var ethereumHdWallet = eth.hdkey.fromMasterSeed(seed);
    const wallet = ethereumHdWallet.derivePath(path).getWallet()
    const address = `0x${wallet.getAddress().toString('hex')}`
    const privateKey = wallet.getPrivateKey().toString('hex')

    return address+"\n"+privateKey;
};

//console.log(genAddress("Alpha Romeo Bravo Zulu Delta One Niner Male Female German Indian Russian"));
module.exports = genAddress;

