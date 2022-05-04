const $ = {}
window.$ = $

function CreateModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('d-modal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="d-modal__overlay" data-close="true"></div>
        <div class="d-modal__window">
        <div class="d-modal__container">
            <div class="d-modal__header"><span class="d-modal__title">${options.title || ''}</span>
            <div class="modal__close-button" data-close="true">
                ${options.close || 'Закрыть'}
            </div>
            </div>
            <div class="d-modal__body">
            ${options.content || ''}
            </div>
        </div>
        </div>
    `)
    document.body.appendChild(modal)
    
    return modal
}

$.modal = function(options) {
    const $modal = CreateModal(options)
    const modal = {
        open() {
            !isClosing && $modal.classList.add('open')
        },
        close() {
            isClosing = true
            $modal.classList.remove('open')
            setTimeout(() => {
                isClosing = false
                return isClosing
            }, animationSpeed)
            setTimeout(() => {
                $modal.parentNode.removeChild($modal)
                $modal.removeEventListener('click', listener)
            }, animationSpeed)
            
        }
    }

    const animationSpeed = 300
    let isClosing = false
    const listener = event => {
        if(event.target.dataset.close) {
            modal.close()
        }
    }

    $modal.addEventListener('click', listener)
    
    return Object.assign(modal, {
        destroy() {
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
        }
    })
}