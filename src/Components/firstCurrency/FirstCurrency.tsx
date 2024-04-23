import React, { ChangeEvent, useEffect } from 'react'
import { useConversion } from '../../ConversionContext'
import './styles.css'

interface FirstProps {
    currency: string[],
    currencyRate: number[],
    setFirstCurrencyValue: React.Dispatch<React.SetStateAction<number>>
    setMoneyValue: React.Dispatch<React.SetStateAction<number>>
}

const FirstCurrency: React.FC<FirstProps> = ({currency, currencyRate, setFirstCurrencyValue, setMoneyValue}) => {
	const conversion = useConversion()
	if (!conversion) {
		return null
	}

	const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		conversion.changeValue(parseFloat(event.target.value))
	}

	useEffect(()=> {
		setFirstCurrencyValue(conversion.value)
	},[conversion.value])

	return (
		<div className='firstCurrency'>
			<label htmlFor='moneyValue'>Valor</label>
			<input type="number" data-testid='moneyValue' id='moneyValue' placeholder="Valor em moeda" name="moneyValue" onChange={(event) => setMoneyValue(parseFloat(event.target.value))}></input>
			<label  htmlFor='currencySelector'>Converter de</label>
			<select id='currencySelector' data-testid='currencySelector' onChange={handleChange}>
				{currency.map((currency, index) => (
					<option key={index} value={currencyRate[index].toString()}>
						{currency}
					</option>
				))}
			</select>
		</div>
	)
}

export default FirstCurrency