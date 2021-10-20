import React from 'react';
const Taglineins = (props) => {
    const { left, center, right } = props;
    return <div className = "CountInfo"> 
    <div className = "TagInfo"><p>Tweets:</p> {left} </div> 
    <div className = "TagInfo"><p>Following:</p> {center} </div>
    <div className = "TagInfo"><p>Followers:</p> {right}</div> </div>;
};
export default Taglineins;