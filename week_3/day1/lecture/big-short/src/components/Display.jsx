import React from 'react'

function Display(props) {
    const {housePurchases} = props
  return (
    <div>
        {
        housePurchases.map((housePurch, idx) => (
                <div key={idx}>
                    <p>House: {housePurch.homeName}</p>
                    <p>Amount: {housePurch.offer}</p>
                </div>
        ))
    }
    </div>
  )
}

export default Display