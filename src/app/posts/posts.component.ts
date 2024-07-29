import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PostsComponent {

  @Input('postsList')postsList:any[]=[];
  @Input('commentsList')commentsList:any[]=[];
  @Output('viewComment')viewComment=new EventEmitter<number>();

  ngOnChanges(changes:SimpleChange){
    console.log(changes)
  }

  viewComments(postId:number){
    console.log(postId)
    this.viewComment.emit(postId);
  }

}
