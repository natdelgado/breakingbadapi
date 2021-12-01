
export default function CharacterListItem({item}){
    return(
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.img} alt="character" />
                </div>
                <div className="card-back">
                    <h1>{item.name}</h1>
                    <ul>
                        <li>Actor Name:{item.portrayed}</li>
                        <li>Nick Name:  {item.nickname}</li>
                        <li>Birthday: {item.birthday}</li>
                        <li>Status: <span style={{color: item.status === "Alive" ? "green" : "red"}}>{item.status}</span></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}