import moment from 'moment'

export const noop = () => {}
export const formatedDate = (d) => moment(d).format('LL')
