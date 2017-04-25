'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Mainheader_nav = require('../components/Mainheader_nav');

var _Mainheader_nav2 = _interopRequireDefault(_Mainheader_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mainheader = function (_React$Component) {
	_inherits(Mainheader, _React$Component);

	function Mainheader() {
		_classCallCheck(this, Mainheader);

		return _possibleConstructorReturn(this, (Mainheader.__proto__ || Object.getPrototypeOf(Mainheader)).apply(this, arguments));
	}

	_createClass(Mainheader, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'header',
				{ id: 'mainheader' },
				_react2.default.createElement(_Mainheader_nav2.default, null),
				_react2.default.createElement(
					'div',
					{ id: 'headleftlogo' },
					_react2.default.createElement('div', { id: 'logo' })
				),
				_react2.default.createElement(
					'div',
					{ id: 'pos_select' },
					'\u5317\u4EAC'
				),
				_react2.default.createElement(
					'form',
					null,
					_react2.default.createElement('input', { type: 'text' }),
					_react2.default.createElement(
						'button',
						{ id: 'search' },
						'\u641C\u7D22'
					)
				)
			);
		}
	}]);

	return Mainheader;
}(_react2.default.Component);

exports.default = Mainheader;