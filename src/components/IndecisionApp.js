import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './OptionModal'

export default class IndicisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>{
                return optionToRemove !== option
            })

        }))
    }
    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNumber]
        this.setState(
            {
                selectedOption: option
            }
        )
    }
    handleHideModal = () => {
        this.setState({
            selectedOption: undefined
        })
    }
    handleAddOption = (option) => {
        if(!option) {
            return 'Enter a valid value to add item'
        }
        else if (this.state.options.indexOf(option)>-1) {
            return 'Item already exist'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option)}))
    }

    componentDidMount() {

        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options) {
                this.setState(() => ({options: options}))
            }
        } catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    render() {
        const subtitle = 'Put your life in the hands of the computer'
        return (
            <div>
            <Header subtitle={subtitle}/>
            <div className='container' id='body'>
            <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            />
            <div className='widget'>
            <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
            handleAddOption = {this.handleAddOption}
            />
            </div>
            <OptionModal
            selectedOption={this.state.selectedOption}
            handleHideModal={this.handleHideModal}
            />
            </div>
            </div>
        )
    }
}

IndicisionApp.defaultProps = {
    options:[]
}