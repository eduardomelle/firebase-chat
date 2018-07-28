import { Component, Input } from "@angular/core";
import { UserModel } from "../../model/user-model";
import { MessageModel } from "../../model/message-model";

/**
 * Generated class for the ChatMessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "chat-message",
  templateUrl: "chat-message.html"
})
export class ChatMessageComponent {
  @Input() user: UserModel;
  @Input() messages: Array<MessageModel>;

  constructor() {}

  getNickname(message) {
    let nickname = "eu";
    if (message.user_id != this.user.uid) {
      nickname = message.nickname;
    }
    return nickname;
  }
}
