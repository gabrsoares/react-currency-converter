import React, { ChangeEvent, useEffect } from 'react'
import { useConversion } from '../../ConversionContext'

interface SecondProps {
    currency: string[]
    currencyRate: number[]
    setSecondCurrencyValue: React.Dispatch<React.SetStateAction<number>>

}

const SecondCurrency: React.FC<SecondProps> = ({currency, currencyRate, setSecondCurrencyValue}) => {
	const conversion = useConversion()
	if (!conversion) {
		return null
	}

	const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		conversion.changeValue(parseFloat(event.target.value))
	}

	useEffect(()=> {
		setSecondCurrencyValue(conversion.value)
	},[conversion.value])

	return (
		<div>
			<label>Para</label>
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

export default SecondCurrency
