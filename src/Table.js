import React from 'react'

class Table extends React.Component {
    render() {
        const { characterData, removeCharacter } = this.props
        const rows = characterData.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.job}</td>
                    <td>
                        <button onClick={() => removeCharacter(index)}>Delete</button>
                    </td>
                </tr>
            )
        })
        return (
            <table>
                <thead>
                    <th>Name</th>
                    <th>Job</th>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

export default Table