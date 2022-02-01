import axios from 'axios'
import { BookmarksUpItemI } from '../interface/bookmarks-item.interface';
import API_URLS from '../constants/api/api-urls.constants';

export const httpGetList = (page: number) => {
    return axios.get(`${API_URLS.getList}/${page}`);
};

export const httpGetMarksItem = (id: string) => {
    return axios.get(`${API_URLS.getMarksItem}/${id}`);
};

export const httpUpdateMarksItem = (id: string, upData: BookmarksUpItemI) => {
    return axios.put(`${API_URLS.updateMarksItem}/${id}`, upData);
};