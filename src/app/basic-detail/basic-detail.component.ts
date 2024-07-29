import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'basic-detail',
  templateUrl: './basic-detail.component.html',
  styleUrls: ['./basic-detail.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BasicDetailComponent {

  @Input('basicUserDetails')basicUserDetails:any[]=[];

}
