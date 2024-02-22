import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

import styles from './loader.module.scss'
import template from './loader.template.html'

export const LOADER_SELECTOR = '[data-component="loader"]'

export class Loader extends ChildComponent {
	constructor(width = 100, height = 100) {
		super()

		this.width = width + 'px'
		this.height = height + 'px'
	}

	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		$I(this.element)
			.css({ width: this.width, height: this.height })
			.addClass('bounce')

		return this.element
	}
}
