import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { apiCall } from './js/exampleAPI'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

console.log(checkForName);

document.addEventListener('DOMContentLoaded', apiCall);

export {
    checkForName,
    handleSubmit,
    apiCall
}
