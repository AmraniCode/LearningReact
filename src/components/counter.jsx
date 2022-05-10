import React from "react";

class Counter extends React.Component {
    state = { 
        count : 0,
        tags:["tag1","tag2","tag3"]
         } 
    render() { 
        return (
            <React.Fragment>
            <div className="p-4 m-4 d-flex justify-content-between border w-50">
                <span className="text-danger h3">{this.formatCoutner()}</span>
                <button className="btn btn-primary">Increment</button>
            </div>
            <ul>
            {
            this.state.tags.map(tag=> 
            <li key={tag}>
                {tag}
            </li>
                )}
            </ul>
          </React.Fragment>
        );
    }

    formatCoutner(){
        return this.state.count == 0 ? "Zero" : this.state.count;
    }
}
 

export default Counter;