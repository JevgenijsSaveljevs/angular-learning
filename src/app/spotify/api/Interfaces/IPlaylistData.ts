import { IPlaylist } from "./IPlaylist";

export interface IPlaylistsData {
    href: string;
    items: IPlaylist[];
    limit: number;
    next?: any;
    offset: number;
    previous?: any;
    total: number;
}