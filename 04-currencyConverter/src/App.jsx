import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from) || {}; // Fallback empty object if api is loading
  const options = Object.keys(currencyInfo);

  // FIXED: Corrected state setting syntax
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount); // FIXED: No longer invoking 'amount(...)'
  };

  const conversion = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/818517624/photo/world-currency-exchange-table-graph.jpg?s=1024x1024&w=is&k=20&c=lRbzRhTTgGhuhsZc3zt3I3hGsIeD8DfDmr4Jo-VY03o=')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30 shadow-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              conversion();
            }}
          >
            {/* "From" Currency Box */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)} // FIXED: correctly changes 'from' state
                selectedCurrency={from} // Match your InputBox prop name
                onAmountChange={(amt) => setAmount(amt)}
                amountDisabled={false}
              />
            </div>

            {/* Swap Button Area */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 hover:bg-blue-700 text-white px-2 py-0.5 transition-colors uppercase text-xs font-bold"
                onClick={swap}
              >
                swap
              </button>
            </div>

            {/* "To" Currency Box */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to} // Match your InputBox prop name
                amountDisabled={true} // Readonly since it's the output
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors shadow-md"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;