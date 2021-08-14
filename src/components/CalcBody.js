import React from 'react'
import OutputBox from './OutputBox'

function CalcBody() {
    return (
        <div className=" w-80 h-auto bg-white rounded-md">
            {/* Output box */}
            <OutputBox/>
            {/* Buttons */}
            <div className="grid grid-cols-4 text-3xl">
                {/* Row 1 */}
                <button className="button bg-gray-600 active:bg-gray-400">C</button>
                <button className="button bg-gray-600 active:bg-gray-400">+/-</button>
                <button className="button bg-gray-600 active:bg-gray-400">%</button>
                <button className="button bg-yellow-500 active:bg-yellow-600">/</button>
                {/* Row 2 */}
                <button className="button bg-gray-400 active:bg-gray-300">7</button>
                <button className="button bg-gray-400 active:bg-gray-300">8</button>
                <button className="button bg-gray-400 active:bg-gray-300">9</button>
                <button className="button bg-yellow-500 active:bg-yellow-600">X</button>
                {/* Row 3 */}
                <button className="button bg-gray-400 active:bg-gray-300">4</button>
                <button className="button bg-gray-400 active:bg-gray-300">5</button>
                <button className="button bg-gray-400 active:bg-gray-300">6</button>
                <button className="button bg-yellow-500 active:bg-yellow-600">-</button>
                {/* Row 4 */}
                <button className="button bg-gray-400 active:bg-gray-300">1</button>
                <button className="button bg-gray-400 active:bg-gray-300">2</button>
                <button className="button bg-gray-400 active:bg-gray-300">3</button>
                <button className="button bg-yellow-500 active:bg-yellow-600">+</button>
                {/* Row 5 */}
                <button className="col-span-2 button bg-gray-400 active:bg-gray-300 rounded-bl-xl">0</button>
                <button className="button bg-gray-400 active:bg-gray-300">.</button>
                <button className="button bg-yellow-500 active:bg-yellow-600 rounded-br-xl">=</button>
            </div>
        </div>
    )
}

export default CalcBody
