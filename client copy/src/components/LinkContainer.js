import { useState } from 'react'
import Form from './Form'
import Table from './Table'
// import Table from './Table';
// import Form from './Form';

const LinkContainer = (props) => {
  const deleteTheLink = async () => {

    try {
      let response = await fetch('/deleteLink')
      console.log(response)
      let data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const updateTheLinks = async () => {

    try {
      let response = await fetch('/updateLink')
      console.log(response)
      let data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const fetchLinks = async () => {

    try {
      let response = await fetch('/links')
      console.log(response)
      let data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const postLink = async () => {
    let testLink = {
      name: "Test",
      URL: "test.com"
    }

    try {
      let response = await fetch('/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application: /json'
        },
        body: JSON.stringify(testLink)

      }) 
      console.log(response)
      let message = response.text()
      console.log(message)
      
    } catch(error) {
      console.log(error)
    }
  }

  const handleRemove = (index) => {
            //copying the array
            const settingTheState = [...userTask]

            //removing at the index
            settingTheState.splice(index)
            
            //copying the array back

            userTask(settingTheState)
            
  }

  const handleSubmit = (favLink) => {
  
      //as long as they are not empty
      while (userName != "" && userLink != "") {
      const addNewFavLink = {userName: userName, userLink: userLink}
      setName = ("")
      setLink = ("")

      //adding the new favlinks to the array
      settingTheTask([...userTask,addNewFavLink])
    }
    
}
  // removeIt = props.handleRemove
  // addNew = props.handleSubmit

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      {
      
      /*TODO - Add Table Component */

      <Table addNew = {props.handleSubmit} dataToAdd = {props.tasks}/>
      
      }

      <br />

      <h3>Add New</h3>
      {
      
      /*TODO - Add Form Component */

      <Form newForm = {props.handleSubmit}
            settingTheName = {setName}  
            settingTheLink = {setLink} 
            userName = {userName} 
            userLink = {userLink} 
            
            />
      }

    </div>
  )
}

const [userName, setingTheName] = useState("")
const [userTask, settingTheTask] = useState([])
const [userLink, setingTheLink] = useState("")

export default LinkContainer