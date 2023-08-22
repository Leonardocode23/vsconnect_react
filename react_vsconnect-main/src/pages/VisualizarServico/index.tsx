//estilização
import "./style.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import api from "../../utils/api"


function VisualizarServico() {

    const {idServico} = useParams();

    const [nome, setNome] = useState<string>("")
    const [valor, setValor] = useState<string>("")
    const [descricao, setDescricao] = useState<string>("")
    const [ListaTechs, setListaTech] = useState<string[]>([])

    useEffect(() => {
        document.title = "Visualizar Servs de " + nome + " - VsConnect"

        buscarServicoPorId()
    }, [])


    function buscarServicoPorId() {

        api.get(`servicos/${idServico}`).then((response: any) => {
            setNome(response.data.nome)
            setValor(response.data.valor)
            setDescricao(response.data.descricao)
            setListaTech(response.data.techs)
        
        }).catch((error) =>{
            console.log(error)
        })
    }
    

    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>{nome}</h1>
                <div className="servico">
                    <div className="topo_servico">
                        {/* <h2>Desenvolvimento de site institucional - Gateway de Pagamento / Fintech</h2> */}
                        <span> {valor} </span>
                    </div>
                    <p>{descricao} </p>
                    <div className="techs">
                        <span>{ListaTechs}</span>

                        {
                                ListaTechs.map( (skill: any, index:number ) => {
                                    return <span key={index}>{skill}</span>
                                })

                            }
                        
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarServico;