import React from 'react'
import { FormField } from 'react-form-fields'
import 'react-form-fields/dist/index.css'

export default class Select extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedvalue: ['Afganistan', 'Albania', 'Angola'],
            option: [
                { label: 'Afganistan', value: "Afganistan" },
                { label: 'Albania', value: "Albania" },
                { label: 'Algeria', value: "Algeria" },
                { label: 'American Samoa', value: "American Samoa" },
                { label: 'Andorra', value: "Andorra" },
                { label: 'Angola', value: "Angola" },

            ],
            selectedvalue2: ['India'],
            option1: ["India", "China", "Japan", "Indo"]
        }
    }

    hanldeOnChange(value,key) {
        this.setState({ [key]: value })
    }

    render() {
        return (
            <div>
                <h2>Single Value Dropdown</h2>
                <FormField
                    type="select"
                    value={this.state.selectedvalue2}
                    filter
                    option={this.state.option1}
                    label={'Select Country'}
                    keys={"selectedvalue"}
                    hanldeOnChange={(value) => this.hanldeOnChange(value,'selectedvalue2')} />
                <h2>Multi Value Dropdown</h2>
                <FormField
                    type="select"
                    value={this.state.selectedvalue}
                    multi
                    filter
                    option={this.state.option}
                    label={'Select Country'}
                    keys={"selectedvalue2"}
                    hanldeOnChange={(value) => this.hanldeOnChange(value,'selectedvalue')} />
            </div>

        )
    }
}