import { useState } from "react";

const ClickButton = () => {

    // Regles :

    // 1 ° on ne mettra jamais de hooks dans une condition

            /**
             * if (machin){
             * const [count, setCount] = useState(0);
             * } >>>>> à bannir  se serais un erreur qui renverrer a une erreur 
             */

    // 2 ° Les hooks seront déclarés tout en haut du component. L'ordre des hooks est important (dans certains cas)


    const [count, setCount] = useState(0);

    const decrement = (e) => {
        e.preventDefault();
        setCount(count - 1);
    };

    return (
    <button type="button"                 
    className="p-4 rounded m-4 text-white bg-blue-500 "
    onClick={() => setCount(count + 1)}
    onContextMenu={(e) => decrement(e)}
    >{count}</button>
        )
};

// les Hooks est un ensemble de petit outils qui vas nous permettre 
export default ClickButton;

// https://react-hot-toast.com
// https://fr.reactjs.org/docs/getting-started.html