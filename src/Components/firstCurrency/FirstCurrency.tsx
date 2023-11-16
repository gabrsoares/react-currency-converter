import React, { ChangeEvent, useEffect } from 'react'
import { useConversion } from '../../ConversionContext'

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
		<div>
			<label>Valor</label>
			<input type="number" name="moneyValue" onChange={(event) => setMoneyValue(parseFloat(event.target.value))}></input>
			<label>Converter de</label>
			<select onChange={handleChange}>
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