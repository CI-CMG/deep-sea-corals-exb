import {
  AbstractMessageAction,
  MessageType,
  type Message,
  getAppStore,
  appActions,
  type MessageDescription,
  type ExtentChangeMessage
} from 'jimu-core'

// custom type guard to avoid TypeScript casting variable
function isExtentChangeMessageType (obj: Message): obj is ExtentChangeMessage {
  return (obj as ExtentChangeMessage).type === 'EXTENT_CHANGE'
}

export default class ExtentChangeAction extends AbstractMessageAction {
  filterMessageDescription (messageDescription: MessageDescription): boolean {
    return messageDescription.messageType === MessageType.ExtentChange
  }

  filterMessage (message: Message): boolean {
    return message.type === MessageType.ExtentChange
  }

  getSettingComponentUri (messageType: MessageType, messageWidgetId?: string): string {
    return 'actions/extent-change-action-setting'
  }

  onExecute (message: Message, actionConfig?: any): Promise<boolean> | boolean {
    switch (message.type) {
      case MessageType.ExtentChange:
        // console.log('ExtentChangeAction: got ExtentChangeMessage', message, actionConfig)
        const extentChangeMessage = isExtentChangeMessageType(message) ? message : undefined
        // trigger an update for the widget when Extent is different from previous.
        // Must be a plain JavaScript Object (see https://developers.arcgis.com/experience-builder/guide/widget-communication/)
        // e.g. Extent object nested in message does not get set as Extent object in widgetState
        // getAppStore().dispatch(appActions.widgetStatePropChange(this.widgetId, 'extentChangeMessage', extentChangeMessage))

        getAppStore().dispatch(appActions.widgetStatePropChange(
          this.widgetId,
          'extent',
          {
            xmin: extentChangeMessage.extent.xmin,
            ymin: extentChangeMessage.extent.ymin,
            xmax: extentChangeMessage.extent.xmax,
            ymax: extentChangeMessage.extent.ymax
          })
        )
        break
    }

    return true
  }
}
