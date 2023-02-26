import "./Sofas.css"
let FilterProducts = (props)=>{
      function FilterValueChanged(e){
           props.filterValueSelected(e.target.value)
        }
        

return(
<div className="filterdiv">
           <p>Filter By Brand</p>
          <select className="filtertag" onChange={FilterValueChanged}>
            <option value="all">All</option>
            <option value="Woodsworth">Woodsworth</option>
            <option value="Febonic">Febonic</option>
            <option value="Urban Living">Urban Living</option>
            <option value="Trevi Furniture">Trevi Furniture</option>
            <option value="CasaCraft">CasaCraft</option>
            <option value="Mintwud">Mintwud</option>
            <option value="Adorn India">Adorn India</option>
            <option value="Amberville">Amberville</option>
            <option value="ARRA">ARRA</option>
          </select>
          </div>
)
}
export default FilterProducts;