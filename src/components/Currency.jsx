import React, { useState } from 'react'
import '../css/currency.css'
import { FaArrowDown } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let currencyApiKey = "fca_live_8iRGtxlSydwxqQ2N3Wy3PqUT2Wzd7iHzKZXfhpCV";
let exchangeApi = `${BASE_URL}?apikey=${currencyApiKey}&base_currency=`


function Currency() {

    const [amount, setAmout] = useState();
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResault] = useState();


    const exchange = async () => {

        const res = await axios.get(`${exchangeApi}${fromCurrency}`);

        const resa = await ((res.data.data[toCurrency]) * amount).toFixed(2);

        setResault(resa);




    }

    const changeParam = () => {
        const temp = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(temp);

    }


    return (

        <>
            <div className='headd'>

                Currency Conversion v1.2 @react <FaReact />






            </div>


            <div className='currency-div'>
                <input
                    value={amount}
                    onChange={(e) => setAmout(e.target.value)}
                    type="number" className='amout' placeholder='0' />
                <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}
                    className='from-currency-option'>
                    <option className='money'>USD</option>
                    <option className='money'>EUR</option>
                    <option className='money'>TRY</option>
                    <option className='money'>GBP</option>
                    <option className='money'>CAD</option>
                    <option className='money'>AUD</option>
                    <option className='money'>JPY</option>
                    <option className='money'>CHF</option>
                    <option className='money'>NZD</option>
                    <option className='money'>CNY</option>
                    <option className='money'>SEK</option>
                    <option className='money'>NOK</option>
                    <option className='money'>MXN</option>
                    <option className='money'>INR</option>
                    <option className='money'>ZAR</option>



                </select>

                <FaArrowDown onClick={changeParam} style={{ cursor: 'pointer' }} />

                <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option className='money'>USD</option>
                    <option className='money'>EUR</option>
                    <option className='money'>TRY</option>
                    <option className='money'>GBP</option>
                    <option className='money'>CAD</option>
                    <option className='money'>AUD</option>
                    <option className='money'>JPY</option>
                    <option className='money'>CHF</option>
                    <option className='money'>NZD</option>
                    <option className='money'>CNY</option>
                    <option className='money'>SEK</option>
                    <option className='money'>NOK</option>
                    <option className='money'>MXN</option>
                    <option className='money'>INR</option>
                    <option className='money'>ZAR</option>




                </select>

                <input
                    value={result}
                    type="number"
                    className='result'
                    readOnly
                    placeholder='0'
                />
                <button
                    onClick={exchange} className='button'>CEVİR</button>
            </div>
        </>
    )
}

export default Currency