import { NgModule } from "@angular/core";
import { ChatMessageComponent } from "./chat-message/chat-message";
import { IonicModule } from "ionic-angular";
@NgModule({
  declarations: [ChatMessageComponent],
  imports: [IonicModule.forRoot(ChatMessageComponent)],
  exports: [ChatMessageComponent]
})
export class ComponentsModule {}
