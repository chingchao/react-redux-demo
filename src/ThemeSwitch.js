import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { connect } from './react-redux'
import { connect } from 'react-redux'

class ThemeSwitch extends Component {
    static contextTypes = {
        store: PropTypes.object
    };

    render () {
        return (
            <div>
                <button
                    style={{color: this.props.themeColor}}
                    onClick={this.props.onSwitchColor.bind(this, 'red')}
                >Red</button>
                <button
                    style={{color: this.props.themeColor}}
                    onClick={this.props.onSwitchColor.bind(this, 'blue')}
                >Blue</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        themeColor: state.themeColor
    }
};
const mapDispatchToProp = dispatch => {
    return {
        onSwitchColor: color => {
            dispatch({
                type: 'CHANGE_COLOR',
                themeColor: color
            });
        }
    }
};

ThemeSwitch = connect(mapStateToProps, mapDispatchToProp)(ThemeSwitch);

export default ThemeSwitch