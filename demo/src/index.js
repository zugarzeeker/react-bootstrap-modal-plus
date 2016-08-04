import React from 'react'
import ReactDOM from 'react-dom'
import ReactModal from '../../src'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  showModal() {
    this.setState({show: true});
  }

  hideModal() {
    this.setState({show: false});
  }

  saveModal() {
    // save operation
    this.setState({show: false});
  }

  render() {
    return (
      <section>
        <button className="btn btn-primary btn-lg" onClick={this.showModal.bind(this)}>
          Open Modal
        </button>
        <ReactModal
          show={this.state.show}
          removeHeader={false}
          removeFooter={false}
          removeSaveBtn={false}
          onHide={this.hideModal.bind(this)}
          onSave={this.saveModal.bind(this)}
          title={'Hello'}
          body={(<img className="img-responsive"
          src="http://oi43.tinypic.com/fjfghz.jpg" />)}
        />
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
