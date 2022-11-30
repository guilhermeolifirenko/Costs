import {useNavigate} from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NovoProjeto.module.css'

function NovoProjeto() {

    const navigate = useNavigate()

    function createPost(project) {
        // inicializar custo e serviço
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projetos', {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            // redirect
            navigate('/projetos', {state: {message: 'Projeto criado com sucesso!'}})
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className = {styles.novoprojeto_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços.</p>
            <ProjectForm handleSubmit = {createPost} btnText = "Criar Projeto"/>
        </div>
    )
}

export default NovoProjeto