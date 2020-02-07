import React, { Fragment } from 'react';


const NotFound = () => {
    return (
        <Fragment>
            <div  style={{display:'flex', placeContent: 'center', flexDirection:'column'}}>
                <h1 className='text-primary'>
                    Page Not Found
                </h1>
                <h3>Sorry, this page does not exist</h3>
            </div>
        </Fragment>
    )
};

export default NotFound;