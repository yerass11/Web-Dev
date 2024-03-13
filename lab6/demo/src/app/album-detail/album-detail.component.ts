import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Album} from "../models";
import {ALBUMS} from "../fake-db";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album:Album;
  loaded:boolean;
  constructor(private route: ActivatedRoute,
              private albumService: AlbumService) {
    this.album = {} as Album;
    this.loaded = true;
  }

  change(newname:string){
    this.album.title = newname;
  }
  ngOnInit(): void{
    this.route.paramMap.subscribe((params) =>{
      const id = Number(params.get('id'));
      // this.album = ALBUMS.find((album) => album.id === id) as Album;

      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      })
    })

  }
}
