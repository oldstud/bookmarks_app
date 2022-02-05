import axios from 'axios'
import { BookmarksUpItemI, BookmarksItemI } from '../interface/bookmarks-item.interface';
import API_URLS from '../constants/api/api-urls.constants';

export const httpGetPublicList = (page: number) => {
    return axios.get(`${API_URLS.getPublicList}`); // need add puginations query params in back(?page=1)
};

export const httpGetByIdPublicMarksItem = (id: string) => {
    return axios.get(`${API_URLS.getByIdPublicMarksItem}/${id}`);
};

export const httpGetListPrivateMarksItems = () => {
    return axios.get(`${API_URLS.getAllPrivateMarksItems}`);  // need add puginations query params in back(?page=1)
};

export const httpCreateMarksItem = ( data: BookmarksItemI) => {
    return axios.post(`${API_URLS.createMarksItem}`, data);
};

export const httpUpdatePrivateMarksItem = (id: string, upData: BookmarksUpItemI) => {
    return axios.put(`${API_URLS.updatePrivateMarksItem}/${id}`, upData);
};

export const httpDeletePrivateMarksItem = (id: string) => {
    return axios.delete(`${API_URLS.updatePrivateMarksItem}/${id}`);
};