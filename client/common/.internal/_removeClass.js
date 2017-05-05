const _removeClass = (className, removeClass) => {
  if (removeClass === "") {
    return className
  }
  let classNameArr = className.trim().split(" ")
  let newClassArr = []
  classNameArr.forEach((value) => {
    if (value !== "" && value !== removeClass.trim()) {
      newClassArr.push(value)
    }
  })
  return newClassArr.join(" ").trim()
}

export default _removeClass