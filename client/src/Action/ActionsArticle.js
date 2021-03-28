import axios from 'axios'
import {
    ADD_ARTICLE_TO_LIST,
    DELETE_ARTICLE_FROM_LIST,
    GET_ARTICLES_FROM_SERVER,
    ERROR_REQUEST,
    LOAD_SUCCES,
    LOAD_REQUEST,
    EDIT_ARTICLE
} from './ActionsTypes.js'



export const load_article = () => {
    return {
        type: LOAD_REQUEST,
        payload: true
    }
}


export const load_finish_succes = () => {
    return {
        type: LOAD_SUCCES,
        payload: false
    }

}
const Add_Article = Article => {
    return {
        type: ADD_ARTICLE_TO_LIST,
        payload : Article
    }
}

const Delete_Article_Action = Article => {

    return {
        type: DELETE_ARTICLE_FROM_LIST,
        payload:Article
    }
}

const Get_Articles = Articles => {
  
    return {
        type: GET_ARTICLES_FROM_SERVER,
        payload:Articles
    }
}

const Error_request = error => {

    return {
        type: ERROR_REQUEST,
        payload: error
    }
}

const Edit_Article = Article => {
    return {
        type: EDIT_ARTICLE,
        payload:Article
    }

}
export const fetch_Articles = () => {
    return (dispach) => {
        dispach(load_article)

        axios.get('/articlelist')
            .then(res => {
                dispach(Get_Articles(res.data))
                dispach(load_finish_succes)
            })
        .catch(error => {
            dispach(Error_request(error))
            })

        }
}

export const delete_Article = (Article) =>
{
    return (dispach) => {
    
        
        axios.delete(`/removearticle/${Article}`)
            .then(() => {
                alert("article removed");
                dispach(Delete_Article_Action(Article))
            })
            .catch(err => alert("article cant be removed"))

    }

}

export const add_Article = (Article) => {
    return (dispach) => {
        axios.post('/addarticle', Article)
            .then((res) => {
                dispach(Add_Article(Article))
                alert('article Added');
               
            })
    
            .catch(err => alert("cant send data"))
    }
}

export const edit_Article = (Article) => {
    return (dispach) => {
        console.log("nooow")
        console.log(Article)
        axios.put(`/editarticle/${Article.id}`, { ...Article } )
            .then((res) => {
                alert(res.data);
                dispach(Edit_Article(Article))
            })
            .catch(err => alert(err)) 

    }
}

