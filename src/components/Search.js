import React, { Component } from 'react';
import { QueryStringUtil } from '../util/QueryStringUtil';

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
    {QueryStringUtil({type: 'state', value: e.target.value})}
    this.props.fetchIssues();
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value 
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      {QueryStringUtil({type: 'query', value: this.state.inputValue})}
      this.props.fetchIssues();
    }
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