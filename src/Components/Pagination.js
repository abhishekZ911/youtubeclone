import { Link } from "react-router-dom";

const Pagination = ({handlePaginationBarClick}) => {

    const paginationBarArray = [1,2,3,4,5,6,7,8,9,10];
    const paginationBarElements = paginationBarArray.map((number)=>{
        return (
                <li onClick={() => handlePaginationBarClick(number)} key={"id" + number} className="page-item"><Link to={`/${number}`} className="page-link">{number}</Link></li>
            )
    });


    return ( 
    <div className="Pagination-bar">
        <nav>
            <ul className="pagination pagination-sm">
                {paginationBarElements}
            </ul>
        </nav>
    </div>
     );
}
 
export default Pagination;