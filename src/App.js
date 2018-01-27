import React, { Component } from "react";
import marked from "marked";
import { Row, Col, Input } from "antd";
import "antd/dist/antd.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.markdown = this.markdown.bind(this);
    this.state = {
      markdown: ""
    };
  }
  handleChange(e) {
    const { value } = e.target;
    this.setState({
      markdown: this.markdown(value)
    });
  }
  markdown(value){
   return marked(value)
  }
  render() {
    return (
      <div className="App">
        <Row gutter={10}>
          <Col span={12}>
            <div>Write Code Here</div>
            <br />
            <Input.TextArea className="markdown" onChange={this.handleChange} />
          </Col>
          <Col span={12}>
            <div>Result</div>
            <br />
            <div className="preview" dangerouslySetInnerHTML={{__html : this.state.markdown}}></div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
