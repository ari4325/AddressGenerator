//import React from 'react';
const React = require('react');
//import ReactDOM from 'react-dom';

const bip39 = require('bip39');
const eth = require('ethereumjs-wallet');


class Body extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event) => {
        
        var inputs = document.querySelectorAll('input');
        inputs.forEach((input, i) => {
            var mnemonic = input.value;
            var path = `m/44'/60'/0'/0/0`;
            var seed = bip39.mnemonicToSeedSync(mnemonic);
            var ethereumHdWallet = eth.hdkey.fromMasterSeed(seed);
            const wallet = ethereumHdWallet.derivePath(path).getWallet()
            const address = `0x${wallet.getAddress().toString('hex')}`
            const privateKey = wallet.getPrivateKey().toString('hex')

            var str = address+"\n"+privateKey;
            //console.log(str);

            var outer = document.getElementById('outer');

            var divAddr = document.createElement('div');
            var divPriv = document.createElement('div');


            var addressText = document.createTextNode((i+1)+ ". " + address);
            var ketText = document.createTextNode(privateKey);

            divAddr.appendChild(addressText);
            divPriv.appendChild(ketText);
            outer.appendChild(divAddr);
            outer.appendChild(divPriv);

            outer.appendChild(document.createElement('br'));

            //return <div>address+"\n"+privateKey</div> ;
        })

        
    }

    render(){
        return(
            <div className="container" id='outer'>
                <div>
                <input className="input" id="1"></input>
                </div>
                <br></br>
                <div>
                <input className="input" id="2"></input>
                </div>
                <br></br>
                <div>
                <input className="input"  id="3"></input>
                </div>
                <br></br>
                <div>
                <input className="input"  id="4"></input>
                </div>
                <br></br>
                <div>
                <input className="input"  id="5"></input>
                </div>
                <br></br>
                <div>
                <input className="input"  id="6"></input>
                </div>
                <br></br>
                <div>
                <input className="input"  id="7"></input>
                </div>
                <br></br>
                <div>
                <input className="input"  id="8"></input>
                </div>
                <br></br>
                <div>
                <input className="input"  id="9"></input>
                </div>
                <br></br>
                <div>
                <input className="input"  id="10"></input>
                </div>
                <br>
                </br>
                <button className="button" id="generateBtn" onClick={this.handleClick}>GENERATE</button>
            </div>
        );
    }
}

export default Body;