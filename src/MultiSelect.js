import React, { Component } from 'react';
import {components} from 'react-select';
import { colourOptions } from "./data.js";
import { default as ReactSelect } from "react-select";


const Option =(props)=>{
    return(
        <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={()=>null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
}
export default class MultiSelect extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          optionSelected: props.value,
        };
      }
      handleChange = (selected) => {
        this.setState({
          optionSelected: selected
        });
      };
  render() {
    return (
      
        <span
        class="d-inline-block"
        data-toggle="popover"
        data-trigger="focus"
        data-content="Please selecet account(s)"
      >
        
        <ReactSelect
          allowCreateOptions options={colourOptions}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{
            Option
          }}
          onChange={this.handleChange}
          allowSelectAll={true}
          value={this.state.optionSelected}
          
        />
      </span>
      
    )
    
  }
}
