import {useState} from "react";

const List = () => { 
    const [{scrib},setSignup] = useState ({
        scrib: '',
    });

    const handleChange = (e) =>{
        const val = e.target.value;
        const key = e.target.scrib;
        
        setSignup ((prev) => {
            console.log(prev);
            console.log(val, key);
            const newState = {
            ...prev, 
            // prendre le reste / décomposer avec sont reste
            [key]: val,
            }

            return newState
        });
        
    }

    return(
    <div className="w-1/2 mb-4">
    <label htmlFor="scrib" className="block font-medium text-gray-700">
    scrib
    </label>
    <input
    type="text"
    className="block w-full px-2 py-1 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
    id="scrib"
    value={scrib}
    onChange={handleChange}
    name="scrib"
    />
    </div> 
    )
}

export default List;