import React from 'react'

const TableHeader = () => {
  // boilerplate table header functional component
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  // boilerplate table body functional component
  // we use Array.map to create table rows from LinkData passed via props
  const rows = props.linkData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>
          <a href={row.URL}>{row.URL}</a>
        </td>
        <td>
          <button onClick={() => props.removeLink(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const Table = (props) => {
  {
    /* I wanted to add this here initially, but it did not want to be added to table body as a regular variable,
    therefore, I had to do it another way.

    dataToLink = props.linkData
    linkToRemove = props.removeLink
    */

   //(COMPLETED) ----- TODO - return <table> component, TableHeader and TableBody  and pass props! 
    return <table>
      <TableHeader/>
      <TableBody dataToLink = {props.linkData} linkToRemove = {props.removeLink} />
    </table>
  }
}

export default Table