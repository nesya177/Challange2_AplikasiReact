import './bank.css'

import React, {Component} from 'react';

class Bank extends Component {
    state ={
        hasil: 0,
        bahan: {
            nominal: 0,
            bunga: 10/100,
            periode: 0
        }
    }
    temp = (event) =>{
        let bahanNew = {...this.state.bahan}
        bahanNew[event.target.name]= event.target.value
        console.log(bahanNew)
        this.setState({
            bahan: bahanNew
        }, () => {
            console.log(this.state.bahan)
        }
        )
    }
    hitung = () => {
        let bahanNew = {...this.state.bahan}
        let bunga = bahanNew.nominal * bahanNew.bunga
        let bungaAkhir = bahanNew.nominal*1 + bunga
        let cicilan = bungaAkhir / bahanNew.periode
    
        this.setState({
            hasil: cicilan
        })
    }
    render(){
        return(
            <center>
            <div className="layer1">
                <div className="titlelayer2">
                    <h6>Cicilan Bank</h6>
                </div>
                <table>
                    <tr>
                        <td>Nominal</td>
                        <td><input className="form-control" name="nominal" onChange={this.temp} /></td>
                    </tr>
                    <tr>
                        <td>Bunga</td>
                        <td><input className="form-control" name="bunga" value="10" disabled /></td>
                    </tr>
                    <tr>
                        <td>Periode</td>
                        <td>
                        <select className="form-control" name="periode" onChange={this.temp}>
                        <option>Pilih Periode -</option>
                        <option name="periode" value="6">6 Bulan</option>
                        <option name="periode" value="12">12 Bulan</option>
                        <option name="periode" value="18">18 Bulan</option>
                        <option name="periode" value="24">24 Bulan</option>
                        </select>
                        </td>
                    </tr>
                </table>
                
                <button className="btn btn-primary" onClick={this.hitung}>Hitung</button>
                <hr/>
                <input className="form form-control" name="hasil" value={this.state.hasil} disabled />
            </div>
            </center>
        );
    }
}
export default Bank;