import axios from 'axios'
import API_URLS from '../constants/api/api-urls.constants';
axios.defaults.baseURL = API_URLS.baseURL;

export { 
    httpLogin,
    httpRegistration,
    httpLogOut,
} from './auth-http.service';

export {  
    httpGetPublicList,
    httpGetByIdPublicMarksItem,
    httpGetListPrivateMarksItems,
    httpCreateMarksItem,
    httpUpdatePrivateMarksItem,
    httpDeletePrivateMarksItem,
} from './bookmarks-http.service';

export {  
    httpAddMarksComment,
    httpGetAllMarksComment,
} from './comment-http.service';

