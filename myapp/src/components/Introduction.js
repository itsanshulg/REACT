import './Introduction.css';

function Introduction(props) {
    return (
        <div className="introduction">
            <h2>INTRODUCTION</h2>
            <div className="name">{props.name}</div>
            <div className="address">{props.address}</div>
            
        </div>
    )
}
export default Introduction;