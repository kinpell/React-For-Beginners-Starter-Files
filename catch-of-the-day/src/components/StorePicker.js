import React, {Component}  from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {

    storeNameInput = React.createRef();

    goToStore = event => {
        event.preventDefault();
        const storeName = this.storeNameInput.value.value;
        this.props.history.push(`/store/${storeName}`);
    }

    render(){
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                {/* Store Form */}
                <h2>Please enter a store</h2>
                <input 
                    type="text" 
                    ref={this.storeNameInput} 
                    required 
                    placeholder="Store Name" 
                    defaultValue={getFunName()} 
                />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;