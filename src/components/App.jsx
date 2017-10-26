
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: window.exampleVideoData,
      selectedVideo: window.exampleVideoData[0]
    };
  }

  componentDidMount() {
    this.search('dog');
  }

  search(query) {
    //searchYoutube calls this
    var onHandleSearch = function(newData) {
      this.setState({
        videoList: newData,
        selectedVideo: newData[0]
      });
    };

    this.props.searchYouTube( { 'key': window.YOUTUBE_API_KEY, 'query': query, 'max': 5}, onHandleSearch.bind(this));
  }

  onVideoSelected(video) {
    this.setState({
      selectedVideo: video
    });
  }
  
  

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search onSearch = {this.search.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.selectedVideo}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videoList} onClick={this.onVideoSelected.bind(this)}/></div>
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
