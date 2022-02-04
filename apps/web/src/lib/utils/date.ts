import format from 'date-fns/format'

export const monthLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

export const formatDate = (date: Date, withHours = false) => {
  return format(
    date,
    withHours ? "HH:mm aaaaa'm' - dd LLL yyyy" : 'dd LLL yyyy'
  )
}
