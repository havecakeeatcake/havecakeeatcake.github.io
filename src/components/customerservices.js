import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const CustomerServices = () => {

  const data = useStaticQuery(graphql`
    query CSQuery {    
      datoCmsHomepage {
        id
        customerServiceFooter
        helpFooter
        deliveryFooter
        giftsFooter
        aboutUsFooter
        termsFooter
      }
    }
  `)

  return (
    <>
      <div>
        <p>Customer Service</p>
        <ul>
          <li><Link to="/help/">{data.datoCmsHomepage.helpFooter}</Link></li>
          <li><Link to="/delivery/">{data.datoCmsHomepage.deliveryFooter}</Link></li>
          <li><Link to="/gifts/">{data.datoCmsHomepage.giftsFooter}</Link></li>
          <li><Link to ="/about/">{data.datoCmsHomepage.aboutUsFooter}</Link></li>
          <li><Link to ="/terms/">{data.datoCmsHomepage.termsFooter}</Link></li>
        </ul>
      </div>  
    </>
  );
}


export default CustomerServices


