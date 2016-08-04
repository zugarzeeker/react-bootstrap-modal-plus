'use strict';

import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import _createClass from 'babel-runtime/helpers/create-class';
import _classCallCheck from 'babel-runtime/helpers/class-call-check';
import _extends from 'babel-runtime/helpers/extends';
import React, { Component, PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

var ReactModal = (function (_Component) {
  _inherits(ReactModal, _Component);

  function ReactModal() {
    _classCallCheck(this, ReactModal);

    _get(Object.getPrototypeOf(ReactModal.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ReactModal, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var body = _props.body;
      var show = _props.show;
      var onHide = _props.onHide;
      var onSave = _props.onSave;
      var title = _props.title;
      var removeHeader = _props.removeHeader;
      var removeFooter = _props.removeFooter;
      var removeSaveBtn = _props.removeSaveBtn;

      var modalHeader = removeHeader ? null : React.createElement(
        Modal.Header,
        { closeButton: true },
        React.createElement(
          Modal.Title,
          { id: 'contained-modal-title-lg' },
          title
        )
      );

      var modalBody = React.createElement(
        Modal.Body,
        null,
        body
      );

      var modalFooter = removeFooter ? null : React.createElement(
        Modal.Footer,
        null,
        removeSaveBtn ? null : React.createElement(
          Button,
          { onClick: this.props.onSave },
          'Save'
        ),
        React.createElement(
          Button,
          { onClick: this.props.onHide },
          'Close'
        )
      );

      return React.createElement(
        Modal,
        _extends({}, this.props, { show: show, onHide: onHide, dialogClassName: 'custom-modal' }),
        modalHeader,
        modalBody,
        modalFooter
      );
    }
  }]);

  return ReactModal;
})(Component);

export default ReactModal;

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