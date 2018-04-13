import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Provider extends Component {
    static propTypes = {
        store: PropTypes.object,
        children: PropTypes.any
    };

    static childContextTypes = {
        store: PropTypes.object
    };

    getChildContext() {
        return {
            store: this.props.store
        }
    }

    render() {
        return (
            <div>{ this.props.children }</div>
        )
    }

}

export const connect = (mapStateToProps, mapDispatchToProps) => WrappedComponent => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        };

        constructor() {
            super();
            this.state = {
                allProps: {}
            }
        }

        componentWillMount() {
            this._updateThemeColor();
            const { store } = this.context;
            store.subscribe(() => {
                this._updateThemeColor();
            });
        }

        _updateThemeColor() {
            const { store } = this.context;
            let stateProps = mapStateToProps ? mapStateToProps(store.getState()) : {};
            let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {};
            this.setState({
                allProps: {
                    ...this.props,
                    ...stateProps,
                    ...dispatchProps
                }
            });
        }

        render() {
            return <WrappedComponent {...this.state.allProps}/>
        }
    }

    return Connect;
};
