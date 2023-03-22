import React, { Component } from 'react';
import ReactPlayer from 'react-player/youtube'
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import '../global-components/navbar-v5.css'

class VideoV3 extends Component {



  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'


    return <div className="video-area margin-top-80"
    // style={{ margin: "100px 10px 10px 100px" }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-12">
            <div className='youtube-div' >
              <ReactPlayer url='https://www.youtube.com/watch?v=R3bC0ThQ2pM' className="youtube-vedio" controls={true} height={600} width={1200} />
              <ReactPlayer url='https://www.youtube.com/watch?v=R3bC0ThQ2pM' className="youtube-small" controls={true} height={200} width={400} />
            </div>
          </div>
        </div>
      </div>
    </div>


  }
}

export default VideoV3