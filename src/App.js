import React, { useState } from 'react';
import './bmi.css'
function App() {
  const [calc, setcalc] = useState({ age: '', ht: '', wt: '',gender: '' }) // to get input form data
  const [boolres, setboolres] = useState(false) // manage output div state 
  const [bres, setbres] = useState('')  // manage result
  const [rel, setrel] = useState('')    // manage 'Normal' result output
  const bmi = () => {
    return parseFloat(calc.wt) * 10000 / (parseFloat(calc.ht) * parseFloat(calc.ht));     // bmi calculation
  }
  // Setting result based on bmi value calculated
  function endres() {
    if (bmi() < 16) {
      setrel('Severe Thinness');
    }
    else if (bmi() >= 16 && bmi() < 18) {
      setrel('Thinness');
    }
    else if (bmi() >= 18 && bmi() <= 25) {
      setrel('Normal');
    }
    else if (bmi() > 25 && bmi() <= 30) {
      setrel('Overweight');
    }
    else {
      setrel('Obese');
    }
  }
  const Clickcalc = (e) => {
    bmi();
    endres();
    setbres(`BMI : ${bmi().toFixed(2)}`);
    setboolres(true)
  }
  const onChange = (e) => {
    setcalc({ ...calc, [e.target.name]: e.target.value })
  }
  const Clickres = (e) => {
    setboolres(false)
    setcalc({ age: '', ht: '', wt: '',gender: '' })
    setbres('');
    setrel('');
  }
  return (
    <div className="App">
      <section className="section" id="main">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-2by1">
                    <img src="https://npr.brightspotcdn.com/dims4/default/34fc3b1/2147483647/strip/true/crop/4500x4000+0+0/resize/1760x1564!/quality/90/?url=http:%2F%2Fnpr-brightspot.s3.amazonaws.com%2F9f%2Fc9%2Fc5135e3949a5bae7105101181531%2Fadobestock-301072933.jpeg"
                      alt="" />
                  </figure>
                </div>
                <header className="card-header">
                  <p className="card-header-title is-size-2">
                    BMI Calculator
                  </p>
                </header>
                <div className="card-content">
                  <div className="content">
                    <div className="field">
                      <label className="label">Age (1 year or above)</label>
                      <div className="columns">
                        <div className="column is-two-fifths">
                          <input id="age" className="input " type="text" name='age' placeholder="years" onChange={onChange} value={calc.age} />
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <div className="columns">
                        <div className="column is-two-fifths">
                          <label className="label">Height</label>
                          <input id="Height" className="input " type="text" name='ht' placeholder="cm" onChange={onChange} value={calc.ht} />
                        </div>
                        <div className="column is-two-fifths">
                          <label className="label">Weight</label>
                          <input id="Weight" className="input" type="text" name='wt' placeholder="kg" onChange={onChange} value={calc.wt} />
                        </div>
                      </div>
                    </div>
                    <div className="control is-size-5">
                      <label htmlFor="male" className="radio">  Male</label>
                      <input type="radio" name="gender" id="male" value="Male" onChange={onChange} checked={calc.gender==='Male'}/>
                      <label htmlFor="female" className="radio">Female</label>
                      <input type="radio" name="gender" id="female" value="Female" onChange={onChange} checked={calc.gender==='Female'}/>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="card-footer">
                <button className="button is-info button is-large card-footer-item" onClick={Clickcalc}>Calculate</button>
                <button className="button is-danger button is-large card-footer-item" onClick={Clickres}>Reset</button>
              </footer>
              <div>
                {boolres ?
                  <div>
                    <div className='result'>
                      <p className='result-label'>Result</p>
                      <div className='bres'>{bres}</div>
                      {rel === 'Normal' ?
                        <h2 className='reln' >{rel}</h2> : <h2 className='relnn' >{rel}</h2>
                      }
                    </div>
                  </div> :
                  <div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
