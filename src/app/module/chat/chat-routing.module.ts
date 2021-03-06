import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChatComponent } from './views/chat/chat.component';
import { ChannelComponent } from './views/channel/channel.component';
import { NgModel } from '@angular/forms/src/directives/ng_model';

const routes: Routes = [
    {
        path: '', component: ChatComponent,
        children: [
            { path: ':frq', component: ChannelComponent}
        ]
    }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  
  export class ChatRoutingModule {}
  