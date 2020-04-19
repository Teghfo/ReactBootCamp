/// static getDerivedStateFromError(error) ===> fallback ui render when throw error
/// componentDidCatch(error, info) ====> log error
import React, { Component } from 'react'

export default class ErrorBoundrary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }


    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)

    }
    render() {
        {
            if (this.state.hasError) {
                return <h1>somthing wrong happen</h1>
            }
            return this.props.children

        }
    }
}
