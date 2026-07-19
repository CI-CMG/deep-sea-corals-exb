import type GraphicsLayer from 'esri/layers/GraphicsLayer'
import Graphic from 'esri/Graphic'
import type SimpleFillSymbol from 'esri/symbols/SimpleFillSymbol'
import Color from 'esri/Color'
import { type FeatureLayerDataSource } from 'jimu-arcgis'

const stdColor = new Color('whitesmoke')
const highlightColor = new Color('yellow')
const hexbinBoundaryWidth = 0


function deselectPreviousHexbin (graphicsLayer: GraphicsLayer) {
  // finds only the *first* highlighted graphic but there should never be > 1
  const highlightedGraphic = getHighlightedGraphic(graphicsLayer)
  if (highlightedGraphic) {
    toggleOutlineColor(highlightedGraphic)
  }
}


function getHighlightedGraphic (graphicsLayer: GraphicsLayer) {
  if (!graphicsLayer) {
    return
  }
  // finds only the *first* highlighted graphic but there should only be 0 or 1
  return graphicsLayer.graphics.find(graphic => {
    return stdColor.toHex() !== (graphic.symbol as SimpleFillSymbol).outline.color.toHex()
  })
}


function toggleOutlineColor (graphic: Graphic) {
  if (!graphic) { return }
  const symbolCopy = (graphic.symbol as SimpleFillSymbol).clone()

  if (stdColor.toHex() === graphic.symbol.outline.color.toHex()) {
    symbolCopy.outline.color = highlightColor
    symbolCopy.outline.width = 1.5
  } else {
    symbolCopy.outline.color = stdColor
    symbolCopy.outline.width = hexbinBoundaryWidth
  }
  graphic.symbol = symbolCopy
}


export {
  toggleOutlineColor,
  stdColor,
  highlightColor,
  getHighlightedGraphic,
  deselectPreviousHexbin
}
