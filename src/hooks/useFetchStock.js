import { useState, useEffect } from "react"
import { getTicker } from "../helpers/getStock";


export const useFetchStock = (stock) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {      
        getTicker( stock )
            .then(inf => {

                //setTimeout(() => {
                    setState({
                        data: inf,
                        loading: false
               // }, 3000);
            });
         })
         
        }, [stock])
   

    return state;
}