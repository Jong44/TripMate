import React, { useState } from 'react'

const LanguageToogle = () => {
    const [checked, setChecked] = useState(false)
    const toggle = () => {
        console.log("toggle")
        setChecked(!checked)
    }
    return (
        <label className="flex cursor-pointer select-none items-center text-black">
                <div className="relative">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={toggle}
                        className="sr-only"
                    />
                    <div className="block h-9 w-16 rounded-full border border-[#BFCEFF] glassed"></div>
                    <div
                        className={`dot bg-white absolute top-1 h-7 w-7 rounded-full flex justify-center items-center transition-all duration-300`}
                        style={{
                            left: checked ? "calc(100% - 2rem)" : "0.25rem",
                        }}
                    >
                        <p className="text-xs font-bold">
                            {checked ? "ID" : "EN"}
                        </p>
                    </div>
                </div>
            </label>
    )
}

export default LanguageToogle