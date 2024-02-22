import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

import styles from './heading.module.scss'
import template from './heading.template.html'
import { $I } from '@/core/iquery/iquery.lib'

export class Heading extends ChildComponent {
	constructor(title = '') {
		super()
		if (!title) throw new Error('Title is empty!')

		this.title = title
	}

	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		$I(this.element).text(this.title)

		return this.element
	}
}
