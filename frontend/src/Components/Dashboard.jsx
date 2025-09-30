import React from 'react'
import { useParams } from 'react-router-dom';

function Dashboard() {

  const params = useParams()

    console.log(params);
  return (
    <div>
      dashboard
    </div>
  )
}

export default Dashboard
