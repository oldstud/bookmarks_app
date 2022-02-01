
interface BookmarksItemI {
    name: string; 
    url: string;
    description: string;
    iconUrl: string;
}

interface BookmarksUpItemI {
    name?: string; 
    description?: string;
}



export type {
    BookmarksItemI,
    BookmarksUpItemI
 }