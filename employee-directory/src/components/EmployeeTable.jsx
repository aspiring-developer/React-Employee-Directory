import React from 'react';

function EmployeeTable() {
  return (
<>
<table class="table w-100">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Hire Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Image: Image URL</td>
      <td>Name: Mark Anderson</td>
      <td>Phone: 123-456-7890</td>
      <td>markanderson@example.com</td>
      <td>04-07-2000</td>
    </tr>
    </tbody>
</table>

</>

  )
}

export default EmployeeTable;