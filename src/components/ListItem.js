function ListItem(props){
    const data = props.data;
    
    return(
        <div>
             <label>
                 {/* <input className="item" type="checkbox" /> */}
                  {data.name}
            </label>
            <hr/>
        </div>
    )
}
export default ListItem;