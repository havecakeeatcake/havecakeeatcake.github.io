import React from "react";

const Sidebar = (props) => (
  <div style={{      
    border: '2px solid #e6e6e6',      
    width: '200px',      
    padding: '0.5rem',      
    marginBottom: '25px',
      marginLeft: '50px',
      fontSize: '14px'
    }}>
      <strong style={{ display: 'flex' }}>
        {props.title}.
      </strong> 
        {props.description}
    </div>
  );

  export default Sidebar
