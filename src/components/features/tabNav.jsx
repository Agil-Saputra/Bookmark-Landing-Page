import React from 'react'


const tabNav = ({ id, title, activeTab, setActiveTab }) => {
    function handleClick() {
        setActiveTab(id)
    }
  return (
    <button onClick={handleClick} className={(activeTab === id ? "active" : '') +  ' hover:text-red-400 border-b-black border-b px-12 py-4 '} >{title}</button>
  )
}

export default tabNav