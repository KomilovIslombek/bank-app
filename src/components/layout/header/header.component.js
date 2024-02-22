import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

import styles from './header.module.scss'
import template from './header.template.html'
import { Logo } from './logo/logo.component'
import { LogoutButton } from './logout-button/logout-button.component'
import { Search } from './search/search.component'
import { UserItem } from '@/components/ui/user-item/user-item.component'

export class Header extends ChildComponent {
	constructor({ router }) {
		super()
		this.router = router
	}

	render() {
		const logOutBtn = new LogoutButton({
			router: this.router
		})
		const userItem = new UserItem({
			avatarPath:
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAb1BMVEX33x4AAAD95R/cxxuThRL/6B/64h7/6iAUEgPv2B2fkBPQvBmikxScjRNtYw0xLQaomBXp0xxZUQspJQW2pRbhzBt7bw/EshjWwho5MwdQSAqNgBGEeBCyoBYGBgHJthhkWgwYFgO+qxdCPAgjIAQROHKRAAAB6klEQVRYhe2WUbuCIAyGZcVILUsztdQsT///Nx4SKMH0QLeH7woE3mdsYzMIvLy8vLy8vLz+sZDL+QwMGp0DGsZlWQUUXDiwJhsuslIkCOsjGXSOAgcUBw1SILolI/X0WxAtiKatNUkH0R0xVNreTgNhanIISb8BQS1PX+rmLEZJ+A2I7sUkZwCs5YNrxyw5OigU49twmh1IA/ZpqYGki9bCwVjZB/+zRYm8j9Mr0aN2F5PYxZRPIJbJqEXo9M6mFrUqeza7kLq9fz2z1d2eKlbMBWWA4nFSZysHX5mPttfeR2Ff3yZlJN6MSfeTLckE8eRpNKNsSRMQNyqtr2/Q0TIRPoD4x6Ddv0hbO9JHEP8Mpawj5GEXuhkQ9xVdO3nJBI3izW5iqVsEqUpj5lF1eN0Ec7GUL4AA66OoFaptDKUZQj6rlHPhTxDSnmddJOqgjPTwZiNhnLAJVS2I50B4EjsOlFKQ2ffzPCw7LIlCRikLEzmdLf+gcmSf3B5y+Kyu8G5ql6K4vMaz9R87MlE6dKPLdGHhZtzBtblZlHsM9lNOs9SQzA6fyUAhZiYnWW5srB1vbt6PgOU6p/2rQUKwk9e4FlodBOhvLzcfbH6QgKVVWcYnMIs8UjzFZd+tAmbbSnDuVxFnV7yW9AvP2RLj0vYl/wAAAABJRU5ErkJggg==',
			name: 'Islombek'
		})

		this.element = renderService.htmlToElement(
			template,
			[Logo, logOutBtn, Search, userItem],
			styles
		)

		return this.element
	}
}
