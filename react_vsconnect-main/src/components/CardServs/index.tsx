import { Link } from "react-router-dom"
import "./style.css"

export default function CardServs(props: any) {

    return (
        <div className="servico">
            <div className="topo_servico">
                <Link to={"/servicos/" + props.id}> {props.titulo}</Link>
                <span>{props.valor}</span>
            </div>
            <p>{props.descricao}</p>
            <div className="techs">
                {
                    props.techs.map((tech: string, index: number) => {
                        return <span key={index}>{tech}</span>
                    })
                }
            </div>
        </div>
    )
}

