import "./style.css"
import { useEffect, useState } from "react"
import CardServs from "../../components/CardServs";

export default function ListaServicos() {



    const [servs, setServs] = useState<any[]>([]);

    const [skillDigitada, setSkillDigitada] = useState<string>("");

    const [listaDevsFiltrados, setListaDevsFiltrados] = useState<any[]>(servs);

    useEffect( () => {
        document.title = "Lista de Servs - VsConnect"

        ListaServicos()
    }, [])

    function buscarPorSkill(event: any){
        event.preventDefault();

        const devsFiltrados = servs.filter((dev: any) => dev.hardSkills.includes(skillDigitada.toLocaleUpperCase()));

        if(devsFiltrados.length === 0){
            alert("Nenhum serviço com essa skill")
        }else{
            setListaDevsFiltrados(devsFiltrados)
        }
    }

    function retornoDevsGeral(event: any){
        if(event.target.value === ""){
            setListaDevsFiltrados(servs)
        }
        setSkillDigitada(event.target.value)
    }


    return (
        <main id="lista-servicos">
            <div className="container container_lista_servicos">
                <div className="lista_servicos_conteudo">
                    <h1>Lista de Serviços</h1>
                    <hr/>
                        <form method="post" onSubmit={buscarPorSkill}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar serviços</label>
                                <div className="campo-label">
                                    <input type="search" name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..." onChange={retornoDevsGeral}/>
                                        <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                            {listaDevsFiltrados.map((serv: any, index: number) => {
                                    return <li key={index}>
                                          <CardServs 
                                          titulo={serv.titulo}
                                          valor={serv.valor}
                                          descricao={serv.descricao}
                                          techs={serv.hardSkills}
                                           />
                                    </li>
                                }
                                )}

                            </ul>
                        </div>
                </div>
            </div>
        </main>
    )
}