import './Introduction.css';

function Introduction(props) {
    return (
        <div className="introduction">
            <div className="name">{props.name}</div>
            <div className="address">{props.address}</div>
            
        </div>
    )
}
export default Introduction;