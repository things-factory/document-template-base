import { store } from '@things-factory/shell'
import documentTemplateBase from './reducers/main'

export default function bootstrap() {
  store.addReducers({
    documentTemplateBase
  })
}
