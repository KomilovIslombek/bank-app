import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

import styles from './user-item.module.scss'
import template from './user-item.template.html'
import { $I } from '@/core/iquery/iquery.lib'

export class UserItem extends ChildComponent {
	constructor(user, isGray = false, onClick) {
		super()

		if (!user) throw new Error('User should be passed!')
		if (!user?.name) throw new Error('User must have a "name"!')
		if (!user?.avatarPath) throw new Error('User must have a "avatarPath"!')

		this.user = user
		this.onClick = onClick
		this.isGray = isGray
	}

	#preventDefault(event) {
		event.preventDefault()
	}

	update({ avatarPath, name }) {
		if (avatarPath && name) {
			$I(this.element).find('img').attr('src', avatarPath).attr('alt', name)

			$I(this.element).find('span').text(name)
		}
	}

	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		this.update(this.user)

		$I(this.element).click(this.onClick || this.#preventDefault.bind(this))

		if (!this.onClick) $I(this.element).attr('disabled', '')
		if (this.isGray) $I(this.element).addClass(styles.gray)

		return this.element
	}
}
