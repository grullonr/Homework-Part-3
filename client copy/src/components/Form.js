import { useState } from 'react'

class Form extends useState {
  
  render() {
    const { handleSubmit, setName, userName, userLink, setLink } = this.props;
    return (
      
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>

        <div style={{ marginLeft: '200px' }}>
         
          <div style={{marginBottom:'10px' ,}}>
          
          <div style={{ fontSize: '15px' , fontWeight:500, marginBottom:'5px' }}> Name </div>
            
            <input
              value={userName}
              onChange={(event) => setName(event.target.value)}
              type="name"
              name="task"
              style={{ width: '70%', padding: '8px',borderRadius:'4px' }}
            />

          </div>

          <div>
            
            <div style={{ fontSize: '15px' , fontWeight:400 , marginBottom:'5px'}}> URL </div>
           
            <input
              value={userLink}
              onChange={(event) => setLink(event.target.value)}
              type="link"
              name="link"
              style={{ width: '70%', padding: '8px',borderRadius:'4px' }}
            />

          </div>

          <div style={{ width: '50px', height: '50px', marginTop: '7px' }}>
           
            <button
              type="submit"
              style={{
                color: 'white',
                fontSize: '14px',
                width: '50px',
                height: '50px',
                cursor:'pointer',
                borderRadius:'4px'
              }}
            >

              Submit

            </button>

          </div>

        </div>

      </form>
    );
  }
}