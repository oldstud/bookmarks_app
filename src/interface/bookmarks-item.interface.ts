
interface BookmarksItemI {
    title: string; 
    description: string;
    image?: string;
    urlMarkbook: string;
    rating?: string;
    ratingCounter?: string;
}

interface BookmarksUpItemI {
    title?: string; 
    description?: string;
    image?: string;
    urlMarkbook?: string;
    rating?: string;
    ratingCounter?: string;
}



export type {
    BookmarksItemI,
    BookmarksUpItemI
 }