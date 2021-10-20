import React from 'react';
const Avatarins = (props) => {
    const { image, altinfo } = props;
    return <div><img src = {image} alt={altinfo} image></img></div>;
};
export default Avatarins;