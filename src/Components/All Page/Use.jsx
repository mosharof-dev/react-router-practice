import React, { use } from 'react';

const Use = ({usePromise }) => {

    const data = use(usePromise)
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default Use;