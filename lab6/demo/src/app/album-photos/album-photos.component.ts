import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Album, Photo} from "../models";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  photos:Photo[];
  albumid:number;

  constructor(private route: ActivatedRoute,
              private albumService: AlbumService) {
    this.photos = [];
    this.albumid = 0;
  }

  ngOnInit():void{


    // this.route.paramMap.subscribe((params) =>{
    //   const id = Number(params.get('id'));
    //   // this.album = ALBUMS.find((album) => album.id === id) as Album;
    //
    //   this.loaded = false;
    //   this.albumService.getAlbum(id).subscribe((album) => {
    //     this.album = album;
    //     this.loaded = true;
    //   })
    // })

    this.route.paramMap.subscribe((params) =>{
      const albumId = Number(params.get('id'));
      this.albumid = albumId;
      // this.album = ALBUMS.find((album) => album.id === id) as Album;
      console.log(albumId);
      this.albumService.getPhotos(albumId).subscribe((photos) => {
        this.photos = photos;
      })
    })
  }

}
