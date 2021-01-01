import React, { useEffect } from 'react';

const AddScript = url => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = url;
       
        script.async = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        }
    } , [url] );
}



export default AddScript;