const SITE_NAME = 'IK Bank || Vanilla JS'

export const getTitle = title => {
	return title ? `${title} | ${SITE_NAME}` : SITE_NAME
}
