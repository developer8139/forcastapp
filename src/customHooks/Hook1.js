import { useState, useEffect } from "react";


export const Hook1 = (data) => {
    const [stuff, setStuff] = useState({});

    useEffect(function() {
        if(data !== null) {
            const d = data.reduce((prev, curr, index) => {
                prev["info" + index] = {...curr}
    
                return prev;
            },{})

            setStuff(d)
        }

    },[data])

    return [stuff]
}