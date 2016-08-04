'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

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

      var modalHeader = removeHeader ? null : _react2['default'].createElement(
        _reactBootstrap.Modal.Header,
        { closeButton: true },
        _react2['default'].createElement(
          _reactBootstrap.Modal.Title,
          { id: 'contained-modal-title-lg' },
          title
        )
      );

      var modalBody = _react2['default'].createElement(
        _reactBootstrap.Modal.Body,
        null,
        body
      );

      var modalFooter = removeFooter ? null : _react2['default'].createElement(
        _reactBootstrap.Modal.Footer,
        null,
        removeSaveBtn ? null : _react2['default'].createElement(
          _reactBootstrap.Button,
          { onClick: this.props.onSave },
          'Save'
        ),
        _react2['default'].createElement(
          _reactBootstrap.Button,
          { onClick: this.props.onHide },
          'Close'
        )
      );

      return _react2['default'].createElement(
        _reactBootstrap.Modal,
        _extends({}, this.props, { show: show, onHide: onHide, dialogClassName: 'custom-modal' }),
        modalHeader,
        modalBody,
        modalFooter
      );
    }
  }]);

  return ReactModal;
})(_react.Component);

exports['default'] = ReactModal;

ReactModal.propTypes = {
  body: _react.PropTypes.any.isRequired,
  onHide: _react.PropTypes.func.isRequired,
  onSave: _react.PropTypes.func,
  removeHeader: _react.PropTypes.bool,
  removeFooter: _react.PropTypes.bool,
  removeSaveBtn: _react.PropTypes.bool,
  show: _react.PropTypes.bool.isRequired,
  title: _react.PropTypes.string
};
module.exports = exports['default'];