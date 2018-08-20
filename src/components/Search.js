import React, { Component } from 'react';
import createHistory from "history/createBrowserHistory"

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      selectValue: 'open'
    }
  }

  handleSelectChange = (e) => {
    this.setState({
      selectValue: e.target.value 
    });

    const history = createHistory();
    history.push({
      pathname: "/",
      search: `?state=${e.target.value}`
    });
    this.props.fetchIssues();
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value 
    });
  }

  onKeyPress = (e) => {
    const history = createHistory()
    if(e.keyCode == 13){
      history.push({
        pathname: "/",
        search: `?query=${this.state.inputValue}`
      });
    }
    this.props.fetchIssues();
  }
  

  render() {
    return (
      <div className="input-group mb-3">
        <select className="form-control col-2" value={this.state.selectValue} onChange={this.handleSelectChange}>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
        <input type="text" className="form-control" aria-label="Search" onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />
      </div>
    );
  }
}

export default Search;