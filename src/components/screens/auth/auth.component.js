import { BaseScreen } from '@/core/component/base-screen.component'
import renderService from '@/core/services/render.service'

import styles from './auth.module.scss'
import template from './auth.template.html'
import { Heading } from '@/components/ui/heading/heading.component'

export class Auth extends BaseScreen {
	constructor() {
		super({ title: 'Auth' })
	}

	render() {
		const heading = new Heading('Auth')
		const element = renderService.htmlToElement(template, [heading], styles)

		return element
	}
}
