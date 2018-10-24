import React, { Component } from 'react';
import 'react-image-crop/dist/ReactCrop.css';

import './App.css';
import Uploader from './components/Uploader';
import Cropper from './components/Cropper';

class App extends Component {

  state = {
    isUploaded: false,
    isReady: false,
    preview: "",
    crop: {
      x: 20,
      y: 10,
      width: 30,
      height: 10
    }
  }

  handleDrop = this.handleDrop.bind(this);
  handleCrop = this.handleCrop.bind(this);
  startCrop = this.startCrop.bind(this);
  reset = this.reset.bind(this);

  handleDrop(e){
    this.setState({ preview: e[0].preview, isUploaded: true });
  }

  rejectedDrop(e){
    if(e[0].size > 1000000) alert('File is too big')
      else {
        alert('There was a problem with your image')
      }
    
  }

  handleCrop(crop) {
    this.setState({ crop });
  }

  startCrop(){
    this.setState({ isReady: true});
  }

  reset() {
    this.setState({ isUploaded: false, preview: "" });
  }

  render() {
    const { preview, isUploaded, crop, isReady } = this.state;
    return (
      <div className="App">
        <h1>Image Editor</h1>
          {
            isReady === false ?
              <Uploader
                handleDrop={this.handleDrop}
                rejectedDrop={this.rejectedDrop}
                preview={preview}
                startCrop={this.startCrop}
                isUploaded={isUploaded}
                reset={this.reset}
                />
            :
              <Cropper preview={preview} handleCrop={this.handleCrop} crop={crop}/>
          }
      </div>
    );
  }
}

export default App;
