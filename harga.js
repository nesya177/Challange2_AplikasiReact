import './harga.css'

import React , {Component} from 'react';

class Harga extends Component {
    state = {
        hasil:'Hasil!',
        bahan: {
            hargaAwal: 0,
            ppn: 0,
            diskon: 0
        }
    }
    temp = (event) => {
        let bahanNew = {...this.state.bahan}
        bahanNew[event.target.name] = event.target.value
        this.setState({
            bahan: bahanNew
        }, () => {
            console.log(this.state.bahan)
        }
        )
    }
    hitungNilai = ()=> {
        let bahanNew = {...this.state.bahan}
        let diskon = bahanNew.diskon / 100 * bahanNew.hargaAwal
        let ppn = bahanNew.ppn / 100 * bahanNew.hargaAwal
        let hargaakhir = bahanNew.hargaAwal*1 + ppn - diskon

        this.setState({
            hasil: hargaakhir
        })
    }
    render(){
        return(
               <center>
            <div className="layer1">
                <div className="layeratas">
                    <h6>Hitung Harga Akhir</h6>
                </div>
                <table>
                    <tr>
                        <td>
                            <div class="form-group">
                            <label >Harga Awal</label>
                            <input name="hargaAwal" class="form-control" onChange={this.changeNilai} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label >PPN</label>
                            <div class="input-group mb-3">
                            <input name="ppn" class="form-control" onChange={this.changeNilai} />
            
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label >Diskon</label>
                            <div class="input-group mb-3">
                            <input name="diskon" class="form-control" onChange={this.changeNilai} />
                            </div>
                        </td>
                    </tr>                  
                </table>             
                <button className="btn btn-danger" onClick={this.hitungNilai}>Hitung</button>
                <hr/>
                <h6>Hargaa Akhir</h6>
                <input className="form form-control" name="hasil" value={this.state.hasil} disabled />
            </div>
            </center>
        ); 
    }
}
export default Harga;
