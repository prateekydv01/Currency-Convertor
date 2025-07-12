import React,{useId} from 'react'

 
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectCurrency,
    currencyOptions = [],
    //app crash na ho isliye empty array dia h by default 
    currencyDisable,
    amountDisable = false,
    
    className = "",
}) {
   
    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label  htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id = {amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value = {amount}
                    onChange={(e)=>
                        onAmountChange && onAmountChange(Number(e.target.value)) // and yah ek checker ke liye h agar ye value exist kregi tbhi function ko call krega 
                        //kai bar java script sting le leti h to usko number banaya h 
                    }
                    
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-l9g px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange &&
                        onCurrencyChange(e.target.value)
                    }
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency)=>(
                                <option key={currency} value={currency}>
                                {/* perforamance lani h loop ke andar to key use hoga */}
                            {currency}
                        </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
