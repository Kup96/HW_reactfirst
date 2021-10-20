import logo from './logo.svg';
import './App.css';
import React from 'react';
import Avatarins from './components/cardcomps/Avatar'
import Names from './components/cardcomps/Names'
import Taglineins from './components/cardcomps/Tagline'
import Button from './components/cardcomps/button'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Edward",
      surname: "Norton",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Edward_Norton_2012.jpg/220px-Edward_Norton_2012.jpg",
      Tweets: "300",
      Following: "700",
      Followers: "420",
    };
  }
  render(){
    const { name } = this.state;
    const { surname } = this.state;
    const { avatar } = this.state;
    const { Tweets } = this.state;
    const { Following } = this.state;
    const { Followers } = this.state;
    return (
      <>
        <Avatarins image = {avatar} altinfo = { surname } />
        <Names name = {name} surname = {surname} />
        <Button />
        <Taglineins left = {Tweets} center = {Following} right = {Followers} />

      </>
    );
  }
}

export default App;
