import { Song } from "./Song";

export type PlayList = {
    playListName?: string|null;
    songs?: Song[]; 
}