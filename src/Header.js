import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from './react-redux';
import { connect } from 'react-redux';

class Header extends Component {
    static propTypes = {
        themeColor: PropTypes.string
    };

    render() {
        return(<h3 style={{color: this.props.themeColor}}>xi shu</h3>)
    }
}

const mapStateToProps = state => {
    return {
        themeColor: state.themeColor
    }
};

Header = connect(mapStateToProps)(Header);

export default Header;
