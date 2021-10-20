import React from 'react';
const Nameins = (props) => {
    const { name, surname } = props;
    return <div className = "NameInfo"> {name} {surname} </div>;
};
export default Nameins;