export class Layout {
	constructor({ router, children }) {
		this.router = router
		this.children = children
	}

	render() {
		const headerHTML = `<header style="display:flex;justify-content:space-between; padding-inline:15px">
      Header
      <nav>
        <a href="/">Home</a>
        <a href="/auth">Auth</a>
      </nav>
    </header>
    `
		return `
      ${headerHTML}
      <main>
        ${this.children}
      </main>
    `
	}
}
