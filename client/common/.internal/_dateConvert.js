export default function dateConvert (string = (new Date()).toString()) {
  if (typeof string != 'string')
    throw new TypeError('date convert need a string')
  let dateRegExp = /((\d+)[-年](\d+)[-月](\d+)[日]?)?[\s]*(\d+):(\d+):(\d+)/,
      dateArray = string.match(dateRegExp).slice(2).join(" ").trim().split(" "),
      dateNow = new Date(),
      date,
      WETHER,
      dateSub

  const SECONDS = 60 * 1000,
        MINUTES = 60 * 60 * 1000,
        HOURS = 60 * 60 * 24 * 1000,
        DAYS = 60 * 60  * 24 * 30 * 1000,
        MONTHS = 60 * 60 * 24 * 30 * 12 * 1000

  dateArray.length === 6 && (dateArray[1] = dateArray[1] - 1)
  dateArray.length === 6 && (date = new Date(...dateArray))
  dateArray.length === 3 && (date = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), ...dateArray))

  date >= dateNow ? WETHER = "后" : WETHER = "前"


  dateSub = Math.abs(date - dateNow)

  if (dateSub < SECONDS) {
    return `${parseInt(dateSub / 1000)}秒${WETHER}`
  }
  if (dateSub < MINUTES) {
    return `${parseInt(dateSub / SECONDS)}分钟${WETHER}`
  }
  if (dateSub < HOURS) {
    return `${parseInt(dateSub / MINUTES)}小时${WETHER}`
  }
  if (dateSub < DAYS) {
    return `${parseInt(dateSub / HOURS)}天${WETHER}`
  }
  if (dateSub < MONTHS) {
    return `${parseInt(dateSub / DAYS)}月${WETHER}`
  }
  return `${parseInt(dateSub / MONTHS)}年${WETHER}`
}
