import loadable from '@loadable/component'

const Moment = loadable.lib(() => import('moment'))

const formatDate = (date) => {
  return <Moment>{({ default: moment }) => moment(date).format('YYYY-MM-DD')}</Moment>
}

export default formatDate
