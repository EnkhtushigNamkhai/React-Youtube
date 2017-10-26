// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><VideoPlayer video={window.exampleVideoData[0]}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><VideoList videos={window.exampleVideoData}/></h5></div>
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: window.exampleVideoData,
      selectedVideo: window.exampleVideoData[0]
    };
  }
  onVideoSelected() {
    this.setState({
      selectedVideo: this
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><VideoPlayer video={this.state.selectedVideo}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><VideoList videos={this.state.videoList} onClick={() => this.onVideoSelected}/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
