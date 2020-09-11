import './bilangan.css'

import React, {Component} from 'react';

class Bilangan extends Component {

    state = {
        hasilAkhir: '',
        bahanAw: {
        pilihan: '',
        konversi: '',
        nilaiAwal: 0    
    }
}
    changeType = (event) => {
        let bahanAwN = {...this.state.bahanAw}
        bahanAwN[event.target.name]= event.target.value
        this.setState({
            bahanAw: bahanAwN
        }, () => {
            console.log(this.state.bahanAw)
        }
        )
    }
    hitungNilai = () => {
        let bahanNew = {...this.state.bahanAw}
        if(bahanNew.pilihan == 10){
            if(bahanNew.konversi == 10){
                this.setState({
                    hasilAkhir: bahanNew.nilaiAwal
                })
            }else if(bahanNew.konversi == 2){
                let decimal = bahanNew.nilaiAwal*1
                let bin = decimal.toString(2)
                this.setState({
                    hasilAkhir: bin
                })
            }else if(bahanNew.konversi == 8){
                let decimal = bahanNew.nilaiAwal*1
                let oct = decimal.toString(8)
                this.setState({
                    hasilAkhir: oct
                })
            }else if(bahanNew.konversi == 16){
                let decimal = bahanNew.nilaiAwal*1
                let hex = decimal.toString(16).toUpperCase()
                this.setState({
                    hasilAkhir: hex
                })
            }
        }else if (bahanNew.pilihan == 2){
            let bin = bahanNew.nilaiAwal*1
            let dec = parseInt(bin , 2)
            if(bahanNew.konversi == 10){ 
                this.setState({
                    hasilAkhir: dec
                })
            }else if(bahanNew.konversi == 2){
                this.setState({
                    hasilAkhir: bahanNew.nilaiAwal
                })
            }else if(bahanNew.konversi == 8){
                let oct = dec.toString(8)
                this.setState({
                    hasilAkhir: oct
                })
            }else if(bahanNew.konversi == 16){
                let hex = dec.toString(16).toUpperCase()
                this.setState({
                    hasilAkhir: hex
                })
            }
        }else if (bahanNew.pilihan == 8){
            let oct = bahanNew.nilaiAwal*1
            let dec = parseInt(oct , 8)
            if(bahanNew.konversi == 10){ 
                this.setState({
                    hasilAkhir: dec
                })
            }else if(bahanNew.konversi == 2){
                let bin = dec.toString(2)
                this.setState({
                    hasilAkhir: bin
                })
            }else if(bahanNew.konversi == 8){
                let oct = dec.toString(8)
                this.setState({
                    hasilAkhir: oct
                })
            }else if(bahanNew.konversi == 16){
                let hex = dec.toString(16).toUpperCase()
                this.setState({
                    hasilAkhir: hex
                })
            }
        }else if (bahanNew.pilihan == 16){
            let hex = bahanNew.nilaiAwal
            let dec = parseInt(hex , 16)
            if(bahanNew.konversi == 10){ 
                this.setState({
                    hasilAkhir: dec
                })
            }else if(bahanNew.konversi == 2){
                let bin = dec.toString(2)
                this.setState({
                    hasilAkhir: bin
                })
            }else if(bahanNew.konversi == 8){
                this.setState({
                    hasilAkhir: bahanNew.nilaiAwal
                })
            }else if(bahanNew.konversi == 16){
                this.setState({
                    hasilAkhir: bahanNew.nilaiAwal
                })
            }
        }
    }
    render(){
        return(
            <center>
            <div className="layer1">
                <div className="titlelayer">
                <h6>Konfersi Bilangan</h6>
                </div>
                <table>
                    <tr>
                        <td>
                            <div class="form-group">
                            <label >
                            <select className="form-control" name="pilihan"  onChange={this.changeType}>
                                <option>Pilih Bilangan </option>
                                <option name="pilihan" value="10">Decimal</option>
                                <option name="pilihan" value="2">Binner</option>
                                <option name="pilihan" value="8">Octal</option>
                                <option name="pilihan" value="16">Hexadecimal</option>
                            </select>
                            </label>
                            <input name="nilaiAwal" class="form-control" onChange={this.changeType} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="form-group">
                            <label >Pilihan Konversi</label>
                            <select className="form-control" name="konversi" onChange={this.changeType}>
                                <option>Pilih Koversi -</option>
                                <option name="konversi" value="10">Decimal</option>
                                <option name="konversi" value="2">Binner</option>
                                <option name="konversi" value="8">Octal</option>
                                <option name="konversi" value="16">Hexadecimal</option>
                            </select>
                            </div>
                        </td>
                    </tr>
                                    
                </table>             
                <button className="btn btn-danger" onClick={this.hitungNilai}>Hitung</button>
                <hr/>
                <h6>Hasil</h6>
                <input className="form form-control" name="hasil" value={this.state.hasilAkhir} disabled />
            </div>
            </center>
        );
    }
}
export default Bilangan;