import 'bootstrap/dist/css/bootstrap.css';
import { Component } from "react";
import queryString from "query-string";
import { Route, withRouter } from "react-router-dom";
import HomePage from "./components/Home";
import BookList from "./components/BookList";

class App extends Component {
  constructor(props){
    super(props);
    this.pushGenrebinded = this.pushGenreToHistory.bind(this)
  }

  pushGenreToHistory(topic) {
    const searchObj = {
      topic,
      mime_type: "image/jpeg"
    };

    const query = queryString.stringify(searchObj);
    this.props.history.push(`/books?${query}`);
  };

  render() {
    return (
      <>
        <Route exact path="/" component={
          () => (
          <HomePage setGenre={this.pushGenrebinded} />
        )} />
        <Route path="/books" component={()=>(<BookList />)} />
      </>
    );
    }
}

export default withRouter(App);
