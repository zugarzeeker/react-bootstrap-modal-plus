import React, { Component, PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class ReactModal extends Component {
  render() {
    const {
      body, show, onHide, onSave, title,
      removeHeader, removeFooter, removeSaveBtn
    } = this.props;

    let modalHeader = removeHeader ? null : (
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-lg">{title}</Modal.Title>
      </Modal.Header>
    );

    let modalBody = (
      <Modal.Body>
        {body}
      </Modal.Body>
    );

    let modalFooter = removeFooter ? null : (
      <Modal.Footer>
        {removeSaveBtn ? null : <Button onClick={this.props.onSave}>Save</Button>}
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    );

    return (
      <Modal {...this.props} show={show} onHide={onHide} dialogClassName="custom-modal">
        {modalHeader}
        {modalBody}
        {modalFooter}
      </Modal>
    );
  }
}

ReactModal.propTypes = {
  body: PropTypes.any.isRequired,
  onHide: PropTypes.func.isRequired,
  onSave: PropTypes.func,
  removeHeader: PropTypes.bool,
  removeFooter: PropTypes.bool,
  removeSaveBtn: PropTypes.bool,
  show: PropTypes.bool.isRequired,
  title: PropTypes.string
};
