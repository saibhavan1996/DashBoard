import './index.css'

const DataCard = props => {
  const {data} = props
  return (
    <tbody className="details-card-item">
      <tr className="data-details-container">
        <td className="dataName">{data.name}</td>
        <td className="batchNo">{data.batchNo}</td>
        <td className="location">{data.location}</td>
        <td className="experience">{data.experience}</td>
        <td className="batchNo">{data.contactNo}</td>
      </tr>
      <hr className="list-separator" />
    </tbody>
  )
}
export default DataCard
