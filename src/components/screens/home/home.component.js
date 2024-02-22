import { BaseScreen } from '@/core/component/base-screen.component'
import { $I } from '@/core/iquery/iquery.lib'
import renderService from '@/core/services/render.service'

import styles from './home.module.scss'
import template from './home.template.html'
import { Field } from '@/components/ui/field/field.component'
import { UserItem } from '@/components/ui/user-item/user-item.component'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}

	render() {
		const element = renderService.htmlToElement(template, [], styles)

		// $I(element).find('h1').css('color', 'yellow').text('Islombek')
		return element
	}
}
