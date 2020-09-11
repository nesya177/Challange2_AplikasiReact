import './bmi.css'

import React, { Component } from 'react';

class Bmi extends Component {
    state = {
        hasil: 'Masukan Nilai!',
        bahan: {
            berat: 0,
            tinggi: 0
        }
    }
    data = (event) => {
        let bahanNew = { ...this.state.bahan }
        bahanNew[event.target.name] = event.target.value
        this.setState({
            bahan: bahanNew
        }, () => {
            console.log('value : ', this.state.bahan)
        }
        )
    }
    proses = () => {
        let bahanNew = { ...this.state.bahan }
        let bmi = bahanNew.berat / ((bahanNew.tinggi / 100) ** 2)
        console.log(bmi)
        if (bmi < 18.5) {
            this.setState({
                hasil: 'Kekurangan berat badan'
            })
        } else if (bmi >= 18.5 && bmi < 25) {
            this.setState({
                hasil: 'Normal(Ideal)'
            })
        } else if (bmi >= 25 && bmi <30) {
            this.setState({
                hasil: 'Kelebihan berat badan'
            })
        } else {
            this.setState({
                hasil: 'Kegemukan'
            })
        }
    }
    render() {
        return (
            <center>
                <div className="card">
                    <div className="card-header">
                        Body Miss Index
        </div>
                    <div className="card-body">
                        <table>
                            <tr>
                                <td>Berat</td>
                                <td><input className="form-control" name="berat" onChange={this.data} /></td>
                            </tr>
                            <tr>
                                <td>Tinggi</td>
                                <td><input className="form-control" name="tinggi" onChange={this.data} /></td>
                            </tr>
                        </table>

                    </div>
                    <div className="card-footer">
                        <button href="" className="btn btn-info" onClick={this.proses}>Hitung</button>
                        <h4 className="title">Hasil</h4>
                        <div class="alert alert-info" role="alert">
                            {this.state.hasil}
                        </div>
                    </div>

                </div>
            </center>
        );
    }
}
export default Bmi;