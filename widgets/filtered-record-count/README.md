# filtered-record-count widget

**WARNING**: This widget is now deprecated, having been replaced by the [Record Count](https://github.com/CI-CMG/deep-sea-corals-exb/tree/main/widgets/record-count) widget

Displays the total record count of the configured DataSource and the count considering the current map extent and any filter criteria (i.e. layerDefinition query) that are in effect.

Requires an Map and DataSource be configured. Widget attempts to catch server-side errors and timeouts in which case an generic server error message replaces the count display.

Switches between client-side query and server-side query based on the point layer's visibility. There is a scale depencdency set in the webmap so the points only display at larger scales.
