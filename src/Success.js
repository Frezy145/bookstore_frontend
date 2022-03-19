// Success
const emotions = [
    "Joie",
    "Tristesse",
    "Envie",
    "Jalousie",
    "Méchancété",
    "Sorcelerie",
    "Amour",
    "Plaisir",
    "Vie"
]

function Success() {
    return (<p> Voici ce que le succès peut apporter
                <ul>
                    {emotions.map((emotion) => (
                        <li> {emotion} </li>
                    ))}
                </ul>
            </p>)
}

export default Success;