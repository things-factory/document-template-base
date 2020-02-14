import { UPDATE_DOCUMENT_TEMPLATE_BASE } from '../actions/main'

const INITIAL_STATE = {
  documentTemplateBase: 'ABC'
}

const documentTemplateBase = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_DOCUMENT_TEMPLATE_BASE:
      return { ...state }

    default:
      return state
  }
}

export default documentTemplateBase
