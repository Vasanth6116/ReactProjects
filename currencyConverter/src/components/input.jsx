import React  from "react";
function InputBox(
    {
        label,
        amount,
        onAmountChange,
        onCurrencyChance,
        currencyOptions = [],
        selectedCurrency = "usd",
        amountDisbale = false,
        currencyDisabled = false,
        className = "",

    }
)
{
    return(
        <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
            <div>
                <label htmlFor=""></label>
            </div>
        </div>
    )
}