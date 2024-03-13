import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {ALBUMS} from "../fake-db";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums:Album[];
  newAlbum: Album;
  loaded: boolean;
  constructor(private albumService: AlbumService) {
    this.albums =[];
    this.loaded = true;
    this.newAlbum = {} as Album;
  }

  // remove(elem:HTMLElement){
  //
  //   elem.parentElement.remove();
  // }
  removeAlbum(id: number){
    this.albums = this.albums.filter((x) => x.id !== id);
  }
  addAlbum(){
    if(this.newAlbum.title.length == 0 || this.newAlbum.id <= this.albums[this.albums.length-1].id)
      return;



    this.loaded = false;
    this.albumService.addAlbum(this.newAlbum).subscribe((album) =>{
      this.albums.unshift(album);
      this.loaded = true;
      this.newAlbum = {} as Album;
    })
  }
  ngOnInit() {
    // this.albums = ALBUMS;

    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) =>{
      this.albums = albums;
      this.loaded = true;
    })
  }


}
