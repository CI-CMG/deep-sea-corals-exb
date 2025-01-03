import {
  AbstractMessageAction,
  MessageType,
  type Message,
  getAppStore,
  appActions,
  type MessageDescription,
  // type ExtentChangeMessage,
  type DataSourceFilterChangeMessage,
  // type DataRecordsSelectionChangeMessage,
  DataSourceManager,
  type SqlQueryParams,
  type QueriableDataSource
} from 'jimu-core'

// custom type guard to avoid TypeScript casting variable
function isDataSourceFilterChangeMessageType (obj: Message): obj is DataSourceFilterChangeMessage {
  return (obj as DataSourceFilterChangeMessage).type === 'DATA_SOURCE_FILTER_CHANGE'
}

const dataSourceManager = DataSourceManager.getInstance()
export default class UpdateLayerAction extends AbstractMessageAction {
  filterMessageDescription (messageDescription: MessageDescription): boolean {
    return messageDescription.messageType === MessageType.DataSourceFilterChange
  }

  filterMessage (message: Message): boolean {
    return message.type === MessageType.DataSourceFilterChange
  }

  //set action setting uri
  getSettingComponentUri (messageType: MessageType, messageWidgetId?: string): string {
    return 'actions/update-layer-action-setting'
  }

  onExecute (message: Message, actionConfig?: any): Promise<boolean> | boolean {
    switch (message.type) {
      case MessageType.DataSourceFilterChange:
        const dsFilterChangeMessage = isDataSourceFilterChangeMessageType(message) ? message : undefined
        console.log({ dsFilterChangeMessage })
        // const dataSource = DataSourceManager.getInstance().getDataSource(dsFilterChangeMessage.dataSourceIds) as QueriableDataSource
        const dataSource = dataSourceManager.getDataSource(dsFilterChangeMessage.dataSourceIds) as QueriableDataSource

        const queryParams: SqlQueryParams = dataSource.getCurrentQueryParams()
        // console.log('new: ', dataSource)
        // triggers widget render by updating widget state
        getAppStore().dispatch(appActions.widgetStatePropChange(this.widgetId, 'queryParams', queryParams.where))
        // getAppStore().dispatch(appActions.widgetStatePropChange(this.widgetId, 'filterChangeMessage', dsFilterChangeMessage))
        break

      case MessageType.ExtentChange:
        // console.log('MessageHandlerAction: got ExtentChangeMessage', message, actionConfig)
        // const extentChangeMessage = message as ExtentChangeMessage
        //
        // until we start drawing tiles just for the current view extent, no need to update and trigger a re-render
        //
        // trigger an update for the widget when Extent is different from previous.
        // Must be a plain JavaScript Object (see https://developers.arcgis.com/experience-builder/guide/widget-communication/)
        // getAppStore().dispatch(appActions.widgetStatePropChange(
        //   this.widgetId,
        //   'extent',
        //   {
        //     xmin: extentChangeMessage.extent.xmin,
        //     ymin: extentChangeMessage.extent.ymin,
        //     xmax: extentChangeMessage.extent.xmax,
        //     ymax: extentChangeMessage.extent.ymax
        //   })
        // )
        break
      // TODO may be able to use this message to identify the selected polygon
      // but currently return empty array for selected feature on client-side layer
      case MessageType.DataRecordsSelectionChange:
        // console.log('MessageHandlerAction: got DataRecordsSelectionChangeMessage', message, actionConfig)
        // const dataRecordsChangeMessage = message as DataRecordsSelectionChangeMessage
        break
    }

    return true
  }
}
