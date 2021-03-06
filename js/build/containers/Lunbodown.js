'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Lunbodown_div = require('../components/Lunbodown_div');

var _Lunbodown_div2 = _interopRequireDefault(_Lunbodown_div);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lunbodown = function (_React$Component) {
	_inherits(Lunbodown, _React$Component);

	function Lunbodown() {
		_classCallCheck(this, Lunbodown);

		return _possibleConstructorReturn(this, (Lunbodown.__proto__ || Object.getPrototypeOf(Lunbodown)).apply(this, arguments));
	}

	_createClass(Lunbodown, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'lunbo_down' },
				_react2.default.createElement(_Lunbodown_div2.default, { imgurl: './source/image/mainshow_image/lunbodown/1.png' }),
				_react2.default.createElement(_Lunbodown_div2.default, { imgurl: './source/image/mainshow_image/lunbodown/2.png' }),
				_react2.default.createElement(_Lunbodown_div2.default, { imgurl: './source/image/mainshow_image/lunbodown/3.png' }),
				_react2.default.createElement(_Lunbodown_div2.default, { imgurl: './source/image/mainshow_image/lunbodown/4.png' }),
				_react2.default.createElement(_Lunbodown_div2.default, { imgurl: './source/image/mainshow_image/lunbodown/5.png' }),
				_react2.default.createElement(_Lunbodown_div2.default, { imgurl: './source/image/mainshow_image/lunbodown/6.png' })
			);
		}
	}]);

	return Lunbodown;
}(_react2.default.Component);

exports.default = Lunbodown;