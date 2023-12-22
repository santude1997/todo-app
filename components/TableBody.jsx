import React from 'react'

const Table = () => {
  return (
    <>
      <tr class="border-b text-purple-500">
        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
          Apple MacBook Pro 17"
        </th>
        <td className="px-6 py-4">Silver</td>
        <td className="px-6 py-4">Laptop</td>
        <td className="px-6 py-4">$2999</td>
        <td className="px-6 py-4">
          <button className="px-12 py-3 bg-green-500 hover:bg-green-900 text-white duration-300 trasintion-all">
            Add
          </button>
          <button className="px-12 py-3 bg-red-500 hover:bg-red-900 text-white duration-300 trasintion-all">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default Table