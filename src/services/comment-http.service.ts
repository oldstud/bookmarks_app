import axios from 'axios'
import { CommentItemI } from '../interface/comment-item.interface';
import API_URLS from '../constants/api/api-urls.constants';

export const httpAddMarksComment = (comment: CommentItemI) => {
    return axios.post(`${API_URLS.addComment}`); 
};

export const httpGetAllMarksComment = (marksId: string) => {           // need add puginations query params in back(?page=1)
    return axios.get(`${API_URLS.getAllMarksComments}/${marksId}`);
};