import { createRoot } from 'react-dom/client'
import Root from './components/Root'
import { init } from './helpers/init'
import { isDebug } from '../shared/lib/helpers/isDebug'
import './styles/global.css'

const root = createRoot(document.getElementById('root'))

init(isDebug)

root.render(<Root/>)
