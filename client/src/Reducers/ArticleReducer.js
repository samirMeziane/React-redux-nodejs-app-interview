import {
    ADD_ARTICLE_TO_LIST,
    DELETE_ARTICLE_FROM_LIST,
    GET_ARTICLES_FROM_SERVER,
    ERROR_REQUEST,
    LOAD_SUCCES,
    LOAD_REQUEST,
    EDIT_ARTICLE
} from '../Action/ActionsTypes'

const Initial_state = {
    Error: '',
    Articles: [],
    loading:false
}

export default function (state = Initial_state, Actions)
{
    switch (Actions.type) {
        case ADD_ARTICLE_TO_LIST:
            return {...state,
                Articles:[...state.Articles,Actions.payload]
            }
        case DELETE_ARTICLE_FROM_LIST:
       
            return {
                ...state,
                Articles: state.Articles.filter(Article => Actions.payload !== Article.id)
            }
           
        case GET_ARTICLES_FROM_SERVER:
          
            return {
                ...state,
                Articles: Actions.payload
            }
        case ERROR_REQUEST:
            return {
                error: Actions.payload,
                Articles: []
            }
        case LOAD_REQUEST:
            return {
                loading: true,
                ...state
                
            }
        case LOAD_SUCCES:{
            return {
                loading: false,
                ...state
            
            }
        }

        case EDIT_ARTICLE: {
            let index_of_object = state.Articles.indexOf(state.Articles.find(Article => Article._id === Actions.payload._id))
            state.Articles[index_of_object]=Actions.payload
            return {
                ...state,
                Articles: state.Articles
            }
            
        }
        default:
            return state;
    }

    }
