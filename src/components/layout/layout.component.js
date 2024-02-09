import { $I } from '@/core/iquery/iquery.lib'
import renderService from '@/core/services/render.service'

import styles from './layout.module.scss'
import template from './layout.template.html'

import { Header } from './header/header.component'
import ChildComponent from '@/core/component/child.component'

export class Layout extends ChildComponent {
	constructor({ router, children }) {
		super()

		this.router = router
		this.children = children
	}

	render() {
		const header = new Header().render()

		this.element = renderService.htmlToElement(template, [], styles)

		const mainELement = $I(this.element).find('main')

		const contentContainer = mainELement.find('#content')
		contentContainer.append(this.children)

		mainELement.before(header)

		return this.element
	}
}
