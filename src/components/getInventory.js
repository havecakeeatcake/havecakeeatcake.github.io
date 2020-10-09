import React from 'react'

const JSONData = {
	"variant":
	{
		"inventory_quantity":40
	}
}

const GetInventory = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <ul>
      {JSONData.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.inventory_quantity}</li>
      })}
    </ul>
  </div>
)

export default GetInventory	