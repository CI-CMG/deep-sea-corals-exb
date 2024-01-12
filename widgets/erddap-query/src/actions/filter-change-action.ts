import {
  AbstractMessageAction,
  MessageType,
  type Message,
  getAppStore,
  appActions,
  type DataSourceFilterChangeMessage,
  type ExtentChangeMessage,
  DataSourceManager,
  type QueriableDataSource,
  type SqlQueryParams,
  type MessageDescription
} from 'jimu-core'

// custom type guard to avoid TypeScript casting variable
function isDataSourceFilterChangeMessageType (obj: Message): obj is DataSourceFilterChangeMessage {
  return (obj as DataSourceFilterChangeMessage).type === 'DATA_SOURCE_FILTER_CHANGE'
}

export default class FilterAction extends AbstractMessageAction {
  filterMessageDescription (messageDescription: MessageDescription) {
    return (
      messageDescription.messageType === MessageType.DataSourceFilterChange
    )
  }

  filterMessage (message: Message): boolean {
    return message.type === MessageType.DataSourceFilterChange
  }

  //set action setting uri
  getSettingComponentUri (messageType: MessageType, messageWidgetId?: string): string {
    return 'actions/filter-change-action-setting'
  }

  onExecute (message: Message) {
    switch (message.type) {
      case MessageType.DataSourceFilterChange:
        const dsFilterChangeMessage = isDataSourceFilterChangeMessageType(message) ? message : undefined
        // const dataSource = DataSourceManager.getInstance().getDataSource(dsFilterChangeMessage.dataSourceIds[0]) as QueriableDataSource
        // const queryParams: SqlQueryParams = dataSource.getCurrentQueryParams()

        // triggers widget render by updating widget state
        getAppStore().dispatch(appActions.widgetStatePropChange(this.widgetId, 'filterChangeMessage', dsFilterChangeMessage))
        // getAppStore().dispatch(appActions.widgetStatePropChange(this.widgetId, 'queryParams', queryParams.where))

        break
    }
    return true
  }
}
